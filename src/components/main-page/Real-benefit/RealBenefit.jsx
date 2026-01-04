import { benefitList as data } from '@/data'
import Image from 'next/image'
import styles from './styles.module.scss'

export default function RealBenefit() {
	return (
		<section className={styles.benefit}>
			<div className={styles.container}>
				<h1 className={styles.title}>
					РЕАЛЬНАЯ ПОЛЬЗА - <br className={styles.title_br} /> С ПЕРВЫХ ДНЕЙ!
				</h1>
				<ul className={styles.grid}>
					{data.map((item, index) => (
						<li key={item.title} className={styles.grid_item}>
							<div className={styles.cart}>
								<div className={styles.cart_img}>
									<Image
										src={item.src}
										alt={item.title}
										width={250}
										height={250}
										className={styles.image}
									/>
								</div>
								<div className={styles.cart_text}>
									<h2>{item.title}</h2>
									<p>{item.desc}</p>
								</div>
							</div>
							{/* 
							<div className={styles.cart_mobile}>
								<div className={styles.cart_img}>
									<Image
										src={item.src}
										alt={item.title}
										width={250}
										height={250}
										className={styles.image}
									/>
									<h2>{item.title}</h2>
								</div>
								<div className={styles.cart_text_mobile}>
									<p>{item.desc}</p>
								</div>
							</div> */}
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
