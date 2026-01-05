import db from '@/lib/db'

export async function GET(req) {
	try {
		// Получаем все разделы с услугами в структурированном виде
		const query = `
			SELECT 
				ss.id AS section_id,
				ss.title AS section_title,
				ss.sort_order AS section_order,
				si.id AS service_id,
				si.title AS service_title,
				si.sort_order AS service_order,
				si.econom,
				si.lite,
				si.standart,
				si.comfort
			FROM service_sections ss
			JOIN service_items si ON ss.id = si.section_id
			ORDER BY ss.sort_order, si.sort_order
		`

		const [rows] = await db.query(query)

		// Структурируем данные для удобства использования на фронтенде
		const structuredData = rows.reduce((acc, row) => {
			let section = acc.find(s => s.id === row.section_id)

			if (!section) {
				section = {
					id: row.section_id,
					title: row.section_title,
					order: row.section_order,
					items: [],
				}
				acc.push(section)
			}

			section.items.push({
				id: row.service_id,
				title: row.service_title,
				order: row.service_order,
				econom: row.econom,
				lite: row.lite,
				standart: row.standart,
				comfort: row.comfort,
			})

			return acc
		}, [])

		return new Response(JSON.stringify(structuredData), {
			status: 200,
			headers: {
				'Content-Type': 'application/json',
				'Cache-Control': 'public, max-age=3600', // Кэшируем на 1 час
			},
		})
	} catch (error) {
		console.error('Database error:', error)
		return new Response(
			JSON.stringify({
				error: 'Ошибка подключения к базе данных',
				details: error.message,
			}),
			{
				status: 500,
				headers: { 'Content-Type': 'application/json' },
			}
		)
	}
}
