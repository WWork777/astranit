'use client'
import modalStore from '@/store/modalStore'
import sliderStore from '@/store/sliderStore'
import { observer } from 'mobx-react-lite'
import styles from './ModalWindow.module.scss'

const ModalWindow = observer(({ onFormSubmit, showSelections = true }) => {
	const { modalData, closeModal, updateFormField, submitForm } = modalStore

	const {
		isOpen,
		title,
		tariffName,
		totalPrice,
		formData,
		errors,
		isLoading,
		customData,
	} = modalData

	const handleChange = e => {
		const { name, value } = e.target
		updateFormField(name, value)
	}

	const handleSubmit = async e => {
		e.preventDefault()
		await submitForm(onFormSubmit)
	}

	const handleOverlayClick = e => {
		if (e.target === e.currentTarget && !isLoading) {
			closeModal()
		}
	}

	if (!isOpen) return null

	return (
		<div className={styles.modalOverlay} onClick={handleOverlayClick}>
			<div className={styles.modalContent}>
				{!isLoading && (
					<button
						className={styles.closeButton}
						onClick={closeModal}
						disabled={isLoading}
						aria-label='Закрыть'
					>
						×
					</button>
				)}

				{isLoading ? (
					<div className={styles.loadingContainer}>
						<div className={styles.spinner}></div>
						<p className={styles.loadingText}>Отправка заявки...</p>
					</div>
				) : (
					<>
						<h2 className={styles.modalTitle}>{title}</h2>

						{showSelections && tariffName && totalPrice > 0 && (
							<div className={styles.summarySection}>
								<h3 className={styles.summaryTitle}>
									Выбранный тариф: {tariffName}
								</h3>

								<div className={styles.selections}>
									<div className={styles.selectionItem}>
										<span className={styles.selectionLabel}>Компьютеры:</span>
										<span className={styles.selectionValue}>
											{sliderStore.computerValue} шт.
										</span>
									</div>
									<div className={styles.selectionItem}>
										<span className={styles.selectionLabel}>Серверы:</span>
										<span className={styles.selectionValue}>
											{sliderStore.serversValue} шт.
										</span>
									</div>
									<div className={styles.selectionItem}>
										<span className={styles.selectionLabel}>Офисы:</span>
										<span className={styles.selectionValue}>
											{sliderStore.officesValue} шт.
										</span>
									</div>
								</div>

								<div className={styles.totalPrice}>
									<span className={styles.totalLabel}>Итоговая стоимость:</span>
									<span className={styles.totalValue}>
										{totalPrice.toLocaleString('ru-RU')} ₽
									</span>
								</div>
							</div>
						)}

						{/* Отображение кастомных данных если есть */}
						{customData && Object.keys(customData).length > 0 && (
							<div className={styles.customDataSection}>
								<h3 className={styles.customDataTitle}>
									Дополнительная информация:
								</h3>
								<div className={styles.customDataContent}>
									{Object.entries(customData).map(([key, value]) => (
										<div key={key} className={styles.customDataItem}>
											<span className={styles.customDataLabel}>{key}:</span>
											<span className={styles.customDataValue}>{value}</span>
										</div>
									))}
								</div>
							</div>
						)}

						<form onSubmit={handleSubmit} className={styles.form}>
							<h3 className={styles.formTitle}>Контактная информация</h3>

							<div className={styles.formGroup}>
								<label htmlFor='name' className={styles.label}>
									Ваше имя *
								</label>
								<input
									type='text'
									id='name'
									name='name'
									value={formData.name}
									onChange={handleChange}
									className={`${styles.input} ${
										errors.name ? styles.inputError : ''
									}`}
									placeholder='Иван Иванов'
									disabled={isLoading}
								/>
								{errors.name && (
									<span className={styles.error}>{errors.name}</span>
								)}
							</div>

							<div className={styles.formGroup}>
								<label htmlFor='company' className={styles.label}>
									Компания
								</label>
								<input
									type='text'
									id='company'
									name='company'
									value={formData.company}
									onChange={handleChange}
									className={styles.input}
									placeholder="ООО 'Рога и копыта'"
									disabled={isLoading}
								/>
							</div>

							<div className={styles.formGroup}>
								<label htmlFor='email' className={styles.label}>
									Email *
								</label>
								<input
									type='email'
									id='email'
									name='email'
									value={formData.email}
									onChange={handleChange}
									className={`${styles.input} ${
										errors.email ? styles.inputError : ''
									}`}
									placeholder='example@mail.ru'
									disabled={isLoading}
								/>
								{errors.email && (
									<span className={styles.error}>{errors.email}</span>
								)}
							</div>

							<div className={styles.formGroup}>
								<label htmlFor='phone' className={styles.label}>
									Телефон *
								</label>
								<input
									type='tel'
									id='phone'
									name='phone'
									value={formData.phone}
									onChange={handleChange}
									className={`${styles.input} ${
										errors.phone ? styles.inputError : ''
									}`}
									placeholder='+7 (999) 999-99-99'
									disabled={isLoading}
								/>
								{errors.phone && (
									<span className={styles.error}>{errors.phone}</span>
								)}
							</div>

							<div className={styles.formGroup}>
								<label htmlFor='message' className={styles.label}>
									Дополнительная информация
								</label>
								<textarea
									id='message'
									name='message'
									value={formData.message}
									onChange={handleChange}
									className={styles.textarea}
									placeholder='Дополнительные пожелания или комментарии...'
									rows='4'
									disabled={isLoading}
								/>
							</div>

							{errors.submit && (
								<div className={styles.submitError}>{errors.submit}</div>
							)}

							<div className={styles.actions}>
								<button
									type='button'
									className={styles.cancelButton}
									onClick={closeModal}
									disabled={isLoading}
								>
									Отменить
								</button>
								<button
									type='submit'
									className={styles.submitButton}
									disabled={isLoading}
								>
									{isLoading ? 'Отправка...' : 'Отправить заявку'}
								</button>
							</div>

							<p className={styles.privacyNote}>
								Нажимая кнопку "Отправить заявку", вы соглашаетесь с политикой
								конфиденциальности
							</p>
						</form>
					</>
				)}
			</div>
		</div>
	)
})

export default ModalWindow
