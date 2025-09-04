        document.addEventListener('DOMContentLoaded', () => {
            const wrapper = document.getElementById('scroll-wrapper');
            const container = document.getElementById('scroll-container');
            let isDown = false;
            let startX;
            let scrollLeft;

            const mediaQuery = window.matchMedia('(min-width: 768px)');

            function enableDrag(enable) {
                if (enable) {
                    wrapper.classList.add('cursor-grab', 'hide-scrollbar');
                    wrapper.addEventListener('mousedown', startDrag);
                } else {
                    wrapper.classList.remove('cursor-grab', 'cursor-grabbing', 'hide-scrollbar');
                    wrapper.removeEventListener('mousedown', startDrag);
                }
            }

            function startDrag(e) {
                isDown = true;
                wrapper.classList.add('cursor-grabbing');
                wrapper.classList.remove('cursor-grab');
                startX = e.pageX - wrapper.offsetLeft;
                scrollLeft = wrapper.scrollLeft;
                e.preventDefault();
            }

            function moveDrag(e) {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - wrapper.offsetLeft;
                const walk = (x - startX) * 0.8; // 🔽 Медленнее! Было 1.5 — стало 0.8
                wrapper.scrollLeft = scrollLeft - walk;
            }

            function stopDrag() {
                isDown = false;
                wrapper.classList.remove('cursor-grabbing');
                wrapper.classList.add('cursor-grab');
            }

            // Обновляем поведение при изменении размера экрана
            function updateMode() {
                if (mediaQuery.matches) {
                    // Десктоп: горизонтальный скролл + grab
                    enableDrag(true);
                    wrapper.addEventListener('mousemove', moveDrag);
                    wrapper.addEventListener('mouseup', stopDrag);
                    wrapper.addEventListener('mouseleave', stopDrag);
                } else {
                    // Мобила: обычный поток
                    enableDrag(false);
                    wrapper.removeEventListener('mousemove', moveDrag);
                    wrapper.removeEventListener('mouseup', stopDrag);
                    wrapper.removeEventListener('mouseleave', stopDrag);
                }
            }

            // Инициализация
            updateMode();
            mediaQuery.addEventListener('change', updateMode);
        });