import Image from 'next/image'
import styles from './styles.module.scss'

export default function Start() {
	return (
		<section className={styles.start}>
			<div className={styles.container}>
				<h2 className={styles.start_title}>ЭФФЕКТИВНЫЙ СТАРТ!</h2>
				<div className={styles.start_container}>
					{/* Первый блок */}
					<div className={styles.start_item_wrapper}>
						<div className={styles.start_item}>
							<div className={styles.item_content}>
								<div className={styles.text_wrapper}>
									<span className={styles.item_title}>
										Отчет о состоянии дел
									</span>
									<p className={styles.item_description}>
										Проведем аудит и предоставим отчет о состоянии вашей
										компьютерной инфраструктуры. Выявим проблемы, влияющие на
										работу вашей ИТ-системы и безопасность данных.
									</p>
								</div>
								<div className={styles.image_wrapper}>
									<Image
										src='/svg/start/first.png'
										alt='Отчет о состоянии дел'
										width={130}
										height={10}
										className={styles.item_image}
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Второй блок */}
					<div className={styles.start_item_wrapper}>
						<div className={styles.start_item}>
							<div className={styles.item_content}>
								<div className={styles.text_wrapper}>
									<span className={styles.item_title}>План действий</span>
									<p className={styles.item_description}>
										Составим и согласуем с вами дорожную карту отладки вашей
										ИТ-инфраструктуры и решения накопившихся вопросов: как тех,
										с которыми вы к нам обратились, так и выявленных в ходе
										аудита.
									</p>
								</div>
								<div className={styles.image_wrapper}>
									<Image
										src='/svg/start/second.png'
										alt='План действий'
										width={130}
										height={100}
										className={styles.item_image}
									/>
								</div>
							</div>
						</div>
					</div>

					{/* Третий блок*/}
					<div className={styles.start_item_wrapper}>
						<div className={styles.start_item}>
							<div className={styles.item_content}>
								<div className={styles.text_wrapper}>
									<span className={styles.item_title}>Техподдержка</span>
									<p className={styles.item_description}>
										Ваши сотрудники получат доступ к горячей линии ИТ-поддержки.
										Мы будем решать вопросы пользователей удаленно и на выездах,
										а вы сможете сосредоточиться на ведении бизнеса!
									</p>
								</div>
								<div className={styles.image_wrapper}>
									<Image
										src='/svg/start/three.png'
										alt='Техподдержка'
										width={130}
										height={100}
										className={styles.item_image}
									/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</section>
	)
}
