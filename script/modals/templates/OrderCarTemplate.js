// /script/modals/templates/OrderCarTemplate.js

import { TemplateRenderer } from './BaseTemplate.js';
import { FormInitializer } from './BaseTemplate.js';

export class OrderCarTemplate extends TemplateRenderer {
  /**
   * Генерация шаблона с параметрами
   * @param {Object} params
   * @returns {string} HTML
   */
  static getTemplate(params = {}) {
    const title = params.title || 'Заявка на покупку авто';
    const description = params.description || 'Оставьте Ваши контакты и мы перезвоним в ближайшее время!';
    const buttonText = params.buttonText || 'Получить предложение!';

    /* html */
    return `
      <div class="flex flex-col  h-full w-full max-w-[100vw] overflow-hidden">
        <!-- Основной контейнер формы -->
        <div class="w-full max-w-[95vw] sm:max-w-[685px] bg-transparent rounded-xl overflow-hidden">
          <div class="text-white space-y-4 sm:space-y-6 md:space-y-8 p-3 sm:p-4 md:p-[20px]">
            <div class="flex flex-col gap-3 sm:gap-4 md:gap-[20px] text-center">
              <h3 class="text-[24px] sm:text-[32px] md:text-[48px] font-bold leading-tight break-words">
                ${title}
              </h3>
              <p class="text-[14px] sm:text-[16px] md:text-[20px] text-white text-center leading-relaxed break-words">
                ${description}
              </p>
            </div>

            <!-- Блок ошибок -->
            <div id="form-errors" class="errors mt-2 px-2 sm:px-4 text-center text-red-300 text-xs sm:text-sm md:text-base"></div>

            <!-- Форма -->
            <form id="order-car-form" data-modal-form="order-car" class="space-y-4 sm:space-y-6 md:space-y-8 mt-2 w-full">
              <!-- Кастомный селект: Марка машины -->
              <div class="relative">
                <div class="relative w-full">
                  <select 
                    name="car_brand" 
                    data-content="carBrand"
                    required 
                    class="custom-select-native opacity-0 absolute inset-0 w-full h-[45px] sm:h-[50px] md:h-[60px] cursor-pointer z-10"
                    id="car-brand-select"
                  >
                    <option value="" disabled selected>Марка машины</option>
                    <option value="bmw">BMW</option>
                    <option value="mercedes">Mercedes</option>
                    <option value="audi">Audi</option>
                    <option value="volkswagen">Volkswagen</option>
                    <option value="other">Другая</option>
                  </select>
                  
                  <div 
                    class="w-full h-[45px] sm:h-[50px] md:h-[60px] px-3 sm:px-4 md:px-6 bg-[#F8F8F852] border border-[#F8F8F852] rounded-lg md:rounded-xl text-white text-[13px] sm:text-[14px] md:text-[16px] font-normal flex items-center justify-between cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 focus:border-red-400 overflow-hidden"
                    id="car-brand-display"
                  >
                    <span id="car-brand-label" class="truncate">Марка машины</span>
                    <div class="pointer-events-none relative custom-select-arrow flex-shrink-0 ml-2"></div>
                  </div>
                  <div class="error-message text-red-300 text-xs sm:text-sm mt-1 hidden"></div>
                </div>
              </div>

              <!-- Кастомный селект: Модель -->
              <div class="relative">
                <div class="relative w-full">
                  <select 
                    name="car_model" 
                    data-content="carModel"
                    required 
                    class="custom-select-native opacity-0 absolute inset-0 w-full h-[45px] sm:h-[50px] md:h-[60px] cursor-pointer z-10"
                    id="car-model-select"
                  >
                    <option value="" disabled selected>Модель</option>
                    <option value="x5">X5</option>
                    <option value="e46">E46</option>
                    <option value="a6">A6</option>
                    <option value="golf">Golf</option>
                    <option value="other">Другая</option>
                  </select>
                  
                  <div 
                    class="w-full h-[45px] sm:h-[50px] md:h-[60px] px-3 sm:px-4 md:px-6 bg-[#F8F8F852] border border-[#F8F8F852] rounded-lg md:rounded-xl text-white text-[13px] sm:text-[14px] md:text-[16px] font-normal flex items-center justify-between cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 focus:border-red-400 overflow-hidden"
                    id="car-model-display"
                  >
                    <span id="car-model-label" class="truncate">Модель</span>
                    <div class="pointer-events-none relative custom-select-arrow flex-shrink-0 ml-2"></div>
                  </div>
                  <div class="error-message text-red-300 text-xs sm:text-sm mt-1 hidden"></div>
                </div>
              </div>

              <!-- ФИО -->
              <div>
                <input 
                  type="text" 
                  name="full_name" 
                  data-content="fullName"
                  required 
                  minlength="2"
                  maxlength="100"
                  class="w-full h-[45px] sm:h-[50px] md:h-[60px] px-3 sm:px-4 md:px-6 
                         bg-[#F8F8F852] border border-[#F8F8F852] rounded-lg md:rounded-xl
                         text-white placeholder-white placeholder-opacity-70 
                         text-[13px] sm:text-[14px] md:text-[16px] font-normal 
                         focus:outline-none 
                         focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 
                         focus:border-red-400"
                  placeholder="ФИО"
                >
                <div class="error-message text-red-300 text-xs sm:text-sm mt-1 hidden"></div>
              </div>

              <!-- Телефон -->
              <div>
                <input 
                  type="tel" 
                  name="phone" 
                  data-content="phone"
                  required 
                  class="w-full h-[45px] sm:h-[50px] md:h-[60px] px-3 sm:px-4 md:px-6 
                         bg-[#F8F8F852] border border-[#F8F8F852] rounded-lg md:rounded-xl
                         text-white placeholder-white placeholder-opacity-70 
                         text-[13px] sm:text-[14px] md:text-[16px] font-normal 
                         focus:outline-none 
                         focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 
                         focus:border-red-400"
                  placeholder="Ваш телефон"
                >
                <div class="error-message text-red-300 text-xs sm:text-sm mt-1 hidden"></div>
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

        <!-- Кнопка отправки -->
        <div class="w-full max-w-[95vw] px-2 sm:px-4 md:px-8 mt-3 sm:mt-4">
          <button 
            type="submit"
            form="order-car-form"
            class="w-full h-[50px] sm:h-[60px] md:h-[84px] 
                   bg-red-600 hover:bg-red-700 
                   text-white text-[16px] sm:text-[18px] md:text-[24px] font-semibold 
                   rounded-lg md:rounded-2xl
                   transition duration-200 
                   transform hover:scale-[1.01] 
                   focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                   break-words"
          >
            ${buttonText}
          </button>
        </div>
      </div>
    `;
  }

  static getBackground() {
    return '../assets/woman.png';
  }

  static getSuccessTemplate() {
    /* html */
    return `
      <div class="text-center h-auto min-h-[400px] sm:min-h-[500px] md:h-[700px] flex flex-col justify-between mx-auto p-4 sm:p-6 md:p-8 max-w-[95vw]">
        <div class="space-y-3 sm:space-y-4 md:space-y-6 text-center flex-1 flex flex-col justify-center">
          <h2 class="text-[28px] sm:text-[36px] md:text-[48px] font-bold text-white break-words">
            Заявка успешно отправлена!
          </h2>
          <p class="text-white text-[16px] sm:text-[18px] md:text-[24px] leading-relaxed break-words">
            Совсем скоро мы позвоним Вам,<br> чтобы найти лучшее предложение.
          </p>
        </div>
        <button 
          data-close-modal
          class="w-full h-[50px] sm:h-[60px] md:h-[84px] 
                 bg-red-600 hover:bg-red-700 
                 text-white text-[16px] sm:text-[18px] md:text-[24px] font-semibold 
                 rounded-lg md:rounded-2xl
                 transition duration-200 
                 transform hover:scale-[1.01] 
                 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 mt-3 sm:mt-4">
          Отлично!
        </button>
      </div>
    `;
  }

  // Инициализация: кастомные селекты + общая логика
  static initForm(modalElement, modalWindow, params = {}) {
    this.initCustomSelects(modalElement);

    FormInitializer.initForm(modalElement, this, () => {
      const brandSelect = modalElement.querySelector('#car-brand-select');
      const modelSelect = modalElement.querySelector('#car-model-select');

      let isValid = true;

      if (!brandSelect.value) {
        this.markAsInvalid(modalElement, 'carBrand');
        isValid = false;
      } else {
        this.clearInvalid(modalElement, 'carBrand');
      }

      if (!modelSelect.value) {
        this.markAsInvalid(modalElement, 'carModel');
        isValid = false;
      } else {
        this.clearInvalid(modalElement, 'carModel');
      }

      return isValid;
    }, () => {
      console.log('✅ Заявка на авто отправлена:', params);
    });
  }

  // Инициализация кастомных селектов
  static initCustomSelects(modalElement) {
    const brandSelect = modalElement.querySelector('#car-brand-select');
    const brandLabel = modalElement.querySelector('#car-brand-label');
    const modelSelect = modalElement.querySelector('#car-model-select');
    const modelLabel = modalElement.querySelector('#car-model-label');

    brandSelect.addEventListener('change', () => {
      brandLabel.textContent = brandSelect.options[brandSelect.selectedIndex].text;
    });

    modelSelect.addEventListener('change', () => {
      modelLabel.textContent = modelSelect.options[modelSelect.selectedIndex].text;
    });

    modalElement.querySelector('#car-brand-display').addEventListener('click', () => brandSelect.focus());
    modalElement.querySelector('#car-model-display').addEventListener('click', () => modelSelect.focus());
  }

  // Подсветка ошибок
  static markAsInvalid(modalElement, contentType) {
    const selector = contentType === 'carBrand'
      ? '#car-brand-display'
      : contentType === 'carModel'
        ? '#car-model-display'
        : `[data-content="${contentType}"]`;

    const el = modalElement.querySelector(selector);
    if (el) el.classList.add('border-red-500', 'ring-red-500');
  }

  static clearInvalid(modalElement, contentType) {
    const selector = contentType === 'carBrand'
      ? '#car-brand-display'
      : contentType === 'carModel'
        ? '#car-model-display'
        : `[data-content="${contentType}"]`;

    const el = modalElement.querySelector(selector);
    if (el) el.classList.remove('border-red-500', 'ring-red-500');
  }
}