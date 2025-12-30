import { action, makeAutoObservable } from 'mobx'

class ModalStore {
	// Состояние модального окна
	modal = {
		isOpen: false,
		formId: '',
		title: '',
		type: '',
		tariffName: '',
		totalPrice: '',
		totalEconomPrice: '',
		totalLitePrice: '',
		totalStandartPrice: '',
		totalComfortPrice: '',
		customData: {},
	}

	constructor() {
		makeAutoObservable(this)
	}

	// Действия для модального окна
	openModal = action(
		({
			formId,
			type,
			title,
			tariffName,
			totalPrice,
			totalEconomPrice,
			totalLitePrice,
			totalStandartPrice,
			totalComfortPrice,
			customData,
		}) => {
			this.modal.isOpen = true
			this.modal.formId = formId
			this.modal.title = title
			this.modal.type = type
			this.modal.tariffName = tariffName
			this.modal.totalPrice = totalPrice
			this.modal.totalEconomPrice = totalEconomPrice
			this.modal.totalLitePrice = totalLitePrice
			this.modal.totalStandartPrice = totalStandartPrice
			this.modal.totalComfortPrice = totalComfortPrice
			this.modal.customData = customData
		}
	)

	closeModal = action(() => {
		this.modal.isOpen = false
		this.modal.formId = ''
		this.modal.title = ''
		this.modal.type = ''
		this.modal.tariffName = ''
		this.modal.totalPrice = ''
		this.modal.totalEconomPrice = ''
		this.modal.totalLitePrice = ''
		this.modal.totalStandartPrice = ''
		this.modal.totalComfortPrice = ''
		this.modal.customData = {}
	})
}
// Создаём и экспортируем экземпляр хранилища
const modalStore = new ModalStore()
export default modalStore
