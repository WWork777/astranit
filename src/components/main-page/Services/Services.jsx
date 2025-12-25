'use client'
import { services } from '@/data'
import Link from 'next/link'
import { useEffect, useState } from 'react'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, EffectCoverflow } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './styles.module.scss'

export default function Services() {
	const [isMobile, setIsMobile] = useState(false)

	useEffect(() => {
		const checkScreenSize = () => {
			setIsMobile(window.innerWidth < 992)
		}

		checkScreenSize()
		window.addEventListener('resize', checkScreenSize)

		return () => window.removeEventListener('resize', checkScreenSize)
	}, [])

	return (
		<section className={styles.services}>
			<div className={` ${styles.services_container}`}>
				<h1 className={styles.title}>РЕШЕНИЯ И СЕРВИСЫ</h1>

				{isMobile ? (
					<div className={styles.swiper_container}>
						<Swiper
							autoplay
							speed={1500}
							effect={'coverflow'}
							grabCursor={true}
							centeredSlides={true}
							slidesPerView={'auto'}
							loop={true}
							coverflowEffect={{
								rotate: 0,
								stretch: 0,
								depth: 100,
								modifier: 2.5,
								slideShadows: true,
							}}
							pagination={{
								clickable: true,
							}}
							navigation={true}
							modules={[EffectCoverflow, Autoplay]}
							className={styles.swiper}
						>
							{services.map((item, index) => (
								<SwiperSlide key={item.desc} className={styles.swiper_slide}>
									<Link href={`/services/${item.link}`}>
										<div className={styles.cart}>
											<div className={styles.cart_img}>
												<img src={item.src} alt={item.desc} />
											</div>
											<div className={styles.cart_desc}>
												<p>{item.title}</p>
											</div>
										</div>
									</Link>
								</SwiperSlide>
							))}
						</Swiper>
					</div>
				) : (
					<ul className={styles.grid}>
						{services.map(item => (
							<li key={item.id}>
								<Link href={`/services/${item.link}`}>
									<div className={styles.cart}>
										<div className={styles.cart_img}>
											<img src={item.src} alt={item.title} />
										</div>
										<div className={styles.cart_desc}>
											<p>{item.title}</p>
										</div>
									</div>
								</Link>
							</li>
						))}
					</ul>
				)}
			</div>
		</section>
	)
}
