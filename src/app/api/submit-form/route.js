// import { sendEmail } from '@/lib/services/email'
// import { sendTelegramMessage } from '@/lib/services/telegram'
// import { sendWhatsAppMessage } from '@/lib/services/whatsapp-greenapi'
// import { NextResponse } from 'next/server'

// export async function POST(request) {
// 	try {
// 		// 1. Получаем и валидируем данные формы
// 		const formData = await request.json()
// 		const {
// 			name,
// 			phone,
// 			email,
// 			message,
// 			computer,
// 			server,
// 			office,
// 			tariff,
// 			totalPrice,
// 			totalEconomPrice,
// 			totalLitePrice,
// 			totalStandartPrice,
// 			totalComfortPrice,
// 			formId,
// 			userId,
// 			timestamp,
// 		} = formData

// 		// Проверка обязательных полей
// 		const missingFields = []
// 		if (!phone) missingFields.push('phone')
// 		if (missingFields.length > 0) {
// 			return NextResponse.json(
// 				{
// 					success: false,
// 					error: `Обязательные поля отсутствуют: ${missingFields.join(', ')}`,
// 				},
// 				{ status: 400 }
// 			)
// 		}

// 		// 2. Подготавливаем данные для отправки
// 		const dataGeneration = () => {
// 			const configs = {
// 				'hero-mobile': {
// 					dataToSend: { name, phone, userId, formId, timestamp },
// 					results: {},
// 					errors: [],
// 				},
// 				'hero-desktop': {
// 					dataToSend: { phone, userId, formId, timestamp },
// 					results: {},
// 					errors: [],
// 				},
// 				'footer-form': {
// 					dataToSend: {
// 						name,
// 						phone,
// 						email,
// 						message,
// 						userId,
// 						formId,
// 						timestamp,
// 					},
// 					results: {},
// 					errors: [],
// 				},
// 				'tariff-desktop': {
// 					dataToSend: {
// 						name,
// 						phone,
// 						email,
// 						message,
// 						tariff,
// 						computer,
// 						server,
// 						office,
// 						tariff,
// 						totalPrice,
// 						userId,
// 						formId,
// 						timestamp,
// 					},
// 					results: {},
// 					errors: [],
// 				},
// 				'tariff-mobile': {
// 					dataToSend: {
// 						name,
// 						phone,
// 						email,
// 						message,
// 						computer,
// 						server,
// 						office,
// 						totalEconomPrice,
// 						totalLitePrice,
// 						totalStandartPrice,
// 						totalComfortPrice,
// 						userId,
// 						formId,
// 						timestamp,
// 					},
// 					results: {},
// 					errors: [],
// 				},
// 				'audit-form': {
// 					dataToSend: {
// 						name,
// 						phone,
// 						email,
// 						message,
// 						userId,
// 						formId,
// 						timestamp,
// 					},
// 					results: {},
// 					errors: [],
// 				},
// 			}
// 			return (
// 				configs[formId] || {
// 					dataToSend: {},
// 					results: {},
// 					errors: ['Неизвестный тип формы'],
// 				}
// 			)
// 		}
// 		const { dataToSend } = dataGeneration()
// 		const results = {}
// 		const errors = []

// 		console.log(
// 			'Начинаем параллельную отправку в Email, Telegram и WhatsApp...'
// 		)

// 		// 3. ПАРАЛЛЕЛЬНАЯ ОТПРАВКА В EMAIL, TELEGRAM И WHATSAPP
// 		const [emailResult, telegramResult, whatsappResult] =
// 			await Promise.allSettled([
// 				sendEmail(dataToSend),
// 				sendTelegramMessage(dataToSend),
// 				sendWhatsAppMessage(dataToSend),
// 			])

// 		// 4. Обработка результатов Email
// 		if (emailResult.status === 'fulfilled') {
// 			results.email = {
// 				success: true,
// 				data: emailResult.value,
// 				service: 'Email',
// 				messageId: emailResult.value?.messageId || emailResult.value?.id,
// 			}
// 			console.log('✅ Email отправлен успешно')
// 		} else {
// 			results.email = {
// 				success: false,
// 				error: emailResult.reason?.message || 'Неизвестная ошибка',
// 				service: 'Email',
// 			}
// 			errors.push(`Email: ${results.email.error}`)
// 			console.error('❌ Ошибка Email:', results.email.error)
// 		}

// 		// 5. Обработка результатов Telegram
// 		if (telegramResult.status === 'fulfilled') {
// 			results.telegram = {
// 				success: true,
// 				data: telegramResult.value,
// 				service: 'Telegram',
// 				messageId: telegramResult.value?.result?.message_id,
// 			}
// 			console.log('✅ Telegram сообщение отправлено')
// 		} else {
// 			results.telegram = {
// 				success: false,
// 				error: telegramResult.reason?.message || 'Неизвестная ошибка',
// 				service: 'Telegram',
// 			}
// 			errors.push(`Telegram: ${results.telegram.error}`)
// 			console.error('❌ Ошибка Telegram:', results.telegram.error)
// 		}

// 		// WHATSAPP: 6. Обработка результатов WhatsApp
// 		if (whatsappResult.status === 'fulfilled') {
// 			// Проверяем специфический ответ Green-API
// 			const whatsappData = whatsappResult.value
// 			const isGreenApiSuccess = whatsappData && whatsappData.idMessage

// 			results.whatsapp = {
// 				success: isGreenApiSuccess,
// 				data: whatsappData,
// 				service: 'WhatsApp',
// 				messageId: whatsappData?.idMessage,
// 			}

// 			if (isGreenApiSuccess) {
// 				console.log('✅ WhatsApp сообщение отправлено')
// 			} else {
// 				const errorMsg = whatsappData?.message || 'Неизвестная ошибка Green-API'
// 				results.whatsapp.error = errorMsg
// 				errors.push(`WhatsApp: ${errorMsg}`)
// 				console.error('❌ Ошибка WhatsApp:', errorMsg)
// 			}
// 		} else {
// 			results.whatsapp = {
// 				success: false,
// 				error: whatsappResult.reason?.message || 'Неизвестная ошибка',
// 				service: 'WhatsApp',
// 			}
// 			errors.push(`WhatsApp: ${results.whatsapp.error}`)
// 			console.error('❌ Ошибка WhatsApp:', results.whatsapp.error)
// 		}

// 		// 7. Формируем ответ
// 		const successfulServices = Object.values(results).filter(
// 			r => r.success === true
// 		)
// 		const isOverallSuccess = successfulServices.length > 0

// 		const responseData = {
// 			success: isOverallSuccess,
// 			timestamp: new Date().toISOString(),
// 			services: results,
// 			summary: {
// 				total: 3, // Теперь 3 сервиса: Email, Telegram и WhatsApp
// 				successful: successfulServices.length,
// 				failed: 3 - successfulServices.length,
// 			},
// 		}

// 		if (errors.length > 0) {
// 			responseData.warnings = errors
// 		}

// 		// Определяем сообщение в зависимости от результата
// 		if (!isOverallSuccess) {
// 			responseData.message =
// 				'Не удалось отправить сообщение ни в один из сервисов'
// 			return NextResponse.json(responseData, { status: 500 })
// 		} else if (successfulServices.length < 3) {
// 			responseData.message = `Сообщение отправлено в ${successfulServices.length} из 3 сервисов`
// 			return NextResponse.json(responseData, { status: 207 }) // Multi-Status
// 		} else {
// 			responseData.message = 'Сообщение успешно отправлено во все сервисы'
// 			return NextResponse.json(responseData, { status: 200 })
// 		}
// 	} catch (error) {
// 		// 8. Обработка неожиданных ошибок
// 		console.error('💥 Критическая ошибка обработки формы:', error)
// 		return NextResponse.json(
// 			{
// 				success: false,
// 				error: 'Внутренняя ошибка сервера при обработке запроса',
// 				details:
// 					process.env.NODE_ENV === 'development'
// 						? { message: error.message, stack: error.stack }
// 						: undefined,
// 				timestamp: new Date().toISOString(),
// 			},
// 			{ status: 500 }
// 		)
// 	}
// }

// app/api/submit-form/route.js
import { DatabaseService } from '@/lib/services/database'
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
		if (!formId) missingFields.push('formId')

		if (missingFields.length > 0) {
			return NextResponse.json(
				{
					success: false,
					error: `Обязательные поля отсутствуют: ${missingFields.join(', ')}`,
				},
				{ status: 400 }
			)
		}

		// 2. Проверка дубликатов (опционально)
		const duplicateCheck = await DatabaseService.checkDuplicate(phone, formId)
		if (duplicateCheck.isDuplicate) {
			console.log(
				`⚠️ Найдена дублирующая заявка от ${phone} для формы ${formId}`
			)
			// Можно либо прервать выполнение, либо продолжить с предупреждением
		}

		// 3. Подготавливаем данные для отправки
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

		console.log('Начинаем обработку заявки...')

		// 4. ПАРАЛЛЕЛЬНАЯ ОТПРАВКА в Email, Telegram, WhatsApp И СОХРАНЕНИЕ В БАЗУ
		const [emailResult, telegramResult, whatsappResult, dbResult] =
			await Promise.allSettled([
				sendEmail(dataToSend),
				sendTelegramMessage(dataToSend),
				sendWhatsAppMessage(dataToSend),
				DatabaseService.saveFormSubmission(formData), // Сохраняем в БД
			])

		// 5. Обработка результатов Базы данных
		if (dbResult.status === 'fulfilled') {
			results.database = dbResult.value
			if (dbResult.value.success) {
				console.log('✅ Данные сохранены в базу. ID:', dbResult.value.data.id)
			} else {
				console.error('❌ Ошибка сохранения в базу:', dbResult.value.error)
				errors.push(`База данных: ${dbResult.value.error}`)
			}
		} else {
			results.database = {
				success: false,
				error: dbResult.reason?.message || 'Неизвестная ошибка БД',
				service: 'Database',
			}
			errors.push(`База данных: ${results.database.error}`)
			console.error('❌ Ошибка БД:', results.database.error)
		}

		// 6. Обработка результатов Email
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

		// 7. Обработка результатов Telegram
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

		// 8. Обработка результатов WhatsApp
		if (whatsappResult.status === 'fulfilled') {
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

		// 9. Формируем ответ
		const successfulServices = Object.values(results).filter(
			r => r.success === true
		)

		// Общий успех, если хотя бы одно сохранение или отправка удалась
		const isOverallSuccess = successfulServices.length > 0

		const responseData = {
			success: isOverallSuccess,
			timestamp: new Date().toISOString(),
			services: results,
			summary: {
				total: 4, // Email, Telegram, WhatsApp, Database
				successful: successfulServices.length,
				failed: 4 - successfulServices.length,
			},
			formData: {
				id: results.database?.data?.id, // ID из базы данных
				formId,
				timestamp: timestamp || new Date().toISOString(),
			},
		}

		if (duplicateCheck.isDuplicate) {
			responseData.warning = 'Найдена дублирующая заявка'
			responseData.duplicateId = duplicateCheck.duplicateData?.id
		}

		if (errors.length > 0) {
			responseData.errors = errors
		}

		// Определяем HTTP статус
		let statusCode = 200

		if (!isOverallSuccess) {
			responseData.message = 'Не удалось обработать заявку'
			statusCode = 500
		} else if (successfulServices.length < 4) {
			responseData.message = `Заявка частично обработана (${successfulServices.length}/4 сервисов)`
			statusCode = 207 // Multi-Status
		} else {
			responseData.message = 'Заявка успешно обработана во всех сервисах'
		}

		return NextResponse.json(responseData, { status: statusCode })
	} catch (error) {
		// 10. Обработка неожиданных ошибок
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
