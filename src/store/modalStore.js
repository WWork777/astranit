import { action, makeAutoObservable } from 'mobx'

class ModalStore {
	// Состояние модального окна
	modal = {
		isOpen: false,
		title: '',
		type: '',
		tariffName: '',
		totalPrice: '',
		customData: {},
	}

	constructor() {
		makeAutoObservable(this)
	}

	// Действия для модального окна
	openModal = action(({ type, title, tariffName, totalPrice, customData }) => {
		this.modal.isOpen = true
		this.modal.title = title
		this.modal.type = type
		this.modal.tariffName = tariffName
		this.modal.totalPrice = totalPrice
		this.modal.customData = customData
	})

	closeModal = action(() => {
		this.modal.isOpen = false
		this.modal.title = ''
		this.modal.type = ''
		this.modal.tariffName = ''
		this.modal.totalPrice = ''
	})
}
// Создаём и экспортируем экземпляр хранилища
const modalStore = new ModalStore()
export default modalStore
