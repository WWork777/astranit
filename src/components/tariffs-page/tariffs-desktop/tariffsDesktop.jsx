// 'use client'
// import Ranges from '@/components/ui/ranges/Ranges'
// import { tariffsList as list } from '@/data'
// import sliderStore from '@/store/sliderStore'
// import { observer } from 'mobx-react-lite'
// import { useEffect, useState } from 'react'
// import TariffsMobile from '../tariffs-mobile/tariffsMobile'
// import styles from './styles.module.scss'
// import './tariffsDesktop.scss'

// const TariffsDesktop = observer(({ tariffs }) => {
// 	const calculateTotalPrice = tariffType => {
// 		const tariff = tariffs.find(t => t.name === tariffType)
// 		if (!tariff) return 0
// 		const total =
// 			sliderStore.computerValue * tariff.priceComputer +
// 			sliderStore.serversValue * tariff.priceServer +
// 			sliderStore.officesValue * tariff.priceLocation

// 		return total
// 	}
// 	const [isMobile, setIsMobile] = useState(false)
// 	const [totalEconomPrice, setTotalEconomPrice] = useState(
// 		calculateTotalPrice('econom')
// 	)
// 	const [totalLitePrice, setTotalLitePrice] = useState(
// 		calculateTotalPrice('lite')
// 	)
// 	const [totalStandartPrice, setTotalStandartPrice] = useState(
// 		calculateTotalPrice('standart')
// 	)
// 	const [totalComfortPrice, setTotalComfortPrice] = useState(
// 		calculateTotalPrice('comfort')
// 	)
// 	useEffect(() => {
// 		setTotalEconomPrice(calculateTotalPrice('econom'))
// 		setTotalLitePrice(calculateTotalPrice('lite'))
// 		setTotalStandartPrice(calculateTotalPrice('standart'))
// 		setTotalComfortPrice(calculateTotalPrice('comfort'))
// 	}, [
// 		sliderStore.computerValue,
// 		sliderStore.serversValue,
// 		sliderStore.officesValue,
// 	])
// 	useEffect(() => {
// 		const checkScreenSize = () => {
// 			setIsMobile(window.innerWidth < 992)
// 		}

// 		checkScreenSize()
// 		window.addEventListener('resize', checkScreenSize)

// 		return () => window.removeEventListener('resize', checkScreenSize)
// 	}, [])

// 	return (
// 		<>
// 			<section className='tariffs'>
// 				<div className='tariffs__container '>
// 					<h1 className='tariffs-title'>ТАРИФЫ ИТ-ПОДДЕРЖКИ</h1>

// 					{isMobile ? (
// 						<TariffsMobile
// 							list={list}
// 							totalEconomPrice={totalEconomPrice}
// 							totalLitePrice={totalLitePrice}
// 							totalStandartPrice={totalStandartPrice}
// 							totalComfortPrice={totalComfortPrice}
// 						/>
// 					) : (
// 						<div className='tariffs-body'>
// 							<div className='tariffs-body__ranges'>
// 								<p className='tariffs-body__ranges_title'>
// 									Сколько у вас компьютеров, серверов, офисов?
// 								</p>
// 								<div className='tariffs-body__ranges_inputs'>
// 									<Ranges styles={styles} />
// 								</div>
// 							</div>
// 							<div className='tariffs-body__inner'>
// 								<div className='tariffs-body__header'>
// 									<div className='tariffs-body__header_title'>
// 										Тариф / 1 месяц:
// 									</div>
// 									<div className='tariffs-body__header_econom'>
// 										<div className='tariffs-econom'>
// 											<p className='tariffs-econom_title'>Эконом</p>
// 											<span className='tariffs-econom_counter'>
// 												{totalEconomPrice} ₽
// 											</span>
// 											<button className='tariffs-econom_button'>
// 												Получить КП!
// 											</button>
// 										</div>
// 									</div>
// 									<div className='tariffs-body__header_lite'>
// 										<div className='tariffs-lite'>
// 											<p className='tariffs-lite_title'>Лайт</p>
// 											<span className='tariffs-lite_counter'>
// 												{totalLitePrice} ₽
// 											</span>
// 											<button className='tariffs-lite_button'>
// 												Получить КП!
// 											</button>
// 										</div>
// 									</div>
// 									<div className='tariffs-body__header_standart'>
// 										<div className='tariffs-standart'>
// 											<p className='tariffs-standart_title'>Стандарт</p>
// 											<span className='tariffs-standart_counter'>
// 												{totalStandartPrice} ₽
// 											</span>
// 											<button className='tariffs-standart_button'>
// 												Получить КП!
// 											</button>
// 										</div>
// 									</div>
// 									<div className='tariffs-body__header_comfort'>
// 										<div className='tariffs-comfort'>
// 											<p className='tariffs-comfort_title'>Комфорт</p>
// 											<span className='tariffs-comfort_counter'>
// 												{totalComfortPrice} ₽
// 											</span>
// 											<button className='tariffs-comfort_button'>
// 												Получить КП!
// 											</button>
// 										</div>
// 									</div>
// 								</div>
// 								<div className='tariffs-body__list'>
// 									<ul className='tariffs__body-list tariffs-list'>
// 										{list.map(item => (
// 											<li
// 												key={item.title}
// 												className='tariffs__body-list-item tariffs-list__item'
// 											>
// 												<h2 className='tariffs-list__item_title'>
// 													{item.title}
// 												</h2>
// 												{item.body.map(list => (
// 													<div
// 														key={list.title}
// 														className='tariffs-list__item_body'
// 													>
// 														<div className='ttitle'>{list.title}</div>
// 														<div
// 															style={{
// 																margin: 'auto',
// 																width: '15px',
// 																height: '15px',
// 																borderRadius: '100%',
// 																backgroundColor: `${list.econom}`,
// 															}}
// 														></div>
// 														<div
// 															style={{
// 																margin: 'auto',
// 																width: '15px',
// 																height: '15px',
// 																borderRadius: '100%',
// 																backgroundColor: `${list.lite}`,
// 															}}
// 														></div>
// 														<div
// 															style={{
// 																margin: 'auto',
// 																width: '15px',
// 																height: '15px',
// 																borderRadius: '100%',
// 																backgroundColor: `${list.standart}`,
// 															}}
// 														></div>
// 														<div
// 															style={{
// 																margin: 'auto',
// 																width: '15px',
// 																height: '15px',
// 																borderRadius: '100%',
// 																backgroundColor: `${list.comfort}`,
// 															}}
// 														></div>
// 													</div>
// 												))}
// 											</li>
// 										))}
// 									</ul>
// 								</div>
// 								<div className='tariffs-body__footer'>
// 									<div className='tariffs-body__footer_title'>
// 										Тариф / 1 месяц:
// 									</div>
// 									<div className='tariffs-body__footer_econom'>
// 										<div className='tariffs-econom'>
// 											<p className='tariffs-econom_title'>Эконом</p>
// 											<span className='tariffs-econom_counter'>
// 												{totalEconomPrice} ₽
// 											</span>
// 											<button className='tariffs-econom_button'>
// 												Получить КП!
// 											</button>
// 										</div>
// 									</div>
// 									<div className='tariffs-body__footer_lite'>
// 										<div className='tariffs-lite'>
// 											<p className='tariffs-lite_title'>Лайт</p>
// 											<span className='tariffs-lite_counter'>
// 												{totalLitePrice} ₽
// 											</span>
// 											<button className='tariffs-lite_button'>
// 												Получить КП!
// 											</button>
// 										</div>
// 									</div>
// 									<div className='tariffs-body__footer_standart'>
// 										<div className='tariffs-standart'>
// 											<p className='tariffs-standart_title'>Стандарт</p>
// 											<span className='tariffs-standart_counter'>
// 												{totalStandartPrice} ₽
// 											</span>
// 											<button className='tariffs-standart_button'>
// 												Получить КП!
// 											</button>
// 										</div>
// 									</div>
// 									<div className='tariffs-body__footer_comfort'>
// 										<div className='tariffs-comfort'>
// 											<p className='tariffs-comfort_title'>Комфорт</p>
// 											<span className='tariffs-comfort_counter'>
// 												{totalComfortPrice} ₽
// 											</span>
// 											<button className='tariffs-comfort_button'>
// 												Получить КП!
// 											</button>
// 										</div>
// 									</div>
// 								</div>
// 								<div className='tariffs-body__reference'>
// 									<div className='tariffs-body__reference-box reference-box '>
// 										<div className='reference-box__marker reference-box__marker_1'></div>
// 										<span className='reference-box__title'>
// 											услуга входит в стоимость тарифа
// 										</span>
// 									</div>
// 									<div className='tariffs-body__reference-box reference-box'>
// 										<div className='reference-box__marker reference-box__marker_2'></div>
// 										<span className='reference-box__title'>
// 											возможен заказ услуги за дополнительную плату
// 										</span>
// 									</div>
// 									<div className='tariffs-body__reference-box reference-box '>
// 										<div className='reference-box__marker reference-box__marker_3'></div>
// 										<span className='reference-box__title'>
// 											услуга не доступна на данном тарифе
// 										</span>
// 									</div>
// 								</div>
// 							</div>
// 						</div>
// 					)}
// 				</div>
// 			</section>
// 		</>
// 	)
// })
// export default TariffsDesktop

'use client'
import Ranges from '@/components/ui/ranges/Ranges'
import { tariffsList as list } from '@/data'
import modalStore from '@/store/modalStore'
import sliderStore from '@/store/sliderStore'
import { observer } from 'mobx-react-lite'
import { useEffect, useState } from 'react'
import TariffsMobile from '../tariffs-mobile/tariffsMobile'
import styles from './styles.module.scss'
import './tariffsDesktop.scss'

const TariffsDesktop = observer(({ tariffs }) => {
	const [isMobile, setIsMobile] = useState(false)

	const calculateTotalPrice = tariffType => {
		const tariff = tariffs.find(t => t.name === tariffType)
		if (!tariff) return 0
		const total =
			sliderStore.computerValue * tariff.priceComputer +
			sliderStore.serversValue * tariff.priceServer +
			sliderStore.officesValue * tariff.priceLocation
		return total
	}

	const [totalEconomPrice, setTotalEconomPrice] = useState(
		calculateTotalPrice('econom')
	)
	const [totalLitePrice, setTotalLitePrice] = useState(
		calculateTotalPrice('lite')
	)
	const [totalStandartPrice, setTotalStandartPrice] = useState(
		calculateTotalPrice('standart')
	)
	const [totalComfortPrice, setTotalComfortPrice] = useState(
		calculateTotalPrice('comfort')
	)

	useEffect(() => {
		setTotalEconomPrice(calculateTotalPrice('econom'))
		setTotalLitePrice(calculateTotalPrice('lite'))
		setTotalStandartPrice(calculateTotalPrice('standart'))
		setTotalComfortPrice(calculateTotalPrice('comfort'))
	}, [
		sliderStore.computerValue,
		sliderStore.serversValue,
		sliderStore.officesValue,
	])

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 992)
		}

		checkScreenSize()
		window.addEventListener('resize', checkScreenSize)

		return () => window.removeEventListener('resize', checkScreenSize)
	}, [])

	const handleGetQuote = (tariffName = '', price = '') => {
		modalStore.openModal({
			formId: 'tariff-desktop',
			tariffName,
			totalPrice: price,
			totalEconomPrice,
			totalLitePrice,
			totalStandartPrice,
			totalComfortPrice,
			title: 'Коммерческое предложение',
			type: 'general',
			customData: {
				'Тип тарифа': tariffName,
				'Количество компьютеров': sliderStore.computerValue,
				'Количество серверов': sliderStore.serversValue,
				'Количество офисов': sliderStore.officesValue,
			},
		})
	}

	return (
		<>
			<section className='tariffs'>
				<div className='tariffs__container'>
					<h1 className='tariffs-title'>ТАРИФЫ ИТ-ПОДДЕРЖКИ</h1>

					{isMobile ? (
						<TariffsMobile
							list={list}
							totalEconomPrice={totalEconomPrice}
							totalLitePrice={totalLitePrice}
							totalStandartPrice={totalStandartPrice}
							totalComfortPrice={totalComfortPrice}
						/>
					) : (
						<div className='tariffs-body'>
							<div className='tariffs-body__ranges'>
								<p className='tariffs-body__ranges_title'>
									Сколько у вас компьютеров, серверов, офисов?
								</p>
								<div className='tariffs-body__ranges_inputs'>
									<Ranges styles={styles} />
								</div>
							</div>
							<div className='tariffs-body__inner'>
								<div className='tariffs-body__header'>
									<div className='tariffs-body__header_title'>
										Тариф / 1 месяц:
									</div>
									<div className='tariffs-body__header_econom'>
										<div className='tariffs-econom'>
											<p className='tariffs-econom_title'>Эконом</p>
											<span className='tariffs-econom_counter'>
												{totalEconomPrice} ₽
											</span>
											<button
												className='tariffs-econom_button'
												onClick={() =>
													handleGetQuote('Эконом', totalEconomPrice)
												}
											>
												Получить КП!
											</button>
										</div>
									</div>
									<div className='tariffs-body__header_lite'>
										<div className='tariffs-lite'>
											<p className='tariffs-lite_title'>Лайт</p>
											<span className='tariffs-lite_counter'>
												{totalLitePrice} ₽
											</span>
											<button
												className='tariffs-lite_button'
												onClick={() => handleGetQuote('Лайт', totalLitePrice)}
											>
												Получить КП!
											</button>
										</div>
									</div>
									<div className='tariffs-body__header_standart'>
										<div className='tariffs-standart'>
											<p className='tariffs-standart_title'>Стандарт</p>
											<span className='tariffs-standart_counter'>
												{totalStandartPrice} ₽
											</span>
											<button
												className='tariffs-standart_button'
												onClick={() =>
													handleGetQuote('Стандарт', totalStandartPrice)
												}
											>
												Получить КП!
											</button>
										</div>
									</div>
									<div className='tariffs-body__header_comfort'>
										<div className='tariffs-comfort'>
											<p className='tariffs-comfort_title'>Комфорт</p>
											<span className='tariffs-comfort_counter'>
												{totalComfortPrice} ₽
											</span>
											<button
												className='tariffs-comfort_button'
												onClick={() =>
													handleGetQuote('Комфорт', totalComfortPrice)
												}
											>
												Получить КП!
											</button>
										</div>
									</div>
								</div>
								<div className='tariffs-body__list'>
									<ul className='tariffs__body-list tariffs-list'>
										{list.map(item => (
											<li
												key={item.title}
												className='tariffs__body-list-item tariffs-list__item'
											>
												<h2 className='tariffs-list__item_title'>
													{item.title}
												</h2>
												{item.body.map(list => (
													<div
														key={list.title}
														className='tariffs-list__item_body'
													>
														<div className='ttitle'>{list.title}</div>
														<div
															style={{
																margin: 'auto',
																width: '15px',
																height: '15px',
																borderRadius: '100%',
																backgroundColor: `${list.econom}`,
															}}
														></div>
														<div
															style={{
																margin: 'auto',
																width: '15px',
																height: '15px',
																borderRadius: '100%',
																backgroundColor: `${list.lite}`,
															}}
														></div>
														<div
															style={{
																margin: 'auto',
																width: '15px',
																height: '15px',
																borderRadius: '100%',
																backgroundColor: `${list.standart}`,
															}}
														></div>
														<div
															style={{
																margin: 'auto',
																width: '15px',
																height: '15px',
																borderRadius: '100%',
																backgroundColor: `${list.comfort}`,
															}}
														></div>
													</div>
												))}
											</li>
										))}
									</ul>
								</div>
								<div className='tariffs-body__footer'>
									<div className='tariffs-body__footer_title'>
										Тариф / 1 месяц:
									</div>
									<div className='tariffs-body__footer_econom'>
										<div className='tariffs-econom'>
											<p className='tariffs-econom_title'>Эконом</p>
											<span className='tariffs-econom_counter'>
												{totalEconomPrice} ₽
											</span>
											<button
												className='tariffs-econom_button'
												onClick={() =>
													handleGetQuote('Эконом', totalEconomPrice)
												}
											>
												Получить КП!
											</button>
										</div>
									</div>
									<div className='tariffs-body__footer_lite'>
										<div className='tariffs-lite'>
											<p className='tariffs-lite_title'>Лайт</p>
											<span className='tariffs-lite_counter'>
												{totalLitePrice} ₽
											</span>
											<button
												className='tariffs-lite_button'
												onClick={() => handleGetQuote('Лайт', totalLitePrice)}
											>
												Получить КП!
											</button>
										</div>
									</div>
									<div className='tariffs-body__footer_standart'>
										<div className='tariffs-standart'>
											<p className='tariffs-standart_title'>Стандарт</p>
											<span className='tariffs-standart_counter'>
												{totalStandartPrice} ₽
											</span>
											<button
												className='tariffs-standart_button'
												onClick={() =>
													handleGetQuote('Стандарт', totalStandartPrice)
												}
											>
												Получить КП!
											</button>
										</div>
									</div>
									<div className='tariffs-body__footer_comfort'>
										<div className='tariffs-comfort'>
											<p className='tariffs-comfort_title'>Комфорт</p>
											<span className='tariffs-comfort_counter'>
												{totalComfortPrice} ₽
											</span>
											<button
												className='tariffs-comfort_button'
												onClick={() =>
													handleGetQuote('Комфорт', totalComfortPrice)
												}
											>
												Получить КП!
											</button>
										</div>
									</div>
								</div>
								<div className='tariffs-body__reference'>
									<div className='tariffs-body__reference-box reference-box '>
										<div className='reference-box__marker reference-box__marker_1'></div>
										<span className='reference-box__title'>
											услуга входит в стоимость тарифа
										</span>
									</div>
									<div className='tariffs-body__reference-box reference-box'>
										<div className='reference-box__marker reference-box__marker_2'></div>
										<span className='reference-box__title'>
											возможен заказ услуги за дополнительную плату
										</span>
									</div>
									<div className='tariffs-body__reference-box reference-box '>
										<div className='reference-box__marker reference-box__marker_3'></div>
										<span className='reference-box__title'>
											услуга не доступна на данном тарифе
										</span>
									</div>
								</div>
							</div>
						</div>
					)}
				</div>
			</section>
		</>
	)
})

export default TariffsDesktop
