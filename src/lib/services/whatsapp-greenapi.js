// lib/services/whatsapp-greenapi.js
import { generateFormMessage } from '../messages'
export async function sendWhatsAppMessage(formData) {
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
	const idInstance = process.env.GREEN_API_ID_INSTANCE
	const apiTokenInstance = process.env.GREEN_API_TOKEN_INSTANCE
	const yourPhoneNumber = process.env.YOUR_WHATSAPP_NUMBER

	// Проверяем наличие всех необходимых переменных
	if (!idInstance || !apiTokenInstance || !yourPhoneNumber) {
		throw new Error('Не настроены переменные окружения для WhatsApp')
	}

	// Форматируем номер телефона (убираем все нецифровые символы)
	const cleanPhone = yourPhoneNumber.replace(/\D/g, '')
	const chatId = `${cleanPhone}@c.us`

	// URL для метода sendMessage Green-API
	// const apiUrl = `${url}/waInstance${idInstance}/sendMessage/${apiTokenInstance}`
	const apiUrl = `https://1103.api.green-api.com/waInstance${idInstance}/sendMessage/${apiTokenInstance}`

	const requestBody = {
		chatId: chatId,
		message: generateFormMessage(formData),
	}

	const response = await fetch(apiUrl, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify(requestBody),
	})

	if (!response.ok) {
		const errorText = await response.text()
		throw new Error(`Ошибка WhatsApp ${response.status}: ${errorText}`)
	}

	return await response.json() // В ответе будет { idMessage: "..." }
}
