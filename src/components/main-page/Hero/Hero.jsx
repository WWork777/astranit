// 'use client'
// import Spinner from '@/components/ui/spinner/Spinner'
// import modalStore from '@/store/modalStore'
// import { observer } from 'mobx-react-lite'
// import Image from 'next/image'
// import Link from 'next/link'
// import React from 'react'
// import styled from 'styled-components'
// import { v4 as uuidv4 } from 'uuid'
// import styles from './styles.module.scss'

// const StyledButton = styled.button`
// 	padding-left: 106px !important;
// 	padding-right: 106px !important;
// 	@media (max-width: 1200px) {
// 		padding-left: 93px !important;
// 		padding-right: 93px !important;
// 	}
// `

// const Hero = observer(() => {
// 	const { openModal, closeModal } = modalStore
// 	const baseNotice = (
// 		<>
// 			Отправьте заявку на консультацию, и мы перезвоним вам в<br />
// 			течение 15 минут!
// 		</>
// 	)
// 	const emptyPhoneNotice = (
// 		<>
// 			Пожалуйста, укажите
// 			<br />
// 			номер телефона
// 		</>
// 	)
// 	const personalDataNotice = (
// 		<>
// 			Необходимо согласие на обработку <br /> персональных данных
// 		</>
// 	)
// 	const correctPhoneNotice = (
// 		<>
// 			Пожалуйста, укажите <br />
// 			корректный номер
// 		</>
// 	)
// 	const timestamp = new Date().toLocaleString('ru-RU')
// 	const userId = uuidv4()
// 	const [phone, setPhone] = React.useState('')
// 	const [checked, setChecked] = React.useState(false)
// 	const [checkedError, setCheckedError] = React.useState(true)
// 	const [phoneError, setPhoneError] = React.useState(true)
// 	const [notice, setNotice] = React.useState(baseNotice)
// 	const [isLoading, setIsLoading] = React.useState(false)
// 	const [status, setStatus] = React.useState({ type: '', message: '' })
// 	const [isValidate, setisValidate] = React.useState(false)

// 	React.useEffect(() => {
// 		const isValid = !phoneError && !checkedError
// 		setisValidate(isValid)
// 	}, [phoneError, checkedError])

// 	const reset = () => {
// 		setPhone('')
// 		setPhoneError(true)
// 		setChecked(false)
// 		setCheckedError(true)
// 		setNotice(baseNotice)
// 	}
// 	const checkedHandler = e => {
// 		const isChecked = e.target.checked
// 		setChecked(isChecked)
// 		setCheckedError(!isChecked) // Ошибка, если НЕ отмечено

// 		if (!isChecked) {
// 			// Если чекбокс отжат
// 			setNotice(personalDataNotice)
// 		} else if (phoneError) {
// 			// Если чекбокс отмечен, но телефон невалидный
// 			setNotice(correctPhoneNotice)
// 		} else {
// 			// Если чекбокс отмечен и телефон валидный
// 			setNotice(baseNotice)
// 		}
// 	}

// 	const phoneHandler = e => {
// 		const value = e.target.value

// 		// Разрешаем только цифры, +, скобки, дефисы и пробелы
// 		const cleanedValue = value.replace(/[^\d()+-\s]/g, '')

// 		// Если значение изменилось (были недопустимые символы)
// 		if (value !== cleanedValue) {
// 			e.target.value = cleanedValue
// 		}

// 		setPhone(cleanedValue)

// 		const pattern =
// 			/^\(?[+]?(\d{1})\)?[(]?(\d{3})\)?[)]?[- ]?(\d{3})[- ]?(\d{4})$/

// 		if (cleanedValue === '') {
// 			setNotice(emptyPhoneNotice)
// 			setPhoneError(true)
// 		} else if (!pattern.test(String(cleanedValue))) {
// 			setNotice(correctPhoneNotice)
// 			setPhoneError(true)
// 			if (cleanedValue.toString().length >= 12) {
// 				setPhone('')
// 			}
// 		} else {
// 			// Телефон валидный
// 			setPhoneError(false)

// 			// Используем предыдущие значения для проверки
// 			if (!checkedError) {
// 				// Если чекбокс тоже валиден
// 				setNotice(baseNotice)
// 			} else {
// 				// Если чекбокс не отмечен
// 				setNotice(personalDataNotice)
// 			}
// 		}
// 	}

// 	const handleSubmit = async e => {
// 		e.preventDefault()
// 		setIsLoading(true)
// 		setStatus({ type: '', message: '' })
// 		setisValidate(false)

// 		const submitData = {
// 			name: '',
// 			phone: phone,
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
// 			formId: 'hero-desktop',
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
// 		<>
// 			<section className={styles.hero}>
// 				<div className={styles.hero_container}>
// 					<div className={styles.hero_container__left}>
// 						<div className={styles.hero_heading}>
// 							<h1 className={styles.hero_title}>ИТ-ПОДДЕРЖКА БИЗНЕСА</h1>
// 							<p className={styles.hero_subtitle}>
// 								Внимание и готовность помочь - каждый день!
// 							</p>
// 						</div>
// 						<div className={styles.hero_content}>
// 							<div className={styles.hero_item__container}>
// 								<div className={styles.hero_content__item}>
// 									<Image
// 										src='/svg/hero/phone.svg'
// 										alt='phone'
// 										width={60}
// 										height={60}
// 									/>
// 									<span>
// 										Удаленная техподдержка <br /> по телефону и e-mail
// 									</span>
// 								</div>
// 								<div className={styles.hero_content__item}>
// 									<Image
// 										src='/svg/hero/man.svg'
// 										alt='man'
// 										width={60}
// 										height={60}
// 									/>
// 									<span>
// 										Техподдержка на месте <br /> с выездом специалиста
// 									</span>
// 								</div>
// 							</div>
// 							<div className={styles.hero_item__container}>
// 								<div className={styles.hero_content__item}>
// 									<Image
// 										src='/svg/hero/protect.svg'
// 										alt='protect'
// 										width={60}
// 										height={60}
// 									/>
// 									<span>
// 										Порядок в ИТ-системе <br /> и защита данных
// 									</span>
// 								</div>
// 								<div className={styles.hero_content__item}>
// 									<Image
// 										src='/svg/hero/light.svg'
// 										alt='light'
// 										width={60}
// 										height={60}
// 									/>
// 									<span>
// 										Эффективные <br /> и удобные решения
// 									</span>
// 								</div>
// 							</div>
// 						</div>
// 						<div className={styles.hero_form}>
// 							<p>{notice}</p>
// 							<form onSubmit={handleSubmit}>
// 								<input
// 									type='tel'
// 									id='phone'
// 									name='phone'
// 									value={phone}
// 									onChange={e => phoneHandler(e)}
// 									placeholder={'+71234567890'}
// 								/>
// 								{isValidate ? (
// 									<button
// 										className={styles.button_active}
// 										disabled={!isValidate}
// 									>
// 										<span>Перезвоните мне!</span>
// 									</button>
// 								) : isLoading ? (
// 									<StyledButton disabled={!isValidate}>
// 										<Spinner />
// 									</StyledButton>
// 								) : (
// 									<button className={styles.button} disabled={!isValidate}>
// 										<span>Перезвоните мне!</span>
// 									</button>
// 								)}
// 								<div className={styles.hero_form__checkbox}>
// 									<input
// 										type='checkbox'
// 										name='hero-form-check'
// 										id='hero-form-check'
// 										checked={checked}
// 										onChange={e => checkedHandler(e)}
// 									/>
// 									<p>
// 										согласен(на) с политикой <br />
// 										<span>
// 											<Link href={'/personal'}>
// 												обработки персональных данных
// 											</Link>
// 										</span>
// 									</p>
// 								</div>
// 							</form>
// 						</div>
// 					</div>
// 					<div className={styles.hero_container__right}>
// 						{/* <Image
// 							src='/images/hero/hero.png'
// 							alt='it-outsorce'
// 							width={100}
// 							height={100}
// 						/> */}
// 						<img src='/images/hero/desktop.png' alt='it-outsorce' />
// 					</div>
// 				</div>
// 			</section>

// 			<section className={styles.hero_container__mobile}>
// 				<h1>ИТ-ПОДДЕРЖКА БИЗНЕСА</h1>
// 				<p>Внимание и готовность помочь - каждый день!</p>
// 				<Image
// 					src='/images/hero/hero.png'
// 					width={1920}
// 					height={1080}
// 					alt='it-outsorce'
// 				/>
// 				<div className={styles.hero_content_mobile}>
// 					<div className={styles.hero_content_container__mobile}>
// 						<div className={styles.hero_content__item__mobile}>
// 							<Image
// 								src='/svg/hero/phone.svg'
// 								alt='phone'
// 								width={50}
// 								height={50}
// 							/>
// 							<span>
// 								Удаленная техподдержка <br /> по телефону и e-mail
// 							</span>
// 						</div>
// 						<div className={styles.hero_content__item__mobile}>
// 							<Image src='/svg/hero/man.svg' alt='man' width={50} height={50} />
// 							<span>
// 								Техподдержка на месте <br /> с выездом специалиста
// 							</span>
// 						</div>
// 						<div className={styles.hero_content__item__mobile}>
// 							<Image
// 								src='/svg/hero/protect.svg'
// 								alt='protect'
// 								width={50}
// 								height={50}
// 							/>
// 							<span>
// 								Порядок в ИТ-системе <br /> и защита данных
// 							</span>
// 						</div>
// 						<div className={styles.hero_content__item__mobile}>
// 							<Image
// 								src='/svg/hero/light.svg'
// 								alt='light'
// 								width={50}
// 								height={50}
// 							/>
// 							<span>
// 								Эффективные <br /> и удобные решения
// 							</span>
// 						</div>
// 					</div>
// 				</div>
// 				<div className={styles.hero_container_form_mobile}>
// 					<p>
// 						Оставьте заявку на консультацию, и мы перезвоним вам <br /> в
// 						течение 15 минут!
// 					</p>
// 					<button
// 						onClick={() =>
// 							openModal({ type: 'hero', title: 'Оставить заявку!' })
// 						}
// 					>
// 						<span>Оставить заявку!</span>
// 					</button>
// 				</div>
// 			</section>
// 		</>
// 	)
// })

// export default Hero

'use client'
import Spinner from '@/components/ui/spinner/Spinner'
import modalStore from '@/store/modalStore'
import IMask from 'imask'
import { observer } from 'mobx-react-lite'
import Image from 'next/image'
import Link from 'next/link'
import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import styled from 'styled-components'
import { v4 as uuidv4 } from 'uuid'
import styles from './styles.module.scss'

const StyledButton = styled.button`
	padding-left: 106px !important;
	padding-right: 106px !important;
	@media (max-width: 1200px) {
		padding-left: 93px !important;
		padding-right: 93px !important;
	}
`

const Hero = observer(() => {
	const { openModal, closeModal } = modalStore

	// React Hook Form
	const {
		register,
		formState: { errors, touchedFields },
		reset,
		setValue,
		trigger,
		getValues,
		watch,
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			phone: '',
			privacyPolicy: false,
		},
	})

	const [isLoading, setIsLoading] = React.useState(false)
	const [submitAttempted, setSubmitAttempted] = React.useState(false)
	const timestamp = new Date().toLocaleString('ru-RU')
	const userId = uuidv4()

	// Refs для маски телефона
	const phoneInputRef = useRef(null)
	const phoneMaskRef = useRef(null)

	// Функция для проверки, нужно ли показывать ошибку для поля
	const shouldShowError = fieldName => {
		const fieldValue = getValues(fieldName)
		return (
			submitAttempted ||
			touchedFields[fieldName] ||
			(fieldValue && fieldValue.length > 0 && fieldValue !== '')
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
		const phoneValid = await trigger('phone')
		const privacyValid = await trigger('privacyPolicy')

		if (phoneValid && privacyValid) {
			const values = getValues()
			await onSubmit(values)
		} else {
			// Прокручиваем к первой ошибке
			// const errorElements = document.querySelectorAll(`.${styles.error}`)
			// if (errorElements.length > 0) {
			// 	errorElements[0].scrollIntoView({
			// 		behavior: 'smooth',
			// 		block: 'center',
			// 	})
			// }
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
					6,
				)}-${rawPhone.substring(6, 8)}-${rawPhone.substring(8, 10)}`
			} else if (rawPhone.length === 11) {
				const digits = rawPhone.substring(rawPhone.length - 10)
				formattedPhone = `+7 (${digits.substring(0, 3)}) ${digits.substring(
					3,
					6,
				)}-${digits.substring(6, 8)}-${digits.substring(8, 10)}`
			}
		}

		const submitData = {
			name: '',
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
			formId: 'hero-desktop',
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
				'✅ Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.',
			)

			// Сброс формы
			reset()
			setSubmitAttempted(false)
			if (phoneMaskRef.current) {
				phoneMaskRef.current.value = ''
				phoneMaskRef.current.updateValue()
				if (phoneInputRef.current) {
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

	// Обработчик нажатия Enter
	const handleKeyPress = e => {
		if (e.key === 'Enter' && !e.shiftKey) {
			e.preventDefault()
			validateAndSubmit()
		}
	}

	return (
		<>
			<section className={styles.hero}>
				<div className={styles.hero_container}>
					<div className={styles.hero_container__left}>
						<div className={styles.hero_heading}>
							<h1 className={styles.hero_title}>ИТ-ПОДДЕРЖКА БИЗНЕСА</h1>
							<p className={styles.hero_subtitle}>
								Внимание и готовность помочь - каждый день!
							</p>
						</div>
						<div className={styles.hero_content}>
							<div className={styles.hero_item__container}>
								<div className={styles.hero_content__item}>
									<Image
										src='/svg/hero/phone.svg'
										alt='phone'
										width={60}
										height={60}
									/>
									<span>
										Удаленная техподдержка <br /> по телефону и e-mail
									</span>
								</div>
								<div className={styles.hero_content__item}>
									<Image
										src='/svg/hero/man.svg'
										alt='man'
										width={60}
										height={60}
									/>
									<span>
										Техподдержка на месте <br /> с выездом специалиста
									</span>
								</div>
							</div>
							<div className={styles.hero_item__container}>
								<div className={styles.hero_content__item}>
									<Image
										src='/svg/hero/protect.svg'
										alt='protect'
										width={60}
										height={60}
									/>
									<span>
										Порядок в ИТ-системе <br /> и защита данных
									</span>
								</div>
								<div className={styles.hero_content__item}>
									<Image
										src='/svg/hero/light.svg'
										alt='light'
										width={60}
										height={60}
									/>
									<span>
										Эффективные <br /> и удобные решения
									</span>
								</div>
							</div>
						</div>
						<div className={styles.hero_form}>
							<p>
								Отправьте заявку на консультацию, и мы перезвоним <br /> в
								течение 15 минут!
							</p>
							<form
								onSubmit={e => e.preventDefault()}
								onKeyPress={handleKeyPress}
							>
								<input
									ref={phoneInputRef}
									type='tel'
									id='phone'
									name='phone'
									className={`${
										shouldShowError('phone') && errors.phone ? styles.error : ''
									}`}
									placeholder={'+71234567890'}
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

								{isLoading ? (
									<StyledButton disabled={isLoading}>
										<Spinner />
									</StyledButton>
								) : (
									<button
										type='button'
										onClick={validateAndSubmit}
										className={styles.button_active}
										disabled={isLoading}
									>
										<span>Перезвоните мне!</span>
									</button>
								)}

								<div className={styles.hero_form__checkbox}>
									<input
										type='checkbox'
										name='privacyPolicy'
										id='hero-form-check'
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
									<p>
										согласен(на) с политикой <br />
										<span>
											<Link href={'/personal'}>
												обработки персональных данных
											</Link>
										</span>
									</p>
								</div>
							</form>
						</div>
					</div>
					<div className={styles.hero_container__right}>
						<img src='/images/hero/desktop.png' alt='it-outsorce' />
					</div>
				</div>
			</section>

			<section className={styles.hero_container__mobile}>
				<h1>ИТ-ПОДДЕРЖКА БИЗНЕСА</h1>
				<p>Внимание и готовность помочь - каждый день!</p>
				<div className={styles.hero_image_container__mobile}>
					<Image
						src='/images/hero/hero.png'
						width={1920}
						height={1080}
						alt='it-outsorce'
					/>
				</div>
				<div className={styles.hero_content_mobile}>
					<div className={styles.hero_content_container__mobile}>
						<div className={styles.hero_content__item__mobile}>
							<Image
								src='/svg/hero/phone.svg'
								alt='phone'
								width={50}
								height={50}
							/>
							<span>
								Удаленная техподдержка <br /> по телефону и e-mail
							</span>
						</div>
						<div className={styles.hero_content__item__mobile}>
							<Image src='/svg/hero/man.svg' alt='man' width={50} height={50} />
							<span>
								Техподдержка на месте <br /> с выездом специалиста
							</span>
						</div>
						<div className={styles.hero_content__item__mobile}>
							<Image
								src='/svg/hero/protect.svg'
								alt='protect'
								width={50}
								height={50}
							/>
							<span>
								Порядок в ИТ-системе <br /> и защита данных
							</span>
						</div>
						<div className={styles.hero_content__item__mobile}>
							<Image
								src='/svg/hero/light.svg'
								alt='light'
								width={50}
								height={50}
							/>
							<span>
								Эффективные <br /> и удобные решения
							</span>
						</div>
					</div>
				</div>{' '}
				<div className={styles.hero_container_form_mobile}>
					<p>
						Оставьте заявку на консультацию, <br /> и мы перезвоним в течение 15
						минут!
					</p>
					<button
						onClick={() =>
							openModal({
								type: 'general',
								formId: 'hero-mobile',
								title: 'Оставить заявку!',
							})
						}
					>
						<span>Оставить заявку!</span>
					</button>
				</div>
			</section>
			{/* <section className='hero-container_mobile'>
				<h1 className='hero-title_mobile'>ИТ-ПОДДЕРЖКА БИЗНЕСА</h1>
				<p className='hero-description_mobile'>
					Внимание и готовность помочь - каждый день!
				</p>
				<div className='hero-image-container_mobile'>
					<img src='/images/hero/hero.png' alt='image' />
				</div>
				<div className='hero-content-container_mobile'>
					<div className='hero-content_mobile'>
						<div className='hero-content-item_mobile'>
							<Image
								src='/svg/hero/phone.svg'
								alt='phone'
								width={50}
								height={50}
							/>
							<span>
								Удаленная техподдержка <br /> по телефону и e-mail
							</span>
						</div>
						<div className='hero-content-item_mobile'>
							<Image src='/svg/hero/man.svg' alt='man' width={50} height={50} />
							<span>
								Техподдержка на месте <br /> с выездом специалиста
							</span>
						</div>
						<div className='hero-content-item_mobile'>
							<Image
								src='/svg/hero/protect.svg'
								alt='protect'
								width={50}
								height={50}
							/>
							<span>
								Порядок в ИТ-системе <br /> и защита данных
							</span>
						</div>
						<div className='hero-content-item_mobile'>
							<Image
								src='/svg/hero/light.svg'
								alt='light'
								width={50}
								height={50}
							/>
							<span>
								Эффективные <br /> и удобные решения
							</span>
						</div>
					</div>
				</div>{' '}
				<div className={styles.hero_container_form_mobile}>
					<p>
						Оставьте заявку на консультацию, <br /> и мы перезвоним в течение 15
						минут!
					</p>
					<button
						onClick={() =>
							openModal({
								type: 'general',
								formId: 'hero-mobile',
								title: 'Оставить заявку!',
							})
						}
					>
						<span>Оставить заявку!</span>
					</button>
				</div>
			</section> */}
		</>
	)
})

export default Hero
