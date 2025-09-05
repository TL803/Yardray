import { TemplateRenderer } from './BaseTemplate.js';
import { FormInitializer } from './BaseTemplate.js';
import { DomUtils } from '../utils/DomUtils.js';

export class Questions extends TemplateRenderer {
  static getTemplate() {
    /* html */
    return `
      <div class="flex flex-col sm:items-between w-full">
        <!-- Контейнер: фиксированная ширина на десктопе, 100% на мобильных -->
        <div class="w-full sm:w-[685px] bg-transparent rounded-xl overflow-hidden">
          <div class="text-white space-y-4 sm:space-y-8 p-4 sm:p-[20px]">
            <div class="flex flex-col gap-4 sm:gap-[20px] text-center">
              <h3 class="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-tight">
                Остались вопросы?
              </h3>
              <p class="text-[16px] sm:text-[18px] md:text-[20px] text-white text-center leading-relaxed">
                Оставьте ваши контакты и мы свяжемся с Вами  
                в ближайшее время, чтобы ответить на все вопросы и помочь Вам!
              </p>
            </div>

            <!-- Форма -->
            <form id="questions-form" data-modal-form="questions" class="space-y-6 sm:space-y-8 mt-2 w-full">
              <!-- Поле ФИО -->
              <div>
                <input 
                  type="text" 
                  name="full_name" 
                  data-content="fullName"
                  required 
                  minlength="2"
                  maxlength="100"
                  class="w-full h-[50px] sm:h-[60px] px-4 sm:px-6 
                         bg-[#F8F8F852] border border-[#F8F8F852] rounded-lg sm:rounded-xl
                         text-[14px] sm:text-[16px] text-white placeholder-white placeholder-opacity-70 font-normal 
                         focus:outline-none 
                         focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 
                         focus:border-red-400"
                  placeholder="ФИО"
                >
                <div class="error-message text-red-300 text-sm mt-1 hidden"></div>
              </div>

              <!-- Поле Телефон -->
              <div>
                <input 
                  type="tel" 
                  name="phone" 
                  data-content="phone"
                  required 
                  class="w-full h-[50px] sm:h-[60px] px-4 sm:px-6 
                         bg-[#F8F8F852] border border-[#F8F8F852] rounded-lg sm:rounded-xl
                         text-[14px] sm:text-[16px] text-white placeholder-white placeholder-opacity-70 font-normal 
                         focus:outline-none 
                         focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 
                         focus:border-red-400"
                  placeholder="Ваш телефон"
                >
                <div class="error-message text-red-300 text-sm mt-1 hidden"></div>
              </div>

              <!-- Чекбокс -->
              <div class="flex items-start mt-1 transition-all duration-500">
                <input 
                  type="checkbox" 
                  name="privacy_policy" 
                  data-content="agree"
                  required 
                  checked
                  class="mt-1 w-4 h-4 sm:w-5 sm:h-5 custom-checkbox-input border border-[#F8F8F852] rounded bg-transparent focus:ring-red-400 transition-all duration-500"
                  id="privacy-policy"
                >
                <label for="privacy-policy" class="ml-2 text-xs sm:text-[14px] text-gray-300 leading-tight transition-all duration-500">
                  Я согласен с политикой обработки персональных данных
                </label>
                <div class="error-message text-red-300 text-xs sm:text-sm mt-1 ml-5 sm:ml-7 hidden"></div>
              </div>
            </form>
          </div>
        </div>

        <!-- Кнопка -->
        <div class="w-full px-4 sm:px-8 mt-4">
          <button 
            type="submit"
            form="questions-form"
            class="w-full h-[60px] sm:h-[84px] 
                   bg-red-600 hover:bg-red-700 
                   text-[18px] sm:text-[24px] font-semibold text-white 
                   rounded-lg sm:rounded-2xl
                   transition duration-200 
                   transform hover:scale-[1.01] 
                   focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Перезвоните мне!
          </button>
        </div>

        <!-- Ошибки -->
        <div id="form-errors" class="errors mt-4 px-4 sm:px-8 text-center text-red-300 text-sm sm:text-base"></div>
      </div>
    `;
  }

  static getBackground() {
    return '../assets/womanCar.png';
  }

  static getTitle() {
    return 'Остались вопросы?';
  }

  static getSuccessTemplate() {
    /* html */
    return `
      <div class="text-center h-auto min-h-[500px] sm:h-[700px] flex flex-col justify-between mx-auto p-6 sm:p-8">
        <div class="space-y-4 sm:space-y-6 text-center flex-1 flex flex-col justify-center">
          <h2 class="text-[36px] sm:text-[48px] font-bold text-white">
            Спасибо за заявку!
          </h2>
          <p class="text-white text-[18px] sm:text-[24px] leading-relaxed">
            Мы уже связываемся с вами,<br>
            чтобы ответить на все ваши вопросы.
          </p>
        </div>
        <button 
          id="close-success-modal"
          data-close-modal
          class="w-full h-[60px] sm:h-[84px] 
                 bg-red-600 hover:bg-red-700 
                 text-[18px] sm:text-[24px] font-semibold text-white 
                 rounded-lg sm:rounded-2xl
                 transition duration-200 
                 transform hover:scale-[1.01] 
                 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mt-4 sm:mt-0">
          Отлично!
        </button>
      </div>
    `;
  }

  static initForm(modalElement) {
    console.log('Questions.initForm called with modalElement:', modalElement);
    
    FormInitializer.initForm(modalElement, this);
  }

  // Метод для установки обработчика закрытия
  static setCloseHandler(closeButton, onCloseCallback) {
    if (closeButton) {
      console.log('Setting close handler for button:', closeButton);
      
      // Удаляем предыдущие обработчики
      closeButton.replaceWith(closeButton.cloneNode(true));
      const newCloseButton = closeButton.parentElement.querySelector('#close-success-modal');
      
      newCloseButton.addEventListener('click', (e) => {
        console.log('Close success button clicked!');
        e.preventDefault();
        e.stopPropagation();
        
        if (typeof onCloseCallback === 'function') {
          console.log('Calling onCloseCallback');
          onCloseCallback();
        } else {
          console.log('No callback, closing modal directly');
          // Прямое закрытие модального окна
          const modal = newCloseButton.closest('.custom-modal-window');
          if (modal) {
            console.log('Removing modal directly');
            modal.remove();
          } else {
            console.log('Modal not found, trying global close');
            window.closeAllModals();
          }
        }
      });
    }
  }
}

export class ModalWindow {
  constructor(modalContent, backgroundImage = null) {
    console.log('ModalWindow constructor called with:', modalContent, backgroundImage);
    
    let template;
    let background;
    let onInit = null;

    if (typeof modalContent === 'object' && modalContent !== null) {
      template = modalContent.template;
      background = modalContent.background || backgroundImage;
      onInit = modalContent.onInit || null;
    } else if (typeof modalContent === 'string') {
      template = modalContent;
      background = backgroundImage;
    } else {
      console.error('Invalid modalContent:', modalContent);
      template = '<div>Ошибка загрузки контента</div>';
      background = backgroundImage;
    }

    const bgStyle = background 
      ? `background-image: url('${background}'); background-position: top; background-size: cover;` 
      : `background: #170D08;`;

    this.element = DomUtils.createElement('div', `
      relative 
      w-full max-w-[95vw] md:max-w-[1440px]
      h-[600px] md:h-[800px] 
      max-h-[90vh] md:max-h-none
      overflow-y-auto
      rounded-lg md:rounded-xl 
      shadow-2xl
      p-4 md:p-6
      bg-cover bg-center bg-no-repeat
      before:content-[''] 
      before:absolute 
      before:inset-0 
      before:bg-black 
      before:bg-opacity-70 
      before:rounded-lg md:before:rounded-xl 
      before:-z-10
      bg-bottom
      mx-auto
      mt-4 md:mt-0
    `, {
      style: bgStyle
    });

    this.element.classList.add('custom-modal-window');

    const closeBtn = DomUtils.createElement('button', `
      absolute top-2 right-2 md:top-4 md:right-4
      w-10 h-10 md:w-12 md:h-12
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
    `, { 'aria-label': 'Закрыть' });

    const closeIcon = DomUtils.createElement('img', '', {
      src: `../assets/cross.svg`,
      alt: 'Закрыть',
      width: '24',
      height: '24',
      style: 'pointer-events: none; z-index: 20;'
    });
    closeIcon.classList.add('w-6', 'h-6', 'md:w-8', 'md:h-8');
    closeBtn.appendChild(closeIcon);

    closeBtn.addEventListener('click', (e) => {
      console.log('Modal close button clicked');
      e.stopPropagation();
      if (typeof this.onClose === 'function') {
        console.log('Calling onClose callback');
        this.onClose();
      } else {
        console.log('No onClose callback set, closing directly');
        this.element.remove();
      }
    });

    const contentWrapper = DomUtils.createElement('div', `
      relative z-1 text-white h-full flex flex-col justify-center
      px-2 md:px-0
      overflow-auto
    `);

    contentWrapper.innerHTML = template;
    console.log('Content wrapper HTML set');

    // Проверяем, есть ли кнопка закрытия успешного состояния
    const successCloseButton = contentWrapper.querySelector('#close-success-modal');
    if (successCloseButton) {
      console.log('Success close button found in template');
      // Устанавливаем обработчик с задержкой, чтобы DOM успел обновиться
      setTimeout(() => {
        const currentButton = this.element.querySelector('#close-success-modal');
        if (currentButton) {
          Questions.setCloseHandler(currentButton, this.onClose);
        }
      }, 100);
    }

    if (onInit && typeof onInit === 'function') {
      console.log('Calling onInit callback');
      onInit(contentWrapper);
    }

    DomUtils.appendChildren(this.element, [closeBtn, contentWrapper]);
    console.log('Modal window constructed successfully');

    this.closeBtn = closeBtn;
  }

  setOnClose(callback) {
    console.log('setOnClose called with callback:', typeof callback);
    this.onClose = callback;
    
    // Обновляем обработчик для кнопки закрытия успешного состояния
    const successCloseButton = this.element.querySelector('#close-success-modal');
    if (successCloseButton) {
      Questions.setCloseHandler(successCloseButton, this.onClose);
    }
  }
}

// Глобальная функция для закрытия всех модальных окон
window.closeAllModals = function() {
  console.log('closeAllModals called');
  const modals = document.querySelectorAll('.modal-container, .modal, .custom-modal-window');
  console.log('Found modals to close:', modals.length);
  
  modals.forEach(modal => {
    console.log('Removing modal:', modal);
    modal.remove();
  });
  
  // Также удаляем overlay, если есть
  const overlays = document.querySelectorAll('.modal-overlay, .overlay');
  overlays.forEach(overlay => overlay.remove());
};

// Переопределяем FormInitializer для правильной обработки успешного состояния
const originalFormInit = FormInitializer.initForm;
FormInitializer.initForm = function(modalElement, templateClass) {
  originalFormInit.call(this, modalElement, templateClass);
  
  // Перехватываем успешную отправку формы
  const form = modalElement.querySelector('form');
  if (form) {
    const originalSubmit = form.onsubmit;
    form.onsubmit = function(e) {
      e.preventDefault();
      
      // Ваша логика валидации и отправки формы здесь
      // После успешной отправки:
      console.log('Form submitted successfully');
      
      // Заменяем содержимое на успешный шаблон
      const modalContent = modalElement.closest('.custom-modal-window');
      if (modalContent) {
        const contentWrapper = modalContent.querySelector('div[class*="relative z-1"]');
        if (contentWrapper) {
          contentWrapper.innerHTML = templateClass.getSuccessTemplate();
          
          // Устанавливаем обработчик для кнопки закрытия
          const closeButton = contentWrapper.querySelector('#close-success-modal');
          if (closeButton) {
            Questions.setCloseHandler(closeButton, () => {
              modalContent.remove();
            });
          }
        }
      }
      
      return false;
    };
  }
};