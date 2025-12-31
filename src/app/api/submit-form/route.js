// app/api/submit-form/route.js
import { sendEmail } from '@/lib/services/email'
import { sendTelegramMessage } from '@/lib/services/telegram'
import { sendWhatsAppMessage } from '@/lib/services/whatsapp-greenapi'
import { NextResponse } from 'next/server'

export async function POST(request) {
	try {
		// 1. Получаем и валидируем данные формы
		const formData = await request.json()
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

		// Проверка обязательных полей
		const missingFields = []
		if (!phone) missingFields.push('phone')
		if (missingFields.length > 0) {
			return NextResponse.json(
				{
					success: false,
					error: `Обязательные поля отсутствуют: ${missingFields.join(', ')}`,
				},
				{ status: 400 }
			)
		}

		// 2. Подготавливаем данные для отправки (ваш код без изменений)
		const dataGeneration = () => {
			const configs = {
				'hero-mobile': {
					dataToSend: { name, phone, userId, formId, timestamp },
					results: {},
					errors: [],
				},
				'hero-desktop': {
					dataToSend: { phone, userId, formId, timestamp },
					results: {},
					errors: [],
				},
				'footer-form': {
					dataToSend: {
						name,
						phone,
						email,
						message,
						userId,
						formId,
						timestamp,
					},
					results: {},
					errors: [],
				},
				'tariff-desktop': {
					dataToSend: {
						name,
						phone,
						email,
						message,
						tariff,
						computer,
						server,
						office,
						tariff,
						totalPrice,
						userId,
						formId,
						timestamp,
					},
					results: {},
					errors: [],
				},
				'tariff-mobile': {
					dataToSend: {
						name,
						phone,
						email,
						message,
						computer,
						server,
						office,
						totalEconomPrice,
						totalLitePrice,
						totalStandartPrice,
						totalComfortPrice,
						userId,
						formId,
						timestamp,
					},
					results: {},
					errors: [],
				},
				'audit-form': {
					dataToSend: {
						name,
						phone,
						email,
						message,
						userId,
						formId,
						timestamp,
					},
					results: {},
					errors: [],
				},
			}
			return (
				configs[formId] || {
					dataToSend: {},
					results: {},
					errors: ['Неизвестный тип формы'],
				}
			)
		}
		const { dataToSend } = dataGeneration()
		const results = {}
		const errors = []

		console.log(
			'Начинаем параллельную отправку в Email, Telegram и WhatsApp...'
		)

		// 3. ПАРАЛЛЕЛЬНАЯ ОТПРАВКА В EMAIL, TELEGRAM И WHATSAPP
		const [emailResult, telegramResult, whatsappResult] =
			await Promise.allSettled([
				sendEmail(dataToSend),
				sendTelegramMessage(dataToSend),
				sendWhatsAppMessage(dataToSend),
			])

		// 4. Обработка результатов Email
		if (emailResult.status === 'fulfilled') {
			results.email = {
				success: true,
				data: emailResult.value,
				service: 'Email',
				messageId: emailResult.value?.messageId || emailResult.value?.id,
			}
			console.log('✅ Email отправлен успешно')
		} else {
			results.email = {
				success: false,
				error: emailResult.reason?.message || 'Неизвестная ошибка',
				service: 'Email',
			}
			errors.push(`Email: ${results.email.error}`)
			console.error('❌ Ошибка Email:', results.email.error)
		}

		// 5. Обработка результатов Telegram
		if (telegramResult.status === 'fulfilled') {
			results.telegram = {
				success: true,
				data: telegramResult.value,
				service: 'Telegram',
				messageId: telegramResult.value?.result?.message_id,
			}
			console.log('✅ Telegram сообщение отправлено')
		} else {
			results.telegram = {
				success: false,
				error: telegramResult.reason?.message || 'Неизвестная ошибка',
				service: 'Telegram',
			}
			errors.push(`Telegram: ${results.telegram.error}`)
			console.error('❌ Ошибка Telegram:', results.telegram.error)
		}

		// WHATSAPP: 6. Обработка результатов WhatsApp
		if (whatsappResult.status === 'fulfilled') {
			// Проверяем специфический ответ Green-API
			const whatsappData = whatsappResult.value
			const isGreenApiSuccess = whatsappData && whatsappData.idMessage

			results.whatsapp = {
				success: isGreenApiSuccess,
				data: whatsappData,
				service: 'WhatsApp',
				messageId: whatsappData?.idMessage,
			}

			if (isGreenApiSuccess) {
				console.log('✅ WhatsApp сообщение отправлено')
			} else {
				const errorMsg = whatsappData?.message || 'Неизвестная ошибка Green-API'
				results.whatsapp.error = errorMsg
				errors.push(`WhatsApp: ${errorMsg}`)
				console.error('❌ Ошибка WhatsApp:', errorMsg)
			}
		} else {
			results.whatsapp = {
				success: false,
				error: whatsappResult.reason?.message || 'Неизвестная ошибка',
				service: 'WhatsApp',
			}
			errors.push(`WhatsApp: ${results.whatsapp.error}`)
			console.error('❌ Ошибка WhatsApp:', results.whatsapp.error)
		}

		// 7. Формируем ответ
		const successfulServices = Object.values(results).filter(
			r => r.success === true
		)
		const isOverallSuccess = successfulServices.length > 0

		const responseData = {
			success: isOverallSuccess,
			timestamp: new Date().toISOString(),
			services: results,
			summary: {
				total: 3, // Теперь 3 сервиса: Email, Telegram и WhatsApp
				successful: successfulServices.length,
				failed: 3 - successfulServices.length,
			},
		}

		if (errors.length > 0) {
			responseData.warnings = errors
		}

		// Определяем сообщение в зависимости от результата
		if (!isOverallSuccess) {
			responseData.message =
				'Не удалось отправить сообщение ни в один из сервисов'
			return NextResponse.json(responseData, { status: 500 })
		} else if (successfulServices.length < 3) {
			responseData.message = `Сообщение отправлено в ${successfulServices.length} из 3 сервисов`
			return NextResponse.json(responseData, { status: 207 }) // Multi-Status
		} else {
			responseData.message = 'Сообщение успешно отправлено во все сервисы'
			return NextResponse.json(responseData, { status: 200 })
		}
	} catch (error) {
		// 8. Обработка неожиданных ошибок
		console.error('💥 Критическая ошибка обработки формы:', error)
		return NextResponse.json(
			{
				success: false,
				error: 'Внутренняя ошибка сервера при обработке запроса',
				details:
					process.env.NODE_ENV === 'development'
						? { message: error.message, stack: error.stack }
						: undefined,
				timestamp: new Date().toISOString(),
			},
			{ status: 500 }
		)
	}
}
