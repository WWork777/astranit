import './Hexagon.scss'

export default function Hexagon({ title, description, number }) {
	// Разбиваем описание на 6 строк
	const splitDescription = text => {
		const words = text.split(' ')
		const wordsPerLine = Math.ceil(words.length / 6)
		const lines = []

		for (let i = 0; i < 6; i++) {
			const start = i * wordsPerLine
			const end = start + wordsPerLine
			lines.push(words.slice(start, end).join(' '))
		}

		return lines.filter(line => line.trim() !== '')
	}

	const descriptionLines = splitDescription(description)

	return (
		<div className='hexagon-container'>
			<div className='hexagon'>
				{/* Верхний синий треугольник с цифрой */}
				<div className='hexagon-top-triangle'>
					<div className='triangle-number'>{number}</div>
				</div>

				{/* Основной контент */}
				<div className='hexagon-rectangle'>
					<h3 className='hexagon-title'>{title}</h3>
					<div className='hexagon-description'>
						{descriptionLines.map((line, index) => (
							<p key={index} className='description-line'>
								{line}
							</p>
						))}
					</div>
				</div>
			</div>
			{/* Верхний синий треугольник с цифрой */}
			<div className='hexagon-bottom-triangle'></div>
		</div>
	)
}
