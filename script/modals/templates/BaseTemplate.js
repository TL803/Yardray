export class TemplateRenderer {
    static getTemplate() {
        throw new Error('Method getTemplate() must be implemented.');
    }

    static getBackground() {
        return null;
    }

    static getSuccessTemplate() {
        throw new Error('Method getSuccessTemplate() must be implemented.');
    }
}

export class ErrorDisplay {
    static showError(container, text) {
        if (!container) return;
        
        container.innerHTML = '';
        const el = document.createElement('div');
        el.className = 'text-red-300 text-sm bg-red-900/30 p-2 rounded text-center';
        el.textContent = text;
        container.appendChild(el);
    }

    static hideErrors(container) {
        if (container) container.innerHTML = '';
    }
}

export class FormValidator {
    static validateAndSubmit(form, modalElement, errorsContainer, fullNameInput, phoneInput, agreeCheckbox) {
        ErrorDisplay.hideErrors(errorsContainer);
        ['fullName', 'phone', 'agree'].forEach(type => this.clearInvalid(modalElement, type));

        let isValid = true;
        let errorMessage = '';

        const nameValue = fullNameInput.value.trim();
        if (!nameValue) {
            errorMessage = 'Введите имя и фамилию';
            this.markAsInvalid(modalElement, 'fullName');
            isValid = false;
        } else if (nameValue.split(/\s+/).length < 2) {
            errorMessage = 'Введите как минимум имя и фамилию';
            this.markAsInvalid(modalElement, 'fullName');
            isValid = false;
        }

        const phoneRegex = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
        if (!phoneRegex.test(phoneInput.value)) {
            errorMessage = errorMessage || 'Введите корректный номер телефона';
            this.markAsInvalid(modalElement, 'phone');
            isValid = false;
        }

        if (!agreeCheckbox.checked) {
            errorMessage = errorMessage || 'Вы должны дать согласие';
            this.markAsInvalid(modalElement, 'agree');
            isValid = false;
        }

        if (isValid) {
            alert('Форма отправлена');

            const templateInstance = modalElement.__templateInstance;
            if (templateInstance && typeof templateInstance.getSuccessTemplate === 'function') {
                modalElement.innerHTML = templateInstance.getSuccessTemplate();
                
                // Добавляем обработчик для кнопки закрытия в success template
                const closeBtn = modalElement.querySelector('#close-success-modal');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        this.closeModal(modalElement);
                    });
                }
            } else {
                modalElement.innerHTML = '<div class="p-6 bg-white rounded-lg text-center"><h3 class="text-2xl font-bold text-green-600">✅ Успешно!</h3><button id="close-success-modal" class="mt-4 px-4 py-2 bg-red-600 text-white rounded">Закрыть</button></div>';
                
                const closeBtn = modalElement.querySelector('#close-success-modal');
                if (closeBtn) {
                    closeBtn.addEventListener('click', () => {
                        this.closeModal(modalElement);
                    });
                }
            }
        } else {
            ErrorDisplay.showError(errorsContainer, errorMessage);
        }
    }

    static closeModal(modalElement) {
        // Находим и закрываем модальное окно
        const modalContainer = modalElement.closest('.modal-container') || 
                              modalElement.closest('.modal-overlay') ||
                              modalElement.closest('.modal-backdrop') ||
                              modalElement.closest('[role="dialog"]');
        
        if (modalContainer) {
            modalContainer.remove();
        }
        
        // Также удаляем overlay если есть
        const overlays = document.querySelectorAll('.modal-overlay, .overlay, .modal-backdrop');
        overlays.forEach(overlay => {
            overlay.remove();
        });

        // Включаем скролл на body
        document.body.classList.remove('modal-open');
        document.body.style.overflow = '';
        document.body.style.position = '';
    }

    static markAsInvalid(modalElement, contentType) {
        const input = modalElement.querySelector(`[data-content="${contentType}"]`);
        if (input) input.classList.add('border-red-500', 'ring-red-500');
    }

    static clearInvalid(modalElement, contentType) {
        const input = modalElement.querySelector(`[data-content="${contentType}"]`);
        if (input) input.classList.remove('border-red-500', 'ring-red-500');
    }

    static applyPhoneMask(input) {
        input.addEventListener('input', function (e) {
            const start = e.target.selectionStart;
            const end = e.target.selectionEnd;
            const prevValue = e.target.value;

            let value = e.target.value.replace(/\D/g, '');
            if (value.startsWith('8') || (!value.startsWith('7') && value.length > 0)) {
                value = '7' + value.replace(/^8/, '');
            }

            let formatted = '+7 (';
            if (value.length >= 2) formatted += value.slice(1, 4);
            if (value.length >= 4) formatted += ') ' + value.slice(4, 7);
            if (value.length >= 7) formatted += '-' + value.slice(7, 9);
            if (value.length >= 9) formatted += '-' + value.slice(9, 11);

            if (value.length === 0) formatted = '+7 (';

            e.target.value = formatted;

            const diff = formatted.length - prevValue.length;
            e.target.setSelectionRange(start + diff, end + diff);
        });

        input.addEventListener('focus', () => {
            if (!input.value || input.value === '+7 (') {
                input.value = '+7 (';
            }
        });

        input.addEventListener('blur', () => {
            const validPattern = /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/;
            if (input.value && input.value !== '+7 (' && !validPattern.test(input.value)) {
                input.value = '+7 (';
            }
        });
    }
}

// Добавляем недостающий класс FormInitializer
export class FormInitializer {
    static initForm(modalElement, templateInstance) {

        modalElement.__templateInstance = templateInstance;

        const form = modalElement.querySelector('form');
        const errorsContainer = modalElement.querySelector('.errors') || modalElement.querySelector('#form-errors');

        const fullNameInput = modalElement.querySelector('input[data-content="fullName"], input[data-content="name"]');
        const phoneInput = modalElement.querySelector('input[data-content="phone"]');
        const agreeCheckbox = modalElement.querySelector('input[data-content="agree"]');

        if (!form || !errorsContainer || !fullNameInput || !phoneInput || !agreeCheckbox) {
            console.warn('❌ Не все элементы формы найдены:', { form, errorsContainer, fullNameInput, phoneInput, agreeCheckbox });
            return;
        }

        FormValidator.applyPhoneMask(phoneInput);

        form.addEventListener('submit', (e) => {
            e.preventDefault();
            FormValidator.validateAndSubmit(form, modalElement, errorsContainer, fullNameInput, phoneInput, agreeCheckbox);
        });

        [fullNameInput, phoneInput].forEach(input => {
            input.addEventListener('input', () => {
                ErrorDisplay.hideErrors(errorsContainer);
                FormValidator.clearInvalid(modalElement, input.dataset.content);
            });
        });

        agreeCheckbox.addEventListener('change', () => {
            ErrorDisplay.hideErrors(errorsContainer);
            FormValidator.clearInvalid(modalElement, 'agree');
        });
    }
}