import { DomUtils } from './utils/DomUtils.js';

export class ModalWindow {
  constructor(modalContent, backgroundImage = null) {
    let template;
    let background;

    if (typeof modalContent === 'object' && modalContent !== null) {
      template = modalContent.template;
      background = modalContent.background || backgroundImage;
    } else if (typeof modalContent === 'string') {
      template = modalContent;
      background = backgroundImage;
    } else {
      console.error('ModalWindow: Invalid modalContent. Expected string or object with template.', modalContent);
      template = '<div class="text-white">Ошибка: не удалось загрузить контент.</div>';
      background = backgroundImage;
    }

    const bgStyle = background 
      ? `background-image: url('${background}'); background-position: top;`
      : 'background: linear-gradient(to bottom, #191919 0%, #24353E 50%, #000000 100%);';

    this.element = DomUtils.createElement('div', `
      relative 
      w-full max-w-[1440px]
      h-[900px] 
      overflow-y-auto
      rounded-xl 
      shadow-2xl
      p-6
      bg-cover bg-center bg-no-repeat
      before:content-[''] 
      before:absolute 
      before:inset-0 
      before:bg-black 
      before:bg-opacity-70 
      before:rounded-xl 
      before:-z-10
      bg-bottom
    `, {
      style: bgStyle
    });

    const closeBtn = DomUtils.createElement('button', `
      absolute top-4 right-4
      w-12 h-12
      flex items-center justify-center
      rounded-full
      bg-transparent
      hover:bg-black
      hover:bg-opacity-10
      transition-all duration-200
      transform hover:scale-110
      z-10
      focus:outline-none
      focus:ring-2 focus:ring-white focus:ring-opacity-30
      cursor-pointer
      after:content-['']
      after:absolute
      after:inset-[-16px]
      after:w-[60px]
      after:h-[60px]
      after:-z-10
    `, { 
      'aria-label': 'Закрыть' 
    });

    const closeIcon = DomUtils.createElement('img', '', {
      src: '../assets/cross.svg',
      alt: 'Закрыть',
      width: '30',
      height: '30'
    });

    closeIcon.style.pointerEvents = 'none';
    closeBtn.appendChild(closeIcon);

    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    });

    const contentWrapper = DomUtils.createElement('div', `
      relative z-1 text-white
    `);

    if (template && template.trim() !== '') {
      contentWrapper.innerHTML = template;
    } else {
      contentWrapper.innerHTML = '<div class="p-4 text-center text-gray-300">Контент не загружен</div>';
      console.warn('ModalWindow: template is empty or undefined');
    }

    this.content = contentWrapper;

    DomUtils.appendChildren(this.element, [closeBtn, contentWrapper]);

    this.closeBtn = closeBtn;
  }

  setOnClose(callback) {
    this.onClose = callback;
  }
}