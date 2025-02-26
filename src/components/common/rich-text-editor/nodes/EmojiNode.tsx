import { TextNode, NodeKey, SerializedTextNode } from 'lexical';

export class EmojiNode extends TextNode {
  __emoji: string;

  static getType(): string {
    return 'emoji';
  }

  static clone(node: EmojiNode): EmojiNode {
    return new EmojiNode(node.__emoji, node.__key);
  }

  constructor(emoji: string, key?: NodeKey) {
    super(emoji, key);
    this.__emoji = emoji;
  }

  createDOM(): HTMLElement {
    const dom = document.createElement('span');
    dom.textContent = this.__emoji;
    dom.className = 'emoji-node';
    return dom;
  }

  updateDOM(): boolean {
    return false;
  }

  static importJSON(serializedNode: SerializedTextNode): EmojiNode {
    const node = $createEmojiNode(serializedNode.text);
    return node;
  }

  exportJSON(): SerializedTextNode {
    return {
      ...super.exportJSON(),
      type: 'emoji',
      version: 1,
    };
  }
}

export function $createEmojiNode(emojiText: string): EmojiNode {
  return new EmojiNode(emojiText);
}

export function $isEmojiNode(node: unknown): boolean {
  return node instanceof EmojiNode;
}
