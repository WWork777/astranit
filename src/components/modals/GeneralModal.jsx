'use client'
import modalStore from '@/store/modalStore'
import { observer } from 'mobx-react-lite'
import { useEffect } from 'react'
import { RiCloseLargeFill } from 'react-icons/ri'

import GeneralForm from '../forms/generalForm/GeneralForm'
import HeroForm from '../forms/heroForm/HeroForm'
import styles from './GeneralModal.module.scss'

const GeneralModal = observer(() => {
	const { closeModal, modal } = modalStore
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
			case 'audit':
				return <GeneralForm />
			case 'hero':
				return <HeroForm />
			case 'commercial':
				return <GeneralForm order={modal.customData} price={modal.totalPrice} />
			case 'commercial-mobile':
				return <GeneralForm order={modal.customData} price={modal.totalPrice} />
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
							{Object.entries(modal.customData).map(([key, value]) => (
								<div key={key} className={styles.modalDisplayDataItem}>
									<span className='data-key'>{key}: </span>
									<span className='data-value'>{value}</span>
								</div>
							))}
							<p className={styles.modalDisplayPrice}>
								Cтоимость услуг: <span> {modal.totalPrice}</span>
							</p>
						</div>
					</div>
				) : null}
				<div className={styles.modalContentForm}>{toSelectForm(modal)}</div>

				<RiCloseLargeFill
					size={20}
					color='#ff9a22'
					className={styles.modalClose}
					onClick={() => closeModal()}
				/>
			</div>
		</div>
	)
})

export default GeneralModal
