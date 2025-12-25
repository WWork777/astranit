'use client'
import { useState } from 'react'
import { GoChevronLeft, GoChevronRight } from 'react-icons/go'
import styles from './styles.module.scss'

export default function Calculator() {
	const [computerValue, setComputerValue] = useState(10)
	const [serversValue, setServersValue] = useState(15)
	const [officesValue, setOfficesValue] = useState(20)

	const updateRangeBackground = (
		value,
		min = 1,
		max = 100,
		color = '#ff9a22'
	) => {
		const percent = ((value - min) / (max - min)) * 100
		return `linear-gradient(to right, ${color} 0%, ${color} ${percent}%, #e0e0e0 ${percent}%, #e0e0e0 100%)`
	}

	const handleComputerChange = e => {
		const value = parseInt(e.target.value)
		setComputerValue(value)
	}

	const handleServersChange = e => {
		const value = parseInt(e.target.value)
		setServersValue(value)
	}

	const handleOfficesChange = e => {
		const value = parseInt(e.target.value)
		setOfficesValue(value)
	}

	const handleComputerIncrement = () => {
		setComputerValue(prev => {
			const newValue = prev < 100 ? prev + 1 : 100
			return newValue
		})
	}

	const handleComputerDecrement = () => {
		setComputerValue(prev => {
			const newValue = prev > 1 ? prev - 1 : 1
			return newValue
		})
	}

	const handleServersIncrement = () => {
		setServersValue(prev => {
			const newValue = prev < 100 ? prev + 1 : 100
			return newValue
		})
	}

	const handleServersDecrement = () => {
		setServersValue(prev => {
			const newValue = prev > 1 ? prev - 1 : 1
			return newValue
		})
	}

	const handleOfficesIncrement = () => {
		setOfficesValue(prev => {
			const newValue = prev < 100 ? prev + 1 : 100
			return newValue
		})
	}

	const handleOfficesDecrement = () => {
		setOfficesValue(prev => {
			const newValue = prev > 1 ? prev - 1 : 1
			return newValue
		})
	}

	return (
		<>
			<section className={styles.calc}>
				<div className={styles.clipped}>
					<div className={styles.clipped_box_left}>
						<div className={styles.clipped_box_left_inner}>
							<h1>
								РАССЧИТАЙТЕ СТОИМОСТЬ <br />
								ит-поддержки!
							</h1>
							<ul className={styles.ranges}>
								<li className={styles.ranges_box1}>
									<h2 className={styles.ranges_box1_title}>Компьютеры</h2>
									<div className={styles.ranges_box1_body}>
										<div className={styles.range_button}>
											<GoChevronLeft
												onClick={handleComputerDecrement}
												style={{ cursor: 'pointer' }}
											/>
											{computerValue}
											<GoChevronRight
												onClick={handleComputerIncrement}
												style={{ cursor: 'pointer' }}
											/>
										</div>
										<input
											type='range'
											min='1'
											max='100'
											step='1'
											value={computerValue}
											onChange={handleComputerChange}
											className={styles.range_input}
											style={{
												background: updateRangeBackground(
													computerValue,
													1,
													100,
													'#ff9a22'
												),
											}}
										/>
									</div>
								</li>
								<li className={styles.ranges_box2}>
									<h2 className={styles.ranges_box1_title}>Серверы</h2>
									<div className={styles.ranges_box1_body}>
										<div className={styles.range_button}>
											<GoChevronLeft
												onClick={handleServersDecrement}
												style={{ cursor: 'pointer' }}
											/>
											{serversValue}
											<GoChevronRight
												onClick={handleServersIncrement}
												style={{ cursor: 'pointer' }}
											/>
										</div>
										<input
											type='range'
											min='1'
											max='100'
											step='1'
											value={serversValue}
											onChange={handleServersChange}
											className={styles.range_input}
											style={{
												background: updateRangeBackground(
													serversValue,
													1,
													100,
													'#ff9a22'
												),
											}}
										/>
									</div>
								</li>
								<li className={styles.ranges_box3}>
									<h2 className={styles.ranges_box1_title}>
										Офисы / магазины / склады /...
									</h2>
									<div className={styles.ranges_box1_body}>
										<div className={styles.range_button}>
											<GoChevronLeft
												onClick={handleOfficesDecrement}
												style={{ cursor: 'pointer' }}
											/>
											{officesValue}
											<GoChevronRight
												onClick={handleOfficesIncrement}
												style={{ cursor: 'pointer' }}
											/>
										</div>
										<input
											type='range'
											min='1'
											max='100'
											step='1'
											value={officesValue}
											onChange={handleOfficesChange}
											className={styles.range_input}
											style={{
												background: updateRangeBackground(
													officesValue,
													1,
													100,
													'#ff9a22'
												),
											}}
										/>
									</div>
								</li>
								<button>
									<span>Рассчитать!</span>
								</button>
							</ul>
							{/* <button>
								<span>Рассчитать!</span>
							</button> */}
						</div>
					</div>
					<div className={styles.clipped_box_right}>
						<img src='/images/calc/calc.png' alt='calc' />
					</div>
				</div>
			</section>
		</>
	)
}
