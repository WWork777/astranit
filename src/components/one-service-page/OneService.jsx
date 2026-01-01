import { services } from '@/data'
import './OneService.scss'
import Block1C from './blocks/block-1c/Block1C'
import BlockNetwork from './blocks/block-network/BlockNetwork'
import BlockScud from './blocks/block-scud/BlockScud'
import BlockServer from './blocks/block-server/BlockServer'
import BlockTelephony from './blocks/block-telephony/BlockTelephony'
import BlockVideo from './blocks/block-video/BlockVideo'

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
			case 4:
				return <BlockVideo data={service} />
			case 5:
				return <BlockScud data={service} />
			case 6:
				return <BlockTelephony data={service} />
			default:
				return <p>Очень скоро здесь будет описание решения</p>
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
