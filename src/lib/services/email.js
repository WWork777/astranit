// lib/services/email.js
import nodemailer from 'nodemailer'

const transporter = nodemailer.createTransport({
	host: process.env.EMAIL_SERVER,
	port: process.env.EMAIL_PORT,
	secure: true,
	auth: {
		type: process.env.EMAIL_USER_TYPE,
		user: process.env.EMAIL_SERVER_USER,
		pass: process.env.EMAIL_SERVER_PASSWORD,
	},
	tls: { rejectUnauthorized: false },
})

export async function sendEmail(formData) {
	const {
		name,
		phone,
		email,
		message,
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
	} = formData

	// Формируем тему письма в зависимости от типа формы
	const getFormTitle = () => {
		const formTitles = {
			'hero-mobile': 'Запрос обратной связи',
			'hero-desktop': 'Запрос обратной связи',
			'footer-form': 'Запрос консультации',
			'tariff-desktop': 'Коммерческое предложение',
			'tariff-mobile': 'Коммерческое предложение',
			'audit-form': 'Заявка на аудит',
		}
		return formTitles[formId] || 'Заявка с сайта'
	}

	// Функция для проверки и форматирования полей
	const formatField = (value, label, defaultValue = 'не указано') => {
		return value ? `<p><strong>${label}:</strong> ${value}</p>` : ''
	}

	// Формируем HTML содержимое письма
	let htmlContent = `
		<h3>Новая заявка с сайта</h3>
		<p><strong>Тип формы:</strong> ${formId}</p>
	`

	// Добавляем поля с проверкой
	htmlContent += formatField(name, 'Имя')
	htmlContent += formatField(phone, 'Телефон')
	htmlContent += formatField(email, 'Email')
	htmlContent += formatField(message, 'Сообщение')
	htmlContent += formatField(userId, 'ID пользователя')
	htmlContent += formatField(new Date().toLocaleString(), 'Время обработки')
	htmlContent += formatField(tariff, 'Выбранный тариф')
	htmlContent += formatField(
		totalPrice ? `${totalPrice} руб.` : null,
		'Итоговая цена'
	)

	// Обрабатываем поля с ценами для тарифов
	if (
		totalEconomPrice ||
		totalLitePrice ||
		totalStandartPrice ||
		totalComfortPrice
	) {
		htmlContent += `<p><strong>Цены по тарифам:</strong></p>`
		if (totalEconomPrice)
			htmlContent += `<p> - Эконом: ${totalEconomPrice} руб.</p>`
		if (totalLitePrice) htmlContent += `<p> - Лайт: ${totalLitePrice} руб.</p>`
		if (totalStandartPrice)
			htmlContent += `<p> - Стандарт: ${totalStandartPrice} руб.</p>`
		if (totalComfortPrice)
			htmlContent += `<p> - Комфорт: ${totalComfortPrice} руб.</p>`
	}

	// Обрабатываем поля для оборудования
	if (computer || server || office) {
		htmlContent += `<p><strong>Оборудование:</strong></p>`
		if (computer) htmlContent += `<p> - Компьютеры: ${computer}</p>`
		if (server) htmlContent += `<p> - Серверы: ${server}</p>`
		if (office) htmlContent += `<p> - Офис: ${office}</p>`
	}

	// Закрывающая часть
	htmlContent += `
		<hr>
		<p><small>Форма ID: ${formId} </small></p>
	`

	const mailOptions = {
		from: process.env.EMAIL_FROM,
		to: process.env.EMAIL_TO,
		subject: `${getFormTitle()} от ${name || 'пользователя'}`,
		html: htmlContent,
	}

	return await transporter.sendMail(mailOptions)
}
