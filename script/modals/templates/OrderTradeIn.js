// /script/modals/templates/OrderTradeIn.js

import { TemplateRenderer } from './BaseTemplate.js';
import { FormInitializer } from './BaseTemplate.js';

export class OrderTradeIn extends TemplateRenderer {
  static getTemplate() {
    /* html */
    return `
      <div class="flex flex-col  h-full w-full">
        <!-- Контейнер: 100% на мобильных, 685px на десктопе -->
        <div class="w-full sm:w-[685px] bg-transparent rounded-xl overflow-hidden">
          <div class="text-white space-y-4 sm:space-y-8 p-4 sm:p-[20px]">
            <div class="flex flex-col gap-4 sm:gap-[20px] text-center">
              <h3 class="text-[32px] sm:text-[40px] md:text-[48px] font-bold leading-tight">
                Заявка на Trade-in
              </h3>
              <p class="text-[16px] sm:text-[18px] md:text-[20px] text-white text-center leading-relaxed">
                Оставьте Ваши контакты и мы перезвоним в ближайшее время!
              </p>
            </div>

            <!-- Блок ошибок формы -->
            <div id="form-errors" class="errors mt-2 px-4 text-center text-red-300 text-sm sm:text-base"></div>

            <!-- Форма -->
            <form id="tradein-form" data-modal-form="tradein" class="space-y-6 sm:space-y-8 mt-2 w-full">
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

              <!-- Телефон -->
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

              <!-- Чекбокс согласия -->
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
            form="tradein-form"
            class="w-full h-[60px] sm:h-[84px] 
                   bg-red-600 hover:bg-red-700 
                   text-[18px] sm:text-[24px] font-semibold text-white 
                   rounded-lg sm:rounded-2xl
                   transition duration-200 
                   transform hover:scale-[1.01] 
                   focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2">
            Получить предложение!
          </button>
        </div>
      </div>
    `;
  }

  static getBackground() {
    return '../assets/auto.png';
  }

  static getTitle() {
    return 'Заявка на Trade-in';
  }

  static getSuccessTemplate() {
    /* html */
    return `
      <div class="text-center h-auto min-h-[500px] sm:h-[700px] flex flex-col justify-between mx-auto p-6 sm:p-8">
        <div class="space-y-4 sm:space-y-6 text-center flex-1 flex flex-col justify-center">
          <h2 class="text-[36px] sm:text-[48px] font-bold text-white">
            Заявка на Trade-in отправлена!
          </h2>
          <p class="text-white text-[18px] sm:text-[24px] leading-relaxed">
            Мы свяжемся с вами в ближайшее время,<br>
            чтобы оценить ваш автомобиль и предложить лучшее предложение.
          </p>
        </div>
        <button 
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

  // Инициализация формы
  static initForm(modalElement) {
    FormInitializer.initForm(modalElement, this);
  }
}