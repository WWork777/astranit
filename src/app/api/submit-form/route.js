// // app/api/submit-form/route.js
// import { sendTelegramMessage } from '@/lib/services/telegram'
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
// 			totalPrice,
// 			economPrice,
// 			litePrice,
// 			standartPrice,
// 			comfortPrice,
// 			formId,
// 			userId,
// 			timestamp,
// 		} = formData

// 		// Проверка обязательных полей
// 		const missingFields = []
// 		if (!name) missingFields.push('name')
// 		// if (!email) missingFields.push('email')
// 		// if (!message) missingFields.push('message')
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

// 		// Проверка формата телефона для WhatsApp (только цифры)
// 		// const phoneRegex = /^\d+$/
// 		// if (!phoneRegex.test(phone)) {
// 		// 	return NextResponse.json(
// 		// 		{
// 		// 			success: false,
// 		// 			error: 'Номер телефона должен содержать только цифры (без знака +)',
// 		// 		},
// 		// 		{ status: 400 }
// 		// 	)
// 		// }

// 		// 2. Подготавливаем данные для отправки
// 		const dataGeneration = () => {
// 			const configs = {
// 				'hero-mobile': {
// 					dataToSend: { name, phone, userId, formId, timestamp },
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
// 		const { dataToSend, results, errors } = dataGeneration()
// 		// const dataToSend = { name, email, message, phone }
// 		// const results = {}
// 		// const errors = []

// 		console.log('Начинаем параллельную отправку во все сервисы...')

// 		// 3. ПАРАЛЛЕЛЬНАЯ ОТПРАВКА с использованием Promise.allSettled
// 		const [emailResult, telegramResult, whatsappResult] =
// 			await Promise.allSettled([sendTelegramMessage(dataToSend)])

// 		// 4. Обработка результатов каждой отправки
// 		// Email
// 		// if (emailResult.status === 'fulfilled') {
// 		// 	results.email = {
// 		// 		success: true,
// 		// 		data: emailResult.value,
// 		// 		service: 'Email',
// 		// 		messageId: emailResult.value?.messageId,
// 		// 	}
// 		// 	console.log('✅ Email отправлен успешно')
// 		// } else {
// 		// 	results.email = {
// 		// 		success: false,
// 		// 		error: emailResult.reason?.message || 'Неизвестная ошибка',
// 		// 		service: 'Email',
// 		// 	}
// 		// 	errors.push(`Email: ${results.email.error}`)
// 		// 	console.error('❌ Ошибка Email:', results.email.error)
// 		// }

// 		// Telegram
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

// 		// WhatsApp через Green-API
// 		// if (whatsappResult.status === 'fulfilled') {
// 		// 	// Проверяем специфический ответ Green-API
// 		// 	const whatsappData = whatsappResult.value
// 		// 	const isGreenApiSuccess = whatsappData && whatsappData.idMessage

// 		// 	results.whatsapp = {
// 		// 		success: isGreenApiSuccess,
// 		// 		data: whatsappData,
// 		// 		service: 'WhatsApp (Green-API)',
// 		// 		messageId: whatsappData?.idMessage,
// 		// 	}

// 		// 	if (isGreenApiSuccess) {
// 		// 		console.log('✅ WhatsApp сообщение отправлено через Green-API')
// 		// 	} else {
// 		// 		const errorMsg = whatsappData?.message || 'Неизвестная ошибка Green-API'
// 		// 		results.whatsapp.error = errorMsg
// 		// 		errors.push(`WhatsApp: ${errorMsg}`)
// 		// 		console.error('❌ Ошибка WhatsApp:', errorMsg)
// 		// 	}
// 		// } else {
// 		// 	results.whatsapp = {
// 		// 		success: false,
// 		// 		error: whatsappResult.reason?.message || 'Неизвестная ошибка',
// 		// 		service: 'WhatsApp (Green-API)',
// 		// 	}
// 		// 	errors.push(`WhatsApp: ${results.whatsapp.error}`)
// 		// 	console.error('❌ Ошибка WhatsApp:', results.whatsapp.error)
// 		// }

// 		// 5. Определяем общий успех операции
// 		// Считаем успешной, если хотя бы один сервис отработал
// 		const successfulServices = Object.values(results).filter(
// 			r => r.success === true
// 		)
// 		const isOverallSuccess = successfulServices.length > 0

// 		// 6. Формируем ответ
// 		const responseData = {
// 			success: isOverallSuccess,
// 			timestamp: new Date().toISOString(),
// 			services: results,
// 			summary: {
// 				total: 3,
// 				successful: successfulServices.length,
// 				failed: 3 - successfulServices.length,
// 			},
// 		}

// 		// Добавляем предупреждения, если есть ошибки
// 		if (errors.length > 0) {
// 			responseData.warnings = errors
// 		}

// 		// Добавляем сообщение в зависимости от результата
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
// 		// 7. Обработка неожиданных ошибок
// 		console.error('💥 Критическая ошибка обработки формы:', error)

// 		return NextResponse.json(
// 			{
// 				success: false,
// 				error: 'Внутренняя ошибка сервера при обработке запроса',
// 				details:
// 					process.env.NODE_ENV === 'development'
// 						? {
// 								message: error.message,
// 								stack: error.stack,
// 						  }
// 						: undefined,
// 				timestamp: new Date().toISOString(),
// 			},
// 			{ status: 500 }
// 		)
// 	}
// }

// app/api/submit-form/route.js
import { sendTelegramMessage } from '@/lib/services/telegram'
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

		// 2. Подготавливаем данные для отправки
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

		console.log('Начинаем отправку в Telegram...')

		// 3. ОТПРАВКА В TELEGRAM
		let telegramResult
		try {
			telegramResult = await sendTelegramMessage(dataToSend)
			results.telegram = {
				success: true,
				data: telegramResult,
				service: 'Telegram',
				messageId: telegramResult?.result?.message_id,
			}
			console.log('✅ Telegram сообщение отправлено')
		} catch (error) {
			results.telegram = {
				success: false,
				error: error.message || 'Неизвестная ошибка',
				service: 'Telegram',
			}
			errors.push(`Telegram: ${results.telegram.error}`)
			console.error('❌ Ошибка Telegram:', results.telegram.error)
		}

		// 4. Формируем ответ
		const successfulServices = Object.values(results).filter(
			r => r.success === true
		)
		const isOverallSuccess = successfulServices.length > 0

		const responseData = {
			success: isOverallSuccess,
			timestamp: new Date().toISOString(),
			services: results,
			summary: {
				total: 1, // ← измените на 1 (только Telegram)
				successful: successfulServices.length,
				failed: 1 - successfulServices.length,
			},
			message: isOverallSuccess
				? 'Сообщение успешно отправлено в Telegram'
				: 'Не удалось отправить сообщение в Telegram',
		}

		if (errors.length > 0) {
			responseData.warnings = errors
		}

		return NextResponse.json(responseData, {
			status: isOverallSuccess ? 200 : 500,
		})
	} catch (error) {
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
