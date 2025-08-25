// /script/modals/utils/ModalManager.js
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
    });
  }

  parseModalParams(trigger) {
    const params = {};
    
    // Получаем все data-атрибуты
    const attributes = trigger.attributes;
    for (let i = 0; i < attributes.length; i++) {
      const attr = attributes[i];
      if (attr.name.startsWith('data-param-')) {
        const paramName = attr.name.replace('data-param-', '');
        params[paramName] = attr.value;
      }
    }
    
    return params;
  }

  open(name, params = {}) {
    this.close();
  
    // Получаем HTML содержимое из фабрики с параметрами
    const modalContent = PopupFactory.createModal(name, params);
    
    // Создаем модальное окно с полученным содержимым
    const window = new ModalWindow(modalContent);
    const backdrop = new ModalBackdrop();
  
    backdrop.element.appendChild(window.element);
    this.currentModal = { backdrop, window };
  
    window.closeBtn.addEventListener('click', () => this.close());
  
    backdrop.element.addEventListener('click', (e) => {
      DomUtils.closeOnBackdrop(e, backdrop.element, () => this.close());
    });
  
    this.cleanupEscape = DomUtils.onEscape(() => this.close());
  
    backdrop.show();
    DomUtils.focusFirstInput(window.content);
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