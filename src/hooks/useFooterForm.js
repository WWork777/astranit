'use client'
import { useCallback, useEffect, useState } from 'react'

export const useFooterForm = () => {
	// Константы для уведомлений
	const NOTICES = {
		BASE: (
			<>
				Остались вопросы? С удовольствием проконсультируем вас по решению
				необходимой задачи и условиям обслуживания!
			</>
		),
		EMPTY_PHONE: (
			<>
				Пожалуйста, укажите
				<br />
				номер телефона
			</>
		),
		PERSONAL_DATA: (
			<>
				Необходимо согласие на обработку <br /> персональных данных
			</>
		),
		CORRECT_PHONE: (
			<>
				Пожалуйста, укажите <br />
				корректный номер
			</>
		),
		EMPTY_NAME: (
			<>
				Пожалуйста, укажите <br />
				ваше имя
			</>
		),
		NAME_TOO_LONG: (
			<>
				Имя не должно превышать <br />
				10 символов
			</>
		),
		EMPTY_EMAIL: (
			<>
				Пожалуйста, укажите
				<br />
				Ваш email
			</>
		),
		CORRECT_EMAIL: (
			<>
				Пожалуйста, укажите <br />
				корректный email
			</>
		),
		MESSAGE_TOO_LONG: (
			<>
				Сообщение не должно превышать <br />
				1000 символов
			</>
		),
		INAPPROPRIATE_CONTENT: (
			<>
				Пожалуйста, избегайте <br />
				нецензурных выражений
			</>
		),
	}

	// Паттерны для нецензурной лексики
	const INAPPROPRIATE_PATTERNS = [
		'ху[еёийяю]',
		'п[иеё]зд',
		'бля[дт]',
		'еба[нтлш]',
		'еб[аоиуы]',
		'еб[а-я]',
		'сук[аи]?',
		'суч[ка]?',
		'гандон',
		'конч',
		'мудак',
		'мудил',
		'залуп',
		'дроч',
		'манда',
		'шлюх',
		'шалав',
		'г[оа]вн',
		'дерьм',
		'сран',
		'заеб',
		'оху[её]',
		'п[иеё]дор',
		'пид[оа]р',
		'гомик',
		'педик',
		'х[уy]й',
		'п[іi]зд',
		'бл[яa]',
		'3[аa]б[аa]',
		'[хx][уy][йi]',
		'[пp][іi][з3][дd]',
		'fuck',
		'shit',
		'asshole',
		'bitch',
		'cunt',
		'dick',
		'piss',
		'whore',
		'bastard',
		'damn',
		'урод',
		'дебил',
		'идиот',
		'тупиц',
		'дурак',
		'кретин',
		'моральн',
		'отстой',
		'ничтож',
		'х[^а-яё]*у[^а-яё]*[еёийяю]',
		'п[^а-яё]*[иеё][^а-яё]*з[^а-яё]*д',
		'б[^а-яё]*л[^а-яё]*[яa][^а-яё]*[дт]',
	]

	// Регулярные выражения для валидации
	const VALIDATION_PATTERNS = {
		PHONE: /^\(?[+]?(\d{1})\)?[(]?(\d{3})\)?[)]?[- ]?(\d{3})[- ]?(\d{4})$/,
		EMAIL: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
	}

	// Состояние формы
	const [formData, setFormData] = useState({
		name: '',
		phone: '',
		email: '',
		message: '',
		checked: false,
	})

	const [errors, setErrors] = useState({
		name: true,
		phone: true,
		email: true,
		checked: true,
		message: false,
	})

	const [notice, setNotice] = useState(NOTICES.BASE)
	const [isValid, setIsValid] = useState(false)

	// Создание regex для проверки нецензурной лексики
	const createInappropriateRegex = useCallback(() => {
		try {
			const pattern = `\\b(${INAPPROPRIATE_PATTERNS.join('|')})\\b`
			return new RegExp(pattern, 'giu')
		} catch (error) {
			console.error('Ошибка создания regex:', error)
			return /(хуй|пизд|бля|еба|еб|сук|суч|гандон)/giu
		}
	}, [])

	// Проверка на нецензурную лексику
	const checkForInappropriateContent = useCallback(
		text => {
			if (!text || typeof text !== 'string') {
				return {
					hasInappropriate: false,
					cleanText: text || '',
					matches: [],
				}
			}

			try {
				const regex = createInappropriateRegex()
				const matches = text.match(regex) || []

				const additionalPatterns = [
					/(?:х|h)(?:у|y)(?:й|i|u)/gi,
					/(?:п|p)(?:и|i)(?:з|3|z)(?:д|d)/gi,
					/(?:б|b)(?:л|l)(?:я|a)(?:д|d|дь)/gi,
					/(?:е|e)(?:б|b)(?:а|a)/gi,
				]

				let allMatches = [...matches]
				let cleanText = text

				additionalPatterns.forEach(pattern => {
					const additionalMatches = text.match(pattern)
					if (additionalMatches) {
						allMatches = [...allMatches, ...additionalMatches]
						cleanText = cleanText.replace(pattern, '[цензура]')
					}
				})

				if (matches.length > 0) {
					cleanText = text.replace(regex, '[цензура]')
				}

				return {
					hasInappropriate: allMatches.length > 0,
					cleanText: cleanText,
					matches: [...new Set(allMatches)],
				}
			} catch (error) {
				console.error('Ошибка проверки текста:', error)
				return {
					hasInappropriate: false,
					cleanText: text,
					matches: [],
				}
			}
		},
		[createInappropriateRegex]
	)

	// Обновление состояния валидности
	useEffect(() => {
		const isValidForm = !Object.values(errors).some(error => error)
		setIsValid(isValidForm)

		if (!isValidForm) {
			if (errors.message && formData.message.length > 1000) {
				setNotice(NOTICES.MESSAGE_TOO_LONG)
			} else if (errors.message) {
				const inappropriateCheck = checkForInappropriateContent(
					formData.message
				)
				if (inappropriateCheck.hasInappropriate) {
					setNotice(NOTICES.INAPPROPRIATE_CONTENT)
				}
			}
		}
	}, [errors, formData.message, checkForInappropriateContent])

	// Сброс формы
	const resetForm = useCallback(() => {
		setFormData({
			name: '',
			phone: '',
			email: '',
			message: '',
			checked: false,
		})
		setErrors({
			name: true,
			phone: true,
			email: true,
			checked: true,
			message: false,
		})
		setNotice(NOTICES.BASE)
	}, [])

	// Обработчик checkbox
	const handleCheckbox = useCallback(
		e => {
			const isChecked = e.target.checked
			setFormData(prev => ({ ...prev, checked: isChecked }))
			setErrors(prev => ({ ...prev, checked: !isChecked }))

			if (!isChecked) {
				setNotice(NOTICES.PERSONAL_DATA)
			} else if (
				errors.name ||
				errors.phone ||
				errors.email ||
				errors.message
			) {
				if (errors.name) {
					if (formData.name === '') {
						setNotice(NOTICES.EMPTY_NAME)
					} else if (formData.name.length > 10) {
						setNotice(NOTICES.NAME_TOO_LONG)
					}
				} else if (errors.phone) {
					if (formData.phone === '') {
						setNotice(NOTICES.EMPTY_PHONE)
					} else {
						setNotice(NOTICES.CORRECT_PHONE)
					}
				} else if (errors.email) {
					if (formData.email === '') {
						setNotice(NOTICES.EMPTY_EMAIL)
					} else {
						setNotice(NOTICES.CORRECT_EMAIL)
					}
				} else if (errors.message) {
					if (formData.message.length > 1000) {
						setNotice(NOTICES.MESSAGE_TOO_LONG)
					} else {
						setNotice(NOTICES.INAPPROPRIATE_CONTENT)
					}
				}
			} else {
				setNotice(NOTICES.BASE)
			}
		},
		[errors, formData]
	)

	// Обработчик имени
	const handleName = useCallback(
		e => {
			const value = e.target.value
			let newValue = value
			let newError = true

			if (value.length > 10) {
				newValue = value.substring(0, 10)
				setNotice(NOTICES.NAME_TOO_LONG)
			} else {
				newError = value === ''
				if (newError) {
					setNotice(NOTICES.EMPTY_NAME)
				} else {
					setNotice(formData.checked ? NOTICES.BASE : NOTICES.PERSONAL_DATA)
				}
			}

			setFormData(prev => ({ ...prev, name: newValue }))
			setErrors(prev => ({ ...prev, name: newError }))
		},
		[formData.checked]
	)

	// Обработчик телефона
	const handlePhone = useCallback(
		e => {
			const value = e.target.value
			const cleanedValue = value.replace(/[^\d()+-\s]/g, '')

			if (value !== cleanedValue) {
				e.target.value = cleanedValue
			}

			let newError = true

			if (cleanedValue === '') {
				setNotice(NOTICES.EMPTY_PHONE)
			} else if (!VALIDATION_PATTERNS.PHONE.test(cleanedValue)) {
				setNotice(NOTICES.CORRECT_PHONE)
				if (cleanedValue.length >= 12) {
					setFormData(prev => ({ ...prev, phone: '' }))
					return
				}
			} else {
				newError = false
				setNotice(formData.checked ? NOTICES.BASE : NOTICES.PERSONAL_DATA)
			}

			setFormData(prev => ({ ...prev, phone: cleanedValue }))
			setErrors(prev => ({ ...prev, phone: newError }))
		},
		[formData.checked]
	)

	// Обработчик email
	const handleEmail = useCallback(
		e => {
			const value = e.target.value
			let newError = true

			if (value === '') {
				setNotice(NOTICES.EMPTY_EMAIL)
			} else if (!VALIDATION_PATTERNS.EMAIL.test(value)) {
				setNotice(NOTICES.CORRECT_EMAIL)
				if (value.length >= 50) {
					setFormData(prev => ({ ...prev, email: '' }))
					return
				}
			} else {
				newError = false
				setNotice(formData.checked ? NOTICES.BASE : NOTICES.PERSONAL_DATA)
			}

			setFormData(prev => ({ ...prev, email: value }))
			setErrors(prev => ({ ...prev, email: newError }))
		},
		[formData.checked]
	)

	// Обработчик сообщения
	const handleMessage = useCallback(
		e => {
			const value = e.target.value
			let newError = false
			let processedValue = value

			if (value === '') {
				newError = false
			} else if (value.length > 1000) {
				newError = true
				setNotice(NOTICES.MESSAGE_TOO_LONG)
			} else {
				const inappropriateCheck = checkForInappropriateContent(value)
				if (inappropriateCheck.hasInappropriate) {
					newError = true
					setNotice(NOTICES.INAPPROPRIATE_CONTENT)
					processedValue = inappropriateCheck.cleanText
				} else {
					newError = false
				}
			}

			setFormData(prev => ({ ...prev, message: processedValue }))
			setErrors(prev => ({ ...prev, message: newError }))
		},
		[checkForInappropriateContent, formData.checked]
	)

	// Обработчик отправки формы
	const handleSubmit = useCallback(
		async e => {
			if (e?.preventDefault) {
				e.preventDefault()
			}

			const inappropriateCheck = checkForInappropriateContent(formData.message)
			if (inappropriateCheck.hasInappropriate) {
				setNotice(NOTICES.INAPPROPRIATE_CONTENT)
				setFormData(prev => ({
					...prev,
					message: inappropriateCheck.cleanText,
				}))
				setErrors(prev => ({ ...prev, message: true }))
				return
			}

			const text = `Запрос из футера\nИмя: ${formData.name}\nТелефон: ${
				formData.phone
			}\nEmail: ${formData.email}\nСообщение: ${
				inappropriateCheck.cleanText
			}\nform_id: form-footer\nuser_id: ${Math.random()}`

			alert(text)
			resetForm()
		},
		[formData, checkForInappropriateContent, resetForm]
	)

	return {
		formData,
		errors,
		notice,
		isValid,
		handleCheckbox,
		handleName,
		handlePhone,
		handleEmail,
		handleMessage,
		handleSubmit,
		resetForm,
	}
}
