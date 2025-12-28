import { action, makeAutoObservable } from 'mobx'

class SliderStore {
	// Состояние слайдеров
	computerValue = 0
	serversValue = 0
	officesValue = 0

	// Конфигурация слайдеров
	sliderConfig = {
		min: 0,
		max: 100,
		step: 1,
		color: '#ff9a22',
	}

	constructor() {
		makeAutoObservable(this)
	}

	// Обновление фона для слайдера
	getRangeBackground(value) {
		const { min, max, color } = this.sliderConfig
		const percent = ((value - min) / (max - min)) * 100
		return `linear-gradient(to right, ${color} 0%, ${color} ${percent}%, #e0e0e0 ${percent}%, #e0e0e0 100%)`
	}

	// Действия для компьютеров
	setComputerValue = action(value => {
		this.computerValue = Math.min(
			Math.max(value, this.sliderConfig.min),
			this.sliderConfig.max
		)
	})

	incrementComputer = action(() => {
		this.setComputerValue(this.computerValue + this.sliderConfig.step)
	})

	decrementComputer = action(() => {
		this.setComputerValue(this.computerValue - this.sliderConfig.step)
	})

	// Действия для серверов
	setServersValue = action(value => {
		this.serversValue = Math.min(
			Math.max(value, this.sliderConfig.min),
			this.sliderConfig.max
		)
	})

	incrementServers = action(() => {
		this.setServersValue(this.serversValue + this.sliderConfig.step)
	})

	decrementServers = action(() => {
		this.setServersValue(this.serversValue - this.sliderConfig.step)
	})

	// Действия для офисов
	setOfficesValue = action(value => {
		this.officesValue = Math.min(
			Math.max(value, this.sliderConfig.min),
			this.sliderConfig.max
		)
	})

	incrementOffices = action(() => {
		this.setOfficesValue(this.officesValue + this.sliderConfig.step)
	})

	decrementOffices = action(() => {
		this.setOfficesValue(this.officesValue - this.sliderConfig.step)
	})

	// Вычисляемые значения (computed)
	get totalValue() {
		return this.computerValue + this.serversValue + this.officesValue
	}

	get averageValue() {
		return Math.round(this.totalValue / 3)
	}

	get isAtMin() {
		return (
			this.computerValue === this.sliderConfig.min &&
			this.serversValue === this.sliderConfig.min &&
			this.officesValue === this.sliderConfig.min
		)
	}

	get isAtMax() {
		return (
			this.computerValue === this.sliderConfig.max &&
			this.serversValue === this.sliderConfig.max &&
			this.officesValue === this.sliderConfig.max
		)
	}

	// Сброс к значениям по умолчанию
	resetToDefaults = action(() => {
		this.computerValue = 0
		this.serversValue = 0
		this.officesValue = 0
	})

	// Получение всех значений в виде объекта
	getValues() {
		return {
			computers: this.computerValue,
			servers: this.serversValue,
			offices: this.officesValue,
			total: this.totalValue,
		}
	}
}

// Создаём и экспортируем экземпляр хранилища
const sliderStore = new SliderStore()
export default sliderStore
