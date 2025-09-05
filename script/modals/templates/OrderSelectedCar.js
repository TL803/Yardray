import { TemplateRenderer } from './BaseTemplate.js';
import { FormInitializer } from './BaseTemplate.js';

export class OrderSelectedCar extends TemplateRenderer {
  static getTemplate() {
    /* html */
    return `
      <div class="w-full h-full flex flex-col">
        <!-- Основной контент -->
        <div class="flex-grow bg-transparent rounded-xl overflow-hidden">
          <div class="text-white space-y-4 sm:space-y-6 p-4 sm:p-6 md:p-[30px] form-container">
            <!-- Заголовок -->
            <div class="flex flex-col gap-3 sm:gap-[12px] mb-4">
              <h3 class="text-2xl sm:text-3xl md:text-[40px] font-bold text-center leading-tight transition-all duration-500">
                Заявка на покупку <span id="selected-model" class="text-red-400">не выбрана</span>
              </h3>
              <p class="text-sm sm:text-base md:text-[18px] text-white text-center leading-relaxed transition-all duration-500">
                Выбранная комплектация: <span id="selected-trim" class="text-red-400">не выбрана</span>
              </p>

            </div>

            <!-- Ошибки -->
            <div id="form-errors" class="errors mt-2 px-2 sm:px-4 text-center transition-all duration-500"></div>

            <!-- Форма -->
            <form id="order-selected-car-form" data-modal-form="order-selected-car" class="space-y-4 sm:space-y-6 mt-2 w-full form-elements">
              <!-- Модель -->
              <div class="relative transition-all duration-500">
                <div class="relative w-full">
                  <select 
                    name="car_model" 
                    data-content="carModel"
                    required 
                    class="custom-select-native opacity-0 absolute inset-0 w-full h-12 sm:h-[55px] cursor-pointer z-10"
                    id="car-model-select"
                  >
                    <option value="" disabled selected>Модель</option>
                    <option value="dargo">HAVAL Dargo</option>
                    <option value="jolion">HAVAL Jolion</option>
                    <option value="f7">HAVAL F7</option>
                    <option value="f7x">HAVAL F7x</option>
                    <option value="other">Другая модель</option>
                  </select>
                  
                  <div 
                    class="w-full h-12 sm:h-[55px] px-4 sm:px-5 bg-[#F8F8F852] border border-[#F8F8F852] rounded-xl text-white text-sm sm:text-[16px] font-normal flex items-center justify-between cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 focus:border-red-400 transition-all duration-500"
                    id="car-model-display"
                  >
                    <span id="car-model-label" class="truncate">Модель</span>
                    <div class="pointer-events-none relative custom-select-arrow"></div>
                  </div>
                  <div class="error-message text-red-300 text-xs sm:text-sm mt-1 hidden"></div>
                </div>
              </div>

              <!-- Комплектация -->
              <div class="relative transition-all duration-500">
                <div class="relative w-full">
                  <select 
                    name="car_trim" 
                    data-content="carTrim"
                    required 
                    disabled
                    class="custom-select-native opacity-0 absolute inset-0 w-full h-12 sm:h-[55px] cursor-pointer z-10"
                    id="car-trim-select"
                  >
                    <option value="" disabled selected>Комплектация</option>
                    <option value="comfort">Комфорт</option>
                    <option value="premium">Премиум</option>
                    <option value="luxury">Люкс</option>
                  </select>
                  
                  <div 
                    class="w-full h-12 sm:h-[55px] px-4 sm:px-5 bg-[#F8F8F852] border border-[#F8F8F852] rounded-xl text-white text-sm sm:text-[16px] font-normal flex items-center justify-between cursor-pointer appearance-none focus:outline-none focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 focus:border-red-400 opacity-50 transition-all duration-500"
                    id="car-trim-display"
                  >
                    <span id="car-trim-label" class="truncate">Комплектация</span>
                    <div class="pointer-events-none relative custom-select-arrow"></div>
                  </div>
                  <div class="error-message text-red-300 text-xs sm:text-sm mt-1 hidden"></div>
                </div>
              </div>

              <!-- ФИО -->
              <div class="transition-all duration-500">
                <input 
                  type="text" 
                  name="full_name" 
                  data-content="fullName"
                  required 
                  class="w-full h-12 sm:h-[55px] px-4 sm:px-5 
                        bg-[#F8F8F852] border border-[#F8F8F852] rounded-xl
                        text-white placeholder-white placeholder-opacity-70 
                        text-sm sm:text-[16px] font-normal 
                        focus:outline-none 
                        focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 
                        focus:border-red-400 transition-all duration-500"
                  placeholder="ФИО"
                  minlength="2"
                  maxlength="100"
                >
                <div class="error-message text-red-300 text-xs sm:text-sm mt-1 hidden"></div>
              </div>

              <!-- Телефон -->
              <div class="transition-all duration-500">
                <input 
                  type="tel" 
                  name="phone" 
                  data-content="phone"
                  required 
                  class="w-full h-12 sm:h-[55px] px-4 sm:px-5 
                        bg-[#F8F8F852] border border-[#F8F8F852] rounded-xl
                        text-white placeholder-white placeholder-opacity-70 
                        text-sm sm:text-[16px] font-normal 
                        focus:outline-none 
                        focus:ring-2 focus:ring-red-400 focus:ring-opacity-60 
                        focus:border-red-400 transition-all duration-500"
                  placeholder="Ваш телефон"
                >
                <div class="error-message text-red-300 text-xs sm:text-sm mt-1 hidden"></div>
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

        <!-- Фон (только десктоп, изначально скрыт) -->
        <img 
          class="absolute top-0 pointer-events-none w-[300px] xl:w-[400px] 2xl:w-[550px] right-2 xl:right-4 2xl:right-[60px] z-0 opacity-0 transition-all duration-700 hidden xl:block" 
          src="../assets/popup/Vector 4.png" 
          alt="Background vector"
          id="background-vector"
        />

        <!-- Кнопка и машина -->
        <div class="w-full px-4 sm:px-6 xl:px-8 mt-4 relative pb-4 sm:pb-6 transition-all duration-500">
          <button 
            type="submit"
            form="order-selected-car-form"
            class="w-full h-16 sm:h-20 
                  bg-red-600 hover:bg-red-700 
                  text-white text-lg sm:text-xl xl:text-[22px] font-semibold 
                  rounded-2xl
                  transition duration-200 
                  transform hover:scale-[1.01] 
                  focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2
                  relative z-10"
          >
            Получить предложение!
          </button>

          <!-- Машина — изначально полностью скрыта -->
          <img 
            class="absolute bottom-[30px] sm:bottom-[20px] pointer-events-none w-[200px] md:w-[700px] right-[50px] xl:right-[20px] z-20 opacity-0 transition-all duration-700 scale-95 hidden" 
            src="../assets/popup/Dargo 1.png" 
            alt="Car"
            id="car-image"
          />
        </div>
      </div>
    `;
  }

  static getBackground() {
    return null;
  }

  // === АДАПТИВНЫЙ УСПЕШНЫЙ ШАБЛОН ===
  static getSuccessTemplate() {
    /* html */
    return `
      <div class="relative w-full h-full flex flex-col items-center justify-between px-4 sm:px-6 py-6 sm:py-8 text-center overflow-hidden">
        <!-- Фон на всю ширину и высоту -->
        <img 
          src="../assets/popup/nature.png" 
          alt="Background" 
          class="absolute inset-0 w-full h-full object-cover object-center z-0 pointer-events-none"
        />

        <!-- Основной текст -->
        <div class="relative z-10 mt-8 sm:mt-12 xl:mt-20">
          <h2 class="text-2xl sm:text-3xl xl:text-[40px] 2xl:text-[52px] font-bold text-white mb-4 leading-tight">
            Заявка отправлена!
          </h2>
          <p class="text-white text-sm sm:text-base xl:text-[18px] 2xl:text-[26px] leading-relaxed max-w-2xl mx-auto">
            Мы уже подбираем для вас лучшее предложение.<br>
            Скоро свяжемся с вами!
          </p>
        </div>

        <!-- Кнопка -->
        <button 
          data-close-modal
          class="w-full max-w-md h-14 sm:h-16 xl:h-20 2xl:h-[90px] 
                 bg-red-600 hover:bg-red-700 
                 text-white text-base sm:text-lg xl:text-xl 2xl:text-[26px] font-semibold 
                 rounded-2xl shadow-lg
                 transition duration-200 
                 transform hover:scale-[1.02] 
                 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2 z-10 mb-4 sm:mb-6 xl:mb-8"
        >
          Отлично!
        </button>

        <!-- Машина — прижата к низу экрана, центрирована -->
        <img 
          src="../assets/popup/Dargo 1.png" 
          alt="Car" 
          class="absolute bottom-0 left-1/2 transform -translate-x-1/2 
                 w-[60%] sm:w-[70%] xl:w-[80%] max-w-[800px] h-auto 
                 pointer-events-none z-5 
                 opacity-100"
        />
      </div>
    `;
  }

  static initForm(modalElement, modalWindow) {
    this.initCustomSelects(modalElement);

    FormInitializer.initForm(modalElement, this, () => {
      const modelSelect = modalElement.querySelector('#car-model-select');
      const trimSelect = modalElement.querySelector('#car-trim-select');

      let isValid = true;

      if (!modelSelect.value) {
        this.markAsInvalid(modalElement, 'carModel');
        isValid = false;
      } else {
        this.clearInvalid(modalElement, 'carModel');
      }

      if (!trimSelect.value) {
        this.markAsInvalid(modalElement, 'carTrim');
        isValid = false;
      } else {
        this.clearInvalid(modalElement, 'carTrim');
      }

      return isValid;
    }, () => {
      if (modalWindow && typeof modalWindow.setBackground === 'function') {
        modalWindow.setBackground('../assets/popup/nature.png');
      }
    });
  }

  static initCustomSelects(modalElement) {
    const modelSelect = modalElement.querySelector('#car-model-select');
    const modelLabel = modalElement.querySelector('#car-model-label');
    const trimSelect = modalElement.querySelector('#car-trim-select');
    const trimLabel = modalElement.querySelector('#car-trim-label');
    const carImage = modalElement.querySelector('#car-image');
    const backgroundVector = modalElement.querySelector('#background-vector');

    const selectedModel = modalElement.querySelector('#selected-model');
    const selectedTrim = modalElement.querySelector('#selected-trim');
    const formContainer = modalElement.querySelector('.form-container');

    const fixFormSize = () => {
      formContainer.style.width = '100%';
      formContainer.style.maxWidth = '800px';
      formContainer.style.height = 'auto';
      formContainer.style.minHeight = '400px';
      formContainer.style.transition = 'all 0.5s ease-in-out';
    };

    const resetFormSize = () => {
      formContainer.style.width = '';
      formContainer.style.maxWidth = '';
      formContainer.style.height = '';
      formContainer.style.minHeight = '';
    };

    const areBothSelected = () => modelSelect.value && trimSelect.value;

    const updateSelectedData = () => {
      selectedModel.textContent = modelSelect.value
        ? modelSelect.options[modelSelect.selectedIndex].text
        : 'не выбрана';

      selectedTrim.textContent = trimSelect.value
        ? trimSelect.options[trimSelect.selectedIndex].text
        : 'не выбрана';
    };

    const showCar = () => {
      carImage.classList.remove('hidden');
      requestAnimationFrame(() => {
        carImage.classList.remove('opacity-0');
        carImage.classList.remove('scale-95');
        carImage.classList.add('scale-100');
      });
    };

    const hideCar = () => {
      carImage.classList.add('opacity-0');
      carImage.classList.add('scale-95');
      carImage.classList.remove('scale-100');
      setTimeout(() => {
        if (carImage.classList.contains('opacity-0')) {
          carImage.classList.add('hidden');
        }
      }, 700);
    };

    const showBackground = () => {
      if (window.innerWidth >= 1280) { // xl breakpoint
        backgroundVector.classList.remove('hidden');
        requestAnimationFrame(() => {
          backgroundVector.classList.remove('opacity-0');
          backgroundVector.classList.add('opacity-100');
        });
      }
    };

    const hideBackground = () => {
      backgroundVector.classList.add('opacity-0');
      backgroundVector.classList.remove('opacity-100');
      setTimeout(() => {
        if (backgroundVector.classList.contains('opacity-0')) {
          backgroundVector.classList.add('hidden');
        }
      }, 700);
    };

    modelSelect.addEventListener('change', () => {
      modelLabel.textContent = modelSelect.options[modelSelect.selectedIndex].text;
      updateSelectedData();

      if (modelSelect.value) {
        trimSelect.disabled = false;
        modalElement.querySelector('#car-trim-display').classList.remove('opacity-50');
      } else {
        trimSelect.disabled = true;
        modalElement.querySelector('#car-trim-display').classList.add('opacity-50');
        trimSelect.selectedIndex = 0;
        trimLabel.textContent = 'Комплектация';
      }

      if (areBothSelected()) {
        showCar();
        showBackground();
        fixFormSize();
      } else {
        hideCar();
        hideBackground();
        resetFormSize();
      }
    });

    trimSelect.addEventListener('change', () => {
      trimLabel.textContent = trimSelect.options[trimSelect.selectedIndex].text;
      updateSelectedData();

      if (areBothSelected()) {
        showCar();
        showBackground();
        fixFormSize();
      } else {
        hideCar();
        hideBackground();
        resetFormSize();
      }
    });

    window.addEventListener('resize', () => {
      if (areBothSelected()) {
        if (window.innerWidth >= 1280) { // xl breakpoint
          if (backgroundVector.classList.contains('hidden')) {
            backgroundVector.classList.remove('hidden');
            requestAnimationFrame(() => {
              backgroundVector.classList.remove('opacity-0');
              backgroundVector.classList.add('opacity-100');
            });
          }
        } else {
          backgroundVector.classList.remove('opacity-100');
          backgroundVector.classList.add('opacity-0');
          setTimeout(() => {
            backgroundVector.classList.add('hidden');
          }, 700);
        }
      }
    });

    modalElement.querySelector('#car-model-display').addEventListener('click', () => modelSelect.focus());
    modalElement.querySelector('#car-trim-display').addEventListener('click', () => {
      if (!trimSelect.disabled) trimSelect.focus();
    });

    // Инициализация
    updateSelectedData();

    if (!areBothSelected()) {
      carImage.classList.add('opacity-0', 'scale-95', 'hidden');
      backgroundVector.classList.add('opacity-0', 'hidden');
      resetFormSize();
    } else {
      showCar();
      showBackground();
      fixFormSize();
    }
  }

  static markAsInvalid(modalElement, contentType) {
    const selector = contentType === 'carModel'
      ? '#car-model-display'
      : contentType === 'carTrim'
        ? '#car-trim-display'
        : `[data-content="${contentType}"]`;

    const el = modalElement.querySelector(selector);
    if (el) el.classList.add('border-red-500', 'ring-red-500');
  }

  static clearInvalid(modalElement, contentType) {
    const selector = contentType === 'carModel'
      ? '#car-model-display'
      : contentType === 'carTrim'
        ? '#car-trim-display'
        : `[data-content="${contentType}"]`;

    const el = modalElement.querySelector(selector);
    if (el) el.classList.remove('border-red-500', 'ring-red-500');
  }
}