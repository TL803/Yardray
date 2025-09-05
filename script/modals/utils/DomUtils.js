export class DomUtils {
    static createElement(tag, classes = '', attributes = {}) {
        const element = document.createElement(tag);
        if (classes) element.className = classes;
        Object.keys(attributes).forEach(key => {
            element.setAttribute(key, attributes[key]);
        });
        return element;
    }

    static appendChildren(parent, children) {
        children.forEach(child => parent.appendChild(child));
    }

    static disableScroll() {
        // Просто скрываем overflow
        document.body.style.overflow = 'hidden';
    }

    static enableScroll() {
        // Восстанавливаем overflow
        document.body.style.overflow = '';
    }

    static closeOnBackdrop(event, backdropElement, callback) {
        if (event.target === backdropElement) {
            callback();
        }
    }

    static onEscape(callback) {
        const handleEscape = (event) => {
            if (event.key === 'Escape') {
                callback();
            }
        };

        document.addEventListener('keydown', handleEscape);
        
        // Возвращаем функцию для удаления обработчика
        return () => {
            document.removeEventListener('keydown', handleEscape);
        };
    }

    static focusFirstInput(element) {
        const focusableElements = element.querySelectorAll(
            'input, select, textarea, button, [href], [tabindex]:not([tabindex="-1"])'
        );
        
        if (focusableElements.length > 0) {
            // Фокусируемся без прокрутки
            focusableElements[0].focus({ preventScroll: true });
        }
    }
}