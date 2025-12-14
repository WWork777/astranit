import styles from './styles.module.scss'

export default function Services() {
	const data = [
		{
			desc: '1С: внедрение и сопровождение',
			src: '/images/services/img1.png',
		},
		{
			desc: 'Размещение сервера в датацентре',
			src: '/images/services/img2.png',
		},
		{
			desc: 'Монтаж слаботочных сетей',
			src: '/images/services/img3.png',
		},
		{
			desc: 'Видеонаблюдение',
			src: '/images/services/img4.png',
		},
		{
			desc: 'СКУД и учет рабочего времени',
			src: '/images/services/img5.png',
		},
		{
			desc: 'Офисная телефония',
			src: '/images/services/img6.png',
		},
		{
			desc: 'Подключение удаленщиков',
			src: '/images/services/img7.png',
		},
		{
			desc: 'Разграничение доступа к файлам',
			src: '/images/services/img8.png',
		},
		{
			desc: 'Дублирование Интернет-канала',
			src: '/images/services/img9.png',
		},
	]

	return (
		<>
			<section className={styles.services}>
				<div className='container'>
					<h1 className={styles.title}>РЕШЕНИЯ И СЕРВИСЫ</h1>
					<ul className={styles.grid}>
						{data.map(item => (
							<li key={item.desc}>
								<div className={styles.cart}>
									<div className={styles.cart_img}>
										<img src={item.src} alt={item.title} />
									</div>
									<div className={styles.cart_desc}>
										<p>{item.desc}</p>
									</div>
								</div>
							</li>
						))}
					</ul>
				</div>
			</section>
		</>
	)
}
