import { services } from '@/data'
import Link from 'next/link'
import './Service.scss'
import styles from './styles.module.scss'

export default function Service() {
	return (
		<>
			<section className='service'>
				<div className='service-container'>
					<h1 className='service-title'>РЕШЕНИЯ И СЕРВИСЫ</h1>
					<div className='service-body'>
						<ul className={styles.grid}>
							{services.map(item => (
								<li key={item.title}>
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
								</li>
							))}
						</ul>
					</div>
				</div>
			</section>
		</>
	)
}
