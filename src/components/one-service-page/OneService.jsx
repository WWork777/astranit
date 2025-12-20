import { services } from '@/data'
import './OneService.scss'
import Block1C from './blocks/1c/Block1C'
import BlockNetwork from './blocks/block-network/BlockNetwork'
import BlockServer from './blocks/block-server/BlockServer'

export default function OneService({ link }) {
	const service = services.find(item => item.link == link)
	if (!service) {
		return (
			<>
				<div style={{ paddingTop: '120px' }}>Решение не найдено!!!!</div>
			</>
		)
	}
	const renderDescription = () => {
		switch (service.id) {
			case 1:
				return <Block1C data={service} />
			case 2:
				return <BlockServer data={service} />
			case 3:
				return <BlockNetwork data={service} />
			default:
				return <p>Стандартное описание</p>
		}
	}

	return (
		<>
			<section className='one-service'>
				<div className='one-service-container'>
					<h1 className='one-service-title'>{service.title}</h1>
					<div className='one-service-img'>
						<img src={service.src2} alt={service.title} />
					</div>
					<div className='one-service-description'>{renderDescription()}</div>
				</div>
			</section>
		</>
	)
}
