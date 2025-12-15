import Link from 'next/link'
import styles from './styles.module.scss'
export default function Footer() {
	const data = {
		baseLink: [
			{ title: 'ИТ-ПОДДЕРЖКА', link: '/it-support' },
			{ title: 'ТАРИФЫ', link: '/tariffs' },
			{ title: 'КОНТАКТЫ', link: '/contacts' },
		],
		servLink: [
			{ title: '1C.Внедрение и сопровождение', link: '#' },
			{ title: 'Размещение сервера в датацентре', link: '#' },
			{ title: 'Монтаж слаботочных сетей', link: '#' },
			{ title: 'Видеонаблюдение', link: '#' },
			{ title: 'СКУД и учет рабочего времени', link: '#' },
			{ title: 'Подключение удаленщиков', link: '#' },
			{ title: 'Разграничение доступа к файлам', link: '#' },
			{ title: 'Дублирование интернет канала', link: '#' },
		],
		info: [
			{ title: 'astranit.ru', link: '/' },
			{ title: 'Материалы данного сайта<br/>  не являются офертой', link: '/' },
			{ title: 'Политика конфиденциальности', link: '/privacy' },
		],
	}

	return (
		<>
			<footer className={styles.footer}>
				<div className={`container ${styles.footer_container}`}>
					<div className={styles.footer_inner}>
						<ul className={styles.footer_inner_box1}>
							{data.baseLink.map(item => (
								<li key={item.title}>
									<Link href={item.link}>{item.title}</Link>
								</li>
							))}
						</ul>
						<ul className={styles.footer_inner_box2}>
							<li>Решения и сервисы</li>
							{data.servLink.map(item => (
								<li key={item.title}>
									<Link href={item.link}>{item.title}</Link>
								</li>
							))}
						</ul>
						<ul className={styles.footer_inner_box3}>
							{data.info.map(item => (
								<li key={item.title}>
									{item.title.includes('<br/>') ? (
										<Link href={item.link}>
											<span dangerouslySetInnerHTML={{ __html: item.title }} />
										</Link>
									) : (
										<Link href={item.link}>{item.title}</Link>
									)}
								</li>
							))}
						</ul>
					</div>
				</div>
				<div className={styles.footer_form}>
					<div className={styles.footer_form_text}>
						<h1>ОБСУДИМ ВАШУ ЗАДАЧУ!</h1>
						<p>
							Остались вопросы? С удовольствием проконсультируем вас по решению
							необходимой задачи и условиям обслуживания!
						</p>
					</div>
					<div className={styles.footer_form_img}>
						<img src='/images/footer/footer.svg' alt='footer-img' />
					</div>
				</div>
			</footer>
		</>
	)
}
