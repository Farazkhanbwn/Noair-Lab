/* eslint-disable @typescript-eslint/no-explicit-any */
import { createPostItem, resetPostState, setError, startLoading } from "@/store/posts/postSlice";
import { AppDispatch, RootState } from "@/store/store";
import { convertBlobUrlToBlob } from "@/utils/fileUtils";
import { useDispatch, useSelector } from "react-redux";
import { SerializedEditorState } from 'lexical';
import axiosInstance from "@/service/axios";
import { ShowToast } from "@/components/common/Toast";
import { createFollow } from "@/store/followings/followSlice";
import { TextEditorNode } from "./feed.interface";
import { useCallback, useEffect } from "react";

import debounce from 'lodash.debounce';

export const useCreatePost = () => {
  const { content, category, topic, files, contentJson, isLoading, error, success } = useSelector((state: RootState) => state.post.addPost)
  const dispatch = useDispatch<AppDispatch>()

  // Function to process images
  async function processImages(jsonData: SerializedEditorState) {
    async function traverse(node: TextEditorNode, index: number, parent?: TextEditorNode, ) {
      if (node.type === "inline-image" && node.src?.startsWith("data:image")) {
        const imageUrl = await uploadImage(node.src);

        // Create a new node object instead of modifying `node.src`
        const newNode = { ...node, src: imageUrl };

        // Replace the old node in the parent's children array
        if (parent && parent.children) {
          parent.children[index] = newNode;
        }
      }

      if (node.children) {
        await Promise.all(node.children.map((child: TextEditorNode, i: number) => traverse(child, i, node)));
      }
    }

    if(jsonData){
      await traverse(jsonData.root, 0);
    }
    return jsonData;
  }

  async function uploadImage(base64: string): Promise<string> {
    // Convert base64 to Blob
    function base64ToBlob(base64: string): Blob {
      const byteCharacters = atob(base64.split(",")[1]); // Decode base64
      const byteNumbers = new Array(byteCharacters.length).fill(0).map((_, i) => byteCharacters.charCodeAt(i));
      const byteArray = new Uint8Array(byteNumbers);
      return new Blob([byteArray], { type: "image/png" }); // Change MIME type if needed
    }

    const blob = base64ToBlob(base64);
    console.log(blob)
    // Create FormData
    const formData = new FormData();
    formData.append("file", blob, "image.png"); // Append file with a filename

    // Upload using Axios
    try {
      const response = await axiosInstance.post("/api/v1/posts/post-image", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      return response.data.url; // Return the uploaded image URL
    } catch (error) {
      console.error("Image upload failed:", error);
      throw error;
    }
  }

  const resetState = () => {
    dispatch(resetPostState())
  }

  const createPost = async () => {
    dispatch(startLoading());

    try {
      const promises = files.map(async (file) => convertBlobUrlToBlob(file.url))

      const blobs = await Promise.all(promises)
      console.log(blobs)

      // Create a FormData object
      const formData = new FormData();

      // Append each file to the FormData with the same field name `files[]`
      blobs.forEach((blob) => {
        formData.append('files', blob);
      });

      // Include other data (content, category, topic, etc.)
      formData.append('content', content);
      formData.append('category', category);
      // Append each string in the 'topic' array as a separate value under 'topic[]'
      topic.forEach((t) => {
        formData.append('topic', t); // 'topic[]' to indicate an array
      });

      formData.append('postType', 'normal');
      const clonedData = structuredClone(contentJson); // Clone to avoid modifying the original

      const optimizedJson = await processImages(clonedData as SerializedEditorState)
      formData.append('contentJson', JSON.stringify(optimizedJson))

      dispatch(createPostItem(formData))
    }
    catch (err: unknown) {
      if(err instanceof Error){
        dispatch(setError(err?.message))
        ShowToast(err?.message, {
          variant: 'error',
          preventDuplicate: true,
        });
      }
    }
  }

  return { createPost, isLoading, error, success, category, resetState }
}


export const useFollowing = () => {
  const dispatch = useDispatch<AppDispatch>()
  const user = useSelector((state: RootState) => state.user.user )
  const { pending, error, success } = useSelector((state: RootState) => state.following )

  const createFollowing = (followingId: string | number) => {
    dispatch(createFollow({followingId, userId: user?.id}))
  }


  return { createFollowing, pending, error, success  }
}

export const useDebouncedDispatch = (callback: (...args: any[]) => void, delay = 500) => {
  const debouncedFn = useCallback(
    debounce((...args: any[]) => {
      callback(...args);
    }, delay),
    [callback, delay]
  );

  useEffect(() => {
    return () => {
      debouncedFn.cancel();
    };
  }, [debouncedFn]);

  return debouncedFn;
};
