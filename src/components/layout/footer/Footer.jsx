// 'use client'
// import Spinner from '@/components/ui/spinner/Spinner'
// import { baseLinks, info, services as servLink } from '@/data'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import React from 'react'
// import { v4 as uuidv4 } from 'uuid'
// import './footer.scss'
// import styles from './styles.module.scss'

// export default function Footer() {
// 	const pathname = usePathname()

// 	const baseNotice = (
// 		<>
// 			Остались вопросы? С удовольствием проконсультируем вас по решению
// 			необходимой задачи и условиям обслуживания!
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
// 	const emptyNameNotice = (
// 		<>
// 			Пожалуйста, укажите <br />
// 			ваше имя
// 		</>
// 	)
// 	const nameTooLongNotice = (
// 		<>
// 			Имя не должно превышать <br />
// 			15 символов
// 		</>
// 	)
// 	const emptyEmailNotice = (
// 		<>
// 			Пожалуйста, укажите
// 			<br />
// 			Ваш email
// 		</>
// 	)
// 	const correctEmailNotice = (
// 		<>
// 			Пожалуйста, укажите <br />
// 			корректный email
// 		</>
// 	)
// 	const messageTooLongNotice = (
// 		<>
// 			Сообщение не должно превышать <br />
// 			300 символов
// 		</>
// 	)
// 	const inappropriateContentNotice = (
// 		<>
// 			Пожалуйста, избегайте <br />
// 			нецензурных выражений
// 		</>
// 	)

// 	// Расширенный список паттернов для нецензурной лексики
// 	const inappropriatePatterns = [
// 		// Основные русские матерные слова
// 		'ху[еёийяю]',
// 		'п[иеё]зд',
// 		'бля[дт]',
// 		'еба[нтлш]',
// 		'еб[аоиуы]',
// 		'еб[а-я]',
// 		'сук[аи]?',
// 		'суч[ка]?',
// 		'гандон',
// 		'конч',
// 		'мудак',
// 		'мудил',
// 		'залуп',
// 		'дроч',
// 		'манда',
// 		'шлюх',
// 		'шалав',
// 		'г[оа]вн',
// 		'дерьм',
// 		'сран',
// 		'заеб',
// 		'оху[её]',
// 		'п[иеё]дор',
// 		'пид[оа]р',
// 		'гомик',
// 		'педик',

// 		// Обходные варианты с заменой букв
// 		'х[уy]й',
// 		'п[іi]зд',
// 		'бл[яa]',
// 		'3[аa]б[аa]',
// 		'[хx][уy][йi]',
// 		'[пp][іi][з3][дd]',

// 		// Английские аналоги
// 		'fuck',
// 		'shit',
// 		'asshole',
// 		'bitch',
// 		'cunt',
// 		'dick',
// 		'piss',
// 		'whore',
// 		'bastard',
// 		'damn',

// 		// Оскорбительные выражения
// 		'урод',
// 		'дебил',
// 		'идиот',
// 		'тупиц',
// 		'дурак',
// 		'кретин',
// 		'моральн',
// 		'отстой',
// 		'ничтож',

// 		// Дополнительные варианты с возможными спецсимволами
// 		'х[^а-яё]*у[^а-яё]*[еёийяю]',
// 		'п[^а-яё]*[иеё][^а-яё]*з[^а-яё]*д',
// 		'б[^а-яё]*л[^а-яё]*[яa][^а-яё]*[дт]',
// 	]

// 	// Создание регулярного выражения для проверки
// 	const createInappropriateRegex = () => {
// 		try {
// 			const pattern = `\\b(${inappropriatePatterns.join('|')})\\b`
// 			return new RegExp(pattern, 'giu')
// 		} catch (error) {
// 			console.error('Ошибка создания regex:', error)
// 			return /(хуй|пизд|бля|еба|еб|сук|суч|гандон)/giu
// 		}
// 	}

// 	// Функция проверки на нецензурную лексику
// 	const checkForInappropriateContent = text => {
// 		if (!text || typeof text !== 'string') {
// 			return {
// 				hasInappropriate: false,
// 				cleanText: text || '',
// 				matches: [],
// 			}
// 		}

// 		try {
// 			const regex = createInappropriateRegex()
// 			const matches = text.match(regex) || []

// 			const additionalPatterns = [
// 				/(?:х|h)(?:у|y)(?:й|i|u)/gi,
// 				/(?:п|p)(?:и|i)(?:з|3|z)(?:д|d)/gi,
// 				/(?:б|b)(?:л|l)(?:я|a)(?:д|d|дь)/gi,
// 				/(?:е|e)(?:б|b)(?:а|a)/gi,
// 			]

// 			let allMatches = [...matches]
// 			let cleanText = text

// 			additionalPatterns.forEach(pattern => {
// 				const additionalMatches = text.match(pattern)
// 				if (additionalMatches) {
// 					allMatches = [...allMatches, ...additionalMatches]
// 					cleanText = cleanText.replace(pattern, '[цензура]')
// 				}
// 			})

// 			if (matches.length > 0) {
// 				cleanText = text.replace(regex, '[цензура]')
// 			}

// 			return {
// 				hasInappropriate: allMatches.length > 0,
// 				cleanText: cleanText,
// 				matches: [...new Set(allMatches)],
// 			}
// 		} catch (error) {
// 			console.error('Ошибка проверки текста:', error)
// 			return {
// 				hasInappropriate: false,
// 				cleanText: text,
// 				matches: [],
// 			}
// 		}
// 	}

// 	const [name, setName] = React.useState('')
// 	const [phone, setPhone] = React.useState('')
// 	const [email, setEmail] = React.useState('')
// 	const [message, setMessage] = React.useState('')
// 	const [checked, setChecked] = React.useState(false)

// 	const [nameError, setNameError] = React.useState(true)
// 	const [phoneError, setPhoneError] = React.useState(true)
// 	const [emailError, setEmailError] = React.useState(true)
// 	const [checkedError, setCheckedError] = React.useState(true)
// 	const [messageError, setMessageError] = React.useState(false)
// 	const [isLoading, setIsLoading] = React.useState(false)
// 	const [status, setStatus] = React.useState({ type: '', message: '' })
// 	const timestamp = new Date().toLocaleString('ru-RU')
// 	const userId = uuidv4()

// 	const [notice, setNotice] = React.useState(baseNotice)
// 	const [isValidate, setIsValidate] = React.useState(false)

// 	React.useEffect(() => {
// 		const isValid =
// 			!nameError && !phoneError && !emailError && !checkedError && !messageError
// 		setIsValidate(isValid)

// 		// Обновляем notice при изменении ошибок
// 		if (!isValid) {
// 			// Если есть ошибка в сообщении, показываем ее
// 			if (messageError && message.length > 299) {
// 				setNotice(messageTooLongNotice)
// 			} else if (messageError) {
// 				const inappropriateCheck = checkForInappropriateContent(message)
// 				if (inappropriateCheck.hasInappropriate) {
// 					setNotice(inappropriateContentNotice)
// 				}
// 			}
// 			// Остальные ошибки будут показаны через свои обработчики
// 		}
// 	}, [nameError, phoneError, emailError, checkedError, messageError, message])

// 	const reset = () => {
// 		setName('')
// 		setPhone('')
// 		setEmail('')
// 		setMessage('')
// 		setChecked(false)
// 		setNameError(true)
// 		setPhoneError(true)
// 		setEmailError(true)
// 		setCheckedError(true)
// 		setMessageError(false)
// 		setNotice(baseNotice)
// 	}

// 	const checkedHandler = e => {
// 		const isChecked = e.target.checked
// 		setChecked(isChecked)
// 		setCheckedError(!isChecked)

// 		if (!isChecked) {
// 			setNotice(personalDataNotice)
// 		} else if (nameError || phoneError || emailError || messageError) {
// 			// Показываем ошибку первого невалидного поля
// 			if (nameError) {
// 				if (name === '') {
// 					setNotice(emptyNameNotice)
// 				} else if (name.length > 15) {
// 					setNotice(nameTooLongNotice)
// 				}
// 			} else if (phoneError) {
// 				if (phone === '') {
// 					setNotice(emptyPhoneNotice)
// 				} else {
// 					setNotice(correctPhoneNotice)
// 				}
// 			} else if (emailError) {
// 				if (email === '') {
// 					setNotice(emptyEmailNotice)
// 				} else {
// 					setNotice(correctEmailNotice)
// 				}
// 			} else if (messageError) {
// 				if (message.length > 299) {
// 					setNotice(messageTooLongNotice)
// 				} else {
// 					setNotice(inappropriateContentNotice)
// 				}
// 			}
// 		} else {
// 			setNotice(baseNotice)
// 		}
// 	}

// 	const nameHandler = e => {
// 		const value = e.target.value

// 		if (value.length > 15) {
// 			const trimmedValue = value.substring(0, 15)
// 			setName(trimmedValue)
// 			setNotice(nameTooLongNotice)
// 			setNameError(true)
// 		} else {
// 			setName(value)

// 			if (value === '') {
// 				setNotice(emptyNameNotice)
// 				setNameError(true)
// 			} else {
// 				setNameError(false)
// 				// Проверяем другие поля после исправления имени
// 				if (checked) {
// 					if (phoneError || emailError || messageError) {
// 						if (phoneError) {
// 							if (phone === '') {
// 								setNotice(emptyPhoneNotice)
// 							} else {
// 								setNotice(correctPhoneNotice)
// 							}
// 						} else if (emailError) {
// 							if (email === '') {
// 								setNotice(emptyEmailNotice)
// 							} else {
// 								setNotice(correctEmailNotice)
// 							}
// 						} else if (messageError) {
// 							if (message.length > 299) {
// 								setNotice(messageTooLongNotice)
// 							} else {
// 								setNotice(inappropriateContentNotice)
// 							}
// 						}
// 					} else {
// 						setNotice(baseNotice)
// 					}
// 				} else {
// 					setNotice(personalDataNotice)
// 				}
// 			}
// 		}
// 	}

// 	const phoneHandler = e => {
// 		const value = e.target.value

// 		const cleanedValue = value.replace(/[^\d()+-\s]/g, '')

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
// 			setPhoneError(false)

// 			// Проверяем другие поля после исправления телефона
// 			if (checked) {
// 				if (nameError || emailError || messageError) {
// 					if (nameError) {
// 						if (name === '') {
// 							setNotice(emptyNameNotice)
// 						} else if (name.length > 15) {
// 							setNotice(nameTooLongNotice)
// 						}
// 					} else if (emailError) {
// 						if (email === '') {
// 							setNotice(emptyEmailNotice)
// 						} else {
// 							setNotice(correctEmailNotice)
// 						}
// 					} else if (messageError) {
// 						if (message.length > 299) {
// 							setNotice(messageTooLongNotice)
// 						} else {
// 							setNotice(inappropriateContentNotice)
// 						}
// 					}
// 				} else {
// 					setNotice(baseNotice)
// 				}
// 			} else {
// 				setNotice(personalDataNotice)
// 			}
// 		}
// 	}

// 	const emailHandler = e => {
// 		const value = e.target.value
// 		setEmail(value)

// 		const pattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// 		if (value === '') {
// 			setNotice(emptyEmailNotice)
// 			setEmailError(true)
// 		} else if (!pattern.test(String(value))) {
// 			setNotice(correctEmailNotice)
// 			setEmailError(true)
// 			if (value.toString().length >= 50) {
// 				setEmail('')
// 			}
// 		} else {
// 			setEmailError(false)

// 			// Проверяем другие поля после исправления email
// 			if (checked) {
// 				if (nameError || phoneError || messageError) {
// 					if (nameError) {
// 						if (name === '') {
// 							setNotice(emptyNameNotice)
// 						} else if (name.length > 15) {
// 							setNotice(nameTooLongNotice)
// 						}
// 					} else if (phoneError) {
// 						if (phone === '') {
// 							setNotice(emptyPhoneNotice)
// 						} else {
// 							setNotice(correctPhoneNotice)
// 						}
// 					} else if (messageError) {
// 						if (message.length > 299) {
// 							setNotice(messageTooLongNotice)
// 						} else {
// 							setNotice(inappropriateContentNotice)
// 						}
// 					}
// 				} else {
// 					setNotice(baseNotice)
// 				}
// 			} else {
// 				setNotice(personalDataNotice)
// 			}
// 		}
// 	}

// 	const messageHandler = e => {
// 		const value = e.target.value
// 		setMessage(value)

// 		if (value === '') {
// 			setMessageError(false)
// 			// Если сообщение очищено, показываем ошибку первого другого поля
// 			if (checked) {
// 				if (nameError || phoneError || emailError) {
// 					if (nameError) {
// 						if (name === '') {
// 							setNotice(emptyNameNotice)
// 						} else if (name.length > 15) {
// 							setNotice(nameTooLongNotice)
// 						}
// 					} else if (phoneError) {
// 						if (phone === '') {
// 							setNotice(emptyPhoneNotice)
// 						} else {
// 							setNotice(correctPhoneNotice)
// 						}
// 					} else if (emailError) {
// 						if (email === '') {
// 							setNotice(emptyEmailNotice)
// 						} else {
// 							setNotice(correctEmailNotice)
// 						}
// 					}
// 				} else {
// 					setNotice(baseNotice)
// 				}
// 			} else {
// 				setNotice(personalDataNotice)
// 			}
// 		} else {
// 			// Проверка длины
// 			if (value.length > 299) {
// 				setMessageError(true)
// 				setNotice(messageTooLongNotice)
// 				return
// 			}

// 			// Проверка на нецензурную лексику
// 			const inappropriateCheck = checkForInappropriateContent(value)
// 			if (inappropriateCheck.hasInappropriate) {
// 				setMessageError(true)
// 				setNotice(inappropriateContentNotice)
// 				setMessage(inappropriateCheck.cleanText)
// 			} else {
// 				setMessageError(false)
// 				// Если сообщение валидно, проверяем другие поля
// 				if (checked) {
// 					if (nameError || phoneError || emailError) {
// 						if (nameError) {
// 							if (name === '') {
// 								setNotice(emptyNameNotice)
// 							} else if (name.length > 10) {
// 								setNotice(nameTooLongNotice)
// 							}
// 						} else if (phoneError) {
// 							if (phone === '') {
// 								setNotice(emptyPhoneNotice)
// 							} else {
// 								setNotice(correctPhoneNotice)
// 							}
// 						} else if (emailError) {
// 							if (email === '') {
// 								setNotice(emptyEmailNotice)
// 							} else {
// 								setNotice(correctEmailNotice)
// 							}
// 						}
// 					} else {
// 						setNotice(baseNotice)
// 					}
// 				} else {
// 					setNotice(personalDataNotice)
// 				}
// 			}
// 		}
// 	}
// 	const handleSubmit = async e => {
// 		e.preventDefault()
// 		// Финальная проверка
// 		const inappropriateCheck = checkForInappropriateContent(message)
// 		if (inappropriateCheck.hasInappropriate) {
// 			setNotice(inappropriateContentNotice)
// 			setMessage(inappropriateCheck.cleanText)
// 			setMessageError(true)
// 			return
// 		}
// 		setIsValidate(false)
// 		setIsLoading(true)
// 		setStatus({ type: '', message: '' })

// 		const submitData = {
// 			name: name,
// 			phone: phone,
// 			email: email,
// 			message: message || 'сообщение не оставлено',
// 			computer: '',
// 			server: '',
// 			office: '',
// 			tariff: '',
// 			totalPrice: '',
// 			economPrice: '',
// 			litePrice: '',
// 			standartPrice: '',
// 			comfortPrice: '',
// 			formId: 'footer-form',
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

// 			// ✅ ОЧИЩАЕМ ФОРМУ
// 			reset()

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
// 			<footer className='footer'>
// 				<div
// 					style={{ display: `${pathname === '/contacts' ? 'none' : 'block'}` }}
// 					className='footer-top'
// 				></div>
// 				<div className='footer-bottom'>
// 					<div className='footer-bottom__banner footer-banner'>
// 						<div className='footer-banner__inner banner-inner'>
// 							<h1 className='banner-inner__title'>
// 								{pathname === '/contacts'
// 									? 'НАПИШИТЕ НАМ!'
// 									: 'ОБСУДИМ ВАШУ ЗАДАЧУ!'}
// 							</h1>
// 							<p className='banner-inner__desc'>{notice}</p>

// 							<form className='banner-inner__form inner-form'>
// 								<div className='inner-form__inputs'>
// 									<input
// 										autoFocus={false}
// 										id='name'
// 										name='name'
// 										type='text'
// 										placeholder='Как к вам обращаться? *'
// 										value={name}
// 										onChange={e => nameHandler(e)}
// 									/>
// 									<input
// 										id='phone'
// 										name='phone'
// 										type='text'
// 										placeholder={'+71234567890 *'}
// 										value={phone}
// 										onChange={e => phoneHandler(e)}
// 									/>
// 									<input
// 										type='email'
// 										name='email'
// 										placeholder='name@company *'
// 										value={email}
// 										onChange={e => emailHandler(e)}
// 									/>
// 								</div>
// 								<textarea
// 									name='message'
// 									id='message'
// 									placeholder={
// 										'Ваша задача или вопрос.\nИли не пишите ничего, уточним все в ходе обсуждения.'
// 									}
// 									value={message}
// 									onChange={e => messageHandler(e)}
// 									maxLength={300}
// 									rows={4}
// 								></textarea>
// 							</form>

// 							<div className={styles.button_wrapper}>
// 								{isValidate ? (
// 									<button
// 										disabled={!isValidate}
// 										type='submit'
// 										onClick={handleSubmit}
// 										className={styles.button_active}
// 									>
// 										Отправить
// 									</button>
// 								) : isLoading ? (
// 									<button
// 										style={{
// 											paddingLeft: '106px',
// 											paddingRight: '106px',
// 											paddingTop: '13px',
// 											paddingBottom: '13px',
// 										}}
// 										disabled={!isValidate}
// 										type='submit'
// 										onClick={handleSubmit}
// 										className={styles.button}
// 									>
// 										{<Spinner />}
// 									</button>
// 								) : (
// 									<button
// 										disabled={!isValidate}
// 										type='submit'
// 										onClick={handleSubmit}
// 										className={styles.button}
// 									>
// 										Отправить
// 									</button>
// 								)}

// 								{/* {isValidate ? (
// 									<button
// 										className={styles.button_active}
// 										disabled={!isValidate}
// 									>
// 										<span>Перезвоните мне!</span>
// 									</button>
// 								) : (
// 									<button disabled={!isValidate}>
// 										{isLoading ? (
// 											<span
// 												style={{
// 													display: 'flex',
// 													gap: '30px',
// 												}}
// 											>
// 												Отправка ... <Spinner />
// 											</span>
// 										) : (
// 											<span>Перезвоните мне!</span>
// 										)}
// 									</button>
// 								)} */}
// 								<div className={styles.footer_form__checkbox}>
// 									<input
// 										type='checkbox'
// 										name='footer-form-check'
// 										id='footer-form-check'
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
// 							</div>
// 						</div>
// 						<div className='banner-inner__img'>
// 							<img src='/images/footer/footer.svg' alt='image' />
// 						</div>
// 					</div>
// 					<div className='footer-links'>
// 						<div className='footer-links__inner links-inner'>
// 							<ul className='links-inner__box1'>
// 								{baseLinks.map(item => (
// 									<li key={item.title}>
// 										<Link href={item.link}>{item.title}</Link>
// 									</li>
// 								))}
// 								<ul className='links-inner__double'>
// 									{info.map(item => (
// 										<li key={item.title}>
// 											{item.title.includes('<br/>') ? (
// 												<Link href={item.link}>
// 													<span
// 														dangerouslySetInnerHTML={{ __html: item.title }}
// 													/>
// 												</Link>
// 											) : (
// 												<Link href={item.link}>{item.title}</Link>
// 											)}
// 										</li>
// 									))}
// 								</ul>
// 							</ul>

// 							<ul className='links-inner__box2'>
// 								<li>РЕШЕНИЯ И СЕРВИСЫ</li>
// 								{servLink.map(item => (
// 									<li key={item.title}>
// 										<Link href={`/services/${item.link}`}>{item.title}</Link>
// 									</li>
// 								))}
// 							</ul>
// 							<ul className='links-inner__box3'>
// 								{info.map(item => (
// 									<li key={item.title}>
// 										{item.title.includes('<br/>') ? (
// 											<Link href={item.link}>
// 												<span
// 													dangerouslySetInnerHTML={{ __html: item.title }}
// 												/>
// 											</Link>
// 										) : (
// 											<Link href={item.link}>{item.title}</Link>
// 										)}
// 									</li>
// 								))}
// 							</ul>
// 						</div>
// 					</div>
// 				</div>
// 			</footer>
// 		</>
// 	)
// }

'use client'
import Spinner from '@/components/ui/spinner/Spinner'
import { baseLinks, info, services as servLink } from '@/data'
import IMask from 'imask'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React, { useEffect, useRef } from 'react'
import { useForm } from 'react-hook-form'
import { v4 as uuidv4 } from 'uuid'
import './footer.scss'
import styles from './styles.module.scss'

export default function Footer() {
	const pathname = usePathname()

	// React Hook Form
	const {
		register,
		formState: { errors, touchedFields },
		reset,
		setValue,
		trigger,
		getValues,
	} = useForm({
		mode: 'onChange',
		defaultValues: {
			name: '',
			phone: '',
			email: '',
			message: '',
			privacyPolicy: false,
		},
	})

	const [isLoading, setIsLoading] = React.useState(false)
	const [submitAttempted, setSubmitAttempted] = React.useState(false)
	const timestamp = new Date().toLocaleString('ru-RU')
	const userId = uuidv4()

	// Refs для масок
	const phoneInputRef = useRef(null)
	const emailInputRef = useRef(null)
	const phoneMaskRef = useRef(null)
	const emailMaskRef = useRef(null)

	// Функция для проверки, нужно ли показывать ошибку для поля
	const shouldShowError = fieldName => {
		const fieldValue = getValues(fieldName)
		return (
			submitAttempted ||
			touchedFields[fieldName] ||
			(fieldValue && fieldValue.length > 0 && fieldValue !== '')
		)
	}

	// Инициализация масок
	useEffect(() => {
		// 1. МАСКА ДЛЯ ТЕЛЕФОНА
		if (phoneInputRef.current) {
			phoneMaskRef.current = IMask(phoneInputRef.current, {
				mask: '+{7} (000) 000-00-00',
				lazy: true,
				placeholderChar: '_',
			})

			phoneInputRef.current.placeholder = 'Укажите номер'

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
					phoneInputRef.current.placeholder = 'Укажите номер'
				}
				trigger('phone')
			})
		}

		// 2. МАСКА ДЛЯ EMAIL
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
				trigger('email')
			})
		}

		return () => {
			phoneMaskRef.current?.destroy()
			emailMaskRef.current?.destroy()
		}
	}, [])

	// Функция проверки на нецензурную лексику
	const checkForInappropriateContent = text => {
		if (!text || typeof text !== 'string') {
			return {
				hasInappropriate: false,
				cleanText: text || '',
				matches: [],
			}
		}

		const inappropriatePatterns = [
			// Основные русские матерные слова
			'ху[еёийяю]',
			'п[иеё]зд',
			'бля[дт]',
			'еба[нтлш]',
			'еб[аоиуы]',
			'сук[аи]?',
			'суч[ка]?',
			'гандон',
			// ... остальные паттерны
		]

		try {
			const pattern = `\\b(${inappropriatePatterns.join('|')})\\b`
			const regex = new RegExp(pattern, 'giu')
			const matches = text.match(regex) || []

			let cleanText = text
			if (matches.length > 0) {
				cleanText = text.replace(regex, '[цензура]')
			}

			return {
				hasInappropriate: matches.length > 0,
				cleanText: cleanText,
				matches: [...new Set(matches)],
			}
		} catch (error) {
			return {
				hasInappropriate: false,
				cleanText: text,
				matches: [],
			}
		}
	}

	const validateAndSubmit = async () => {
		setSubmitAttempted(true)

		// Проверка на нецензурную лексику в сообщении
		const message = getValues('message')
		if (message && message.length > 0) {
			const inappropriateCheck = checkForInappropriateContent(message)
			if (inappropriateCheck.hasInappropriate) {
				setValue('message', inappropriateCheck.cleanText, {
					shouldValidate: true,
				})
			}
		}

		// Валидируем все поля
		const nameValid = await trigger('name')
		const phoneValid = await trigger('phone')
		const emailValid = await trigger('email')
		const privacyValid = await trigger('privacyPolicy')
		const messageValid = await trigger('message')

		if (nameValid && phoneValid && emailValid && privacyValid && messageValid) {
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

		// Проверка сообщения на цензуру
		let cleanMessage = data.message
		if (cleanMessage) {
			const inappropriateCheck = checkForInappropriateContent(cleanMessage)
			if (inappropriateCheck.hasInappropriate) {
				cleanMessage = inappropriateCheck.cleanText
			}
		}

		const submitData = {
			name: data.name,
			phone: formattedPhone,
			email: data.email,
			message: cleanMessage || 'сообщение не оставлено',
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

			alert(
				'✅ Форма успешно отправлена! Мы свяжемся с вами в ближайшее время.'
			)

			// Сброс формы
			reset()
			setSubmitAttempted(false)

			// Сброс масок
			if (phoneMaskRef.current) {
				phoneMaskRef.current.value = ''
				phoneMaskRef.current.updateValue()
				if (phoneInputRef.current) {
					phoneInputRef.current.placeholder = 'Укажите номер'
				}
			}
			if (emailMaskRef.current) {
				emailMaskRef.current.value = ''
				emailMaskRef.current.updateValue()
				if (emailInputRef.current) {
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

	// Обработчик нажатия Enter
	const handleKeyPress = e => {
		if (e.key === 'Enter' && !e.shiftKey && e.target.type !== 'textarea') {
			e.preventDefault()
			validateAndSubmit()
		}
	}

	// Базовое уведомление
	const baseNotice = (
		<>
			Остались вопросы? С удовольствием проконсультируем вас по решению
			необходимой задачи и условиям обслуживания!
		</>
	)

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
							<p className='banner-inner__desc'>{baseNotice}</p>

							<form
								className='banner-inner__form inner-form'
								onSubmit={e => e.preventDefault()}
								onKeyPress={handleKeyPress}
							>
								<div className='inner-form__inputs'>
									{/* Поле Имя */}
									<input
										autoFocus={false}
										id='name'
										name='name'
										type='text'
										className={`${
											shouldShowError('name') && errors.name ? styles.error : ''
										}`}
										placeholder='Как к вам обращаться?'
										onChange={e => {
											setValue('name', e.target.value, { shouldValidate: true })
										}}
										onBlur={() => trigger('name')}
									/>
									<input
										type='hidden'
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
									/>

									{/* Поле Телефон */}
									<input
										ref={phoneInputRef}
										id='phone'
										name='phone'
										type='tel'
										className={`${
											shouldShowError('phone') && errors.phone
												? styles.error
												: ''
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

									{/* Поле Email */}
									<input
										ref={emailInputRef}
										type='email'
										name='email'
										className={`${
											shouldShowError('email') && errors.email
												? styles.error
												: ''
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
								<textarea
									name='message'
									id='message'
									className={`${
										shouldShowError('message') && errors.message
											? styles.error
											: ''
									}`}
									placeholder={
										'Ваша задача или вопрос.\nИли не пишите ничего, уточним все в ходе обсуждения.'
									}
									onChange={e => {
										const value = e.target.value
										// Проверка на нецензурную лексику
										if (value) {
											const inappropriateCheck =
												checkForInappropriateContent(value)
											if (inappropriateCheck.hasInappropriate) {
												setValue('message', inappropriateCheck.cleanText, {
													shouldValidate: true,
												})
											} else {
												setValue('message', value, { shouldValidate: true })
											}
										} else {
											setValue('message', value, { shouldValidate: true })
										}
									}}
									onBlur={() => trigger('message')}
									maxLength={300}
									rows={4}
								/>
								<input
									type='hidden'
									{...register('message', {
										maxLength: {
											value: 300,
											message: 'Сообщение не должно превышать 300 символов',
										},
									})}
								/>
							</form>

							<div className={styles.button_wrapper}>
								{isLoading ? (
									<button
										style={{
											paddingLeft: '106px',
											paddingRight: '106px',
											paddingTop: '13px',
											paddingBottom: '13px',
										}}
										className={styles.button}
									>
										<Spinner />
									</button>
								) : (
									<button
										type='button'
										onClick={validateAndSubmit}
										className={styles.button_active}
									>
										Отправить
									</button>
								)}

								<div className={styles.footer_form__checkbox}>
									<input
										type='checkbox'
										name='privacyPolicy'
										id='footer-form-check'
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
