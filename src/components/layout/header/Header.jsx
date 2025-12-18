'use client'
import Image from 'next/image'
import Link from 'next/link'
import { useState } from 'react'
import styles from './styles.module.scss'

export default function Header() {
	const [isMenuOpen, setIsMenuOpen] = useState(false)

	const toggleMenu = () => {
		setIsMenuOpen(!isMenuOpen)
	}

	const closeMenu = () => {
		setIsMenuOpen(false)
	}

	return (
		<>
			<div className={styles.header}>
				<div className={styles.logo_container}>
					<Link href='#' onClick={closeMenu}>
						<Image
							src='/logo/logo.svg'
							alt='astrinit logo'
							width={200}
							height={50}
						/>
					</Link>
				</div>

				<div className={styles.nav_container}>
					<Link href='/' className={styles.nav_link} onClick={closeMenu}>
						ИТ-ПОДДЕРЖКА
					</Link>
					<Link href='/tariffs' className={styles.nav_link} onClick={closeMenu}>
						ТАРИФЫ
					</Link>
					<Link href='#' className={styles.nav_link} onClick={closeMenu}>
						РЕШЕНИЯ
					</Link>
					<Link href='#' className={styles.nav_link} onClick={closeMenu}>
						КОНТАКТЫ
					</Link>
				</div>

				<div className={styles.socials_container}>
					<Link href='tel:+78123363646' className={styles.phone_link}>
						(812) 336 36 46
					</Link>
					<div className={styles.socials_links}>
						<Link href='#'>
							<Image
								src='/svg/socials/tg.svg'
								alt='tg'
								width={35}
								height={35}
							/>
						</Link>
						<Link href='#'>
							<Image
								src='/svg/socials/wa.svg'
								alt='wa'
								width={35}
								height={35}
							/>
						</Link>
					</div>
				</div>

				{/* Бургер-кнопка */}
				<button
					className={`${styles.burger_button} ${
						isMenuOpen ? styles.active : ''
					}`}
					onClick={toggleMenu}
					aria-label='Открыть меню'
				>
					<span></span>
					<span></span>
					<span></span>
				</button>
			</div>

			{/* Мобильное меню */}
			<div
				className={`${styles.mobile_menu} ${isMenuOpen ? styles.active : ''}`}
			>
				<div className={styles.mobile_menu_content}>
					<Link href='/' className={styles.mobile_nav_link} onClick={closeMenu}>
						ИТ-ПОДДЕРЖКА
					</Link>
					<Link
						href='/tariffs'
						className={styles.mobile_nav_link}
						onClick={closeMenu}
					>
						ТАРИФЫ
					</Link>
					<Link href='#' className={styles.mobile_nav_link} onClick={closeMenu}>
						РЕШЕНИЯ
					</Link>
					<Link href='#' className={styles.mobile_nav_link} onClick={closeMenu}>
						КОНТАКТЫ
					</Link>

					<div className={styles.mobile_contacts}>
						<Link
							href='tel:+78123363646'
							className={styles.mobile_phone_link}
							onClick={closeMenu}
						>
							(812) 336 36 46
						</Link>
						<div className={styles.mobile_socials}>
							<Link href='#' onClick={closeMenu}>
								<Image
									src='/svg/socials/tg.svg'
									alt='tg'
									width={40}
									height={40}
								/>
							</Link>
							<Link href='#' onClick={closeMenu}>
								<Image
									src='/svg/socials/wa.svg'
									alt='wa'
									width={40}
									height={40}
								/>
							</Link>
						</div>
					</div>
				</div>
			</div>

			{/* Оверлей для закрытия меню */}
			{isMenuOpen && (
				<div className={styles.menu_overlay} onClick={closeMenu}></div>
			)}
		</>
	)
}
