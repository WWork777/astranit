'use client'
import { baseLinks, info, services as servLink } from '@/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'
import { v4 as uuidv4 } from 'uuid'
import './footer.scss'
import styles from './styles.module.scss'

export default function Footer() {
	const pathname = usePathname()

	const baseNotice = (
		<>
			Остались вопросы? С удовольствием проконсультируем вас по решению
			необходимой задачи и условиям обслуживания!
		</>
	)
	const emptyPhoneNotice = (
		<>
			Пожалуйста, укажите
			<br />
			номер телефона
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
	const emptyNameNotice = (
		<>
			Пожалуйста, укажите <br />
			ваше имя
		</>
	)
	const nameTooLongNotice = (
		<>
			Имя не должно превышать <br />
			15 символов
		</>
	)
	const emptyEmailNotice = (
		<>
			Пожалуйста, укажите
			<br />
			Ваш email
		</>
	)
	const correctEmailNotice = (
		<>
			Пожалуйста, укажите <br />
			корректный email
		</>
	)
	const messageTooLongNotice = (
		<>
			Сообщение не должно превышать <br />
			300 символов
		</>
	)
	const inappropriateContentNotice = (
		<>
			Пожалуйста, избегайте <br />
			нецензурных выражений
		</>
	)

	// Расширенный список паттернов для нецензурной лексики
	const inappropriatePatterns = [
		// Основные русские матерные слова
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

		// Обходные варианты с заменой букв
		'х[уy]й',
		'п[іi]зд',
		'бл[яa]',
		'3[аa]б[аa]',
		'[хx][уy][йi]',
		'[пp][іi][з3][дd]',

		// Английские аналоги
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

		// Оскорбительные выражения
		'урод',
		'дебил',
		'идиот',
		'тупиц',
		'дурак',
		'кретин',
		'моральн',
		'отстой',
		'ничтож',

		// Дополнительные варианты с возможными спецсимволами
		'х[^а-яё]*у[^а-яё]*[еёийяю]',
		'п[^а-яё]*[иеё][^а-яё]*з[^а-яё]*д',
		'б[^а-яё]*л[^а-яё]*[яa][^а-яё]*[дт]',
	]

	// Создание регулярного выражения для проверки
	const createInappropriateRegex = () => {
		try {
			const pattern = `\\b(${inappropriatePatterns.join('|')})\\b`
			return new RegExp(pattern, 'giu')
		} catch (error) {
			console.error('Ошибка создания regex:', error)
			return /(хуй|пизд|бля|еба|еб|сук|суч|гандон)/giu
		}
	}

	// Функция проверки на нецензурную лексику
	const checkForInappropriateContent = text => {
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
	}

	const [name, setName] = React.useState('')
	const [phone, setPhone] = React.useState('')
	const [email, setEmail] = React.useState('')
	const [message, setMessage] = React.useState('')
	const [checked, setChecked] = React.useState(false)

	const [nameError, setNameError] = React.useState(true)
	const [phoneError, setPhoneError] = React.useState(true)
	const [emailError, setEmailError] = React.useState(true)
	const [checkedError, setCheckedError] = React.useState(true)
	const [messageError, setMessageError] = React.useState(false)
	const [isLoading, setIsLoading] = React.useState(false)
	const [status, setStatus] = React.useState({ type: '', message: '' })
	const timestamp = new Date().toLocaleString('ru-RU')
	const userId = uuidv4()

	const [notice, setNotice] = React.useState(baseNotice)
	const [isValidate, setIsValidate] = React.useState(false)

	React.useEffect(() => {
		const isValid =
			!nameError && !phoneError && !emailError && !checkedError && !messageError
		setIsValidate(isValid)

		// Обновляем notice при изменении ошибок
		if (!isValid) {
			// Если есть ошибка в сообщении, показываем ее
			if (messageError && message.length > 299) {
				setNotice(messageTooLongNotice)
			} else if (messageError) {
				const inappropriateCheck = checkForInappropriateContent(message)
				if (inappropriateCheck.hasInappropriate) {
					setNotice(inappropriateContentNotice)
				}
			}
			// Остальные ошибки будут показаны через свои обработчики
		}
	}, [nameError, phoneError, emailError, checkedError, messageError, message])

	const reset = () => {
		setName('')
		setPhone('')
		setEmail('')
		setMessage('')
		setChecked(false)
		setNameError(true)
		setPhoneError(true)
		setEmailError(true)
		setCheckedError(true)
		setMessageError(false)
		setNotice(baseNotice)
	}

	const checkedHandler = e => {
		const isChecked = e.target.checked
		setChecked(isChecked)
		setCheckedError(!isChecked)

		if (!isChecked) {
			setNotice(personalDataNotice)
		} else if (nameError || phoneError || emailError || messageError) {
			// Показываем ошибку первого невалидного поля
			if (nameError) {
				if (name === '') {
					setNotice(emptyNameNotice)
				} else if (name.length > 15) {
					setNotice(nameTooLongNotice)
				}
			} else if (phoneError) {
				if (phone === '') {
					setNotice(emptyPhoneNotice)
				} else {
					setNotice(correctPhoneNotice)
				}
			} else if (emailError) {
				if (email === '') {
					setNotice(emptyEmailNotice)
				} else {
					setNotice(correctEmailNotice)
				}
			} else if (messageError) {
				if (message.length > 299) {
					setNotice(messageTooLongNotice)
				} else {
					setNotice(inappropriateContentNotice)
				}
			}
		} else {
			setNotice(baseNotice)
		}
	}

	const nameHandler = e => {
		const value = e.target.value

		if (value.length > 15) {
			const trimmedValue = value.substring(0, 15)
			setName(trimmedValue)
			setNotice(nameTooLongNotice)
			setNameError(true)
		} else {
			setName(value)

			if (value === '') {
				setNotice(emptyNameNotice)
				setNameError(true)
			} else {
				setNameError(false)
				// Проверяем другие поля после исправления имени
				if (checked) {
					if (phoneError || emailError || messageError) {
						if (phoneError) {
							if (phone === '') {
								setNotice(emptyPhoneNotice)
							} else {
								setNotice(correctPhoneNotice)
							}
						} else if (emailError) {
							if (email === '') {
								setNotice(emptyEmailNotice)
							} else {
								setNotice(correctEmailNotice)
							}
						} else if (messageError) {
							if (message.length > 299) {
								setNotice(messageTooLongNotice)
							} else {
								setNotice(inappropriateContentNotice)
							}
						}
					} else {
						setNotice(baseNotice)
					}
				} else {
					setNotice(personalDataNotice)
				}
			}
		}
	}

	const phoneHandler = e => {
		const value = e.target.value

		const cleanedValue = value.replace(/[^\d()+-\s]/g, '')

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
			setPhoneError(false)

			// Проверяем другие поля после исправления телефона
			if (checked) {
				if (nameError || emailError || messageError) {
					if (nameError) {
						if (name === '') {
							setNotice(emptyNameNotice)
						} else if (name.length > 15) {
							setNotice(nameTooLongNotice)
						}
					} else if (emailError) {
						if (email === '') {
							setNotice(emptyEmailNotice)
						} else {
							setNotice(correctEmailNotice)
						}
					} else if (messageError) {
						if (message.length > 299) {
							setNotice(messageTooLongNotice)
						} else {
							setNotice(inappropriateContentNotice)
						}
					}
				} else {
					setNotice(baseNotice)
				}
			} else {
				setNotice(personalDataNotice)
			}
		}
	}

	const emailHandler = e => {
		const value = e.target.value
		setEmail(value)

		const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

		if (value === '') {
			setNotice(emptyEmailNotice)
			setEmailError(true)
		} else if (!pattern.test(String(value))) {
			setNotice(correctEmailNotice)
			setEmailError(true)
			if (value.toString().length >= 50) {
				setEmail('')
			}
		} else {
			setEmailError(false)

			// Проверяем другие поля после исправления email
			if (checked) {
				if (nameError || phoneError || messageError) {
					if (nameError) {
						if (name === '') {
							setNotice(emptyNameNotice)
						} else if (name.length > 15) {
							setNotice(nameTooLongNotice)
						}
					} else if (phoneError) {
						if (phone === '') {
							setNotice(emptyPhoneNotice)
						} else {
							setNotice(correctPhoneNotice)
						}
					} else if (messageError) {
						if (message.length > 299) {
							setNotice(messageTooLongNotice)
						} else {
							setNotice(inappropriateContentNotice)
						}
					}
				} else {
					setNotice(baseNotice)
				}
			} else {
				setNotice(personalDataNotice)
			}
		}
	}

	const messageHandler = e => {
		const value = e.target.value
		setMessage(value)

		if (value === '') {
			setMessageError(false)
			// Если сообщение очищено, показываем ошибку первого другого поля
			if (checked) {
				if (nameError || phoneError || emailError) {
					if (nameError) {
						if (name === '') {
							setNotice(emptyNameNotice)
						} else if (name.length > 15) {
							setNotice(nameTooLongNotice)
						}
					} else if (phoneError) {
						if (phone === '') {
							setNotice(emptyPhoneNotice)
						} else {
							setNotice(correctPhoneNotice)
						}
					} else if (emailError) {
						if (email === '') {
							setNotice(emptyEmailNotice)
						} else {
							setNotice(correctEmailNotice)
						}
					}
				} else {
					setNotice(baseNotice)
				}
			} else {
				setNotice(personalDataNotice)
			}
		} else {
			// Проверка длины
			if (value.length > 299) {
				setMessageError(true)
				setNotice(messageTooLongNotice)
				return
			}

			// Проверка на нецензурную лексику
			const inappropriateCheck = checkForInappropriateContent(value)
			if (inappropriateCheck.hasInappropriate) {
				setMessageError(true)
				setNotice(inappropriateContentNotice)
				setMessage(inappropriateCheck.cleanText)
			} else {
				setMessageError(false)
				// Если сообщение валидно, проверяем другие поля
				if (checked) {
					if (nameError || phoneError || emailError) {
						if (nameError) {
							if (name === '') {
								setNotice(emptyNameNotice)
							} else if (name.length > 10) {
								setNotice(nameTooLongNotice)
							}
						} else if (phoneError) {
							if (phone === '') {
								setNotice(emptyPhoneNotice)
							} else {
								setNotice(correctPhoneNotice)
							}
						} else if (emailError) {
							if (email === '') {
								setNotice(emptyEmailNotice)
							} else {
								setNotice(correctEmailNotice)
							}
						}
					} else {
						setNotice(baseNotice)
					}
				} else {
					setNotice(personalDataNotice)
				}
			}
		}
	}
	const handleSubmit = async e => {
		e.preventDefault()
		// Финальная проверка
		const inappropriateCheck = checkForInappropriateContent(message)
		if (inappropriateCheck.hasInappropriate) {
			setNotice(inappropriateContentNotice)
			setMessage(inappropriateCheck.cleanText)
			setMessageError(true)
			return
		}
		setIsLoading(true)
		setStatus({ type: '', message: '' })

		const submitData = {
			name: name,
			phone: phone,
			email: email,
			message: message || 'сообщение не оставлено',
			computer: '',
			server: '',
			office: '',
			tariff: '',
			totalPrice: '',
			economPrice: '',
			litePrice: '',
			standartPrice: '',
			comfortPrice: '',
			formId: 'footer-form',
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

			// ✅ ПОКАЗЫВАЕМ ALERT ПРИ УСПЕШНОЙ ОТПРАВКЕ
			alert(
				'✅ Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.'
			)

			// ✅ ОЧИЩАЕМ ФОРМУ
			reset()

			// Можно также обновить статус (опционально)
			setStatus({
				type: 'success',
				message: 'Сообщение успешно отправлено!',
			})
		} catch (error) {
			// ❌ ПРИ ОШИБКЕ - alert с ошибкой (но модалку не закрываем)
			alert(`❌ Ошибка отправки: ${error.message}`)
			reset()
			setStatus({
				type: 'error',
				message: error.message,
			})
		} finally {
			reset()
			setIsLoading(false)
		}
	}

	return (
		<>
			<footer className='footer'>
				<div
					style={{ display: `${pathname === '/contacts' ? 'none' : 'block'}` }}
					className='footer-top'
				></div>
				<div className='footer-bottom'>
					<div className='footer-bottom__banner footer-banner'>
						<div className='footer-banner__inner banner-inner'>
							<h1 className='banner-inner__title'>
								{pathname === '/contacts'
									? 'НАПИШИТЕ НАМ!'
									: 'ОБСУДИМ ВАШУ ЗАДАЧУ!'}
							</h1>
							<p className='banner-inner__desc'>{notice}</p>

							<form className='banner-inner__form inner-form'>
								<div className='inner-form__inputs'>
									<input
										autoFocus={false}
										autoComplete='off'
										id='name'
										name='name'
										type='text'
										placeholder='Как к вам обращаться? *'
										value={name}
										onChange={e => nameHandler(e)}
									/>
									<input
										autoComplete='off'
										id='phone'
										name='phone'
										type='text'
										placeholder={'+71234567890 *'}
										value={phone}
										onChange={e => phoneHandler(e)}
									/>
									<input
										autoComplete='off'
										type='email'
										name='email'
										placeholder='name@company *'
										value={email}
										onChange={e => emailHandler(e)}
									/>
								</div>
								<textarea
									name='message'
									id='message'
									placeholder={
										'Ваша задача или вопрос.\nИли не пишите ничего, уточним все в ходе обсуждения.'
									}
									value={message}
									onChange={e => messageHandler(e)}
									maxLength={300}
									rows={4}
								></textarea>
							</form>

							<div className={styles.button_wrapper}>
								{isValidate ? (
									<button
										type='submit'
										onClick={handleSubmit}
										className={styles.button_active}
									>
										Отправить
									</button>
								) : (
									<button className={styles.button} disabled>
										Отправить
									</button>
								)}
								<div className={styles.footer_form__checkbox}>
									<input
										type='checkbox'
										name='footer-form-check'
										id='footer-form-check'
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
							</div>
						</div>
						<div className='banner-inner__img'>
							<img src='/images/footer/footer.svg' alt='image' />
						</div>
					</div>
					<div className='footer-links'>
						<div className='footer-links__inner links-inner'>
							<ul className='links-inner__box1'>
								{baseLinks.map(item => (
									<li key={item.title}>
										<Link href={item.link}>{item.title}</Link>
									</li>
								))}
								<ul className='links-inner__double'>
									{info.map(item => (
										<li key={item.title}>
											{item.title.includes('<br/>') ? (
												<Link href={item.link}>
													<span
														dangerouslySetInnerHTML={{ __html: item.title }}
													/>
												</Link>
											) : (
												<Link href={item.link}>{item.title}</Link>
											)}
										</li>
									))}
								</ul>
							</ul>

							<ul className='links-inner__box2'>
								<li>РЕШЕНИЯ И СЕРВИСЫ</li>
								{servLink.map(item => (
									<li key={item.title}>
										<Link href={`/services/${item.link}`}>{item.title}</Link>
									</li>
								))}
							</ul>
							<ul className='links-inner__box3'>
								{info.map(item => (
									<li key={item.title}>
										{item.title.includes('<br/>') ? (
											<Link href={item.link}>
												<span
													dangerouslySetInnerHTML={{ __html: item.title }}
												/>
											</Link>
										) : (
											<Link href={item.link}>{item.title}</Link>
										)}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
