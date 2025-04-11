/**
 * Converts a Blob URL to an ArrayBuffer.
 * @param {string} blobUrl - The Blob URL to be converted.
 * @returns {Promise<ArrayBuffer>} - A promise that resolves to the ArrayBuffer.
 */
export const convertBlobUrlToBlob = async (blobUrl: string): Promise<Blob> => {
  // Fetch the Blob from the Blob URL
  const response = await fetch(blobUrl);

  // Check if the response is valid
  if (!response.ok) {
    throw new Error('Failed to fetch Blob from Blob URL');
  }

  // Get the Blob object from the response
  const blob = await response.blob();

  // Convert the Blob to an ArrayBuffer
  return blob
};
