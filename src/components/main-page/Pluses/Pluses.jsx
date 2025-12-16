import Image from 'next/image'
import styles from './styles.module.scss'

export default function Pluses() {
	return (
		<section className={styles.pluses}>
			<div className='container'>
				<h2 className={styles.pluses_title}>ПЯТЬ ПЛЮСОВ ДЛЯ ВАШЕГО БИЗНЕСА!</h2>
				<div className={styles.pluses_conatiner}>
					<div className={styles.pluses_conatiner_left}>
						<span>#1. Эффективные решения</span>
						<p>
							Вы хотели бы внедрить разграничение доступа пользователей?
							Подключить удаленных сотрудников? Установить бесшовную WiFi-сеть,
							офисную телефонию или видеонаблюдение?
						</p>
						<p>Поможем вам реализовать все это и многое другое!</p>

						<Image
							src='/images/pluses/image.png'
							alt='pluses'
							width={100}
							height={200}
						/>
					</div>
					<div className={styles.pluses_conatiner_right}>
						<div className={styles.pluses_conatiner_right_top}>
							<div className={styles.pluses_conatiner_right_top__left}>
								<span>#2. Предотвращение аварий</span>
								<p>
									Выполняя ежедневный мониторинг состояния оборудования, наши
									специалисты выявят и ликвидируют потенциальные сбои до того,
									как они повлияют на вашу работу.
								</p>
							</div>
							<div className={styles.pluses_conatiner_right_top__right}>
								<span>#3. Сокращение простоев</span>
								<p>
									Повысим продуктивность работы ваших сотрудников, предоставляя
									консультации по ИТ-вопросам и оперативно устраняя неполадки.
								</p>
							</div>
						</div>
						<div className={styles.pluses_conatiner_right_bottom}>
							<div className={styles.pluses_conatiner_right_bottom__left}>
								<span>#4. Защита информации</span>
								<p>
									Защитим вашу информацию, файлы, базы 1С. Устраним риски утраты
									данных, которые могут привести к финансовым и репутационным
									потерям.
								</p>
							</div>
							<div className={styles.pluses_conatiner_right_bottom__right}>
								<span>#5. Содействие в развитии</span>
								<p>
									Необходима помощь ИТ-специалистов при переезде офиса, открытии
									филиала, магазина, склада? Спланируем закупку оборудования,
									подключение коммуникаций, монтаж сети и поможем оперативно
									запуститься!
								</p>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
