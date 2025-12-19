import { services } from '@/data'
import './OneService.scss'

export default function OneService({ link }) {
	const service = services.find(item => item.link == link)
	if (!service) {
		return (
			<>
				<div style={{ paddingTop: '120px' }}>Решение не найдено!!!!</div>
			</>
		)
	}

	return (
		<>
			<section className='one-service'>
				<div className='one-service-container'>
					<h1 className='one-service-title'>{service.title}</h1>
					<div className='one-service-img'>
						<img src={service.src2} alt={service.title} />
					</div>
					<div className='one-service-description'>
						{service.p.map(item => (
							<p key={Math.random()}>{item}</p>
						))}
					</div>
				</div>
			</section>
		</>
	)
}
