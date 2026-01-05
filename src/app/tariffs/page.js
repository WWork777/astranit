// export const metadata = {
// 	title: 'АСТРАНИТ | ТАРИФЫ',
// 	description: 'АСТРАНИТ ТАРИФЫ ',
// }

// import TariffsDesktop from '@/components/tariffs-page/tariffs-desktop/tariffsDesktop'
// import { mockPrices } from '@/data'
// import { fetchPrices } from '@/lib/fetchData'
// export default async function TariffsPage() {
// 	let prices = []
// 	try {
// 		prices = await fetchPrices()
// 	} catch (error) {
// 		console.error(error)
// 		prices = mockPrices
// 	}
// 	return (
// 		<>
// 			<TariffsDesktop tariffs={prices} />
// 		</>
// 	)
// }
// app/tariffs/page.js
export const metadata = {
	title: 'АСТРАНИТ | ТАРИФЫ',
	description: 'АСТРАНИТ - тарифы на IT-обслуживание',
}

import TariffsDesktop from '@/components/tariffs-page/tariffs-desktop/tariffsDesktop'
import { fetchPrices, fetchTariffsList } from '@/lib/fetchData'

export default async function TariffsPage() {
	// Получаем данные параллельно для оптимизации
	const [prices, tariffsList] = await Promise.allSettled([
		fetchPrices(),
		fetchTariffsList(),
	])

	// Обрабатываем результаты
	const pricesData = prices.status === 'fulfilled' ? prices.value : []
	const tariffsListData =
		tariffsList.status === 'fulfilled' ? tariffsList.value : []

	// Логируем ошибки если есть
	if (prices.status === 'rejected') {
		console.error('Failed to fetch prices:', prices.reason)
	}

	if (tariffsList.status === 'rejected') {
		console.error('Failed to fetch tariffs list:', tariffsList.reason)
	}

	return (
		<>
			{/* Передаем оба набора данных компоненту */}
			<TariffsDesktop tariffs={pricesData} list={tariffsListData} />
		</>
	)
}
