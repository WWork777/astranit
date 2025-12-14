'use client'
import styles from './styles.module.scss'

import 'swiper/css'
import 'swiper/css/effect-coverflow'
// import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
export default function Reviews() {
	const reviews = [
		'/images/reviews/img1.png',
		'/images/reviews/img2.png',
		'/images/reviews/img3.png',
		'/images/reviews/img1.png',
		'/images/reviews/img2.png',
		'/images/reviews/img2.png',
	]
	return (
		<>
			<section className={styles.reviews}>
				<div className='container'>
					<h1 className={styles.title}>ОТЗЫВЫ О НАШЕЙ РАБОТЕ</h1>
					<Swiper
						loop={true}
						grabCursor={true}
						centeredSlides={false}
						// slidesPerView={3}
						// spaceBetween={0}
						pagination={false}
						navigation={true}
						autoplay={{
							delay: 4000, // 4 секунды
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
							waitForTransition: true,
						}}
						speed={1000} // 1 секунда анимации
						modules={[Navigation, Pagination, Autoplay]}
						className=''
						breakpoints={{
							320: {
								slidesPerView: 1,
							},
							640: {
								slidesPerView: 1.2,
								spaceBetween: 10,
							},
							768: {
								slidesPerView: 1.3,
								spaceBetween: 5,
							},

							1024: {
								slidesPerView: 2,
								spaceBetween: 10,
							},
							1280: {
								slidesPerView: 2.5,
								spaceBetween: 20,
							},
							1520: {
								slidesPerView: 3,
								spaceBetween: 20,
							},
						}}
					>
						{reviews.map(src => (
							<SwiperSlide className={''}>
								<div key={Math.random()}>
									<img src={src} alt='img' />
								</div>
							</SwiperSlide>
						))}
					</Swiper>
				</div>
			</section>
		</>
	)
}
