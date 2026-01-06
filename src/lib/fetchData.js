import { mockPrices, mockTariffsList } from '@/data'
export async function fetchPrices() {
	try {
		const res = await fetch(process.env.FETCH_URL_PRICE, {
			cache: 'no-store',
		})
		if (!res.ok) throw new Error('Ошибка загрузки')
		return await res.json()
	} catch (error) {
		return mockPrices
	}
}
export async function fetchTariffsList() {
	try {
		const res = await fetch(process.env.FETCH_URL_TARIFFS, {
			cache: 'no-store',
		})
		if (!res.ok) throw new Error('Ошибка загрузки')
		return await res.json()
	} catch (error) {
		return mockTariffsList
	}
}
