import { action, makeAutoObservable } from 'mobx'

class ModalStore {
	// Состояние модального окна
	modal = {
		isOpen: false,
		title: '',
		tariffName: '',
		totalPrice: 0,
		formData: {
			name: '',
			email: '',
			phone: '',
			company: '',
			message: '',
		},
		errors: {},
		isLoading: false,
		customData: {}, // Для хранения любых дополнительных данных
	}

	constructor() {
		makeAutoObservable(this)
	}

	// Действия для модального окна
	openModal = action(
		({
			tariffName = '',
			totalPrice = 0,
			title = 'Заявка на коммерческое предложение',
			customData = {},
		} = {}) => {
			this.modal.isOpen = true
			this.modal.tariffName = tariffName
			this.modal.totalPrice = totalPrice
			this.modal.title = title
			this.modal.customData = customData
			this.modal.errors = {}
			this.modal.isLoading = false
		}
	)

	closeModal = action(() => {
		this.modal.isOpen = false
		this.modal.title = ''
		this.modal.tariffName = ''
		this.modal.totalPrice = 0
		this.modal.customData = {}
		this.modal.formData = {
			name: '',
			email: '',
			phone: '',
			company: '',
			message: '',
		}
		this.modal.errors = {}
		this.modal.isLoading = false
	})

	updateFormField = action((field, value) => {
		this.modal.formData[field] = value
		// Очищаем ошибку при изменении поля
		if (this.modal.errors[field]) {
			this.modal.errors[field] = ''
		}
	})

	setErrors = action(errors => {
		this.modal.errors = errors
	})

	setLoading = action(isLoading => {
		this.modal.isLoading = isLoading
	})

	// Валидация формы
	validateForm = () => {
		const { formData } = this.modal
		const errors = {}

		if (!formData.name.trim()) {
			errors.name = 'Имя обязательно'
		}

		if (!formData.email.trim()) {
			errors.email = 'Email обязателен'
		} else if (!/\S+@\S+\.\S+/.test(formData.email)) {
			errors.email = 'Некорректный email'
		}

		if (!formData.phone.trim()) {
			errors.phone = 'Телефон обязателен'
		} else if (
			!/^[\+]?[0-9\s\-\(\)]{10,}$/.test(formData.phone.replace(/\s/g, ''))
		) {
			errors.phone = 'Некорректный номер телефона'
		}

		return errors
	}

	// Отправка формы
	submitForm = action(async onSubmitCallback => {
		const errors = this.validateForm()

		if (Object.keys(errors).length > 0) {
			this.setErrors(errors)
			return false
		}

		this.setLoading(true)

		try {
			// Подготавливаем данные для отправки
			const submissionData = {
				...this.modal.formData,
				tariff: this.modal.tariffName,
				totalPrice: this.modal.totalPrice,
				customData: this.modal.customData,
				timestamp: new Date().toISOString(),
			}

			// Если передан callback для обработки отправки
			if (onSubmitCallback && typeof onSubmitCallback === 'function') {
				await onSubmitCallback(submissionData)
			}

			this.setLoading(false)
			this.closeModal()

			return true
		} catch (error) {
			console.error('Ошибка при отправке:', error)
			this.setLoading(false)
			this.setErrors({
				submit: 'Произошла ошибка при отправке. Попробуйте еще раз.',
			})
			return false
		}
	})

	// Получение данных для модального окна
	get modalData() {
		return {
			isOpen: this.modal.isOpen,
			title: this.modal.title,
			tariffName: this.modal.tariffName,
			totalPrice: this.modal.totalPrice,
			formData: this.modal.formData,
			errors: this.modal.errors,
			isLoading: this.modal.isLoading,
			customData: this.modal.customData,
		}
	}

	// Вспомогательные методы
	isOpen = () => this.modal.isOpen
	getTitle = () => this.modal.title
	getTariffName = () => this.modal.tariffName
	getTotalPrice = () => this.modal.totalPrice
}

// Создаём и экспортируем экземпляр хранилища
const modalStore = new ModalStore()
export default modalStore
