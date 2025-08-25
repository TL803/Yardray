export class OrderSelectedCar {
    static getTemplate() {
        /* html */
        return `
    <div>
      <div class="w-[685px]  bg-transparent rounded-xloverflow-hidden">
        <div class="text-white space-y-8 p-[20px]">
        <div class="flex flex-col gap-[20px]">
          <h3 class="text-[48px] font-bold text-center leading-tight">
            Заявка на покупку HAVAL
          </h3>
          <p class="text-[20px] text-white text-center leading-relaxed">
            Заполните анкету, мы свяжемся с Вами 
в ближайшее время, чтобы найти идеальный автомобиль  для Вас!
          </p>
          </div>

          <form data-modal-form="order-car" class="space-y-8 mt-2 w-full">
            <!-- Поле ФИО -->


            <div class="relative">
              <div class="relative w-full">
                <select 
                  name="car_brand" 
                  required 
                  class="custom-select-native opacity-0 absolute inset-0 w-full h-[60px] cursor-pointer z-10"
                  id="car-brand-select"
                  onchange="document.getElementById('car-brand-label').textContent = this.options[this.selectedIndex].text"
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
                  onclick="document.getElementById('car-brand-select').focus()"
                  id="car-brand-display"
                >
                  <span id="car-brand-label">Марка машины</span>
                  <div class="pointer-events-none relative custom-select-arrow"></div>
                </div>
              </div>
            </div>

            <div class="relative">
              <div class="relative w-full">
                <select 
                  name="car_model" 
                  required 
                  class="custom-select-native opacity-0 rounded-xl absolute inset-0 w-full h-[60px] cursor-pointer z-10"
                  id="car-model-select"
                  onchange="document.getElementById('car-model-label').textContent = this.options[this.selectedIndex].text"
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
                  onclick="document.getElementById('car-model-select').focus()"
                  id="car-model-display"
                >
                  <span id="car-model-label">Модель</span>
                  <div class="pointer-events-none relative custom-select-arrow"></div>
                </div>
              </div>
            </div>


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
              >
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

<div class="w-full px-8 mt-6 relative">

  <img 
    class="absolute bottom-0 w-[700px] right-[40px] z-0" 
    src="../assets/popup/Vector 4.png" 
    alt="Background vector"
  />

  <button 
    type="submit"
    form="order-car-form"
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
    class="absolute bottom-[10px] w-[700px] right-[40px] z-20" 
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
}