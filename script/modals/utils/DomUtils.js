// /script/modals/utils/DomUtils.js
export class DomUtils {
  static createElement(tag, className = '', attrs = {}) {
    const el = document.createElement(tag);
    if (className) el.className = className;
    Object.keys(attrs).forEach(key => el.setAttribute(key, attrs[key]));
    return el;
  }

  static appendChildren(parent, children) {
    children.filter(Boolean).forEach(child => parent.appendChild(child));
  }

  static onEscape(callback) {
    const handler = (e) => e.key === 'Escape' && callback();
    document.addEventListener('keydown', handler);
    return () => document.removeEventListener('keydown', handler);
  }

  static closeOnBackdrop(e, backdrop, onClose) {
    if (e.target === backdrop) onClose();
  }

  static disableScroll() {
    document.body.classList.add('overflow-hidden');
  }

  static enableScroll() {
    document.body.classList.remove('overflow-hidden');
  }

  static focusFirstInput(container) {
    const firstInput = container.querySelector('input, button, select, textarea');
    firstInput?.focus();
  }
}