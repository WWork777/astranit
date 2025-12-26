'use client'
import Ranges from '@/components/ui/ranges/Ranges'
import styles from './styles.module.scss'

export default function Calculator() {
	return (
		<>
			<section className={styles.calc}>
				<div className={styles.clipped}>
					<div className={styles.clipped_box_left}>
						<div className={styles.clipped_box_left_inner}>
							<h1>
								РАССЧИТАЙТЕ СТОИМОСТЬ <br />
								ит-поддержки!
							</h1>
							<Ranges styles={styles} />
						</div>
					</div>
					<div className={styles.clipped_box_right}>
						<img src='/images/calc/calc.png' alt='calc' />
					</div>
				</div>
			</section>
		</>
	)
}
