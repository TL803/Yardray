import { ModalBackdrop } from './ModalBackdrop.js';
import { ModalWindow } from './ModalWindow.js';
import { PopupFactory } from './PopupFactory.js';
import { DomUtils } from './utils/DomUtils.js';

export class ModalManager {
  constructor() {
    this.currentModal = null;
    this.cleanupEscape = null;
    this.init();
  }

  init() {
    document.addEventListener('click', (e) => {
      const trigger = e.target.closest('[data-open-modal]');
      if (trigger) {
        e.preventDefault();
        const modalName = trigger.getAttribute('data-open-modal');
        const params = this.parseModalParams(trigger);
        this.open(modalName, params);
      }

      if (e.target.closest('[data-close-modal]')) {
        this.close();
      }
    });
  }

  parseModalParams(trigger) {
    const params = {};
    const attributes = trigger.attributes;
    for (let i = 0; i < attributes.length; i++) {
      const attr = attributes[i];
      if (attr.name.startsWith('data-param-')) {
        const paramName = attr.name.replace('data-param-', '');
        params[paramName] = attr.value;
      }
      
      if (attr.name === 'data-background') {
        params.background = attr.value;
      }
    }
    return params;
  }

  open(name, params = {}) {
    this.close();

    const modalContent = PopupFactory.createModal(name, params);
    const backgroundImage = params.background || modalContent.background;

    const window = new ModalWindow(modalContent, backgroundImage);
    const backdrop = new ModalBackdrop();

    backdrop.element.appendChild(window.element);
    this.currentModal = { backdrop, window };

    window.closeBtn.addEventListener('click', () => this.close());

    backdrop.element.addEventListener('click', (e) => {
      DomUtils.closeOnBackdrop(e, backdrop.element, () => this.close());
    });

    this.cleanupEscape = DomUtils.onEscape(() => this.close());
    backdrop.show();

    this.initTemplateLogic(window, name);
  }

  initTemplateLogic(window, templateName) {
    const modalConfig = PopupFactory.getModalConfig(templateName);
    
    if (modalConfig && typeof modalConfig.initForm === 'function') {
      modalConfig.initForm(window.content);
    }
  }

  close() {
    if (this.currentModal) {
      this.currentModal.backdrop.hide();
      this.currentModal = null;
    }

    if (this.cleanupEscape) {
      this.cleanupEscape();
      this.cleanupEscape = null;
    }
  }
}