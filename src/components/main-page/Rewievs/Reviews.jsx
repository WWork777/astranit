'use client'
import Image from 'next/image'
import { useRef } from 'react'
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import styles from './styles.module.scss'

export default function Reviews() {
	const swiperRef = useRef(null)

	const reviews = [
		'/images/reviews/img1.png',
		'/images/reviews/img2.png',
		'/images/reviews/img3.png',
		'/images/reviews/img1.png',
		'/images/reviews/img2.png',
		'/images/reviews/img3.png',
	]

	const handlePrev = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slidePrev()
		}
	}

	const handleNext = () => {
		if (swiperRef.current && swiperRef.current.swiper) {
			swiperRef.current.swiper.slideNext()
		}
	}

	return (
		<>
			<section className={styles.reviews}>
				<div className={`container ${styles.mb_0}`}>
					<h1 className={styles.title}>ОТЗЫВЫ О НАШЕЙ РАБОТЕ</h1>

					<div className={styles.swiperContainer}>
						{/* Кнопка "назад" */}
						<button
							className={`${styles.navButton} ${styles.navButtonPrev}`}
							onClick={handlePrev}
						>
							<BsChevronCompactLeft color='#ff9a22' size={80} />
						</button>

						{/* Слайдер */}
						<Swiper
							ref={swiperRef}
							loop={true}
							grabCursor={true}
							centeredSlides={false}
							pagination={false}
							navigation={false} // Отключаем встроенную навигацию
							autoplay={{
								delay: 4000,
								disableOnInteraction: false,
								pauseOnMouseEnter: true,
								waitForTransition: true,
							}}
							speed={1000}
							modules={[Autoplay]} // Убираем Navigation из modules
							className={styles.reviewsSwiper}
							breakpoints={{
								320: {
									slidesPerView: 1,
								},
								640: {
									slidesPerView: 1,
									spaceBetween: 10,
								},
								768: {
									slidesPerView: 2,
									spaceBetween: 5,
								},
								1024: {
									slidesPerView: 3,
									spaceBetween: 10,
								},
								1280: {
									slidesPerView: 3,
									spaceBetween: 20,
								},
								1520: {
									slidesPerView: 3,
									spaceBetween: 20,
								},
							}}
						>
							{reviews.map((src, index) => (
								<SwiperSlide key={index}>
									<div>
										<Image
											width={1000}
											height={1000}
											src={src}
											style={{
												width: '100%',
												height: '100%',
												objectFit: 'cover',
											}}
											alt='reviews'
										/>
									</div>
								</SwiperSlide>
							))}
						</Swiper>

						{/* Кнопка "вперед" */}
						<button
							className={`${styles.navButton} ${styles.navButtonNext}`}
							onClick={handleNext}
						>
							<BsChevronCompactRight color='#ff9a22' size={80} />
						</button>
					</div>
				</div>
			</section>
		</>
	)
}
