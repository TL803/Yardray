// /script/modals/templates/OrderForLeasingModal.js
export class OrderTradeIn {
  static getTemplate() {
    /* html */
    return `
    <div class="flex flex-col items-between">
      <div class="w-[685px] bg-transparent rounded-xloverflow-hidden">
        <div class="text-white space-y-8 p-[20px]">
        <div class="flex flex-col gap-[20px]">
          <h3 class="text-[48px] font-bold text-center leading-tight">
                  Заявка на Trade-in
          </h3>
          <p class="text-[20px] text-white text-center leading-relaxed">
 Оставьте Ваш номер и мы перезвоним 
в ближайшее время!
          </p>
          </div>

          <form data-modal-form="order-car" class="space-y-8 mt-2 w-full">
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

      <div class="w-full px-8 mt-[180px]">
        <button 
          type="submit"
          form="order-car-form"
          class="w-full h-[84px] 
                 bg-red-600 hover:bg-red-700 
                 text-white text-[24px] font-semibold 
                 rounded-2xl
                 transition duration-200 
                 transform hover:scale-[1.01] 
                 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-offset-2"
        >
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
}