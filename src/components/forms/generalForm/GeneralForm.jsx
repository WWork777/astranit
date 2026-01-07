//
// 'use client'

// import IMask from 'imask'
// import Link from 'next/link'
// import { useEffect, useRef, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { v4 as uuidv4 } from 'uuid'
// import styles from './GeneralForm.module.scss'

// const GeneralForm = ({
// 	formId = '',
// 	customData = {},
// 	totalPrice = '',
// 	totalEconomPrice = '',
// 	totalLitePrice = '',
// 	totalStandartPrice = '',
// 	totalComfortPrice = '',
// 	closeModal,
// }) => {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors, isSubmitting },
// 		reset,
// 		setValue,
// 		trigger,
// 		getValues,
// 	} = useForm({
// 		mode: 'onChange',
// 	})

// 	const [isLoading, setIsLoading] = useState(false)
// 	const [formSubmitted, setFormSubmitted] = useState(false)
// 	const timestamp = new Date().toLocaleString('ru-RU')
// 	const userId = uuidv4()

// 	// Refs для input элементов
// 	const phoneInputRef = useRef(null)
// 	const emailInputRef = useRef(null)

// 	// Refs для объектов масок
// 	const phoneMaskRef = useRef(null)
// 	const emailMaskRef = useRef(null)

// 	// Инициализация масок после монтирования компонента
// 	useEffect(() => {
// 		// 1. МАСКА ДЛЯ ТЕЛЕФОНА: +7 (___) ___-__-__
// 		if (phoneInputRef.current) {
// 			phoneMaskRef.current = IMask(phoneInputRef.current, {
// 				mask: '+{7} (000) 000-00-00',
// 				lazy: true,
// 				placeholderChar: '_',
// 			})

// 			phoneInputRef.current.placeholder = 'Контактный телефон'

// 			phoneMaskRef.current.on('accept', () => {
// 				const cleanPhone = phoneMaskRef.current.unmaskedValue
// 				setValue('phone', cleanPhone, { shouldValidate: true })
// 				trigger('phone')
// 			})

// 			phoneInputRef.current.addEventListener('focus', () => {
// 				if (!phoneInputRef.current.value) {
// 					phoneInputRef.current.placeholder = '+7 (___) ___-__-__'
// 				}
// 			})

// 			phoneInputRef.current.addEventListener('blur', () => {
// 				if (!phoneInputRef.current.value) {
// 					phoneInputRef.current.placeholder = 'Контактный телефон'
// 				}
// 			})
// 		}

// 		// 2. МАСКА ДЛЯ EMAIL: _@_._
// 		if (emailInputRef.current) {
// 			emailMaskRef.current = IMask(emailInputRef.current, {
// 				mask: function (value) {
// 					if (!value || value.length === 0) {
// 						return '_@_._'
// 					}

// 					const atIndex = value.indexOf('@')
// 					const dotIndex = value.lastIndexOf('.')

// 					if (atIndex === -1) {
// 						return value + '_@_._'
// 					}

// 					if (dotIndex === -1 || dotIndex < atIndex) {
// 						return value + '_._'
// 					}

// 					return value
// 				},
// 				lazy: false,
// 				placeholderChar: '_',
// 				prepare: function (str) {
// 					return str.toLowerCase()
// 				},
// 			})

// 			emailInputRef.current.placeholder = 'Email'

// 			emailMaskRef.current.on('accept', () => {
// 				const emailValue = emailMaskRef.current.value
// 				setValue('email', emailValue, { shouldValidate: true })
// 				trigger('email')
// 			})

// 			emailInputRef.current.addEventListener('focus', () => {
// 				if (!emailInputRef.current.value) {
// 					emailInputRef.current.placeholder = '_@_._'
// 				}
// 			})

// 			emailInputRef.current.addEventListener('blur', () => {
// 				if (!emailInputRef.current.value) {
// 					emailInputRef.current.placeholder = 'Email'
// 				}
// 			})
// 		}

// 		return () => {
// 			phoneMaskRef.current?.destroy()
// 			emailMaskRef.current?.destroy()
// 		}
// 	}, [setValue, trigger])

// 	const validateForm = () => {
// 		const name = getValues('name')
// 		const phone = getValues('phone')
// 		const email = getValues('email')
// 		const message = getValues('message')
// 		const privacyPolicy = getValues('privacyPolicy')

// 		let isValid = true

// 		// Проверка имени
// 		if (!name || name.trim().length < 2 || name.trim().length > 50) {
// 			isValid = false
// 		}

// 		// Проверка телефона
// 		if (!phone || phone.length !== 11) {
// 			isValid = false
// 		}

// 		// Проверка email
// 		const emailRegex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i
// 		if (!email || !emailRegex.test(email)) {
// 			isValid = false
// 		}

// 		// Проверка сообщения
// 		if (message && message.length > 500) {
// 			isValid = false
// 		}

// 		// Проверка чекбокса
// 		if (!privacyPolicy) {
// 			isValid = false
// 		}

// 		return isValid
// 	}

// 	const onSubmit = async data => {
// 		// Сначала валидируем форму
// 		const isValid = validateForm()
// 		setFormSubmitted(true)

// 		if (!isValid) {
// 			// Триггерим валидацию всех полей чтобы показать ошибки
// 			await trigger(['name', 'phone', 'email', 'message', 'privacyPolicy'])
// 			return
// 		}

// 		setIsLoading(true)
// 		const orderData = {}
// 		Object.entries(customData).map(([key, value]) => (orderData[key] = value))
// 		const {
// 			'Тип тарифа': tariff,
// 			'Количество компьютеров': computer,
// 			'Количество серверов': server,
// 			'Количество офисов': office,
// 		} = orderData

// 		const rawPhone = data.phone
// 		let formattedPhone = ''
// 		if (rawPhone && rawPhone.length >= 10) {
// 			if (rawPhone.length === 10) {
// 				formattedPhone = `+7 (${rawPhone.substring(0, 3)}) ${rawPhone.substring(
// 					3,
// 					6
// 				)}-${rawPhone.substring(6, 8)}-${rawPhone.substring(8, 10)}`
// 			} else if (rawPhone.length === 11) {
// 				const digits = rawPhone.substring(rawPhone.length - 10)
// 				formattedPhone = `+7 (${digits.substring(0, 3)}) ${digits.substring(
// 					3,
// 					6
// 				)}-${digits.substring(6, 8)}-${digits.substring(8, 10)}`
// 			}
// 		}

// 		const submitData = {
// 			name: data.name,
// 			phone: formattedPhone,
// 			email: data.email,
// 			message: data.message || 'сообщение не оставлено',
// 			computer,
// 			server,
// 			office,
// 			tariff,
// 			totalPrice,
// 			totalEconomPrice,
// 			totalLitePrice,
// 			totalStandartPrice,
// 			totalComfortPrice,
// 			formId,
// 			userId,
// 			timestamp,
// 		}

// 		try {
// 			const response = await fetch('/api/submit-form', {
// 				method: 'POST',
// 				headers: { 'Content-Type': 'application/json' },
// 				body: JSON.stringify(submitData),
// 			})

// 			const result = await response.json()

// 			if (!response.ok) {
// 				throw new Error(result.error || 'Ошибка отправки')
// 			}

// 			alert(
// 				'✅ Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.'
// 			)

// 			if (closeModal) {
// 				closeModal()
// 			} else {
// 				reset()
// 				setFormSubmitted(false)
// 				if (phoneMaskRef.current) {
// 					phoneMaskRef.current.value = ''
// 					phoneMaskRef.current.updateValue()
// 					phoneInputRef.current.placeholder = 'Контактный телефон'
// 				}
// 				if (emailMaskRef.current) {
// 					emailMaskRef.current.value = ''
// 					emailMaskRef.current.updateValue()
// 					emailInputRef.current.placeholder = 'Email'
// 				}
// 			}
// 		} catch (error) {
// 			alert(`❌ Ошибка отправки: ${error.message}`)
// 			reset()
// 			setFormSubmitted(false)
// 		} finally {
// 			setIsLoading(false)
// 		}
// 	}

// 	// Функция для проверки, показывать ли ошибку
// 	const shouldShowError = fieldName => {
// 		// Показываем ошибку только после отправки формы или если поле было изменено и есть ошибка
// 		return errors[fieldName] && (formSubmitted || getValues(fieldName))
// 	}

// 	return (
// 		<div className={styles.AuditForm}>
// 			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
// 				{/* Поле Имя */}
// 				<div className={styles.formGroup}>
// 					<label htmlFor='name' className={styles.label}>
// 						Имя *
// 					</label>
// 					<input
// 						id='name'
// 						type='text'
// 						className={`${styles.input} ${
// 							shouldShowError('name') ? styles.error : ''
// 						}`}
// 						{...register('name', {
// 							required: true,
// 							minLength: 2,
// 							maxLength: 50,
// 						})}
// 						placeholder='Как к вам обращаться?'
// 					/>
// 				</div>

// 				{/* Поле Телефон с маской */}
// 				<div className={styles.formGroup}>
// 					<label htmlFor='phone' className={styles.label}>
// 						Телефон *
// 					</label>
// 					<input
// 						ref={phoneInputRef}
// 						id='phone'
// 						type='tel'
// 						className={`${styles.input} ${
// 							shouldShowError('phone') ? styles.error : ''
// 						}`}
// 					/>
// 					<input
// 						type='hidden'
// 						{...register('phone', {
// 							required: true,
// 							validate: value => value && value.length === 11,
// 						})}
// 					/>
// 				</div>

// 				{/* Поле Email с маской */}
// 				<div className={styles.formGroup}>
// 					<label htmlFor='email' className={styles.label}>
// 						Email *
// 					</label>
// 					<input
// 						ref={emailInputRef}
// 						id='email'
// 						type='email'
// 						className={`${styles.input} ${
// 							shouldShowError('email') ? styles.error : ''
// 						}`}
// 					/>
// 					<input
// 						type='hidden'
// 						{...register('email', {
// 							required: true,
// 							pattern: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
// 						})}
// 					/>
// 				</div>

// 				{/* Поле Сообщение */}
// 				<div className={styles.formGroup}>
// 					<label htmlFor='message' className={styles.label}>
// 						Сообщение
// 					</label>
// 					<textarea
// 						id='message'
// 						className={`${styles.textarea} ${
// 							shouldShowError('message') ? styles.error : ''
// 						}`}
// 						{...register('message', {
// 							maxLength: 500,
// 						})}
// 						placeholder={
// 							'Ваша задача или вопрос.\nИли не пишите ничего, обсудим в живом разговоре :)'
// 						}
// 						rows={5}
// 					/>
// 				</div>

// 				{/* Чекбокс согласия */}
// 				<div className={styles.formGroup}>
// 					<div className={styles.checkboxContainer}>
// 						<input
// 							id='privacyPolicy'
// 							type='checkbox'
// 							className={`${styles.checkbox} ${
// 								shouldShowError('privacyPolicy') ? styles.errorCheckbox : ''
// 							}`}
// 							{...register('privacyPolicy', {
// 								required: true,
// 							})}
// 						/>
// 						<label htmlFor='privacyPolicy' className={styles.checkboxLabel}>
// 							Я согласен на{' '}
// 							<Link
// 								onClick={closeModal}
// 								className={styles.personalDataLink}
// 								href={'/personal'}
// 							>
// 								обработку персональных данных
// 							</Link>{' '}
// 							*
// 						</label>
// 					</div>
// 				</div>

// 				{/* Кнопка отправки - всегда активна */}
// 				<div className={styles.formGroup}>
// 					<button
// 						type='submit'
// 						className={styles.submitButton}
// 						disabled={isLoading}
// 					>
// 						{isLoading ? 'Отправка...' : 'Отправить'}
// 					</button>
// 				</div>
// 			</form>
// 		</div>
// 	)
// }

// export default GeneralForm
//////////////////////////////////////////////////
// 'use client'

// import IMask from 'imask'
// import Link from 'next/link'
// import { useEffect, useRef, useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { v4 as uuidv4 } from 'uuid'
// import styles from './GeneralForm.module.scss'

// const GeneralForm = ({
// 	formId = '',
// 	customData = {},
// 	totalPrice = '',
// 	totalEconomPrice = '',
// 	totalLitePrice = '',
// 	totalStandartPrice = '',
// 	totalComfortPrice = '',
// 	closeModal,
// }) => {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors, touchedFields },
// 		reset,
// 		setValue,
// 		trigger,
// 		getValues,
// 		watch,
// 	} = useForm({
// 		mode: 'onChange',
// 	})

// 	const [isLoading, setIsLoading] = useState(false)
// 	const [submitAttempted, setSubmitAttempted] = useState(false)
// 	const timestamp = new Date().toLocaleString('ru-RU')
// 	const userId = uuidv4()

// 	// Следим за значениями полей для валидации при изменении
// 	const watchAllFields = watch()

// 	// Refs для input элементов
// 	const phoneInputRef = useRef(null)
// 	const emailInputRef = useRef(null)

// 	// Refs для объектов масок
// 	const phoneMaskRef = useRef(null)
// 	const emailMaskRef = useRef(null)

// 	// Функция для проверки, нужно ли показывать ошибку для поля
// 	const shouldShowError = fieldName => {
// 		// Показываем ошибку если:
// 		// 1. Была попытка отправки ИЛИ
// 		// 2. Поле было изменено (тронуто) пользователем ИЛИ
// 		// 3. Поле содержит значение (пользователь что-то ввел)
// 		const fieldValue = getValues(fieldName)
// 		return (
// 			submitAttempted ||
// 			touchedFields[fieldName] ||
// 			(fieldValue && fieldValue.length > 0)
// 		)
// 	}

// 	// Валидация при изменении полей
// 	useEffect(() => {
// 		// Валидируем все поля при изменении любого из них
// 		const timer = setTimeout(() => {
// 			trigger()
// 		}, 300) // Небольшая задержка для производительности

// 		return () => clearTimeout(timer)
// 	}, [watchAllFields, trigger])

// 	// Инициализация масок после монтирования компонента
// 	useEffect(() => {
// 		// 1. МАСКА ДЛЯ ТЕЛЕФОНА: +7 (___) ___-__-__
// 		if (phoneInputRef.current) {
// 			phoneMaskRef.current = IMask(phoneInputRef.current, {
// 				mask: '+{7} (000) 000-00-00',
// 				lazy: true,
// 				placeholderChar: '_',
// 			})

// 			phoneInputRef.current.placeholder = 'Контактный телефон'

// 			phoneMaskRef.current.on('accept', () => {
// 				const cleanPhone = phoneMaskRef.current.unmaskedValue
// 				setValue('phone', cleanPhone, {
// 					shouldValidate: true,
// 					shouldTouch: true,
// 				})
// 				trigger('phone')
// 			})

// 			phoneInputRef.current.addEventListener('focus', () => {
// 				if (!phoneInputRef.current.value) {
// 					phoneInputRef.current.placeholder = '+7 (___) ___-__-__'
// 				}
// 			})

// 			phoneInputRef.current.addEventListener('blur', () => {
// 				if (!phoneInputRef.current.value) {
// 					phoneInputRef.current.placeholder = 'Контактный телефон'
// 				}
// 				// Валидируем при потере фокуса
// 				trigger('phone')
// 			})
// 		}

// 		// 2. МАСКА ДЛЯ EMAIL: _@_._
// 		if (emailInputRef.current) {
// 			emailMaskRef.current = IMask(emailInputRef.current, {
// 				mask: function (value) {
// 					if (!value || value.length === 0) {
// 						return '_@_._'
// 					}

// 					const atIndex = value.indexOf('@')
// 					const dotIndex = value.lastIndexOf('.')

// 					if (atIndex === -1) {
// 						return value + '_@_._'
// 					}

// 					if (dotIndex === -1 || dotIndex < atIndex) {
// 						return value + '_._'
// 					}

// 					return value
// 				},
// 				lazy: false,
// 				placeholderChar: '_',
// 				prepare: function (str) {
// 					return str.toLowerCase()
// 				},
// 			})

// 			emailInputRef.current.placeholder = 'Email'

// 			emailMaskRef.current.on('accept', () => {
// 				const emailValue = emailMaskRef.current.value
// 				setValue('email', emailValue, {
// 					shouldValidate: true,
// 					shouldTouch: true,
// 				})
// 				trigger('email')
// 			})

// 			emailInputRef.current.addEventListener('focus', () => {
// 				if (!emailInputRef.current.value) {
// 					emailInputRef.current.placeholder = '_@_._'
// 				}
// 			})

// 			emailInputRef.current.addEventListener('blur', () => {
// 				if (!emailInputRef.current.value) {
// 					emailInputRef.current.placeholder = 'Email'
// 				}
// 				// Валидируем при потере фокуса
// 				trigger('email')
// 			})
// 		}

// 		return () => {
// 			phoneMaskRef.current?.destroy()
// 			emailMaskRef.current?.destroy()
// 		}
// 	}, [])

// 	const validateAndSubmit = async () => {
// 		setSubmitAttempted(true)

// 		// Валидируем все поля
// 		const nameValid = await trigger('name')
// 		const phoneValid = await trigger('phone')
// 		const emailValid = await trigger('email')
// 		const privacyValid = await trigger('privacyPolicy')
// 		const messageValid = await trigger('message')

// 		if (nameValid && phoneValid && emailValid && privacyValid && messageValid) {
// 			// Если все поля валидны, вызываем обработчик отправки
// 			const values = getValues()
// 			await onSubmit(values)
// 		} else {
// 			// Прокручиваем к первой ошибке
// 			const errorElements = document.querySelectorAll(`.${styles.error}`)
// 			if (errorElements.length > 0) {
// 				errorElements[0].scrollIntoView({
// 					behavior: 'smooth',
// 					block: 'center',
// 				})
// 			}
// 		}
// 	}

// 	const onSubmit = async data => {
// 		setIsLoading(true)
// 		const orderData = {}
// 		Object.entries(customData).map(([key, value]) => (orderData[key] = value))
// 		const {
// 			'Тип тарифа': tariff,
// 			'Количество компьютеров': computer,
// 			'Количество серверов': server,
// 			'Количество офисов': office,
// 		} = orderData

// 		const rawPhone = data.phone
// 		let formattedPhone = ''
// 		if (rawPhone && rawPhone.length >= 10) {
// 			if (rawPhone.length === 10) {
// 				formattedPhone = `+7 (${rawPhone.substring(0, 3)}) ${rawPhone.substring(
// 					3,
// 					6
// 				)}-${rawPhone.substring(6, 8)}-${rawPhone.substring(8, 10)}`
// 			} else if (rawPhone.length === 11) {
// 				const digits = rawPhone.substring(rawPhone.length - 10)
// 				formattedPhone = `+7 (${digits.substring(0, 3)}) ${digits.substring(
// 					3,
// 					6
// 				)}-${digits.substring(6, 8)}-${digits.substring(8, 10)}`
// 			}
// 		}

// 		const submitData = {
// 			name: data.name,
// 			phone: formattedPhone,
// 			email: data.email,
// 			message: data.message || 'сообщение не оставлено',
// 			computer,
// 			server,
// 			office,
// 			tariff,
// 			totalPrice,
// 			totalEconomPrice,
// 			totalLitePrice,
// 			totalStandartPrice,
// 			totalComfortPrice,
// 			formId,
// 			userId,
// 			timestamp,
// 		}

// 		try {
// 			const response = await fetch('/api/submit-form', {
// 				method: 'POST',
// 				headers: { 'Content-Type': 'application/json' },
// 				body: JSON.stringify(submitData),
// 			})

// 			const result = await response.json()

// 			if (!response.ok) {
// 				throw new Error(result.error || 'Ошибка отправки')
// 			}

// 			alert(
// 				'✅ Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.'
// 			)

// 			if (closeModal) {
// 				closeModal()
// 			} else {
// 				reset()
// 				setSubmitAttempted(false)
// 				if (phoneMaskRef.current) {
// 					phoneMaskRef.current.value = ''
// 					phoneMaskRef.current.updateValue()
// 					phoneInputRef.current.placeholder = 'Контактный телефон'
// 				}
// 				if (emailMaskRef.current) {
// 					emailMaskRef.current.value = ''
// 					emailMaskRef.current.updateValue()
// 					emailInputRef.current.placeholder = 'Email'
// 				}
// 			}
// 		} catch (error) {
// 			alert(`❌ Ошибка отправки: ${error.message}`)
// 			reset()
// 			setSubmitAttempted(false)
// 		} finally {
// 			setIsLoading(false)
// 		}
// 	}

// 	// Обработчик нажатия Enter в любом поле формы
// 	const handleKeyPress = e => {
// 		if (e.key === 'Enter' && !e.shiftKey) {
// 			e.preventDefault()
// 			validateAndSubmit()
// 		}
// 	}

// 	// Обработчики изменения полей
// 	const handleFieldChange = fieldName => e => {
// 		// Триггерим валидацию для конкретного поля
// 		trigger(fieldName)
// 	}

// 	return (
// 		<div className={styles.AuditForm}>
// 			<form
// 				onSubmit={e => e.preventDefault()}
// 				className={styles.form}
// 				onKeyPress={handleKeyPress}
// 			>
// 				{/* Поле Имя */}
// 				<div className={styles.formGroup}>
// 					<label htmlFor='name' className={styles.label}>
// 						Имя *
// 					</label>
// 					<input
// 						id='name'
// 						type='text'
// 						className={`${styles.input} ${
// 							shouldShowError('name') && errors.name ? styles.error : ''
// 						}`}
// 						{...register('name', {
// 							required: 'Имя обязательно для заполнения',
// 							minLength: {
// 								value: 2,
// 								message: 'Имя должно содержать минимум 2 символа',
// 							},
// 							maxLength: {
// 								value: 50,
// 								message: 'Имя не должно превышать 50 символов',
// 							},
// 						})}
// 						placeholder='Как к вам обращаться?'
// 						onChange={e => {
// 							// Обновляем значение через react-hook-form
// 							setValue('name', e.target.value, { shouldValidate: true })
// 						}}
// 						onBlur={() => trigger('name')}
// 					/>
// 					{shouldShowError('name') && errors.name && (
// 						<span className={styles.errorMessage}>{errors.name.message}</span>
// 					)}
// 				</div>

// 				{/* Поле Телефон с маской */}
// 				<div className={styles.formGroup}>
// 					<label htmlFor='phone' className={styles.label}>
// 						Телефон *
// 					</label>
// 					<input
// 						ref={phoneInputRef}
// 						id='phone'
// 						type='tel'
// 						className={`${styles.input} ${
// 							shouldShowError('phone') && errors.phone ? styles.error : ''
// 						}`}
// 					/>
// 					<input
// 						type='hidden'
// 						{...register('phone', {
// 							required: 'Телефон обязателен для заполнения',
// 							validate: value => {
// 								return (
// 									(value && value.length === 11) ||
// 									'Введите корректный номер телефона (11 цифр)'
// 								)
// 							},
// 						})}
// 					/>
// 					{shouldShowError('phone') && errors.phone && (
// 						<span className={styles.errorMessage}>{errors.phone.message}</span>
// 					)}
// 				</div>

// 				{/* Поле Email с маской */}
// 				<div className={styles.formGroup}>
// 					<label htmlFor='email' className={styles.label}>
// 						Email *
// 					</label>
// 					<input
// 						ref={emailInputRef}
// 						id='email'
// 						type='email'
// 						className={`${styles.input} ${
// 							shouldShowError('email') && errors.email ? styles.error : ''
// 						}`}
// 					/>
// 					<input
// 						type='hidden'
// 						{...register('email', {
// 							required: 'Email обязателен для заполнения',
// 							pattern: {
// 								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
// 								message: 'Введите корректный email адрес',
// 							},
// 						})}
// 					/>
// 					{shouldShowError('email') && errors.email && (
// 						<span className={styles.errorMessage}>{errors.email.message}</span>
// 					)}
// 				</div>

// 				{/* Поле Сообщение */}
// 				<div className={styles.formGroup}>
// 					<label htmlFor='message' className={styles.label}>
// 						Сообщение
// 					</label>
// 					<textarea
// 						id='message'
// 						className={`${styles.textarea} ${
// 							shouldShowError('message') && errors.message ? styles.error : ''
// 						}`}
// 						{...register('message', {
// 							maxLength: {
// 								value: 500,
// 								message: 'Сообщение не должно превышать 500 символов',
// 							},
// 						})}
// 						placeholder={
// 							'Ваша задача или вопрос.\nИли не пишите ничего, обсудим в живом разговоре :)'
// 						}
// 						rows={5}
// 						onChange={e => {
// 							setValue('message', e.target.value, { shouldValidate: true })
// 						}}
// 						onBlur={() => trigger('message')}
// 					/>
// 					{shouldShowError('message') && errors.message && (
// 						<span className={styles.errorMessage}>
// 							{errors.message.message}
// 						</span>
// 					)}
// 				</div>

// 				{/* Чекбокс согласия */}
// 				<div className={styles.formGroup}>
// 					<div className={styles.checkboxContainer}>
// 						<input
// 							id='privacyPolicy'
// 							type='checkbox'
// 							className={`${styles.checkbox} ${
// 								shouldShowError('privacyPolicy') && errors.privacyPolicy
// 									? styles.errorCheckbox
// 									: ''
// 							}`}
// 							{...register('privacyPolicy', {
// 								required:
// 									'Необходимо согласие на обработку персональных данных',
// 							})}
// 							onChange={e => {
// 								setValue('privacyPolicy', e.target.checked, {
// 									shouldValidate: true,
// 								})
// 							}}
// 						/>
// 						<label htmlFor='privacyPolicy' className={styles.checkboxLabel}>
// 							Я согласен на{' '}
// 							<Link
// 								onClick={closeModal}
// 								className={styles.personalDataLink}
// 								href={'/personal'}
// 							>
// 								обработку персональных данных
// 							</Link>{' '}
// 							*
// 						</label>
// 					</div>
// 					{shouldShowError('privacyPolicy') && errors.privacyPolicy && (
// 						<span className={styles.errorMessage}>
// 							{errors.privacyPolicy.message}
// 						</span>
// 					)}
// 				</div>

// 				{/* Кнопка отправки - теперь всегда активна */}
// 				<div className={styles.formGroup}>
// 					<button
// 						type='button'
// 						onClick={validateAndSubmit}
// 						className={styles.submitButton}
// 						disabled={isLoading}
// 					>
// 						{isLoading ? 'Отправка...' : 'Отправить'}
// 					</button>
// 				</div>
// 			</form>
// 		</div>
// 	)
// }

// export default GeneralForm
//////////////////////////////////////////////////

'use client'

import IMask from 'imask'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import styles from './GeneralForm.module.scss'

const GeneralForm = ({
	formId = '',
	customData = {},
	totalPrice = '',
	totalEconomPrice = '',
	totalLitePrice = '',
	totalStandartPrice = '',
	totalComfortPrice = '',
	closeModal,
}) => {
	const {
		register,
		handleSubmit,
		formState: { errors, touchedFields },
		reset,
		setValue,
		trigger,
		getValues,
		watch,
	} = useForm({
		mode: 'onChange',
	})

	const [isLoading, setIsLoading] = useState(false)
	const [submitAttempted, setSubmitAttempted] = useState(false)
	const timestamp = new Date().toLocaleString('ru-RU')
	const userId = uuidv4()

	// Следим за значениями полей для валидации при изменении
	const watchAllFields = watch()

	// Refs для input элементов
	const phoneInputRef = useRef(null)
	const emailInputRef = useRef(null)

	// Refs для объектов масок
	const phoneMaskRef = useRef(null)
	const emailMaskRef = useRef(null)

	// Функция для проверки, нужно ли показывать ошибку для поля
	const shouldShowError = fieldName => {
		// Показываем ошибку если:
		// 1. Была попытка отправки ИЛИ
		// 2. Поле было изменено (тронуто) пользователем ИЛИ
		// 3. Поле содержит значение (пользователь что-то ввел)
		const fieldValue = getValues(fieldName)
		return (
			submitAttempted ||
			touchedFields[fieldName] ||
			(fieldValue && fieldValue.length > 0)
		)
	}

	// Валидация при изменении полей
	useEffect(() => {
		// Валидируем все поля при изменении любого из них
		const timer = setTimeout(() => {
			trigger()
		}, 300) // Небольшая задержка для производительности

		return () => clearTimeout(timer)
	}, [watchAllFields, trigger])

	// Инициализация масок после монтирования компонента
	useEffect(() => {
		// 1. МАСКА ДЛЯ ТЕЛЕФОНА: +7 (___) ___-__-__
		if (phoneInputRef.current) {
			phoneMaskRef.current = IMask(phoneInputRef.current, {
				mask: '+{7} (000) 000-00-00',
				lazy: true,
				placeholderChar: '_',
			})

			phoneInputRef.current.placeholder = 'Контактный телефон'

			phoneMaskRef.current.on('accept', () => {
				const cleanPhone = phoneMaskRef.current.unmaskedValue
				setValue('phone', cleanPhone, {
					shouldValidate: true,
					shouldTouch: true,
				})
				trigger('phone')
			})

			phoneInputRef.current.addEventListener('focus', () => {
				if (!phoneInputRef.current.value) {
					phoneInputRef.current.placeholder = '+7 (___) ___-__-__'
				}
			})

			phoneInputRef.current.addEventListener('blur', () => {
				if (!phoneInputRef.current.value) {
					phoneInputRef.current.placeholder = 'Контактный телефон'
				}
				// Валидируем при потере фокуса
				trigger('phone')
			})
		}

		// 2. МАСКА ДЛЯ EMAIL: _@_._
		if (emailInputRef.current) {
			emailMaskRef.current = IMask(emailInputRef.current, {
				mask: function (value) {
					if (!value || value.length === 0) {
						return '_@_._'
					}

					const atIndex = value.indexOf('@')
					const dotIndex = value.lastIndexOf('.')

					if (atIndex === -1) {
						return value + '_@_._'
					}

					if (dotIndex === -1 || dotIndex < atIndex) {
						return value + '_._'
					}

					return value
				},
				lazy: false,
				placeholderChar: '_',
				prepare: function (str) {
					return str.toLowerCase()
				},
			})

			emailInputRef.current.placeholder = 'Email'

			emailMaskRef.current.on('accept', () => {
				const emailValue = emailMaskRef.current.value
				setValue('email', emailValue, {
					shouldValidate: true,
					shouldTouch: true,
				})
				trigger('email')
			})

			emailInputRef.current.addEventListener('focus', () => {
				if (!emailInputRef.current.value) {
					emailInputRef.current.placeholder = '_@_._'
				}
			})

			emailInputRef.current.addEventListener('blur', () => {
				if (!emailInputRef.current.value) {
					emailInputRef.current.placeholder = 'Email'
				}
				// Валидируем при потере фокуса
				trigger('email')
			})
		}

		return () => {
			phoneMaskRef.current?.destroy()
			emailMaskRef.current?.destroy()
		}
	}, [])

	const validateAndSubmit = async () => {
		setSubmitAttempted(true)

		// Валидируем все поля
		const nameValid = await trigger('name')
		const phoneValid = await trigger('phone')
		const emailValid = await trigger('email')
		const privacyValid = await trigger('privacyPolicy')
		const messageValid = await trigger('message')

		if (nameValid && phoneValid && emailValid && privacyValid && messageValid) {
			// Если все поля валидны, вызываем обработчик отправки
			const values = getValues()
			await onSubmit(values)
		} else {
			// Прокручиваем к первой ошибке
			const errorElements = document.querySelectorAll(`.${styles.error}`)
			if (errorElements.length > 0) {
				errorElements[0].scrollIntoView({
					behavior: 'smooth',
					block: 'center',
				})
			}
		}
	}

	const onSubmit = async data => {
		setIsLoading(true)
		const orderData = {}
		Object.entries(customData).map(([key, value]) => (orderData[key] = value))
		const {
			'Тип тарифа': tariff,
			'Количество компьютеров': computer,
			'Количество серверов': server,
			'Количество офисов': office,
		} = orderData

		const rawPhone = data.phone
		let formattedPhone = ''
		if (rawPhone && rawPhone.length >= 10) {
			if (rawPhone.length === 10) {
				formattedPhone = `+7 (${rawPhone.substring(0, 3)}) ${rawPhone.substring(
					3,
					6
				)}-${rawPhone.substring(6, 8)}-${rawPhone.substring(8, 10)}`
			} else if (rawPhone.length === 11) {
				const digits = rawPhone.substring(rawPhone.length - 10)
				formattedPhone = `+7 (${digits.substring(0, 3)}) ${digits.substring(
					3,
					6
				)}-${digits.substring(6, 8)}-${digits.substring(8, 10)}`
			}
		}

		const submitData = {
			name: data.name,
			phone: formattedPhone,
			email: data.email,
			message: data.message || 'сообщение не оставлено',
			computer,
			server,
			office,
			tariff,
			totalPrice,
			totalEconomPrice,
			totalLitePrice,
			totalStandartPrice,
			totalComfortPrice,
			formId,
			userId,
			timestamp,
		}

		try {
			const response = await fetch('/api/submit-form', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify(submitData),
			})

			const result = await response.json()

			if (!response.ok) {
				throw new Error(result.error || 'Ошибка отправки')
			}

			alert(
				'✅ Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.'
			)

			if (closeModal) {
				closeModal()
			} else {
				reset()
				setSubmitAttempted(false)
				if (phoneMaskRef.current) {
					phoneMaskRef.current.value = ''
					phoneMaskRef.current.updateValue()
					phoneInputRef.current.placeholder = 'Контактный телефон'
				}
				if (emailMaskRef.current) {
					emailMaskRef.current.value = ''
					emailMaskRef.current.updateValue()
					emailInputRef.current.placeholder = 'Email'
				}
			}
		} catch (error) {
			alert(`❌ Ошибка отправки: ${error.message}`)
			reset()
			setSubmitAttempted(false)
		} finally {
			setIsLoading(false)
		}
	}

	// Обработчик нажатия Enter в любом поле формы
	const handleKeyPress = e => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault()
			validateAndSubmit()
		}
	}

	return (
		<div className={styles.AuditForm}>
			<form
				onSubmit={e => e.preventDefault()}
				className={styles.form}
				onKeyPress={handleKeyPress}
			>
				{/* Поле Имя */}
				<div className={styles.formGroup}>
					<label htmlFor='name' className={styles.label}>
						Имя *
					</label>
					<input
						id='name'
						type='text'
						className={`${styles.input} ${
							shouldShowError('name') && errors.name ? styles.error : ''
						}`}
						{...register('name', {
							required: 'Имя обязательно для заполнения',
							minLength: {
								value: 2,
								message: 'Имя должно содержать минимум 2 символа',
							},
							maxLength: {
								value: 50,
								message: 'Имя не должно превышать 50 символов',
							},
						})}
						placeholder='Как к вам обращаться?'
						onChange={e => {
							setValue('name', e.target.value, { shouldValidate: true })
						}}
						onBlur={() => trigger('name')}
					/>
				</div>

				{/* Поле Телефон с маской */}
				<div className={styles.formGroup}>
					<label htmlFor='phone' className={styles.label}>
						Телефон *
					</label>
					<input
						ref={phoneInputRef}
						id='phone'
						type='tel'
						className={`${styles.input} ${
							shouldShowError('phone') && errors.phone ? styles.error : ''
						}`}
					/>
					<input
						type='hidden'
						{...register('phone', {
							required: 'Телефон обязателен для заполнения',
							validate: value => {
								return (
									(value && value.length === 11) ||
									'Введите корректный номер телефона (11 цифр)'
								)
							},
						})}
					/>
				</div>

				{/* Поле Email с маской */}
				<div className={styles.formGroup}>
					<label htmlFor='email' className={styles.label}>
						Email *
					</label>
					<input
						ref={emailInputRef}
						id='email'
						type='email'
						className={`${styles.input} ${
							shouldShowError('email') && errors.email ? styles.error : ''
						}`}
					/>
					<input
						type='hidden'
						{...register('email', {
							required: 'Email обязателен для заполнения',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Введите корректный email адрес',
							},
						})}
					/>
				</div>

				{/* Поле Сообщение */}
				<div className={styles.formGroup}>
					<label htmlFor='message' className={styles.label}>
						Сообщение
					</label>
					<textarea
						id='message'
						className={`${styles.textarea} ${
							shouldShowError('message') && errors.message ? styles.error : ''
						}`}
						{...register('message', {
							maxLength: {
								value: 500,
								message: 'Сообщение не должно превышать 500 символов',
							},
						})}
						placeholder={
							'Ваша задача или вопрос.\nИли не пишите ничего, обсудим в живом разговоре :)'
						}
						rows={5}
						onChange={e => {
							setValue('message', e.target.value, { shouldValidate: true })
						}}
						onBlur={() => trigger('message')}
					/>
				</div>

				{/* Чекбокс согласия */}
				<div className={styles.formGroup}>
					<div className={styles.checkboxContainer}>
						<input
							id='privacyPolicy'
							type='checkbox'
							className={`${styles.checkbox} ${
								shouldShowError('privacyPolicy') && errors.privacyPolicy
									? styles.errorCheckbox
									: ''
							}`}
							{...register('privacyPolicy', {
								required:
									'Необходимо согласие на обработку персональных данных',
							})}
							onChange={e => {
								setValue('privacyPolicy', e.target.checked, {
									shouldValidate: true,
								})
							}}
						/>
						<label htmlFor='privacyPolicy' className={styles.checkboxLabel}>
							Я согласен на{' '}
							<Link
								onClick={closeModal}
								className={styles.personalDataLink}
								href={'/personal'}
							>
								обработку персональных данных
							</Link>{' '}
							*
						</label>
					</div>
				</div>

				{/* Кнопка отправки - теперь всегда активна */}
				<div className={styles.formGroup}>
					<button
						type='button'
						onClick={validateAndSubmit}
						className={styles.submitButton}
						disabled={isLoading}
					>
						{isLoading ? 'Отправка...' : 'Отправить'}
					</button>
				</div>
			</form>
		</div>
	)
}

export default GeneralForm
