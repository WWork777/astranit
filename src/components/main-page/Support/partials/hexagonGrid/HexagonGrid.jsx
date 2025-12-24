import Hexagon from '../hexagon/Hexagon'
import './HexagonGrid.scss'

export default function HexagonGrid({ hexagonItems = [] }) {
	return (
		<div className='hexagon-grid'>
			{/* Первый ряд - 3 шестиугольника */}
			<div className='hexagon-row hexagon-row-top'>
				{hexagonItems.slice(0, 3).map((item, index) => (
					<div key={item.id || index} className='hexagon-item'>
						<Hexagon
							title={item.title}
							description={item.desc}
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
							description={item.desc}
							number={item.id || index + 4}
						/>
					</div>
				))}
			</div>
		</div>
	)
}
