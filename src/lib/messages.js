// lib/messages.js
export const generateFormMessage = formData => {
	const fields = formData

	// Функция проверки, что поле имеет значение
	const hasValue = value => {
		return (
			value !== null && value !== undefined && value !== '' && value !== ' '
		)
	}

	const parts = [
		'📨 *ЗАЯВКА С САЙТА*',
		'',
		// Контактные данные
		hasValue(fields.name) ? `👤 *Имя:* ${fields.name}` : null,
		hasValue(fields.phone) ? `📞 *Телефон:* ${fields.phone}` : null,
		hasValue(fields.email) ? `📧 *Email:* ${fields.email}` : null,

		// Технические параметры (если есть хотя бы одно)
		hasValue(fields.computerCount) ||
		hasValue(fields.serverCount) ||
		hasValue(fields.officeCount)
			? '\n💻 *ТЕХНИЧЕСКИЕ ПАРАМЕТРЫ*'
			: null,
		hasValue(fields.computerCount) ||
		hasValue(fields.serverCount) ||
		hasValue(fields.officeCount)
			? ''
			: null, // Пустая строка после заголовка, если есть параметры
		hasValue(fields.tariffName) ? `  🎖️ Тариф: ${fields.tariffName}` : null,
		hasValue(fields.computerCount)
			? `   🖥️ Компьютеры: ${fields.computerCount}`
			: null,
		hasValue(fields.serverCount)
			? `   🗄️ Серверы: ${fields.serverCount}`
			: null,
		hasValue(fields.officeCount) ? `   🏢 Офисы: ${fields.officeCount}` : null,

		// Стоимость (если есть хотя бы одно поле цены)
		hasValue(fields.totalPrice) ||
		hasValue(fields.totalEconomPrice) ||
		hasValue(fields.totalLitePrice) ||
		hasValue(fields.totalStandartPrice) ||
		hasValue(fields.totalComfortPrice)
			? '\n💰 *СТОИМОСТЬ*'
			: null,
		hasValue(fields.totalPrice) ||
		hasValue(fields.totalEconomPrice) ||
		hasValue(fields.totalLitePrice) ||
		hasValue(fields.totalStandartPrice) ||
		hasValue(fields.totalComfortPrice)
			? ''
			: null, // Пустая строка после заголовка
		hasValue(fields.totalPrice)
			? `   💰 Общая: ${fields.totalPrice} руб.`
			: null,
		hasValue(fields.totalEconomPrice)
			? `   💸 Econom: ${fields.totalEconomPrice} руб.`
			: null,
		hasValue(fields.totalLitePrice)
			? `   ⚡ Lite: ${fields.totalLitePrice} руб.`
			: null,
		hasValue(fields.totalStandartPrice)
			? `   📊 Standart: ${fields.totalStandartPrice} руб.`
			: null,
		hasValue(fields.totalComfortPrice)
			? `   🌟 Comfort: ${fields.totalComfortPrice} руб.`
			: null,

		// Служебная информация
		'\n📋 *СЛУЖЕБНАЯ ИНФОРМАЦИЯ*',
		'',
		hasValue(fields.formId) ? `   🏷️ Форма: ${fields.formId}` : null,
		hasValue(fields.userId) ? `   🆔 ID пользователя: ${fields.userId}` : null,
		hasValue(fields.timestamp) ? `   🕐 Время: ${fields.timestamp}` : null,

		// Сообщение пользователя
		hasValue(fields.message)
			? `\n💬 *СООБЩЕНИЕ ПОЛЬЗОВАТЕЛЯ:*\n${fields.message}`
			: null,
	].filter(Boolean)

	return parts.join('\n')
}
