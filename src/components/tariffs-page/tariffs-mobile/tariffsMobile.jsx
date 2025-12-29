'use client'
import Ranges from '@/components/ui/ranges/Ranges'
import modalStore from '@/store/modalStore'
import { observer } from 'mobx-react-lite'
import { FaCheck } from 'react-icons/fa'
import { ImCross } from 'react-icons/im'
import { TiPlus } from 'react-icons/ti'
import styles from './styles.module.scss'
import './tariffsMobile.scss'

const TariffsMobile = observer(
	({
		list,
		totalEconomPrice,
		totalLitePrice,
		totalStandartPrice,
		totalComfortPrice,
	}) => {
		const { openModal } = modalStore
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
									<Ranges styles={styles} />
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
													{totalEconomPrice} ₽
												</span>
											</div>
										</div>
										<div className='mobile-tariffs-body__header_lite'>
											<div className='mobile-tariffs-lite'>
												<p className='mobile-tariffs-lite_title'>Лайт</p>
												<span className='mobile-tariffs-lite_counter'>
													{totalLitePrice} ₽
												</span>
											</div>
										</div>
										<div className='mobile-tariffs-body__header_standart'>
											<div className='mobile-tariffs-standart'>
												<p className='mobile-tariffs-standart_title'>
													Стандарт
												</p>
												<span className='mobile-tariffs-standart_counter'>
													{totalStandartPrice} ₽
												</span>
											</div>
										</div>
										<div className='mobile-tariffs-body__header_comfort'>
											<div className='mobile-tariffs-comfort'>
												<p className='mobile-tariffs-comfort_title'>Комфорт</p>
												<span className='mobile-tariffs-comfort_counter'>
													{totalComfortPrice} ₽
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
					<button
						onClick={() =>
							openModal({
								type: 'commercial-mobile',
								title: 'Коммерческое предложение',
							})
						}
						className='mobile-tariffs__button'
					>
						Получить КП!
					</button>
				</div>
			</>
		)
	}
)
export default TariffsMobile
