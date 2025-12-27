import './Contacts.scss'

export default function Contacts() {
	return (
		<>
			<section className='contacts'>
				<div className='contacts-container'>
					<h1 className='contacts-title'>наши контакты</h1>
					<div className='contacts-info'>
						<div className='contacts-info__box'>
							<p className='contacts-info__box-title'>
								Договоры, взаиморасчеты:
							</p>
							<p className='contacts-info__box-title-phone'>(812) 336 36 46</p>
							<p className='contacts-info__box-title-email'>
								client@astranit.ru
							</p>
						</div>
						<div className='contacts-info__box'>
							<p className='contacts-info__box-title'>Техническая поддержка:</p>
							<p className='contacts-info__box-title-phone'>(812) 407 39 87</p>
							<p className='contacts-info__box-title-email'>
								support@astranit.ru
							</p>
						</div>
						<div className='contacts-info__box'>
							<p className='contacts-info__box-title'>Офис:</p>
							<p className='contacts-info__box-title-phone'>
								г. Санкт-Петербург,
							</p>
							<p className='contacts-info__box-title-email'>
								пр. Юрия Гагарина, д.23, офис 303
							</p>
							<div className='contacts-info__tooltip0'>
								<img src='/images/contacts/logotype.png' alt='logotype' />
								<span>пр. Юрия Гагарина, д.23</span>
							</div>
						</div>
						<div className='contacts-info__tooltip1'>
							<img src='/images/contacts/logotype.png' alt='logotype' />
							<span>пр. Юрия Гагарина, д.23</span>
						</div>

						<div className='contacts-info__tooltip2'>
							<h3 className='contacts-info__tooltip2-title'>
								Приедем быстро, где бы вы ни находились!
							</h3>
							<p className='contacts-info__tooltip2-desc'>
								Специалисты, работающие в выездном режиме, распределены по
								городу и стартуют к заказчику с ближайшего адреса.
							</p>
						</div>
					</div>
				</div>
				<div className='contacts-map'>
					{/* <img src='/images/contacts/map.png' alt='map' /> */}
					<div className='contacts-map__tooltip1'>
						<img src='/images/contacts/logotype.png' alt='logotype' />
						<span>пр. Юрия Гагарина, д.23</span>
					</div>
				</div>
			</section>
		</>
	)
}
