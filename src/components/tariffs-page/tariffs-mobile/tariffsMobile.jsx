'use client'
import { FaCheck } from 'react-icons/fa'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import { ImCross } from 'react-icons/im'
import { TiPlus } from 'react-icons/ti'
import styles from './styles.module.scss'
import './tariffsMobile.scss'

export default function TariffsMobile({
	list,
	computerValue,
	setComputerValue,
	serversValue,
	setServersValue,
	officesValue,
	setOfficesValue,
	updateRangeBackground,
	handleComputerChange,
	handleServersChange,
	handleOfficesChange,
	handleComputerDecrement,
	handleComputerIncrement,
	handleServersDecrement,
	handleServersIncrement,
	handleOfficesDecrement,
	handleOfficesIncrement,
}) {
	const selectIcon = color => {
		switch (color) {
			case '#cccccc':
				return <TiPlus color='#ffffff' size={23} />
			case '#63a663':
				return <FaCheck color='#ffffff' />
			case '#d84f47':
				return <ImCross color='#ffffff' size={13} />
			default:
				return <TiPlus color='#ffffff' size={23} />
		}
	}

	return (
		<>
			<div className='mobile-tariffs'>
				<div className='mobile-tariffs__container '>
					<div className='mobile-tariffs-body'>
						<div className='mobile-tariffs-body__ranges'>
							<div className='mobile-tariffs-body__ranges_inputs'>
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
						<div className='mobile-tariffs-body__inner'>
							<div className='mobile-tariffs-body__header'>
								<div className='mobile-tariffs-body__header_title'>
									Тариф / 1 месяц:
								</div>
								<div className='mobile-tariffs-body__header_body'>
									<div className='mobile-tariffs-body__header_econom'>
										<div className='mobile-tariffs-econom'>
											<p className='mobile-tariffs-econom_title'>Эконом</p>
											<span className='mobile-tariffs-econom_counter'>
												8 800 ₽
											</span>
										</div>
									</div>
									<div className='mobile-tariffs-body__header_lite'>
										<div className='mobile-tariffs-lite'>
											<p className='mobile-tariffs-lite_title'>Лайт</p>
											<span className='mobile-tariffs-lite_counter'>
												8 800 ₽
											</span>
										</div>
									</div>
									<div className='mobile-tariffs-body__header_standart'>
										<div className='mobile-tariffs-standart'>
											<p className='mobile-tariffs-standart_title'>Стандарт</p>
											<span className='mobile-tariffs-standart_counter'>
												8 800 ₽
											</span>
										</div>
									</div>
									<div className='mobile-tariffs-body__header_comfort'>
										<div className='mobile-tariffs-comfort'>
											<p className='mobile-tariffs-comfort_title'>Комфорт</p>
											<span className='mobile-tariffs-comfort_counter'>
												8 800 ₽
											</span>
										</div>
									</div>
								</div>
							</div>
							<div className='mobile-tariffs-body__list'>
								<ul className='mobile-tariffs__body-list mobile-tariffs-list'>
									{list.map(item => (
										<li
											key={item.title}
											className='mobile-tariffs__body-list-item tariffs-list__item'
										>
											<h2 className='mobile-tariffs-list__item_title'>
												{item.title}
											</h2>
											{item.body.map(list => (
												<div
													key={list.title}
													className='mobile-tariffs-list__item_body'
												>
													<div className='mobile-tariffs-list__item_body__inner'>
														<div className='mobile-tariffs-list__item_body__inner-title'>
															{list.title}
														</div>
														<div className='mobile-tariffs-list__item_body__inner-circles'>
															{' '}
															<div
																style={{
																	margin: 'auto',
																	width: '30px',
																	height: '30px',
																	borderRadius: '100%',
																	backgroundColor: `${list.econom}`,
																	display: 'flex',
																	justifyContent: 'center',
																	alignItems: 'center',
																}}
															>
																{selectIcon(list.econom)}
															</div>
															<div
																style={{
																	margin: 'auto',
																	width: '30px',
																	height: '30px',
																	borderRadius: '100%',
																	backgroundColor: `${list.lite}`,
																	display: 'flex',
																	justifyContent: 'center',
																	alignItems: 'center',
																}}
															>
																{' '}
																{selectIcon(list.lite)}
															</div>
															<div
																style={{
																	margin: 'auto',
																	width: '30px',
																	height: '30px',
																	borderRadius: '100%',
																	backgroundColor: `${list.standart}`,
																	display: 'flex',
																	justifyContent: 'center',
																	alignItems: 'center',
																}}
															>
																{' '}
																{selectIcon(list.standart)}
															</div>
															<div
																style={{
																	margin: 'auto',
																	width: '30px',
																	height: '30px',
																	borderRadius: '100%',
																	backgroundColor: `${list.comfort}`,
																	display: 'flex',
																	justifyContent: 'center',
																	alignItems: 'center',
																}}
															>
																{' '}
																{selectIcon(list.comfort)}
															</div>
														</div>
													</div>
												</div>
											))}
										</li>
									))}
								</ul>
							</div>
							<div className='mobile-tariffs-body__reference'>
								<div className='mobile-tariffs-body__reference-box mobile-reference-box '>
									<div className='mobile-reference-box__marker mobile-reference-box__marker_1'>
										<FaCheck color='#fff' size={12} />
									</div>
									<span className='mobile-reference-box__title'>
										услуга входит в стоимость тарифа
									</span>
								</div>
								<div className='mobile-tariffs-body__reference-box mobile-reference-box'>
									<div className='mobile-reference-box__marker mobile-reference-box__marker_2'>
										<TiPlus color='#fff' />
									</div>
									<span className='mobile-reference-box__title'>
										возможен заказ услуги за дополнительную плату
									</span>
								</div>
								<div className='mobile-tariffs-body__reference-box mobile-reference-box '>
									<div className='mobile-reference-box__marker mobile-reference-box__marker_3'>
										<ImCross color='#fff' size={12} />
									</div>
									<span className='mobile-reference-box__title'>
										услуга не доступна на данном тарифе
									</span>
								</div>
							</div>
						</div>
					</div>
				</div>
				<button className='mobile-tariffs__button'>Получить КП!</button>
				<button className='mobile-tariffs__message'>
					<img src='/images/tariffs/message.png' alt='message' />
				</button>
			</div>
		</>
	)
}
