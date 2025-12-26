export const metadata = {
	title: 'АСТРАНИТ | ТАРИФЫ',
	description: 'АСТРАНИТ ТАРИФЫ ',
}

async function fetchTariffs() {
	try {
		const res = await fetch('https://example.ru/api/tariffs', {
			cache: 'no-store',
		})
		if (!res.ok) throw new Error('Ошибка загрузки')
		return await res.json()
	} catch (error) {
		return [
			{ name: 'econom', priceComputer: 25, priceServer: 25, priceLocation: 25 },
			{ name: 'lite', priceComputer: 50, priceServer: 50, priceLocation: 50 },
			{
				name: 'standart',
				priceComputer: 75,
				priceServer: 75,
				priceLocation: 75,
			},
			{
				name: 'comfort',
				priceComputer: 100,
				priceServer: 100,
				priceLocation: 100,
			},
		]
	}
}

import TariffsDesktop from '@/components/tariffs-page/tariffs-desktop/tariffsDesktop'
export default async function TariffsPage() {
	let tariffs = []
	try {
		tariffs = await fetchTariffs()
	} catch (error) {
		console.error(error)
		tariffs = []
	}
	return (
		<>
			<TariffsDesktop tariffs={tariffs} />
		</>
	)
}
