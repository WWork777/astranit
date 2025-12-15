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
			{ title: 'astranit.ru<br/> (C) ООО "ИТ Спектр", 2009-2025', link: '/' },
			{
				title: 'Материалы данного сайта<br/> не являются публичной офертой',
				link: '/',
			},
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
							<li>РЕШЕНИЯ И СЕРВИСЫ</li>
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
				<div className={styles.footer_banner}>
					<div className={styles.footer_banner_text}>
						<h1>ОБСУДИМ ВАШУ ЗАДАЧУ!</h1>
						<p>
							Остались вопросы? С удовольствием проконсультируем вас по решению
							необходимой задачи и условиям обслуживания!
						</p>
						<form className={styles.footer_form}>
							<div className={styles.footer_form_body}>
								<div className={styles.form_inputs}>
									<input
										type='text'
										name='name'
										placeholder='Как к вам обращаться?'
									/>
									<input
										type='text'
										name='phone'
										placeholder='+7 (000) 000-00-00'
										required
									/>
									<input
										type='email'
										name='email'
										placeholder='name@company*'
									/>
								</div>
								<div className={styles.form_textarea}>
									<textarea
										name='message'
										id='message'
										placeholder='Ваша задача или вопрос.Или не пишите ничего, уточним все в ходе обсуждения.'
									></textarea>
								</div>
							</div>
							<button>
								<span>Отправить</span>
							</button>
						</form>
					</div>
					<div className={styles.footer_banner_img}>
						<img src='/images/footer/footer.svg' alt='footer-img' />
					</div>
				</div>
			</footer>
		</>
	)
}
