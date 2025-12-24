import { supportList as data } from '@/data'
import HexagonGrid from './partials/hexagonGrid/HexagonGrid'
import styles from './styles.module.scss'
export default function Support() {
	return (
		<section className={styles.support}>
			<div className={styles.container}>
				<h1 className={styles.title}>
					системный подход - фундамент качественной поддержки!
				</h1>
				<HexagonGrid className={styles.hexagon_grid} hexagonItems={data} />
				<ul className={styles.grid}>
					{data.map((item, i) => (
						<li key={item.title} className={styles.grid_item}>
							<div className={styles.cart}>
								<div className={styles.cart_count}>{String(i + 1)}</div>
								<div className={styles.cart_text}>
									<h2>{item.title}</h2>
									<p>{item.desc}</p>
								</div>
							</div>
						</li>
					))}
				</ul>
			</div>
		</section>
	)
}
