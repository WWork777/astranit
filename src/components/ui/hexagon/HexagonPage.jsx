import './Hexagon.scss'
import Hexagon from './HexagonPage'

export default function HexagonPage() {
	const services = [
		{
			id: 1,
			title: 'Веб-разработка',
			description:
				'Создание современных веб-приложений с использованием React, Next.js и современных технологий. Полный цикл разработки от дизайна до запуска.',
			number: 1,
		},
		{
			id: 2,
			title: 'Мобильные приложения',
			description:
				'Разработка кроссплатформенных мобильных приложений для iOS и Android. Нативные и гибридные решения.',
			number: 2,
		},
		{
			id: 3,
			title: 'UI/UX Дизайн',
			description:
				'Создание интуитивно понятных интерфейсов. Прототипирование, пользовательские исследования, тестирование.',
			number: 3,
		},
		{
			id: 4,
			title: 'SEO оптимизация',
			description:
				'Повышение видимости сайта в поисковых системах. Аудит, технический SEO, контент-стратегия.',
			number: 4,
		},
		{
			id: 5,
			title: 'Поддержка',
			description:
				'Техническая поддержка и обслуживание сайтов. Мониторинг, обновления, безопасность.',
			number: 5,
		},
		{
			id: 6,
			title: 'Консалтинг',
			description:
				'Экспертные консультации по digital-стратегии. Анализ конкурентов, планирование развития.',
			number: 6,
		},
	]

	return (
		<section className='services-section'>
			<h2 className='section-title'>Наши услуги</h2>
			<p className='section-subtitle'>Комплексные решения для вашего бизнеса</p>

			<div className='hexagons-grid grid-layout'>
				{services.map(service => (
					<Hexagon
						key={service.id}
						title={service.title}
						description={service.description}
						number={service.number}
					/>
				))}
			</div>
		</section>
	)
}
