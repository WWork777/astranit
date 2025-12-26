'use client'
import Image from 'next/image'
import React from 'react'
import styles from './styles.module.scss'
const Connect = () => {
	const [open, setOpen] = React.useState(false)
	// Условные классы для открытия/закрытия
	const whatsappClass = open ? styles.whatsappOpen : styles.whatsappClosed
	const telegramClass = open ? styles.telegramOpen : styles.telegramClosed
	const vkClass = open ? styles.vkOpen : styles.vkClosed
	const phoneClass = open ? styles.phoneOpen : styles.phoneClosed

	return (
		<div
			onMouseLeave={() => setOpen(false)}
			onClick={() => setOpen(!open)}
			className={styles.connect}
		>
			{/* Основная кнопка */}
			<div onMouseEnter={() => setOpen(true)} className={styles.mainButton}>
				<Image
					src={'/images/connect/message.png'}
					width={35}
					height={35}
					alt='bg'
				/>
			</div>

			{/* WhatsApp */}
			<div
				onClick={() => setOpen(false)}
				className={`${styles.socialItem} ${whatsappClass}`}
			>
				<a
					href='https://api.whatsapp.com/send/?phone=12345678901&text&type=phone_number&app_absent=0'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						className={styles.socialIcon}
						src={'/images/connect/whatsapp.png'}
						width={45}
						height={45}
						alt='whatsapp'
					/>
				</a>
			</div>

			{/* Telegram */}
			<div
				onClick={() => setOpen(false)}
				className={`${styles.socialItem} ${telegramClass}`}
			>
				<a
					href='https://telegram.me/andromster'
					target='_blank'
					rel='noopener noreferrer'
				>
					<Image
						className={styles.socialIcon}
						src={'/images/connect/telegram.svg'}
						width={44}
						height={44}
						alt='telegram'
					/>
				</a>
			</div>

			{/* VK */}
			{/* <div
				onClick={() => setOpen(false)}
				className={`${styles.phoneButton} ${vkClass} ${styles.vkButton}`}
			>
				<a href='https://vk.com/astranit'>
					<svg className={styles.vkIcon} width={40} height={40}>
						<use xlinkHref='/images/connect/connect.svg#connect__vk'></use>
					</svg>
				</a>
			</div> */}

			{/* Телефон */}
			<div
				onClick={() => setOpen(false)}
				className={`${styles.phoneButton} ${phoneClass}`}
			>
				<a href='tel:+1234567890'>
					<Image
						className={styles.socialIcon}
						src={'/images/connect/phone.svg'}
						width={23}
						height={23}
						alt='phone'
					/>
				</a>
			</div>
		</div>
	)
}

export default Connect
