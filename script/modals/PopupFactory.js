import { OrderForLeasingModal } from "../modals/templates/OrderForLeasing.js"
import { OrderCarTemplate } from "../modals/templates/OrderCarTemplate.js"
import { OrderSelectedCar } from "../modals/templates/OrderSelectedCar.js"
import { OrderTradeIn } from "../modals/templates/OrderTradeIn.js"
import { Questions } from "../modals/templates/Questions.js"

export class PopupFactory {
  static createModal(modalType, params = {}) {
    const modalConfig = this.getModalConfig(modalType);

    if (!modalConfig) {
      throw new Error(`Не найдена конфигурация для модалки: ${modalType}`);
    }

    const template = typeof modalConfig.getTemplate === 'function' 
      ? modalConfig.getTemplate(params) 
      : modalConfig.getTemplate();
    
    const background = params.background || modalConfig.getBackground();

    return {
      template: template,
      background: background
    };
  }

  static getModalConfig(type) {
    switch (type) {
      case 'order-car':
        return OrderCarTemplate;
      case 'leasing':
        return OrderForLeasingModal;
      case 'order-selected-car':
        return OrderSelectedCar;
      case 'trade-in':
        return OrderTradeIn;
      case 'questions':
        return Questions;
      default:
        return null;
    }
  }
}