// /script/modals/templates/OrderSelectedCar.js

import { TemplateRenderer } from './BaseTemplate.js';
import { FormInitializer } from './BaseTemplate.js';

export class OrderSelectedCar extends TemplateRenderer {
  static getTemplate() {
    /* html */
    return `
      <div>
        <div class="w-[685px] bg-transparent rounded-xl overflow-hidden">
          <div class="text-white space-y-8 p-[20px]">
            <div class="flex flex-col gap-[20px]">
              <h3 class="text-[48px] font-bold text-center leading-tight">
                Заявка на покупку HAVAL
              </h3>
              <p class="text-[20px] text-white text-center leading-relaxed">
                Заполните анкету, мы свяжемся с Вами 
                в ближайшее время, чтобы подобрать идеальный автомобиль для Вас!
              </p>
            </div>

            <!-- Контейнер ошибок -->
            <div id="form-errors" class="errors mt-2 px-4 text-center"></div>

            <form id="order-selected-car-form" data-modal-form="order-selected-car" class="space-y-8 mt-2 w-full">
              <!-- Кастомный селект: Марка машины -->
              <div class="relative">
                <div class="relative w-full">
                  <select 
                    name="car_brand" 
                    data-content="carBrand"
                    required 
                    class="custom-select-native opacity-0 absolute inset-0 w-full h-[60px] cursor-pointer z-10"
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
                    class="w-full h-[60px] px-6 bg-[#F8F8F852] border border-[#F8F8F852] rounded-xl text-white text-[16px] font-normal flex items-center justify-between cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 focus:border-red-400"
                    id="car-brand-display"
                  >
                    <span id="car-brand-label">Марка машины</span>
                    <div class="pointer-events-none relative custom-select-arrow"></div>
                  </div>
                  <div class="error-message text-red-300 text-sm mt-1 hidden"></div>
                </div>
              </div>

              <!-- Кастомный селект: Модель -->
              <div class="relative">
                <div class="relative w-full">
                  <select 
                    name="car_model" 
                    data-content="carModel"
                    required 
                    class="custom-select-native opacity-0 absolute inset-0 w-full h-[60px] cursor-pointer z-10"
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
                    class="w-full h-[60px] px-6 bg-[#F8F8F852] border border-[#F8F8F852] rounded-xl text-white text-[16px] font-normal flex items-center justify-between cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 focus:border-red-400"
                    id="car-model-display"
                  >
                    <span id="car-model-label">Модель</span>
                    <div class="pointer-events-none relative custom-select-arrow"></div>
                  </div>
                  <div class="error-message text-red-300 text-sm mt-1 hidden"></div>
                </div>
              </div>

              <!-- ФИО -->
              <div>
                <input 
                  type="text" 
                  name="full_name" 
                  data-content="fullName"
                  required 
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

              <!-- Телефон -->
              <div>
                <input 
                  type="tel" 
                  name="phone" 
                  data-content="phone"
                  required 
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

              <!-- Чекбокс согласия -->
              <div class="flex items-start mt-1">
                <input 
                  type="checkbox" 
                  name="privacy_policy" 
                  data-content="agree"
                  required 
                  checked
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

        <!-- Кнопка и изображения -->
        <img 
          class="absolute -top-12 pointer-events-none w-[500px] right-[80px] z-0" 
          src="../assets/popup/Vector 4.png" 
          alt="Background vector"
        />
        <div class="w-full px-8 mt-6 relative">
          <button 
            type="submit"
            form="order-selected-car-form"
            class="w-full h-[84px] 
                   bg-red-600 hover:bg-red-700 
                   text-white text-[24px] font-semibold 
                   rounded-2xl
                   transition duration-200 
                   transform hover:scale-[1.01] 
                   focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                   relative z-10"
          >
            Получить предложение!
          </button>

          <img 
            class="absolute bottom-[10px] pointer-events-none w-[700px] right-[40px] z-20" 
            src="../assets/popup/Dargo 1.png" 
            alt="Car"
          />
        </div>
      </div>
    `;
  }

  static getBackground() {
    return null;
  }

  static getSuccessTemplate() {
    /* html */
    return `
      <div class="text-center h-[700px] flex flex-col justify-between mx-auto p-8 relative">
        <div>
          <h2 class="text-[48px] font-bold text-white mb-4">Заявка отправлена!</h2>
          <img class="w-[286px] absolute z-1 bottom-[80px] left-[150px] pointer-events-none" src="../assets/popup/Dargo 1.png"/>
          <p class="text-white text-[24px] mb-8 leading-relaxed">
            Мы уже подбираем для вас лучшее предложение.<br>
            Скоро свяжемся с вами!
          </p>
        </div>
        <button 
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

  // Инициализация: кастомные селекты + общая логика
  static initForm(modalElement, modalWindow) {
    this.initCustomSelects(modalElement);

    FormInitializer.initForm(modalElement, this, () => {
      // Дополнительная валидация кастомных селектов
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
      // onSuccess — после успешной отправки
      if (modalWindow && typeof modalWindow.setBackground === 'function') {
        modalWindow.setBackground('../assets/popup/nature.png');
      }
    });
  }

  // Инициализация отображения селектов
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

  // Подсветка ошибок для кастомных полей
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