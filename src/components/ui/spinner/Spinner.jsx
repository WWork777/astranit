import styles from './Spinner.module.css' // или используйте styled-components/inline styles

const Spinner = ({
	size = 25,
	color = 'var(--layer-color2)',
	thickness = 3,
	className = '',
}) => {
	return (
		<div className={`${styles.spinnerContainer} ${className}`}>
			<svg
				width={size}
				height={size}
				viewBox='0 0 50 50'
				className={styles.spinner}
			>
				<circle
					className={styles.path}
					cx='25'
					cy='25'
					r='20'
					fill='none'
					stroke={color}
					strokeWidth={thickness}
				/>
			</svg>
		</div>
	)
}

export default Spinner
