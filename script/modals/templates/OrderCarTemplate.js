export class OrderCarTemplate {
  static getTemplate(params = {}) {
    const title = params.title || 'Заявка на покупку авто';
    const description = params.description || 'Оставьте ваш номер и мы перезвоним в ближайшее время!';
    const buttonText = params.buttonText || 'Получить предложение!';

    /* html */
    return `
      <div class="w-[685px] bg-transparent rounded-xl overflow-hidden">
        <div class="text-white space-y-8 p-[20px]">
          <div class="flex flex-col gap-[20px]">
            <h3 class="text-[48px] font-bold text-center leading-tight">
              ${title}
            </h3>
            <p class="text-[20px] text-white text-center leading-relaxed">
              ${description}
            </p>
          </div>

          <form id="order-car-form" data-modal-form="order-car" class="space-y-8 mt-2 w-full">
            <div>
              <input 
                type="text" 
                name="full_name" 
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

            <div>
              <input 
                type="tel" 
                name="phone" 
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

            <div class="relative">
              <div class="relative w-full">
                <select 
                  name="car_brand" 
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

            <div class="relative">
              <div class="relative w-full">
                <select 
                  name="car_model" 
                  required 
                  class="custom-select-native opacity-0 rounded-xl absolute inset-0 w-full h-[60px] cursor-pointer z-10"
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

            <div class="flex items-start mt-1">
              <input 
                type="checkbox" 
                name="privacy_policy" 
                checked
                required 
                class="mt-1.5 w-5 h-5 custom-checkbox-input border border-[#F8F8F852] rounded bg-transparent focus:ring-red-400"
                id="privacy-policy"
              >
              <label for="privacy-policy" class="ml-2 text-sm text-gray-300 leading-tight">
                Я согласен с политикой обработки персональных данных
              </label>
            </div>
          </form>
        </div>
      </div>

      <div class="w-full px-8 mt-6">
        <button 
          type="button"
          class="w-full h-[84px] 
                 bg-red-600 hover:bg-red-700 
                 text-white text-[24px] font-semibold 
                 rounded-2xl
                 transition duration-200 
                 transform hover:scale-[1.01] 
                 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          id="submit-order-car"
        >
          ${buttonText}
        </button>
      </div>
    `;
  }

  static getBackground() {
    return '../assets/woman.png';
  }

  static getSuccessTemplate() {
    /* html */
    return `
      <div class="text-center h-[700px] flex flex-col justify-between mx-auto p-8">
        <div>
          <h2 class="text-[48px] font-bold text-white mb-4">Заявка успешно отправлена!</h2>
          <p class="text-white text-[24px] mb-8 leading-relaxed">
            Совсем скоро мы позвоним Вам,<br> чтобы найти лучшее предложение.
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
          Закрыть
        </button>
      </div>
    `;
  }

  static initForm(modalElement) {
    this.initCustomSelects(modalElement);
    
    const form = modalElement.querySelector('#order-car-form');
    const submitBtn = modalElement.querySelector('#submit-order-car');

    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.validateAndSubmit(form, modalElement);
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.validateAndSubmit(form, modalElement);
    });
  }

  static initCustomSelects(modalElement) {
    const brandSelect = modalElement.querySelector('#car-brand-select');
    const brandDisplay = modalElement.querySelector('#car-brand-display');
    const brandLabel = modalElement.querySelector('#car-brand-label');

    const modelSelect = modalElement.querySelector('#car-model-select');
    const modelDisplay = modalElement.querySelector('#car-model-display');
    const modelLabel = modalElement.querySelector('#car-model-label');

    brandSelect.addEventListener('change', () => {
      brandLabel.textContent = brandSelect.options[brandSelect.selectedIndex].text;
    });

    brandDisplay.addEventListener('click', () => {
      brandSelect.focus();
    });

    modelSelect.addEventListener('change', () => {
      modelLabel.textContent = modelSelect.options[modelSelect.selectedIndex].text;
    });

    modelDisplay.addEventListener('click', () => {
      modelSelect.focus();
    });
  }

  static validateAndSubmit(form, modalElement) {
    let isValid = true;

    form.querySelectorAll('.error-message').forEach(el => {
      el.classList.add('hidden');
      el.textContent = '';
    });

    const fieldsToValidate = [
      { element: form.full_name, validator: this.validateName.bind(this) },
      { element: form.phone, validator: this.validatePhone.bind(this) },
      { element: form.car_brand, validator: this.validateSelect.bind(this) },
      { element: form.car_model, validator: this.validateSelect.bind(this) },
      { element: form.privacy_policy, validator: this.validateCheckbox.bind(this) }
    ];

    fieldsToValidate.forEach(({ element, validator }) => {
      if (!validator(element)) {
        isValid = false;
      }
    });

    if (isValid) {
      this.submitForm(form, modalElement);
    }
  }

  static validateName(input) {
    if (!input.value.trim()) {
      this.showError(input, 'Введите ваше ФИО');
      return false;
    }
    if (input.value.trim().split(' ').length < 2) {
      this.showError(input, 'Введите как минимум имя и фамилию');
      return false;
    }
    return true;
  }

  static validatePhone(input) {
    const phoneRegex = /^[\+]?[0-9\s\-\(\)]{10,}$/;
    if (!input.value.trim()) {
      this.showError(input, 'Введите номер телефона');
      return false;
    }
    if (!phoneRegex.test(input.value.replace(/\s/g, ''))) {
      this.showError(input, 'Введите корректный номер телефона');
      return false;
    }
    return true;
  }

  static validateSelect(select) {
    if (!select.value) {
      this.showError(select, `Выберите ${select.name === 'car_brand' ? 'марку' : 'модель'} машины`);
      return false;
    }
    return true;
  }

  static validateCheckbox(checkbox) {
    if (!checkbox.checked) {
      const label = checkbox.closest('div').querySelector('label');
      let errorDiv = label.nextElementSibling;

      if (!errorDiv || !errorDiv.classList.contains('error-message')) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-red-300 text-sm mt-1';
        label.parentNode.insertBefore(errorDiv, label.nextSibling);
      }
      
      errorDiv.classList.remove('hidden');
      errorDiv.textContent = 'Необходимо согласие с политикой';
      return false;
    }
    return true;
  }

  static showError(inputElement, message) {
    const parent = inputElement.closest('div');
    let errorDiv = parent.querySelector('.error-message');
    
    if (!errorDiv) {
      errorDiv = document.createElement('div');
      errorDiv.className = 'error-message text-red-300 text-sm mt-1';
      parent.appendChild(errorDiv);
    }
    
    errorDiv.classList.remove('hidden');
    errorDiv.textContent = message;
  }

  static submitForm(form, modalElement) {
    const formData = new FormData(form);
    const data = Object.fromEntries(formData);
    console.log('Отправлено:', data);

    modalElement.innerHTML = this.getSuccessTemplate();

    setTimeout(() => {
      const closeBtn = modalElement.querySelector('[data-close-modal]');
      if (closeBtn) closeBtn.focus();
    }, 100);
  }
}