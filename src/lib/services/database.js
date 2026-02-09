// // // lib/services/database.js
// // import db from '@/lib/db'

// // /**
// //  * Сервис для сохранения заявок в базу данных
// //  */
// // export class DatabaseService {
// // 	/**
// // 	 * Сохраняем заявку в таблицу users
// // 	 */
// // 	static async saveFormSubmission(formData) {
// // 		try {
// // 			const {
// // 				name,
// // 				phone,
// // 				email,
// // 				message,
// // 				computer,
// // 				server,
// // 				office,
// // 				tariff,
// // 				totalPrice,
// // 				totalEconomPrice,
// // 				totalLitePrice,
// // 				totalStandartPrice,
// // 				totalComfortPrice,
// // 				formId,
// // 				userId,
// // 				timestamp,
// // 			} = formData

// // 			// Преобразуем названия полей под таблицу
// // 			const computers = computer ? parseInt(computer) : null
// // 			const servers = server ? parseInt(server) : null
// // 			const offices = office ? parseInt(office) : null

// // 			// Определяем, какие данные сохранять в зависимости от типа формы
// // 			let sql = ''
// // 			let params = []

// // 			switch (formId) {
// // 				case 'tariff-desktop':
// // 				case 'tariff-mobile':
// // 					sql = `
// //             INSERT INTO users (
// //               name, phone, email, message, id_form, tariff,
// //               computers, servers, offices,
// //               totalPrice, economPrice, litePrice, standartPrice, comfortPrice,
// //               created_at
// //             ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
// //           `
// // 					params = [
// // 						name || null,
// // 						phone,
// // 						email || null,
// // 						message || null,
// // 						formId,
// // 						tariff || null,
// // 						computers,
// // 						servers,
// // 						offices,
// // 						totalPrice || totalEconomPrice || null,
// // 						totalEconomPrice || null,
// // 						totalLitePrice || null,
// // 						totalStandartPrice || null,
// // 						totalComfortPrice || null,
// // 						timestamp ? new Date(timestamp) : new Date(),
// // 					]
// // 					break

// // 				case 'footer-form':
// // 				case 'audit-form':
// // 					sql = `
// //             INSERT INTO users (
// //               name, phone, email, message, id_form, created_at
// //             ) VALUES (?, ?, ?, ?, ?, ?)
// //           `
// // 					params = [
// // 						name || null,
// // 						phone,
// // 						email || null,
// // 						message || null,
// // 						formId,
// // 						timestamp ? new Date(timestamp) : new Date(),
// // 					]
// // 					break

// // 				case 'hero-mobile':
// // 				case 'hero-desktop':
// // 					sql = `
// //             INSERT INTO users (
// //               name, phone, id_form, created_at
// //             ) VALUES (?, ?, ?, ?)
// //           `
// // 					params = [
// // 						name || null,
// // 						phone,
// // 						formId,
// // 						timestamp ? new Date(timestamp) : new Date(),
// // 					]
// // 					break

// // 				default:
// // 					sql = `
// //             INSERT INTO users (
// //               name, phone, email, message, id_form, created_at
// //             ) VALUES (?, ?, ?, ?, ?, ?)
// //           `
// // 					params = [
// // 						name || null,
// // 						phone,
// // 						email || null,
// // 						message || null,
// // 						formId || 'unknown',
// // 						timestamp ? new Date(timestamp) : new Date(),
// // 					]
// // 			}

// // 			// Выполняем запрос
// // 			const [result] = await db.execute(sql, params)

// // 			return {
// // 				success: true,
// // 				data: {
// // 					id: result.insertId,
// // 					insertedId: result.insertId,
// // 					affectedRows: result.affectedRows,
// // 				},
// // 			}
// // 		} catch (error) {
// // 			console.error('❌ Ошибка сохранения в базу данных:', error.message)
// // 			return {
// // 				success: false,
// // 				error: error.message,
// // 				code: error.code,
// // 			}
// // 		}
// // 	}

// // 	/**
// // 	 * Проверяем дубликаты заявок (по телефону за последние 24 часа)
// // 	 */
// // 	static async checkDuplicate(phone, formId) {
// // 		try {
// // 			const [rows] = await db.execute(
// // 				`SELECT id, created_at FROM users
// //          WHERE phone = ? AND id_form = ?
// //          AND created_at >= DATE_SUB(NOW(), INTERVAL 24 HOUR)
// //          LIMIT 1`,
// // 				[phone, formId]
// // 			)

// // 			return {
// // 				isDuplicate: rows.length > 0,
// // 				duplicateData: rows[0] || null,
// // 			}
// // 		} catch (error) {
// // 			console.error('Ошибка проверки дубликата:', error)
// // 			return { isDuplicate: false }
// // 		}
// // 	}

// // 	/**
// // 	 * Получаем статистику по заявкам
// // 	 */
// // 	static async getFormStats(formId, days = 30) {
// // 		try {
// // 			const [rows] = await db.execute(
// // 				`SELECT
// //           DATE(created_at) as date,
// //           COUNT(*) as count,
// //           GROUP_CONCAT(DISTINCT tariff) as tariffs
// //          FROM users
// //          WHERE id_form = ?
// //            AND created_at >= DATE_SUB(NOW(), INTERVAL ? DAY)
// //          GROUP BY DATE(created_at)
// //          ORDER BY date DESC`,
// // 				[formId, days]
// // 			)

// // 			return {
// // 				success: true,
// // 				data: rows,
// // 			}
// // 		} catch (error) {
// // 			return {
// // 				success: false,
// // 				error: error.message,
// // 			}
// // 		}
// // 	}
// // }

// // lib/services/database.js
// import db from '@/lib/db'

// /**
//  * Сервис для сохранения заявок в базу данных
//  */
// export class DatabaseService {
// 	/**
// 	 * Сохраняем заявку в таблицу users
// 	 */
// 	static async saveFormSubmission(formData) {
// 		try {
// 			const {
// 				name,
// 				phone,
// 				email,
// 				message,
// 				computer,
// 				server,
// 				office,
// 				tariff,
// 				totalPrice,
// 				totalEconomPrice,
// 				totalLitePrice,
// 				totalStandartPrice,
// 				totalComfortPrice,
// 				formId,
// 				userId,
// 				timestamp,
// 			} = formData

// 			// Преобразуем названия полей под таблицу
// 			const computers = computer ? parseInt(computer) : null
// 			const servers = server ? parseInt(server) : null
// 			const offices = office ? parseInt(office) : null

// 			// Определяем, какие данные сохранять в зависимости от типа формы
// 			let sql = ''
// 			let params = []

// 			switch (formId) {
// 				case 'tariff-desktop':
// 				case 'tariff-mobile':
// 					sql = `
//             INSERT INTO users (
//               name, phone, email, message, id_form, tariff,
//               computers, servers, offices,
//               totalPrice, economPrice, litePrice, standartPrice, comfortPrice,
//               created_at
//             ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
//           `
// 					params = [
// 						name || null,
// 						phone || null,
// 						email || null,
// 						message || null,
// 						formId,
// 						tariff || null,
// 						computers,
// 						servers,
// 						offices,
// 						totalPrice || totalEconomPrice || null,
// 						totalEconomPrice || null,
// 						totalLitePrice || null,
// 						totalStandartPrice || null,
// 						totalComfortPrice || null,
// 						timestamp ? new Date(timestamp) : new Date(),
// 					]
// 					break

// 				case 'footer-form':
// 				case 'audit-form':
// 					sql = `
//             INSERT INTO users (
//               name, phone, email, message, id_form, created_at
//             ) VALUES (?, ?, ?, ?, ?, ?)
//           `
// 					params = [
// 						name || null,
// 						phone || null,
// 						email || null,
// 						message || null,
// 						formId,
// 						timestamp ? new Date(timestamp) : new Date(),
// 					]
// 					break

// 				case 'hero-mobile':
// 				case 'hero-desktop':
// 					sql = `
//             INSERT INTO users (
//               name, phone, email, id_form, created_at
//             ) VALUES (?, ?, ?, ?, ?)
//           `
// 					params = [
// 						name || null,
// 						phone || null,
// 						email || null, // Добавляем email даже если он пустой
// 						formId,
// 						timestamp ? new Date(timestamp) : new Date(),
// 					]
// 					break

// 				default:
// 					sql = `
//             INSERT INTO users (
//               name, phone, email, message, id_form, created_at
//             ) VALUES (?, ?, ?, ?, ?, ?)
//           `
// 					params = [
// 						name || null,
// 						phone || null,
// 						email || null,
// 						message || null,
// 						formId || 'unknown',
// 						timestamp ? new Date(timestamp) : new Date(),
// 					]
// 			}

// 			// Выполняем запрос
// 			const [result] = await db.execute(sql, params)

// 			return {
// 				success: true,
// 				data: {
// 					id: result.insertId,
// 					insertedId: result.insertId,
// 					affectedRows: result.affectedRows,
// 				},
// 			}
// 		} catch (error) {
// 			console.error('❌ Ошибка сохранения в базу данных:', error.message)
// 			return {
// 				success: false,
// 				error: error.message,
// 				code: error.code,
// 			}
// 		}
// 	}

// 	/**
// 	 * Проверяем дубликаты заявок (по телефону за последние 24 часа)
// 	 */
// 	static async checkDuplicate(phone, formId) {
// 		try {
// 			const [rows] = await db.execute(
// 				`SELECT id, created_at FROM users
//          WHERE phone = ? AND id_form = ?
//          AND created_at >= DATE_SUB(NOW(), INTERVAL 24 HOUR)
//          LIMIT 1`,
// 				[phone, formId]
// 			)

// 			return {
// 				isDuplicate: rows.length > 0,
// 				duplicateData: rows[0] || null,
// 			}
// 		} catch (error) {
// 			console.error('Ошибка проверки дубликата:', error)
// 			return { isDuplicate: false }
// 		}
// 	}

// 	/**
// 	 * Получаем статистику по заявкам
// 	 */
// 	static async getFormStats(formId, days = 30) {
// 		try {
// 			const [rows] = await db.execute(
// 				`SELECT
//           DATE(created_at) as date,
//           COUNT(*) as count,
//           GROUP_CONCAT(DISTINCT tariff) as tariffs
//          FROM users
//          WHERE id_form = ?
//            AND created_at >= DATE_SUB(NOW(), INTERVAL ? DAY)
//          GROUP BY DATE(created_at)
//          ORDER BY date DESC`,
// 				[formId, days]
// 			)

// 			return {
// 				success: true,
// 				data: rows,
// 			}
// 		} catch (error) {
// 			return {
// 				success: false,
// 				error: error.message,
// 			}
// 		}
// 	}
// }

// lib/services/database.js
import db from '@/lib/db'

/**
 * Сервис для сохранения заявок в базу данных
 */
export class DatabaseService {
	/**
	 * Сохраняем заявку в таблицу users
	 */
	static async saveFormSubmission(formData) {
		try {
			const {
				name,
				phone,
				email,
				message,
				computer,
				server,
				office,
				tariff,
				computerCount,
				serverCount,
				officeCount,
				tariffName,
				totalPrice,
				totalEconomPrice,
				totalLitePrice,
				totalStandartPrice,
				totalComfortPrice,
				formId,
				userId,
				// timestamp - больше не используем, база сама установит created_at
			} = formData

			// Преобразуем названия полей под таблицу
			const computers = computerCount ? parseInt(computerCount) : null
			const servers = serverCount ? parseInt(serverCount) : null
			const offices = officeCount ? parseInt(officeCount) : null

			// Определяем, какие данные сохранять в зависимости от типа формы
			let sql = ''
			let params = []

			switch (formId) {
				case 'tariff-desktop':
				case 'tariff-mobile':
					sql = `
            INSERT INTO users (
              name, phone, email, message, id_form, tariff,
              computers, servers, offices,
              totalPrice, economPrice, litePrice, standartPrice, comfortPrice
              -- created_at убрали - база установит автоматически
            ) VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
            -- Было 15 параметров, стало 14
          `
					params = [
						name || null,
						phone || null,
						email || null,
						message || null,
						formId,
						tariffName || null,
						computers,
						servers,
						offices,
						totalPrice || totalEconomPrice || null,
						totalEconomPrice || null,
						totalLitePrice || null,
						totalStandartPrice || null,
						totalComfortPrice || null,
						// timestamp убрали
					]
					break

				case 'footer-form':
				case 'audit-form':
					sql = `
            INSERT INTO users (
              name, phone, email, message, id_form
              -- created_at убрали
            ) VALUES (?, ?, ?, ?, ?)
            -- Было 6 параметров, стало 5
          `
					params = [
						name || null,
						phone || null,
						email || null,
						message || null,
						formId,
						// timestamp убрали
					]
					break

				case 'hero-mobile':
				case 'hero-desktop':
					sql = `
            INSERT INTO users (
              name, phone, email, id_form
              -- created_at убрали
            ) VALUES (?, ?, ?, ?)
            -- Было 5 параметров, стало 4
          `
					params = [
						name || null,
						phone || null,
						email || null,
						formId,
						// timestamp убрали
					]
					break

				default:
					sql = `
            INSERT INTO users (
              name, phone, email, message, id_form
              -- created_at убрали
            ) VALUES (?, ?, ?, ?, ?)
            -- Было 6 параметров, стало 5
          `
					params = [
						name || null,
						phone || null,
						email || null,
						message || null,
						formId || 'unknown',
						// timestamp убрали
					]
			}

			// Выполняем запрос
			const [result] = await db.execute(sql, params)

			return {
				success: true,
				data: {
					id: result.insertId,
					insertedId: result.insertId,
					affectedRows: result.affectedRows,
				},
			}
		} catch (error) {
			console.error('❌ Ошибка сохранения в базу данных:', error.message)
			return {
				success: false,
				error: error.message,
				code: error.code,
			}
		}
	}

	/**
	 * Проверяем дубликаты заявок (по телефону за последние 24 часа)
	 */
	// static async checkDuplicate(phone, formId) {
	// 	try {
	// 		const [rows] = await db.execute(
	// 			`SELECT id, created_at FROM users
	//        WHERE phone = ? AND id_form = ?
	//        AND created_at >= DATE_SUB(NOW(), INTERVAL 24 HOUR)
	//        LIMIT 1`,
	// 			[phone, formId],
	// 		)

	// 		return {
	// 			isDuplicate: rows.length > 0,
	// 			duplicateData: rows[0] || null,
	// 		}
	// 	} catch (error) {
	// 		console.error('Ошибка проверки дубликата:', error)
	// 		return { isDuplicate: false }
	// 	}
	// }

	/**
	 * Получаем статистику по заявкам
	 */
	// static async getFormStats(formId, days = 30) {
	// 	try {
	// 		const [rows] = await db.execute(
	// 			`SELECT
	//         DATE(created_at) as date,
	//         COUNT(*) as count,
	//         GROUP_CONCAT(DISTINCT tariff) as tariffs
	//        FROM users
	//        WHERE id_form = ?
	//          AND created_at >= DATE_SUB(NOW(), INTERVAL ? DAY)
	//        GROUP BY DATE(created_at)
	//        ORDER BY date DESC`,
	// 			[formId, days],
	// 		)

	// 		return {
	// 			success: true,
	// 			data: rows,
	// 		}
	// 	} catch (error) {
	// 		return {
	// 			success: false,
	// 			error: error.message,
	// 		}
	// 	}
	// }

	/**
	 * Получить последние заявки (опционально)
	 */
	// static async getRecentSubmissions(limit = 50) {
	// 	try {
	// 		const [rows] = await db.execute(
	// 			`SELECT
	// 				id, name, phone, email, id_form,
	// 				tariff, created_at
	// 			FROM users
	// 			ORDER BY created_at DESC
	// 			LIMIT ?`,
	// 			[limit],
	// 		)

	// 		return {
	// 			success: true,
	// 			data: rows,
	// 		}
	// 	} catch (error) {
	// 		return {
	// 			success: false,
	// 			error: error.message,
	// 		}
	// 	}
	// }
}
