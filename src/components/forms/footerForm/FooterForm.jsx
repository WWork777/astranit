'use client'
import { useFooterForm } from '@/hooks/useFooterForm'
import Link from 'next/link'

export default function FooterForm({ pathname = '/', className = '', styles }) {
	const {
		formData,
		notice,
		isValid,
		handleCheckbox,
		handleName,
		handlePhone,
		handleEmail,
		handleMessage,
		handleSubmit,
	} = useFooterForm()

	return (
		<div className={`${styles.footer_form} ${className}`}>
			<h1 className={styles.title}>
				{pathname === '/contacts' ? 'НАПИШИТЕ НАМ!' : 'ОБСУДИМ ВАШУ ЗАДАЧУ!'}
			</h1>
			<p className={styles.notice}>{notice}</p>

			<form className={styles.form} onSubmit={handleSubmit}>
				<div className={styles.inputs}>
					<input
						autoFocus={false}
						autoComplete='off'
						id='name'
						name='name'
						type='text'
						placeholder='Как к вам обращаться? *'
						value={formData.name}
						onChange={handleName}
					/>
					<input
						autoComplete='off'
						id='phone'
						name='phone'
						type='text'
						placeholder={'+71234567890 *'}
						value={formData.phone}
						onChange={handlePhone}
					/>
					<input
						autoComplete='off'
						type='email'
						name='email'
						placeholder='name@company *'
						value={formData.email}
						onChange={handleEmail}
					/>
				</div>
				<textarea
					name='message'
					id='message'
					placeholder={
						'Ваша задача или вопрос\nИли не пишите ничего, уточним все в ходе обсуждения.'
					}
					value={formData.message}
					onChange={handleMessage}
					maxLength={1000}
					rows={4}
				></textarea>

				<div className={styles.button_wrapper}>
					{isValid ? (
						<button type='submit' className={styles.button_active}>
							Отправить
						</button>
					) : (
						<button type='button' className={styles.button} disabled>
							Отправить
						</button>
					)}
					<div className={styles.checkbox}>
						<input
							type='checkbox'
							name='footer-form-check'
							id='footer-form-check'
							checked={formData.checked}
							onChange={handleCheckbox}
						/>
						<p>
							согласен(на) с политикой <br />
							<span>
								<Link href={'/personal'}>обработки персональных данных</Link>
							</span>
						</p>
					</div>
				</div>
			</form>
		</div>
	)
}
