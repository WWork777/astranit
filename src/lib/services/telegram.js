import { generateFormMessage } from '../messages'
export async function sendTelegramMessage(formData) {
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
	const botToken = process.env.TELEGRAM_BOT_TOKEN
	const chatId = process.env.TELEGRAM_CHAT_ID

	if (!botToken || !chatId) {
		throw new Error(
			'Конфигурация Telegram не настроена (BOT_TOKEN или CHAT_ID)'
		)
	}
	const url = `https://api.telegram.org/bot${botToken}/sendMessage`

	const response = await fetch(url, {
		method: 'POST',
		headers: { 'Content-Type': 'application/json' },
		body: JSON.stringify({
			chat_id: chatId,
			text: generateFormMessage(formData),
			parse_mode: 'Markdown',
		}),
	})

	if (!response.ok) {
		const errorData = await response.json().catch(() => ({}))
		throw new Error(
			`Telegram: ${response.status} - ${
				errorData.description || 'Неизвестная ошибка'
			}`
		)
	}

	return await response.json()
}
