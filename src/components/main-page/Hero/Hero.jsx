import Image from 'next/image'
import styles from './styles.module.scss'

export default function Hero() {
	return (
		<>
			<section className={styles.hero}>
				<div className={styles.hero_container}>
					<div className={styles.hero_container__left}>
						<div className={styles.hero_heading}>
							<h1 className={styles.hero_title}>ИТ-ПОДДЕРЖКА БИЗНЕСА</h1>
							<p className={styles.hero_subtitle}>
								Внимание и готовность помочь - каждый день!
							</p>
						</div>
						<div className={styles.hero_content}>
							<div className={styles.hero_item__container}>
								<div className={styles.hero_content__item}>
									<Image
										src='/svg/hero/phone.svg'
										alt='phone'
										width={60}
										height={60}
									/>
									<span>
										Удаленная техподдержка <br /> по телефону и e-mail
									</span>
								</div>
								<div className={styles.hero_content__item}>
									<Image
										src='/svg/hero/man.svg'
										alt='man'
										width={60}
										height={60}
									/>
									<span>
										Техподдержка на месте <br /> с выездом специалиста
									</span>
								</div>
							</div>
							<div className={styles.hero_item__container}>
								<div className={styles.hero_content__item}>
									<Image
										src='/svg/hero/protect.svg'
										alt='protect'
										width={60}
										height={60}
									/>
									<span>
										Порядок в ИТ-системе <br /> и защита данных
									</span>
								</div>
								<div className={styles.hero_content__item}>
									<Image
										src='/svg/hero/light.svg'
										alt='light'
										width={60}
										height={60}
									/>
									<span>
										Эффективные <br /> и удобные решения
									</span>
								</div>
							</div>
						</div>
						<div className={styles.hero_form}>
							<p>
								Отправьте заявку на консультацию, и мы перезвоним в <br />
								течение 15 минут!
							</p>
							<form action=''>
								<input type='text' placeholder='+7 (000) 000-00-00' />
								<button>
									<span>Перезвоните мне!</span>
								</button>
							</form>
						</div>
					</div>
					<div className={styles.hero_container__right}>
						{/* <Image
							src='/images/hero/hero.png'
							alt='it-outsorce'
							width={100}
							height={100}
						/> */}
						<img src='/images/hero/hero.png' alt='it-outsorce' />
					</div>
				</div>
			</section>

			<section className={styles.hero_container__mobile}>
				<h1>ИТ-ПОДДЕРЖКА БИЗНЕСА</h1>
				<p>Внимание и готовность помочь - каждый день!</p>
				<Image
					src='/images/hero/hero.png'
					width={1920}
					height={1080}
					alt='it-outsorce'
				/>
				<div className={styles.hero_content_mobile}>
					<div className={styles.hero_content_container__mobile}>
						<div className={styles.hero_content__item__mobile}>
							<Image
								src='/svg/hero/phone.svg'
								alt='phone'
								width={50}
								height={50}
							/>
							<span>
								Удаленная техподдержка <br /> по телефону и e-mail
							</span>
						</div>
						<div className={styles.hero_content__item__mobile}>
							<Image src='/svg/hero/man.svg' alt='man' width={50} height={50} />
							<span>
								Техподдержка на месте <br /> с выездом специалиста
							</span>
						</div>
						<div className={styles.hero_content__item__mobile}>
							<Image
								src='/svg/hero/protect.svg'
								alt='protect'
								width={50}
								height={50}
							/>
							<span>
								Порядок в ИТ-системе <br /> и защита данных
							</span>
						</div>
						<div className={styles.hero_content__item__mobile}>
							<Image
								src='/svg/hero/light.svg'
								alt='light'
								width={50}
								height={50}
							/>
							<span>
								Эффективные <br /> и удобные решения
							</span>
						</div>
					</div>
				</div>
				<div className={styles.hero_container_form_mobile}>
					<p>
						Оставьте заявку на консультацию, и мы перезвоним <br /> в течение 15
						минут!
					</p>
					<button>
						<span>Оставить заявку!</span>
					</button>
				</div>
			</section>
		</>
	)
}
