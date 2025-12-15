'use client'
import styles from './styles.module.scss'

import Image from 'next/image'
import 'swiper/css'
import 'swiper/css/effect-coverflow'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Autoplay, Navigation, Pagination } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'

export default function Reviews() {
	const reviews = [
		'/images/reviews/img1.svg',
		'/images/reviews/img2.png',
		'/images/reviews/img3.png',
		'/images/reviews/img1.png',
		'/images/reviews/img2.png',
		'/images/reviews/img3.png',
	]
	return (
		<>
			<section className={styles.reviews}>
				<div className='container'>
					<h1 className={styles.title}>ОТЗЫВЫ О НАШЕЙ РАБОТЕ</h1>
					<Swiper
						loop={true}
						grabCursor={true}
						centeredSlides={true}
						// slidesPerView={3}
						// spaceBetween={0}
						pagination={false}
						navigation={
							true
							// nextEl: '.swiper-button-next',
							// prevEl: '.swiper-button-prev',
						}
						autoplay={{
							delay: 4000,
							disableOnInteraction: false,
							pauseOnMouseEnter: true,
							waitForTransition: true,
						}}
						speed={1000}
						modules={[Navigation, Pagination, Autoplay]}
						className={styles.reviewsSwiper}
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
									{/* <img src={src} alt='reviews' /> */}
								</div>
							</SwiperSlide>
						))}
						{/* <div className={`swiper-button-prev ${styles.button_prev}`}></div>
						<div className={`swiper-button-next ${styles.button_next}`}></div> */}
					</Swiper>
				</div>
			</section>
		</>
	)
}
