import Hexagon from '../hexagon/Hexagon'
import './HexagonGrid.scss'

export default function HexagonGrid({ items = [] }) {
	// Если items пустой, используем демо данные
	const hexagonItems =
		items.length > 0
			? items
			: [
					{
						id: 1,
						title: 'Обсудим и спланируем',

						description:
							'На какие моменты обратить особое внимание? Какие вопросы нужно решить срочно? Как аккуратно принять дела? Обсудим важные нюансы, наметим и согласуем рамочныйплан действий.',
					},
					{
						id: 2,
						title: 'Примем дела',
						description:
							'Заполним анкету данными об элементах ИТ-инфраструктуры, их местонахождении, основных настройках. Примем административные доступы, запустим техподдержкув оперативном режиме.',
					},
					{
						id: 3,
						title: 'Защитим информацию',
						description:
							'Установим, где хранятся рабочие каталоги, файлы и базы данных. Выполним аудит и отладку резервного копирования. Примем меры для исключения рисков несанкционированного доступаи потери данных.',
					},
					{
						id: 4,
						title: 'Наведем порядок',
						description:
							'Присвоим каждому устройству учетный номер и промаркируем технику. Выполним работы по оптимизации ИТ-инфраструктуры. Перейдем к сопровождению в штатном режиме.',
					},
					{
						id: 5,
						title: 'Задокументируем',
						description:
							'Проверим и дополним имеющиеся сведения об ИТ-инфраструктуре, смежных подрядчиках, прочих деталях. Обеспечим актуальность документации в течение всего срока обслуживания.',
					},
			  ]

	return (
		<div className='hexagon-grid'>
			{/* Первый ряд - 3 шестиугольника */}
			<div className='hexagon-row hexagon-row-top'>
				{hexagonItems.slice(0, 3).map((item, index) => (
					<div key={item.id || index} className='hexagon-item'>
						<Hexagon
							title={item.title}
							description={item.description}
							number={item.id || index + 1}
						/>
					</div>
				))}
			</div>

			{/* Второй ряд - 2 шестиугольника со смещением */}
			<div className='hexagon-row hexagon-row-bottom'>
				{hexagonItems.slice(3, 5).map((item, index) => (
					<div key={item.id || index + 4} className='hexagon-item'>
						<Hexagon
							title={item.title}
							description={item.description}
							number={item.id || index + 4}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
