'use client'
import { tariffsList as list } from '@/data'
import { useEffect, useState } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import TariffsMobile from '../tariffs-mobile/tariffsMobile'
import styles from './styles.module.scss'
import './tariffsDesktop.scss'

export default function TariffsDesktop() {
	const [computerValue, setComputerValue] = useState(10)
	const [serversValue, setServersValue] = useState(15)
	const [officesValue, setOfficesValue] = useState(20)
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 992)
		}

		checkScreenSize()
		window.addEventListener('resize', checkScreenSize)

		return () => window.removeEventListener('resize', checkScreenSize)
	}, [])

	const updateRangeBackground = (
		value,
		min = 1,
		max = 100,
		color = '#ff9a22'
	) => {
		const percent = ((value - min) / (max - min)) * 100
		return `linear-gradient(to right, ${color} 0%, ${color} ${percent}%, #e0e0e0 ${percent}%, #e0e0e0 100%)`
	}

	const handleComputerChange = e => {
		const value = parseInt(e.target.value)
		setComputerValue(value)
	}

	const handleServersChange = e => {
		const value = parseInt(e.target.value)
		setServersValue(value)
	}

	const handleOfficesChange = e => {
		const value = parseInt(e.target.value)
		setOfficesValue(value)
	}

	const handleComputerIncrement = () => {
		setComputerValue(prev => {
			const newValue = prev < 100 ? prev + 1 : 100
			return newValue
		})
	}

	const handleComputerDecrement = () => {
		setComputerValue(prev => {
			const newValue = prev > 1 ? prev - 1 : 1
			return newValue
		})
	}

	const handleServersIncrement = () => {
		setServersValue(prev => {
			const newValue = prev < 100 ? prev + 1 : 100
			return newValue
		})
	}

	const handleServersDecrement = () => {
		setServersValue(prev => {
			const newValue = prev > 1 ? prev - 1 : 1
			return newValue
		})
	}

	const handleOfficesIncrement = () => {
		setOfficesValue(prev => {
			const newValue = prev < 100 ? prev + 1 : 100
			return newValue
		})
	}

	const handleOfficesDecrement = () => {
		setOfficesValue(prev => {
			const newValue = prev > 1 ? prev - 1 : 1
			return newValue
		})
	}

	return (
		<>
			<section className='tariffs'>
				<div className='tariffs__container '>
					<h1 className='tariffs-title'>ТАРИФЫ ИТ-ПОДДЕРЖКИ</h1>

					{isMobile ? (
						<TariffsMobile
							list={list}
							computerValue={computerValue}
							setComputerValue={setComputerValue}
							serversValue={serversValue}
							setServersValue={setServersValue}
							officesValue={officesValue}
							setOfficesValue={setOfficesValue}
							updateRangeBackground={updateRangeBackground}
							handleComputerChange={handleComputerChange}
							handleServersChange={handleServersChange}
							handleOfficesChange={handleOfficesChange}
							handleComputerDecrement={handleComputerDecrement}
							handleComputerIncrement={handleComputerIncrement}
							handleServersDecrement={handleServersDecrement}
							handleServersIncrement={handleServersIncrement}
							handleOfficesDecrement={handleOfficesDecrement}
							handleOfficesIncrement={handleOfficesIncrement}
						/>
					) : (
						<div className='tariffs-body'>
							<div className='tariffs-body__ranges'>
								<p className='tariffs-body__ranges_title'>
									Сколько у вас компьютеров, серверов, офисов?
								</p>
								<div className='tariffs-body__ranges_inputs'>
									<ul className={styles.ranges}>
										<li className={styles.ranges_box1}>
											<h2 className={styles.ranges_box1_title}>Компьютеры</h2>
											<div className={styles.ranges_box1_body}>
												<div className={styles.range_button}>
													<GoChevronLeft
														onClick={handleComputerDecrement}
														style={{ cursor: 'pointer' }}
													/>
													{computerValue}
													<GoChevronRight
														onClick={handleComputerIncrement}
														style={{ cursor: 'pointer' }}
													/>
												</div>
												<input
													type='range'
													min='1'
													max='100'
													step='1'
													value={computerValue}
													onChange={handleComputerChange}
													className={styles.range_input}
													style={{
														background: updateRangeBackground(
															computerValue,
															1,
															100,
															'#ff9a22'
														),
													}}
												/>
											</div>
										</li>
										<li className={styles.ranges_box2}>
											<h2 className={styles.ranges_box1_title}>Серверы</h2>
											<div className={styles.ranges_box1_body}>
												<div className={styles.range_button}>
													<GoChevronLeft
														onClick={handleServersDecrement}
														style={{ cursor: 'pointer' }}
													/>
													{serversValue}
													<GoChevronRight
														onClick={handleServersIncrement}
														style={{ cursor: 'pointer' }}
													/>
												</div>
												<input
													type='range'
													min='1'
													max='100'
													step='1'
													value={serversValue}
													onChange={handleServersChange}
													className={styles.range_input}
													style={{
														background: updateRangeBackground(
															serversValue,
															1,
															100,
															'#ff9a22'
														),
													}}
												/>
											</div>
										</li>
										<li className={styles.ranges_box3}>
											<h2 className={styles.ranges_box1_title}>
												Офисы / магазины / склады /...
											</h2>
											<div className={styles.ranges_box1_body}>
												<div className={styles.range_button}>
													<GoChevronLeft
														onClick={handleOfficesDecrement}
														style={{ cursor: 'pointer' }}
													/>
													{officesValue}
													<GoChevronRight
														onClick={handleOfficesIncrement}
														style={{ cursor: 'pointer' }}
													/>
												</div>
												<input
													type='range'
													min='1'
													max='100'
													step='1'
													value={officesValue}
													onChange={handleOfficesChange}
													className={styles.range_input}
													style={{
														background: updateRangeBackground(
															officesValue,
															1,
															100,
															'#ff9a22'
														),
													}}
												/>
											</div>
										</li>
									</ul>
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
											<span className='tariffs-econom_counter'>8 800 ₽</span>
											<button className='tariffs-econom_button'>
												Получить КП!
											</button>
										</div>
									</div>
									<div className='tariffs-body__header_lite'>
										<div className='tariffs-lite'>
											<p className='tariffs-lite_title'>Лайт</p>
											<span className='tariffs-lite_counter'>8 800 ₽</span>
											<button className='tariffs-lite_button'>
												Получить КП!
											</button>
										</div>
									</div>
									<div className='tariffs-body__header_standart'>
										<div className='tariffs-standart'>
											<p className='tariffs-standart_title'>Стандарт</p>
											<span className='tariffs-standart_counter'>8 800 ₽</span>
											<button className='tariffs-standart_button'>
												Получить КП!
											</button>
										</div>
									</div>
									<div className='tariffs-body__header_comfort'>
										<div className='tariffs-comfort'>
											<p className='tariffs-comfort_title'>Комфорт</p>
											<span className='tariffs-comfort_counter'>8 800 ₽</span>
											<button className='tariffs-comfort_button'>
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
											<span className='tariffs-econom_counter'>8 800 ₽</span>
											<button className='tariffs-econom_button'>
												Получить КП!
											</button>
										</div>
									</div>
									<div className='tariffs-body__footer_lite'>
										<div className='tariffs-lite'>
											<p className='tariffs-lite_title'>Лайт</p>
											<span className='tariffs-lite_counter'>8 800 ₽</span>
											<button className='tariffs-lite_button'>
												Получить КП!
											</button>
										</div>
									</div>
									<div className='tariffs-body__footer_standart'>
										<div className='tariffs-standart'>
											<p className='tariffs-standart_title'>Стандарт</p>
											<span className='tariffs-standart_counter'>8 800 ₽</span>
											<button className='tariffs-standart_button'>
												Получить КП!
											</button>
										</div>
									</div>
									<div className='tariffs-body__footer_comfort'>
										<div className='tariffs-comfort'>
											<p className='tariffs-comfort_title'>Комфорт</p>
											<span className='tariffs-comfort_counter'>8 800 ₽</span>
											<button className='tariffs-comfort_button'>
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
}
