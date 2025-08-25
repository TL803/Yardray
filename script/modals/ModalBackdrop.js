import { DomUtils } from './utils/DomUtils.js';

export class ModalBackdrop {
  constructor() {
    this.element = DomUtils.createElement('div', `
      fixed inset-0 
      flex items-center justify-center 
      bg-black bg-opacity-50 
      z-50
    `, {
      role: 'dialog',
      'aria-modal': 'true'
    });
  }

  show() {
    document.body.appendChild(this.element);
    DomUtils.disableScroll();
  }

  hide() {
    if (this.element.parentNode) {
      this.element.parentNode.removeChild(this.element);
    }
    DomUtils.enableScroll();
  }
}

