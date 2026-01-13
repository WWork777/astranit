'use client'
import modalStore from '@/store/modalStore'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { RiCloseLargeFill } from 'react-icons/ri'
import GeneralForm from '../forms/generalForm/GeneralForm'
import styles from './GeneralModal.module.scss'

const GeneralModal = observer(() => {
	const { modal, closeModal } = modalStore
	// Блокировка скролла при открытии модального окна
	useEffect(() => {
		if (modal.isOpen) {
			// Сохраняем текущую позицию скролла
			const scrollY = window.scrollY

			// Блокируем скролл
			document.body.style.position = 'fixed'
			document.body.style.top = `-${scrollY}px`
			document.body.style.width = '100%'
			document.body.style.overflow = 'hidden'

			// Возвращаем функцию cleanup для разблокировки
			return () => {
				document.body.style.position = ''
				document.body.style.top = ''
				document.body.style.width = ''
				document.body.style.overflow = ''
				window.scrollTo(0, scrollY)
			}
		}
	}, [modal.isOpen])

	// Если модальное окно закрыто - не рендерим компонент
	if (!modal.isOpen) {
		return null
	}
	const toSelectForm = modal => {
		switch (
			modal?.type // Используем modal.type с optional chaining
		) {
			// case 'hero':
			// 	return <HeroForm closeModal={closeModal} />
			case 'general':
				return (
					<GeneralForm
						formId={modal.formId}
						customData={modal.customData}
						totalPrice={modal.totalPrice}
						totalEconomPrice={modal.totalEconomPrice}
						totalLitePrice={modal.totalLitePrice}
						totalStandartPrice={modal.totalStandartPrice}
						totalComfortPrice={modal.totalComfortPrice}
						closeModal={closeModal}
					/>
				)
			default:
				return (
					<div>
						Ошибка вывода данных. <br /> Мы уже устраняем проблему!!!
					</div>
				)
		}
	}

	return (
		<div className={styles.modalOverlay}>
			<div className={styles.modalContent}>
				<div className={styles.modalContentHeader}>
					<h2 className={styles.modalTitle}>{modal.title}</h2>
				</div>
				{modal.customData ? (
					<div className={styles.modalContentBody}>
						<div className={styles.modalDisplayData}>
							<div className={styles.modalDisplayDataTop}>
								{Object.entries(modal.customData).map(
									([key, value], index) =>
										index < 3 && (
											<div key={key} className={styles.modalDisplayDataItemTop}>
												<span className='data-key'>{key} </span>
												<span className='data-value'>
													{value}
													{index <
														Math.min(
															Object.entries(modal.customData).length,
															3
														) -
															1 && ','}
												</span>
											</div>
										)
								)}
								{/* {Object.entries(modal.customData).map(
									([key, value], index) =>
										index < 3 && (
											<div key={key} className={styles.modalDisplayDataItemTop}>
												<span className='data-key'>
													{key}
													{index <
														Math.min(
															Object.entries(modal.customData).length,
															3
														) -
															1 && ' | '}
												</span>
												<span className='data-value'>{value}</span>
											</div>
										)
								)} */}
							</div>
							<div className={styles.modalDisplayDataBottom}>
								{Object.entries(modal.customData).map(
									([key, value], index) =>
										index == 3 && (
											<div key={key} className={styles.modalDisplayDataItem}>
												<span className='data-key'>{key} </span>
												<span className='data-value'>
													{value}
													{modal.formId == 'tariff-desktop' ? ',' : null}
												</span>
											</div>
										)
								)}
								<p className={styles.modalDisplayPrice}>
									<span className={styles.totalPrice}>
										{' '}
										{`${modal.totalPrice}`}{' '}
										<span style={{ color: '#333' }}>
											{' '}
											{modal.formId == 'tariff-desktop' ? 'р/мес' : null}
										</span>
									</span>
								</p>
							</div>

							{/* {modal.formId == 'tariff-mobile' && (
								<div>
									<p className={styles.modalDisplayPrice}>
										Тариф ЭКОНОМ: <span> {modal.totalEconomPrice}</span>
									</p>
									<p className={styles.modalDisplayPrice}>
										Тариф ЛАЙТ: <span> {modal.totalLitePrice}</span>
									</p>
									<p className={styles.modalDisplayPrice}>
										Тариф СТАНДАРТ: <span> {modal.totalStandartPrice}</span>
									</p>
									<p className={styles.modalDisplayPrice}>
										Тариф КОМФОРТ: <span> {modal.totalComfortPrice}</span>
									</p>
								</div>
							)} */}
						</div>
					</div>
				) : (
					<div className={styles.modalContentBody}>
						<div className={styles.modalDisplayMessage}>
							{modal.formId == 'audit-form' && (
								<div className={styles.modalDisplayMessageAudit}>
									Оставте заявку на проведение <br /> бесплатного аудита вашей
									ИТ-ифраструктуры!
								</div>
							)}
							{modal.formId == 'hero-mobile' && (
								<div className={styles.modalDisplayMessageHero}>
									Отправьте заявку на консультацию, и мы перезвоним вам в
									течение 15 минут!
								</div>
							)}
						</div>
					</div>
				)}
				<div className={styles.modalContentForm}>{toSelectForm(modal)}</div>

				<RiCloseLargeFill
					size={25}
					color='#ff9a22'
					className={styles.modalClose}
					onClick={() => closeModal()}
				/>
			</div>
		</div>
	)
})

export default GeneralModal
