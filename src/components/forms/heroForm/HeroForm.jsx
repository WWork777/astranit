// import Link from 'next/link'
// import { useState } from 'react'
// import { useForm } from 'react-hook-form'
// import { v4 as uuidv4 } from 'uuid'
// import styles from './HeroForm.module.scss'

// const HeroForm = ({ closeModal }) => {
// 	const {
// 		register,
// 		handleSubmit,
// 		formState: { errors, isSubmitting, isValid },
// 		reset,
// 	} = useForm({
// 		mode: 'onChange',
// 	})

// 	const [isLoading, setIsLoading] = useState(false)
// 	const [status, setStatus] = useState({ type: '', message: '' })
// 	const timestamp = new Date().toLocaleString('ru-RU')
// 	const userId = uuidv4()

// 	const onSubmit = async data => {
// 		setIsLoading(true)
// 		setStatus({ type: '', message: '' })

// 		const submitData = {
// 			name: data.name,
// 			phone: data.phone,
// 			email: '',
// 			message: '',
// 			computer: '',
// 			server: '',
// 			office: '',
// 			tariff: '',
// 			totalPrice: '',
// 			economPrice: '',
// 			litePrice: '',
// 			standartPrice: '',
// 			comfortPrice: '',
// 			formId: 'hero-mobile',
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

// 			// ✅ ПОКАЗЫВАЕМ ALERT ПРИ УСПЕШНОЙ ОТПРАВКЕ
// 			alert(
// 				'✅ Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.'
// 			)

// 			// ✅ ЗАКРЫВАЕМ МОДАЛЬНОЕ ОКНО
// 			if (closeModal) {
// 				closeModal()
// 			} else {
// 				// Альтернатива: просто ресетим форму
// 				reset()
// 			}

// 			// Можно также обновить статус (опционально)
// 			setStatus({
// 				type: 'success',
// 				message: 'Сообщение успешно отправлено!',
// 			})
// 		} catch (error) {
// 			// ❌ ПРИ ОШИБКЕ - alert с ошибкой (но модалку не закрываем)
// 			alert(`❌ Ошибка отправки: ${error.message}`)
// 			reset()
// 			setStatus({
// 				type: 'error',
// 				message: error.message,
// 			})
// 		} finally {
// 			reset()
// 			setIsLoading(false)
// 		}
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
// 						className={`${styles.input} ${errors.name ? styles.error : ''}`}
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
// 						placeholder='Введите ваше имя'
// 					/>
// 					{errors.name && (
// 						<span className={styles.errorMessage}>{errors.name.message}</span>
// 					)}
// 				</div>

// 				{/* Поле Телефон */}
// 				<div className={styles.formGroup}>
// 					<label htmlFor='phone' className={styles.label}>
// 						Телефон *
// 					</label>
// 					<input
// 						id='phone'
// 						type='tel'
// 						className={`${styles.input} ${errors.phone ? styles.error : ''}`}
// 						{...register('phone', {
// 							required: 'Телефон обязателен для заполнения',
// 							pattern: {
// 								value: /^[\+]?[0-9\s\-\(\)]+$/,
// 								message: 'Введите корректный номер телефона',
// 							},
// 							minLength: {
// 								value: 6,
// 								message: 'Телефон должен содержать минимум 6 цифр',
// 							},
// 						})}
// 						placeholder='+71234567890'
// 					/>
// 					{errors.phone && (
// 						<span className={styles.errorMessage}>{errors.phone.message}</span>
// 					)}
// 				</div>

// 				{/* Поле Email */}
// 				{/* <div className={ styles.formGroup}>
// 					<label htmlFor='email' className={styles.label}>
// 						Email *
// 					</label>
// 					<input
// 						id='email'
// 						type='email'
// 						className={`${styles.input} ${errors.email ? styles.error : ''}`}
// 						{...register('email', {
// 							required: 'Email обязателен для заполнения',
// 							pattern: {
// 								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
// 								message: 'Введите корректный email адрес',
// 							},
// 						})}
// 						placeholder='example@mail.com'
// 					/>
// 					{errors.email && (
// 						<span className={styles.errorMessage}>{errors.email.message}</span>
// 					)}
// 				</div> */}

// 				{/* Поле Сообщение (необязательное) */}
// 				{/* <div className={ styles.formGroup}>
// 					<label htmlFor='message' className={styles.label}>
// 						Сообщение
// 					</label>
// 					<textarea
// 						id='message'
// 						className={styles.textarea}
// 						{...register('message', {
// 							maxLength: {
// 								value: 500,
// 								message: 'Сообщение не должно превышать 500 символов',
// 							},
// 						})}
// 						placeholder='Ваше сообщение (необязательно)'
// 						rows={4}
// 					/>
// 					{errors.message && (
// 						<span className={styles.errorMessage}>
// 							{errors.message.message}
// 						</span>
// 					)}
// 				</div> */}

// 				{/* Чекбокс согласия */}
// 				<div className={styles.formGroup}>
// 					<div className={styles.checkboxContainer}>
// 						<input
// 							id='privacyPolicy'
// 							type='checkbox'
// 							className={styles.checkbox}
// 							{...register('privacyPolicy', {
// 								required:
// 									'Необходимо согласие на обработку персональных данных',
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
// 					{errors.privacyPolicy && (
// 						<span className={styles.errorMessage}>
// 							{errors.privacyPolicy.message}
// 						</span>
// 					)}
// 				</div>

// 				{/* Кнопка отправки */}
// 				<div className={styles.formGroup}>
// 					<button
// 						type='submit'
// 						className={styles.submitButton}
// 						disabled={isSubmitting || !isValid}
// 					>
// 						{isSubmitting ? 'Отправка...' : 'Отправить'}
// 					</button>
// 				</div>
// 			</form>
// 		</div>
// 	)
// }

// export default HeroForm

import IMask from 'imask'
import Link from 'next/link'
import { useEffect, useRef, useState } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import styles from './HeroForm.module.scss'

const HeroForm = ({ closeModal }) => {
	const {
		register,
		formState: { errors, touchedFields },
		reset,
		setValue,
		trigger,
		getValues,
	} = useForm({
		mode: 'onChange',
	})

	const [isLoading, setIsLoading] = useState(false)
	const [submitAttempted, setSubmitAttempted] = useState(false)
	const timestamp = new Date().toLocaleString('ru-RU')
	const userId = uuidv4()

	// Refs для input элементов
	const phoneInputRef = useRef(null)

	// Refs для объектов масок
	const phoneMaskRef = useRef(null)

	// Функция для проверки, нужно ли показывать ошибку для поля
	const shouldShowError = fieldName => {
		const fieldValue = getValues(fieldName)
		return (
			submitAttempted ||
			touchedFields[fieldName] ||
			(fieldValue && fieldValue.length > 0)
		)
	}

	// Инициализация маски для телефона
	useEffect(() => {
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
				trigger('phone')
			})
		}

		return () => {
			phoneMaskRef.current?.destroy()
		}
	}, [])

	const validateAndSubmit = async () => {
		setSubmitAttempted(true)

		// Валидируем только необходимые поля
		const nameValid = await trigger('name')
		const phoneValid = await trigger('phone')
		const privacyValid = await trigger('privacyPolicy')

		if (nameValid && phoneValid && privacyValid) {
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

		// Форматирование телефона
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
			email: '',
			message: '',
			computer: '',
			server: '',
			office: '',
			tariff: '',
			totalPrice: '',
			economPrice: '',
			litePrice: '',
			standartPrice: '',
			comfortPrice: '',
			formId: 'hero-mobile',
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
					{/* <label htmlFor='name' className={styles.label}>
						Имя *
					</label> */}
					<input
						id='name'
						type='text'
						maxLength={500}
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
					{/* <label htmlFor='phone' className={styles.label}>
						Телефон *
					</label> */}
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

				{/* Кнопка отправки - всегда активна */}
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

export default HeroForm
