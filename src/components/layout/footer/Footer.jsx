'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './footer.scss'

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
	const pathname = usePathname()

	return (
		<>
			<footer className='footer'>
				<div
					style={{ display: `${pathname === '/contacts' ? 'none' : 'block'}` }}
					className='footer-top'
				></div>
				<div className='footer-bottom'>
					<div className='footer-bottom__banner footer-banner'>
						<div className='footer-banner__inner banner-inner'>
							<h1 className='banner-inner__title'>
								{pathname === '/contacts'
									? 'НАПИШИТЕ НАМ!'
									: 'ОБСУДИМ ВАШУ ЗАДАЧУ!'}
							</h1>
							<p className='banner-inner__desc'>
								Остались вопросы? С удовольствием проконсультируем вас по
								решению необходимой задачи и условиям обслуживания!
							</p>
							<form action='' className='banner-inner__form inner-form'>
								<div className='inner-form__inputs'>
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
								<textarea
									name='message'
									id='message'
									placeholder='Ваша задача или вопрос.Или не пишите ничего, уточним все в ходе обсуждения.'
								></textarea>
							</form>
							<button className='banner-inner__button'>Отправить</button>
						</div>
						<div className='bunner-inner__img'>
							<img src='/images/footer/footer.svg' alt='image' />
						</div>
					</div>
					<div className='footer-links'>
						<div className='footer-links__inner links-inner'>
							<ul className='links-inner__box1'>
								{data.baseLink.map(item => (
									<li key={item.title}>
										<Link href={item.link}>{item.title}</Link>
									</li>
								))}
								<ul className='links-inner__double'>
									{data.info.map(item => (
										<li key={item.title}>
											{item.title.includes('<br/>') ? (
												<Link href={item.link}>
													<span
														dangerouslySetInnerHTML={{ __html: item.title }}
													/>
												</Link>
											) : (
												<Link href={item.link}>{item.title}</Link>
											)}
										</li>
									))}
								</ul>
							</ul>

							<ul className='links-inner__box2'>
								<li>РЕШЕНИЯ И СЕРВИСЫ</li>
								{data.servLink.map(item => (
									<li key={item.title}>
										<Link href={item.link}>{item.title}</Link>
									</li>
								))}
							</ul>
							<ul className='links-inner__box3'>
								{data.info.map(item => (
									<li key={item.title}>
										{item.title.includes('<br/>') ? (
											<Link href={item.link}>
												<span
													dangerouslySetInnerHTML={{ __html: item.title }}
												/>
											</Link>
										) : (
											<Link href={item.link}>{item.title}</Link>
										)}
									</li>
								))}
							</ul>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}
