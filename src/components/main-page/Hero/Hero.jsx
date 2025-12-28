'use client'
import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import styles from './styles.module.scss'

export default function Hero() {
	const baseNotice = (
		<>
			Отправьте заявку на консультацию, и мы перезвоним в<br />
			течение 15 минут!
		</>
	)
	const emptyPhoneNotice = (
		<>
			Пример ввода:
			<br />
			+71234567890
		</>
	)
	const personalDataNotice = (
		<>
			Необходимо согласие на обработку <br /> персональных данных
		</>
	)
	const correctPhoneNotice = (
		<>
			Пожалуйста, укажите <br />
			корректный номер
		</>
	)
	const [phone, setPhone] = React.useState('')
	const [checked, setChecked] = React.useState(false)
	const [checkedError, setCheckedError] = React.useState(true)
	const [phoneError, setPhoneError] = React.useState(true)
	const [notice, setNotice] = React.useState(baseNotice)

	const [isValidate, setisValidate] = React.useState(false)

	React.useEffect(() => {
		const isValid = !phoneError && !checkedError
		setisValidate(isValid)
	}, [phoneError, checkedError])

	const reset = () => {
		setPhone('')
		setPhoneError(true)
		setChecked(false)
		setCheckedError(true)
		setNotice(baseNotice)
	}
	const checkedHandler = e => {
		const isChecked = e.target.checked
		setChecked(isChecked)
		setCheckedError(!isChecked) // Ошибка, если НЕ отмечено

		if (!isChecked) {
			// Если чекбокс отжат
			setNotice(personalDataNotice)
		} else if (phoneError) {
			// Если чекбокс отмечен, но телефон невалидный
			setNotice(correctPhoneNotice)
		} else {
			// Если чекбокс отмечен и телефон валидный
			setNotice(baseNotice)
		}
	}

	const phoneHandler = e => {
		const value = e.target.value

		// Разрешаем только цифры, +, скобки, дефисы и пробелы
		const cleanedValue = value.replace(/[^\d()+-\s]/g, '')

		// Если значение изменилось (были недопустимые символы)
		if (value !== cleanedValue) {
			e.target.value = cleanedValue
		}

		setPhone(cleanedValue)

		const pattern =
			/^\(?[+]?(\d{1})\)?[(]?(\d{3})\)?[)]?[- ]?(\d{3})[- ]?(\d{4})$/

		if (cleanedValue === '') {
			setNotice(emptyPhoneNotice)
			setPhoneError(true)
		} else if (!pattern.test(String(cleanedValue))) {
			setNotice(correctPhoneNotice)
			setPhoneError(true)
			if (cleanedValue.toString().length >= 12) {
				setPhone('')
			}
		} else {
			// Телефон валидный
			setPhoneError(false)

			// Используем предыдущие значения для проверки
			if (!checkedError) {
				// Если чекбокс тоже валиден
				setNotice(baseNotice)
			} else {
				// Если чекбокс не отмечен
				setNotice(personalDataNotice)
			}
		}
	}
	const handleSubmit = async e => {
		// setLoading(true) // Начало загрузки
		e.preventDefault()
		const text = `Запрос обратной связи\nТелефон: ${phone}\nform_id: form-hero\nuser_id: ${Math.random()} `
		alert(text)
		reset()
		// try {
		// 	const response = await fetch('/api/sendMessage', {
		// 		method: 'POST',
		// 		headers: {
		// 			'Content-Type': 'application/json',
		// 		},
		// 		body: JSON.stringify({ text }),
		// 	})

		// 	if (!response.ok) {
		// 		alert('Произошла ошибка при отправке сообщения')
		// 		throw new Error('Ошибка при отправке сообщения')
		// 	}

		// 	const result = await response.json() // Если сервер возвращает JSON
		// 	if (result.message === 'ok') {
		// 		setLoading(false)
		// 		setLoaded(true)
		// 		setTimeout(() => {
		// 			setLoaded(false)
		// 		}, 2000)
		// 	}
		// 	reset() // Сброс формы только после успешной отправки
		// } catch (error) {
		// 	console.error('Ошибка:', error)
		// 	alert('Произошла ошибка при отправке сообщения')
		// } finally {
		// }
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
							<p>{notice}</p>
							<form onSubmit={handleSubmit}>
								<input
									autoComplete='off'
									type='tel'
									id='phone'
									name='phone'
									value={phone}
									onChange={e => phoneHandler(e)}
									placeholder={'+71234567890'}
								/>
								{isValidate ? (
									<button
										className={styles.button_active}
										disabled={!isValidate}
									>
										<span>Перезвоните мне!</span>
									</button>
								) : (
									<button disabled={!isValidate}>
										<span>Перезвоните мне!</span>
									</button>
								)}
								<div className={styles.hero_form__checkbox}>
									<input
										type='checkbox'
										name='hero-form-check'
										id='hero-form-check'
										checked={checked}
										onChange={e => checkedHandler(e)}
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
						{/* <Image
							src='/images/hero/hero.png'
							alt='it-outsorce'
							width={100}
							height={100}
						/> */}
						<img src='/images/hero/desktop.png' alt='it-outsorce' />
					</div>
				</div>
			</section>

			{/* <section className={styles.hero_container__mobile}>
				<h1>ИТ-ПОДДЕРЖКА БИЗНЕСА</h1>
				<p>Внимание и готовность помочь - каждый день!</p>
				<Image
					src='/images/hero/hero.png'
					width={1920}
					height={1080}
					alt='it-outsorce'
				/>
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
				</div>
				<div className={styles.hero_container_form_mobile}>
					<p>
						Оставьте заявку на консультацию, и мы перезвоним <br /> в течение 15
						минут!
					</p>
					<button>
						<span>Оставить заявку!</span>
					</button>
				</div>
			</section> */}
		</>
	)
}
