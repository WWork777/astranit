import Link from 'next/link'
import { useForm } from 'react-hook-form'
import styles from './GeneralForm.module.scss'

const GeneralForm = ({ order = {}, price = '' }) => {
	const {
		register,
		handleSubmit,
		formState: { errors, isSubmitting, isValid },
		reset,
	} = useForm({
		mode: 'onChange',
	})

	// const formatDataForDisplay = data => {
	// 	// Определяем тип формы по ключам
	// 	const isGeneralForm = 'name' in data && 'phone' in data
	// 	const isTariffForm = 'Тип тарифа' in data

	// 	if (isGeneralForm) {
	// 		return `
	//     👤 Имя: ${data.name || 'не указано'}
	//     📞 Телефон: ${data.phone || 'не указан'}
	//     📧 Email: ${data.email || 'не указан'}
	//     💬 Сообщение: ${data.message || 'не указано'}
	//     ✅ Согласие: ${data.privacyPolicy ? 'получено' : 'не получено'}
	//   `
	// 	}

	// 	if (isTariffForm) {
	// 		return `
	//     📊 Тип тарифа: ${data['Тип тарифа'] || 'не указан'}
	//     💻 Компьютеров: ${data['Количество компьютеров'] || 0}
	//     🖥️ Серверов: ${data['Количество серверов'] || 0}
	//     🏢 Офисов: ${data['Количество офисов'] || 0}
	//   `
	// 	}

	// 	// Общий случай для любого объекта
	// 	return Object.entries(data)
	// 		.map(([key, value]) => `• ${key}: ${value || 'не указано'}`)
	// 		.join('\n')
	// }
	const formatDataForDisplay = data => {
		// Определяем тип формы по ключам
		const isGeneralForm = 'name' in data && 'phone' in data
		const isTariffForm = 'Тип тарифа' in data

		// Генерируем ID формы
		const generateFormId = () => {
			return (
				'FORM-' +
				Date.now() +
				'-' +
				Math.random().toString(36).substr(2, 9).toUpperCase()
			)
		}

		// Генерируем ID пользователя (если нет в данных)
		const generateUserId = () => {
			return 'USER-' + Math.random().toString(36).substr(2, 9).toUpperCase()
		}

		if (isGeneralForm) {
			return `
      📋 ID формы: ${data.formId || generateFormId()}
      👤 Имя: ${data.name || 'не указано'}
      📞 Телефон: ${data.phone || 'не указан'}
      📧 Email: ${data.email || 'не указан'}
      💬 Сообщение: ${data.message || 'не указано'}
      ✅ Согласие: ${data.privacyPolicy ? 'получено' : 'не получено'}
      👤 ID пользователя: ${data.userId || generateUserId()}
      🕐 Время: ${new Date().toLocaleString('ru-RU')}
    `
		}

		if (isTariffForm) {
			const formId = data.formId || generateFormId()
			const userId = data.userId || generateUserId()
			const timestamp = new Date().toLocaleString('ru-RU')

			return `
      📋 ID формы: ${formId}
      👤 ID пользователя: ${userId}
      🕐 Время отправки: ${timestamp}
      
      📊 Информация о тарифе:
      • Тип тарифа: ${data['Тип тарифа'] || 'не указан'}
      • Компьютеров: ${data['Количество компьютеров'] || 0}
      • Серверов: ${data['Количество серверов'] || 0}
      • Офисов: ${data['Количество офисов'] || 0}
      `
		}
	}

	const onSubmit = async data => {
		console.log('Форма отправлена:', data)
		const orderData = {}
		Object.entries(order).map(([key, value]) => (orderData[key] = value))
		// const merged = Object.assign({}, orderData, data)
		const message1 = formatDataForDisplay(data)
		const message2 = formatDataForDisplay(orderData)
		const message3 = price
		// Здесь можно добавить отправку данных на сервер
		// Пример: await fetch('/api/submit', { method: 'POST', body: JSON.stringify(data) });

		// Очистка формы после отправки
		reset()
		alert(
			`✅ Форма отправлена!\n${message1}\n${message2}\nСтоимость услуг: ${message3}`
		)
	}

	return (
		<div className={styles.AuditForm}>
			<form onSubmit={handleSubmit(onSubmit)} className={styles.form}>
				{/* Поле Имя */}
				<div className={styles.formGroup}>
					<label htmlFor='name' className={styles.label}>
						Имя *
					</label>
					<input
						id='name'
						type='text'
						className={`${styles.input} ${errors.name ? styles.error : ''}`}
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
						placeholder='Введите ваше имя'
					/>
					{errors.name && (
						<span className={styles.errorMessage}>{errors.name.message}</span>
					)}
				</div>

				{/* Поле Телефон */}
				<div className={styles.formGroup}>
					<label htmlFor='phone' className={styles.label}>
						Телефон *
					</label>
					<input
						id='phone'
						type='tel'
						className={`${styles.input} ${errors.phone ? styles.error : ''}`}
						{...register('phone', {
							required: 'Телефон обязателен для заполнения',
							pattern: {
								value: /^[\+]?[0-9\s\-\(\)]+$/,
								message: 'Введите корректный номер телефона',
							},
							minLength: {
								value: 6,
								message: 'Телефон должен содержать минимум 6 цифр',
							},
						})}
						placeholder='+71234567890'
					/>
					{errors.phone && (
						<span className={styles.errorMessage}>{errors.phone.message}</span>
					)}
				</div>

				{/* Поле Email */}
				<div className={styles.formGroup}>
					<label htmlFor='email' className={styles.label}>
						Email *
					</label>
					<input
						id='email'
						type='email'
						className={`${styles.input} ${errors.email ? styles.error : ''}`}
						{...register('email', {
							required: 'Email обязателен для заполнения',
							pattern: {
								value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
								message: 'Введите корректный email адрес',
							},
						})}
						placeholder='example@mail.com'
					/>
					{errors.email && (
						<span className={styles.errorMessage}>{errors.email.message}</span>
					)}
				</div>

				{/* Поле Сообщение (необязательное) */}
				<div className={styles.formGroup}>
					<label htmlFor='message' className={styles.label}>
						Сообщение
					</label>
					<textarea
						id='message'
						className={styles.textarea}
						{...register('message', {
							maxLength: {
								value: 500,
								message: 'Сообщение не должно превышать 500 символов',
							},
						})}
						placeholder='Ваше сообщение (необязательно)'
						rows={4}
					/>
					{errors.message && (
						<span className={styles.errorMessage}>
							{errors.message.message}
						</span>
					)}
				</div>

				{/* Чекбокс согласия */}
				<div className={styles.formGroup}>
					<div className={styles.checkboxContainer}>
						<input
							id='privacyPolicy'
							type='checkbox'
							className={styles.checkbox}
							{...register('privacyPolicy', {
								required:
									'Необходимо согласие на обработку персональных данных',
							})}
						/>
						<label htmlFor='privacyPolicy' className={styles.checkboxLabel}>
							Я согласен на{' '}
							<Link className={styles.personalDataLink} href={'/personal'}>
								обработку персональных данных
							</Link>{' '}
							*
						</label>
					</div>
					{errors.privacyPolicy && (
						<span className={styles.errorMessage}>
							{errors.privacyPolicy.message}
						</span>
					)}
				</div>

				{/* Кнопка отправки */}
				<div className={styles.formGroup}>
					<button
						type='submit'
						className={styles.submitButton}
						disabled={isSubmitting || !isValid}
					>
						{isSubmitting ? 'Отправка...' : 'Отправить'}
					</button>
				</div>
			</form>
		</div>
	)
}

export default GeneralForm
