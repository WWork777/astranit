'use client'
import { useState } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import styles from './styles.module.scss'
import './tariffsDesktop.scss'

export default function TariffsDesktop() {
	const list = [
		{
			title: 'НАЧАЛО СОТРУДНИЧЕСТВА',
			body: [
				{
					title: 'Первичный ИТ-аудит',
					econom: '#cccccc',
					lite: '#63a663',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title: 'Первичная оптимизация ИТ-инфраструктуры',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#63a663',
					comfort: '#63a663',
				},
			],
		},
		{
			title: 'РАБОТЫ ПО ЗАЯВКАМ ПОЛЬЗОВАТЕЛЕЙ',
			body: [
				{
					title: 'Удаленное выполнение базовых заявок',
					econom: '#63a663',
					lite: '#63a663',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title: 'Выездное выполнение базовых заявок',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#63a663',
					comfort: '#63a663',
				},
			],
		},
		{
			title: 'ОРГАНИЗУЮЩИЕ СЕРВИСЫ',
			body: [
				{
					title: 'Ведение заявок в системе Service Desk',
					econom: '#63a663',
					lite: '#63a663',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title: ' Ведение спецификации ИТ-инфраструктуры',
					econom: '#63a663',
					lite: '#63a663',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title: 'Мониторинг и проактивное реагирование',
					econom: '#d84f47',
					lite: '#63a663',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title: ' Плановый выезд специалиста',
					econom: '#d84f47',
					lite: '#d84f47',
					standart: '#63a663',
					comfort: '#63a663',
				},
			],
		},
		{
			title: 'ИНФОРМАЦИОННАЯ БЕЗОПАСНОСТЬ',
			body: [
				{
					title: 'Базовые меры информационной безопасности',
					econom: '#63a663',
					lite: '#63a663',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title: ' Автоматическое резервное копирование по расписанию',
					econom: '#d84f47',
					lite: '#63a663',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title:
						'Репликация резервных копий в облако(объем облачного хранилища до 500ГБ)',
					econom: '#d84f47',
					lite: '#cccccc',
					standart: '#cccccc',
					comfort: '#63a663',
				},
				{
					title: 'Настройка прав доступа пользователей к каталогам и файлам',
					econom: '#d84f47',
					lite: '#63a663',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title:
						' Настройка прав 	доступа пользователей к Интернету (кроме доступа с сервера терминалов)',
					econom: '#d84f47',
					lite: '#cccccc',
					standart: '#cccccc',
					comfort: '#63a663',
				},
				{
					title: 'Ведение политики разграничения доступа',
					econom: '#d84f47',
					lite: '#d84f47',
					standart: '#d84f47',
					comfort: '#63a663',
				},
			],
		},
		{
			title: 'УПРАВЛЕНИЕ ОБОРУДОВАНИЕМ',
			body: [
				{
					title: 'Подбор оптимального оборудования к закупке',
					econom: '#63a663',
					lite: '#63a663',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title: 'Подбор принтеров по стоимости заправки',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#cccccc',
					comfort: '#63a663',
				},
				{
					title: 'Подбор поставщиков, сопровождение закупок',
					econom: '#d84f47',
					lite: '#63a663',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title: 'Сопровождение ремонтов в сервисных центрах',
					econom: '#d84f47',
					lite: '#d84f47',
					standart: '#63a663',
					comfort: '#63a663',
				},
			],
		},
		{
			title: 'РАБОТА СО СМЕЖНЫМИ ПОДРЯДЧИКАМИ',
			body: [
				{
					title: 'Работа с Интернет-провайдерами',
					econom: '#63a663',
					lite: '#63a663',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title: 'Работа с лицензиарами ПО',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title: ' Работа с прочими смежными подрядчиками',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#63a663',
					comfort: '#63a663',
				},
			],
		},
		{
			title: 'РАБОТА С ОБЛАЧНЫМИ СЕРВИСАМИ',
			body: [
				{
					title: 'Управление конфигурацией облачных сервисов',
					econom: '#cccccc',
					lite: '#63a663',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title: 'Управление аккаунтами пользователей на облачных сервисах',
					econom: '#cccccc',
					lite: '#63a663',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title: 'Помощь по сайтам торговых площадок и ФНС',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#cccccc',
					comfort: '#63a663',
				},
				{
					title: 'Помощь по удаленному перевыпуску ЭЦП',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#cccccc',
					comfort: '#63a663',
				},
			],
		},
		{
			title: 'РАБОТА С ИНТЕРНЕТ-ДОМЕНАМИ И ХОСТЕРАМИ',
			body: [
				{
					title: 'Управление Интернет-доменами',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#cccccc',
					comfort: '#63a663',
				},
				{
					title: 'Урегулирование спам-блокировок',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#cccccc',
					comfort: '#63a663',
				},
				{
					title: ' Контроль	оплаты Интернет-доменов и хостеров',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#63a663',
					comfort: '#63a663',
				},
			],
		},
		{
			title: 'СЕТЕВЫЕ КОММУНИКАЦИИ ',
			body: [
				{
					title: 'Объединение локальных сетей',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#cccccc',
					comfort: '#63a663',
				},
				{
					title: 'Резервирование Интернет-канала',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#cccccc',
					comfort: '#63a663',
				},
			],
		},
		{
			title: 'РАБОТА ЗА ПРЕДЕЛАМИ РАБОЧЕГО ВРЕМЕНИ',
			body: [
				{
					title:
						'Удаленное выполнение работ, требующих остановку сервера, в нерабочее 	время',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title: 'Удаленное устранение критических аварий в нерабочее время',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title:
						'Выездное выполнение работ, требующих остановку сервера, в нерабочее время ',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#cccccc',
					comfort: '#cccccc',
				},
				{
					title: 'Выездное устранение критических аварий в нерабочее время ',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#cccccc',
					comfort: '#cccccc',
				},
			],
		},
		{
			title: 'ПРОЕКТЫ ',
			body: [
				{
					title: 'Проект “Ревизия и оптимизация хранилища”',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#cccccc',
					comfort: '#63a663',
				},
				{
					title: 'Проект “Миграция электронной почты” ',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#cccccc',
					comfort: '#63a663',
				},
				{
					title: 'Проект “Проект “Релокация оборудования”” ',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#cccccc',
					comfort: '#63a663',
				},
			],
		},
		{
			title: 'ПРОЧЕЕ',
			body: [
				{
					title: 'Чистка системных блоков от пыли',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#cccccc',
					comfort: '#cccccc',
				},
				{
					title: 'Поддержка отраслевого ПО',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title: 'Работа с физическим сервером в датацентре',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title: 'Сценарии приема и увольнения сотрудников',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#cccccc',
					comfort: '#63a663',
				},
				{
					title: 'ИТ-консалтинг',
					econom: '#63a663',
					lite: '#63a663',
					standart: '#63a663',
					comfort: '#63a663',
				},
				{
					title: 'VIP-сервис для руководителя',
					econom: '#cccccc',
					lite: '#cccccc',
					standart: '#cccccc',
					comfort: '#63a663',
				},
			],
		},
	]

	const [computerValue, setComputerValue] = useState(10)
	const [serversValue, setServersValue] = useState(15)
	const [officesValue, setOfficesValue] = useState(20)

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
											<h2 className='tariffs-list__item_title'>{item.title}</h2>
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
				</div>
			</section>
		</>
	)
}
