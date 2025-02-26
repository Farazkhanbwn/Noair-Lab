import { DecoratorNode } from 'lexical';

import { JSX } from 'react';

export class HorizontalRuleNode extends DecoratorNode<JSX.Element> {
  static getType(): string {
    return 'horizontal-rule';
  }

  static clone(node: HorizontalRuleNode): HorizontalRuleNode {
    return new HorizontalRuleNode(node.__key);
  }

  createDOM(): HTMLElement {
    const div = document.createElement('div');
    div.style.display = 'block';
    div.style.margin = '0';
    return div;
  }

  updateDOM(): false {
    return false;
  }

  decorate(): JSX.Element {
    return <hr className="my-4 border-t border-gray-300" />;
  }
}
