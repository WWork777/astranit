// 'use client'
// import { useState } from 'react'
// import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

// export default function Ranges({ styles }) {
// 	const [computerValue, setComputerValue] = useState(10)
// 	const [serversValue, setServersValue] = useState(15)
// 	const [officesValue, setOfficesValue] = useState(20)

// 	const updateRangeBackground = (
// 		value,
// 		min = 1,
// 		max = 100,
// 		color = '#ff9a22'
// 	) => {
// 		const percent = ((value - min) / (max - min)) * 100
// 		return `linear-gradient(to right, ${color} 0%, ${color} ${percent}%, #e0e0e0 ${percent}%, #e0e0e0 100%)`
// 	}

// 	const handleComputerChange = e => {
// 		const value = parseInt(e.target.value)
// 		setComputerValue(value)
// 	}

// 	const handleServersChange = e => {
// 		const value = parseInt(e.target.value)
// 		setServersValue(value)
// 	}

// 	const handleOfficesChange = e => {
// 		const value = parseInt(e.target.value)
// 		setOfficesValue(value)
// 	}

// 	const handleComputerIncrement = () => {
// 		setComputerValue(prev => {
// 			const newValue = prev < 100 ? prev + 1 : 100
// 			return newValue
// 		})
// 	}

// 	const handleComputerDecrement = () => {
// 		setComputerValue(prev => {
// 			const newValue = prev > 1 ? prev - 1 : 1
// 			return newValue
// 		})
// 	}

// 	const handleServersIncrement = () => {
// 		setServersValue(prev => {
// 			const newValue = prev < 100 ? prev + 1 : 100
// 			return newValue
// 		})
// 	}

// 	const handleServersDecrement = () => {
// 		setServersValue(prev => {
// 			const newValue = prev > 1 ? prev - 1 : 1
// 			return newValue
// 		})
// 	}

// 	const handleOfficesIncrement = () => {
// 		setOfficesValue(prev => {
// 			const newValue = prev < 100 ? prev + 1 : 100
// 			return newValue
// 		})
// 	}

// 	const handleOfficesDecrement = () => {
// 		setOfficesValue(prev => {
// 			const newValue = prev > 1 ? prev - 1 : 1
// 			return newValue
// 		})
// 	}
// 	return (
// 		<>
// 			<ul className={styles.ranges}>
// 				<li className={styles.ranges_box1}>
// 					<h2 className={styles.ranges_box1_title}>Компьютеры</h2>
// 					<div className={styles.ranges_box1_body}>
// 						<div className={styles.range_button}>
// 							<GoChevronLeft
// 								onClick={handleComputerDecrement}
// 								style={{ cursor: 'pointer' }}
// 							/>
// 							{computerValue}
// 							<GoChevronRight
// 								onClick={handleComputerIncrement}
// 								style={{ cursor: 'pointer' }}
// 							/>
// 						</div>
// 						<input
// 							type='range'
// 							min='1'
// 							max='100'
// 							step='1'
// 							value={computerValue}
// 							onChange={handleComputerChange}
// 							className={styles.range_input}
// 							style={{
// 								background: updateRangeBackground(
// 									computerValue,
// 									1,
// 									100,
// 									'#ff9a22'
// 								),
// 							}}
// 						/>
// 					</div>
// 				</li>
// 				<li className={styles.ranges_box2}>
// 					<h2 className={styles.ranges_box1_title}>Серверы</h2>
// 					<div className={styles.ranges_box1_body}>
// 						<div className={styles.range_button}>
// 							<GoChevronLeft
// 								onClick={handleServersDecrement}
// 								style={{ cursor: 'pointer' }}
// 							/>
// 							{serversValue}
// 							<GoChevronRight
// 								onClick={handleServersIncrement}
// 								style={{ cursor: 'pointer' }}
// 							/>
// 						</div>
// 						<input
// 							type='range'
// 							min='1'
// 							max='100'
// 							step='1'
// 							value={serversValue}
// 							onChange={handleServersChange}
// 							className={styles.range_input}
// 							style={{
// 								background: updateRangeBackground(
// 									serversValue,
// 									1,
// 									100,
// 									'#ff9a22'
// 								),
// 							}}
// 						/>
// 					</div>
// 				</li>
// 				<li className={styles.ranges_box3}>
// 					<h2 className={styles.ranges_box1_title}>
// 						Офисы / магазины / склады /...
// 					</h2>
// 					<div className={styles.ranges_box1_body}>
// 						<div className={styles.range_button}>
// 							<GoChevronLeft
// 								onClick={handleOfficesDecrement}
// 								style={{ cursor: 'pointer' }}
// 							/>
// 							{officesValue}
// 							<GoChevronRight
// 								onClick={handleOfficesIncrement}
// 								style={{ cursor: 'pointer' }}
// 							/>
// 						</div>
// 						<input
// 							type='range'
// 							min='1'
// 							max='100'
// 							step='1'
// 							value={officesValue}
// 							onChange={handleOfficesChange}
// 							className={styles.range_input}
// 							style={{
// 								background: updateRangeBackground(
// 									officesValue,
// 									1,
// 									100,
// 									'#ff9a22'
// 								),
// 							}}
// 						/>
// 					</div>
// 				</li>
// 				<button>
// 					<span>Рассчитать!</span>
// 				</button>
// 			</ul>
// 			{/* <button>
// 								<span>Рассчитать!</span>
// 							</button> */}
// 		</>
// 	)
// }

'use client'
import sliderStore from '@/store/sliderStore'
import { observer } from 'mobx-react-lite'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'

const Ranges = observer(({ styles }) => {
	const pathname = usePathname()
	return (
		<>
			<ul className={styles.ranges}>
				{/* Компьютеры */}
				<li className={styles.ranges_box1}>
					<h2 className={styles.ranges_box1_title}>Компьютеры</h2>
					<div className={styles.ranges_box1_body}>
						<div className={styles.range_button}>
							<GoChevronLeft
								onClick={sliderStore.decrementComputer}
								style={{ cursor: 'pointer' }}
							/>
							{sliderStore.computerValue}
							<GoChevronRight
								onClick={sliderStore.incrementComputer}
								style={{ cursor: 'pointer' }}
							/>
						</div>
						<input
							type='range'
							min={sliderStore.sliderConfig.min}
							max={sliderStore.sliderConfig.max}
							step={sliderStore.sliderConfig.step}
							value={sliderStore.computerValue}
							onChange={e =>
								sliderStore.setComputerValue(parseInt(e.target.value))
							}
							className={styles.range_input}
							style={{
								background: sliderStore.getRangeBackground(
									sliderStore.computerValue
								),
							}}
						/>
					</div>
				</li>

				{/* Серверы */}
				<li className={styles.ranges_box2}>
					<h2 className={styles.ranges_box1_title}>Серверы</h2>
					<div className={styles.ranges_box1_body}>
						<div className={styles.range_button}>
							<GoChevronLeft
								onClick={sliderStore.decrementServers}
								style={{ cursor: 'pointer' }}
							/>
							{sliderStore.serversValue}
							<GoChevronRight
								onClick={sliderStore.incrementServers}
								style={{ cursor: 'pointer' }}
							/>
						</div>
						<input
							type='range'
							min={sliderStore.sliderConfig.min}
							max={sliderStore.sliderConfig.max}
							step={sliderStore.sliderConfig.step}
							value={sliderStore.serversValue}
							onChange={e =>
								sliderStore.setServersValue(parseInt(e.target.value))
							}
							className={styles.range_input}
							style={{
								background: sliderStore.getRangeBackground(
									sliderStore.serversValue
								),
							}}
						/>
					</div>
				</li>

				{/* Офисы */}
				<li className={styles.ranges_box3}>
					<h2 className={styles.ranges_box1_title}>
						Офисы / магазины / склады /...
					</h2>
					<div className={styles.ranges_box1_body}>
						<div className={styles.range_button}>
							<GoChevronLeft
								onClick={sliderStore.decrementOffices}
								style={{ cursor: 'pointer' }}
							/>
							{sliderStore.officesValue}
							<GoChevronRight
								onClick={sliderStore.incrementOffices}
								style={{ cursor: 'pointer' }}
							/>
						</div>
						<input
							type='range'
							min={sliderStore.sliderConfig.min}
							max={sliderStore.sliderConfig.max}
							step={sliderStore.sliderConfig.step}
							value={sliderStore.officesValue}
							onChange={e =>
								sliderStore.setOfficesValue(parseInt(e.target.value))
							}
							className={styles.range_input}
							style={{
								background: sliderStore.getRangeBackground(
									sliderStore.officesValue
								),
							}}
						/>
					</div>
				</li>
				{pathname === '/' ? (
					<Link href={'/tariffs'}>
						<button>
							<span>Рассчитать!</span>
						</button>
					</Link>
				) : null}
			</ul>
		</>
	)
})

export default Ranges
