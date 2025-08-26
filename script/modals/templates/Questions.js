// /script/modals/templates/Questions.js

export class Questions {
  static getTemplate() {
    /* html */
    return `
      <div class="flex flex-col items-between">
        <div class="w-[685px] bg-transparent rounded-xl overflow-hidden">
          <div class="text-white space-y-8 p-[20px]">
            <div class="flex flex-col gap-[20px]">
              <h3 class="text-[48px] font-bold text-center leading-tight">
                Остались вопросы?
              </h3>
              <p class="text-[20px] text-white text-center leading-relaxed">
                Оставьте свой номер телефона, и мы свяжемся с Вами  
                в ближайшее время, чтобы ответить на все вопросы и помочь Вам!
              </p>
            </div>

            <form id="questions-form" data-modal-form="questions" class="space-y-8 mt-2 w-full">
              <!-- Поле ФИО -->
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

              <div class="flex items-start mt-1">
                <input 
                  type="checkbox" 
                  name="privacy_policy" 
                  required 
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
            type="button"
            id="submit-questions"
            class="w-full h-[84px] 
                   bg-red-600 hover:bg-red-700 
                   text-white text-[24px] font-semibold 
                   rounded-2xl
                   transition duration-200 
                   transform hover:scale-[1.01] 
                   focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
          >
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
    const form = modalElement.querySelector('#questions-form');
    const submitBtn = modalElement.querySelector('#submit-questions');

    submitBtn.addEventListener('click', (e) => {
      e.preventDefault();
      this.validateAndSubmit(form, modalElement);
    });

    form.addEventListener('submit', (e) => {
      e.preventDefault();
      this.validateAndSubmit(form, modalElement);
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

  static validateCheckbox(checkbox) {
    if (!checkbox.checked) {
      const label = checkbox.closest('div').querySelector('label');
      let errorDiv = label.nextElementSibling;

      if (!errorDiv || !errorDiv.classList.contains('error-message')) {
        errorDiv = document.createElement('div');
        errorDiv.className = 'error-message text-red-300 text-sm mt-1 ml-7';
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
    console.log('Отправлено (вопросы):', data);

    modalElement.innerHTML = this.getSuccessTemplate();

    setTimeout(() => {
      const closeBtn = modalElement.querySelector('[data-close-modal]');
      if (closeBtn) closeBtn.focus();
    }, 100);
  }
}