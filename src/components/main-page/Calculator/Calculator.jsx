'use client'
import { useState } from 'react'
import styles from './styles.module.scss'

export default function Calculator() {
	const [computerValue, setComputerValue] = useState(10) // Изначально 10
	const [serversValue, setServersValue] = useState(15) // Изначально 15
	const [officesValue, setOfficesValue] = useState(20) // Изначально 20

	const handleComputerChange = e => {
		const value = parseInt(e.target.value)
		setComputerValue(value)

		// Динамическое обновление фона range
		const rangeInput = e.target
		const percent = ((value - 10) / (100 - 10)) * 100 // макс 100 вместо 500
		rangeInput.style.background = `linear-gradient(to right, #ff9933 0%, #ff9933 ${percent}%, #e0e0e0 ${percent}%, #e0e0e0 100%)`
	}

	const handleServersChange = e => {
		const value = parseInt(e.target.value)
		setServersValue(value)

		// Динамическое обновление фона range
		const rangeInput = e.target
		const percent = ((value - 10) / (100 - 10)) * 100 // макс 100 вместо 500
		rangeInput.style.background = `linear-gradient(to right, #ff9933 0%, #ff9933 ${percent}%, #e0e0e0 ${percent}%, #e0e0e0 100%)`
	}

	const handleOfficesChange = e => {
		const value = parseInt(e.target.value)
		setOfficesValue(value)

		// Динамическое обновление фона range
		const rangeInput = e.target
		const percent = ((value - 10) / (100 - 10)) * 100 // макс 100 вместо 500
		rangeInput.style.background = `linear-gradient(to right, #ff9933 0%, #ff9933 ${percent}%, #e0e0e0 ${percent}%, #e0e0e0 100%)`
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
										<div className={styles.range_button}>{computerValue}</div>
										<input
											type='range'
											min='1'
											max='100' // макс 100 вместо 500
											step='1'
											value={computerValue}
											onChange={handleComputerChange}
											className={styles.range_input}
											style={{
												background: `linear-gradient(to right, #ff9933 0%, #ff9933 ${
													((computerValue - 1) / (100 - 1)) * 100
												}%, #e0e0e0 ${
													((computerValue - 10) / (100 - 10)) * 100
												}%, #e0e0e0 100%)`,
											}}
										/>
									</div>
								</li>
								<li className={styles.ranges_box2}>
									<h2 className={styles.ranges_box1_title}>Серверы</h2>
									<div className={styles.ranges_box1_body}>
										<div className={styles.range_button}>{serversValue}</div>
										<input
											type='range'
											min='1'
											max='100' // макс 100 вместо 500
											step='1'
											value={serversValue}
											onChange={handleServersChange}
											className={styles.range_input}
											style={{
												background: `linear-gradient(to right, #ff9933 0%, #ff9933 ${
													((serversValue - 1) / (100 - 1)) * 100
												}%, #e0e0e0 ${
													((serversValue - 15) / (100 - 15)) * 100
												}%, #e0e0e0 100%)`,
											}}
										/>
									</div>
								</li>
								<li className={styles.ranges_box3}>
									<h2 className={styles.ranges_box1_title}>
										Офисы / магазины / склады
									</h2>
									<div className={styles.ranges_box1_body}>
										<div className={styles.range_button}>{officesValue}</div>
										<input
											type='range'
											min='1'
											max='100' // макс 100 вместо 500
											step='1'
											value={officesValue}
											onChange={handleOfficesChange}
											className={styles.range_input}
											style={{
												background: `linear-gradient(to right, #ff9933 0%, #ff9933 ${
													((officesValue - 1) / (100 - 1)) * 100
												}%, #e0e0e0 ${
													((officesValue - 20) / (100 - 20)) * 100
												}%, #e0e0e0 100%)`,
											}}
										/>
									</div>
								</li>
							</ul>
							<button>
								<span>Рассчитать!</span>
							</button>
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
