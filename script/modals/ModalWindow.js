// /script/modals/utils/ModalWindow.js
import { DomUtils } from './utils/DomUtils.js';

export class ModalWindow {
  constructor(modalContent, backgroundImage = null) {
    let template;
    let background;
    
    // Определяем шаблон и фон
    if (typeof modalContent === 'object' && modalContent !== null) {
      template = modalContent.template;
      background = modalContent.background || backgroundImage;
    } else if (typeof modalContent === 'string') {
      template = modalContent;
      background = backgroundImage;
    } else {
      console.error('Invalid modalContent:', modalContent);
      template = '<div>Ошибка загрузки контента</div>';
      background = backgroundImage;
    }
    
    // Формируем стиль фона
    const bgStyle = background 
      ? `background-image: url('${background}'); background-position: top;` 
      : `background: linear-gradient(to bottom, #191919 0%, #24353E 50%, #000000 100%);`;

    // Основной элемент модального окна
    this.element = DomUtils.createElement('div', `
      relative 
      w-full max-w-[1440px]
      h-[800px] 
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

    // === КНОПКА ЗАКРЫТИЯ С УВЕЛИЧЕННОЙ ЗОНОЙ КЛИКА ===
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

      /* Увеличиваем кликабельную зону через псевдоэлемент */
      after:content-['']
      after:absolute
      after:inset-[-16px]
      after:w-[60px]
      after:h-[60px]
      after:-z-10
    `, { 
      'aria-label': 'Закрыть' 
    });

    // Иконка закрытия
    const closeIcon = DomUtils.createElement('img', '', {
      src: '../assets/cross.svg',
      alt: 'Закрыть',
      width: '30',
      height: '30',
      zIndex: 20
    });

    // Отключаем события на иконке, чтобы не мешала
    closeIcon.style.pointerEvents = 'none';
    closeBtn.appendChild(closeIcon);

    // Обработчик закрытия
    closeBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      if (typeof this.onClose === 'function') {
        this.onClose();
      }
    });

    // === ОСНОВНОЙ КОНТЕНТ ===
    const contentWrapper = DomUtils.createElement('div', `
      relative z-1 text-white
    `);
    
    if (template) {
      contentWrapper.innerHTML = template;
    } else {
      contentWrapper.innerHTML = '<div>Контент не загружен</div>';
      console.error('Template is undefined:', modalContent);
    }

    // Добавляем только кнопку (без лишнего closeArea)
    DomUtils.appendChildren(this.element, [closeBtn, contentWrapper]);

    // Сохраняем ссылку
    this.closeBtn = closeBtn;
  }

  // Метод для присоединения обработчика закрытия
  setOnClose(callback) {
    this.onClose = callback;
  }
}