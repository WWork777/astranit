'use client'
import { baseLinks, info, services as servLink } from '@/data'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import './footer.scss'

export default function Footer() {
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
							<form className='banner-inner__form inner-form'>
								<div className='inner-form__inputs'>
									<input
										type='text'
										name='name'
										placeholder='Как к вам обращаться?'
									/>
									<input
										type='tel'
										name='phone'
										placeholder='+7 (000) 000-00-00'
										required
										className='required-field'
									/>
									<input
										type='email'
										name='email'
										placeholder='name@company'
										required
										className='required-field'
									/>
								</div>
								<textarea
									name='message'
									id='message'
									placeholder={
										'Ваша задача или вопрос\nИли не пишите ничего, уточним все в ходе обсуждения.'
									}
								></textarea>
							</form>
							{/* <form className='banner-inner__form inner-form'>
								<div className='inner-form__inputs'>
									<div className='form-group'>
										<input
											type='text'
											name='name'
											placeholder='Как к вам обращаться?'
											className='form-input'
										/>
									</div>
									<div className='form-group required'>
										<input
											type='tel'
											name='phone'
											placeholder='+7 (000) 000-00-00'
											required
											className='form-input required-field'
										/>
										<span className='required-star'>*</span>
									</div>
									<div className='form-group required'>
										<input
											type='email'
											name='email'
											placeholder='name@company'
											required
											className='form-input required-field'
										/>
										<span className='required-star'>*</span>
									</div>
								</div>
							</form> */}
							<button className='banner-inner__button'>Отправить</button>
						</div>
						<div className='bunner-inner__img'>
							<img src='/images/footer/footer.svg' alt='image' />
						</div>
					</div>
					<div className='footer-links'>
						<div className='footer-links__inner links-inner'>
							<ul className='links-inner__box1'>
								{baseLinks.map(item => (
									<li key={item.title}>
										<Link href={item.link}>{item.title}</Link>
									</li>
								))}
								<ul className='links-inner__double'>
									{info.map(item => (
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
								{servLink.map(item => (
									<li key={item.title}>
										<Link href={`/services/${item.link}`}>{item.title}</Link>
									</li>
								))}
							</ul>
							<ul className='links-inner__box3'>
								{info.map(item => (
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
