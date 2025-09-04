// /script/modals/templates/Questions.js

import { TemplateRenderer } from './TemplateRenderer.js';
import { FormInitializer } from './FormInitializer.js';
import { ErrorDisplay } from './ErrorDisplay.js';

export class Questions extends TemplateRenderer {
  static getTemplate() {
    /* html */
    return `
      <div class="flex flex-col items-between h-full">
        <div class="w-[685px] bg-transparent rounded-xl overflow-hidden">
          <div class="text-white space-y-8 p-[20px]">
            <div class="flex flex-col gap-[20px]">
              <h3 class="text-[48px] font-bold text-center leading-tight">
                Остались вопросы?
              </h3>
              <p class="text-[20px] text-white text-center leading-relaxed">
                Оставьте ваши контакты и мы свяжемся с Вами  
                в ближайшее время, чтобы ответить на все вопросы и помочь Вам!
              </p>
            </div>

            <!-- Контейнер для ошибок -->
            <div id="form-errors" class="errors text-center"></div>

            <form id="questions-form" data-modal-form="questions" class="space-y-8 mt-2 w-full">
              <!-- Поле ФИО -->
              <div>
                <input 
                  type="text" 
                  name="full_name" 
                  required 
                  data-content="fullName"
                  class="w-full h-[60px] px-6 
                         bg-[#F8F8F852] border border-[#F8F8F852] rounded-xl
                         text-white placeholder-white placeholder-opacity-70 
                         text-[16px] font-normal 
                         focus:outline-none 
                         focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 
                         focus:border-red-400"
                  placeholder="ФИО"
                  minlength="2"
                  maxlength="100"
                >
                <div class="error-message text-red-300 text-sm mt-1 hidden"></div>
              </div>

              <div>
                <input 
                  type="tel" 
                  name="phone" 
                  required 
                  data-content="phone"
                  class="w-full h-[60px] px-6 
                         bg-[#F8F8F852] border border-[#F8F8F852] rounded-xl
                         text-white placeholder-white placeholder-opacity-70 
                         text-[16px] font-normal 
                         focus:outline-none 
                         focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 
                         focus:border-red-400"
                  placeholder="Ваш телефон"
                >
                <div class="error-message text-red-300 text-sm mt-1 hidden"></div>
              </div>

              <div class="flex items-start mt-1">
                <input 
                  type="checkbox" 
                  name="privacy_policy" 
                  required 
                  checked
                  data-content="agree"
                  class="mt-1.5 w-5 h-5 custom-checkbox-input border border-[#F8F8F852] rounded bg-transparent focus:ring-red-400"
                  id="privacy-policy"
                >
                <label for="privacy-policy" class="ml-2 text-sm text-gray-300 leading-tight">
                  Я согласен с политикой обработки персональных данных
                </label>
                <div class="error-message text-red-300 text-sm mt-1 ml-7 hidden"></div>
              </div>
            </form>
          </div>
        </div>

        <div class="w-full px-8 mt-6">
          <button 
            type="submit"
            form="questions-form"
            class="w-full h-[84px] 
                   bg-red-600 hover:bg-red-700 
                   text-white text-[24px] font-semibold 
                   rounded-2xl
                   transition duration-200 
                   transform hover:scale-[1.01] 
                   focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Перезвоните мне!
          </button>
        </div>
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
      <div class="text-center h-[700px] flex flex-col justify-between mx-auto p-8">
        <div>
          <h2 class="text-[48px] font-bold text-white mb-4">Спасибо за заявку!</h2>
          <p class="text-white text-[24px] mb-8 leading-relaxed">
            Мы уже связываемся с вами,<br>
            чтобы ответить на все ваши вопросы.
          </p>
        </div>
        <button 
          id="close-success-modal"
          data-close-modal
          class="w-full h-[84px] 
                 bg-red-600 hover:bg-red-700 
                 text-white text-[24px] font-semibold 
                 rounded-2xl
                 transition duration-200 
                 transform hover:scale-[1.01] 
                 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
          Отлично!
        </button>
      </div>
    `;
  }

  // Инициализация формы через FormInitializer
  static initForm(modalElement) {
    FormInitializer.initForm(modalElement, this);
  }
}