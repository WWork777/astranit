'use client'
import Link from 'next/link'

export default function NotFound() {
	return (
		<div
			style={{
				paddingTop: '61px',
				height: '100vh',
				display: 'flex',
				flexDirection: 'column',
				alignItems: 'center',
				justifyContent: 'center',
				textAlign: 'center',
			}}
		>
			<h1
				style={{
					fontSize: '2.25rem',
					fontWeight: 'bold',
					marginBottom: '1rem',
				}}
			>
				404 - Страница не найдена
			</h1>
			<p
				style={{
					fontSize: '1.125rem',
					marginBottom: '1.5rem',
				}}
			>
				Извините, запрашиваемая страница не существует.
			</p>
			<Link href='/' passHref>
				<button
					style={{
						display: 'inline-block',
						padding: '12px 24px',
						fontSize: '1.5rem',
						fontWeight: '500',
						color: '#57889f',
						textDecoration: 'none',
						backgroundColor: 'transparent',
						border: '2px solid #57889f',
						borderRadius: '8px',
						cursor: 'pointer',
						transition: 'all 0.3s ease',
						textAlign: 'center',
						lineHeight: '1.5',
					}}
					onMouseEnter={e => {
						e.currentTarget.style.backgroundColor = '#57889f'
						e.currentTarget.style.color = 'white'
						e.currentTarget.style.transform = 'translateY(-2px)'
						e.currentTarget.style.boxShadow =
							'0 4px 12px rgba(0, 112, 243, 0.3)'
					}}
					onMouseLeave={e => {
						e.currentTarget.style.backgroundColor = 'transparent'
						e.currentTarget.style.color = '#57889f'
						e.currentTarget.style.transform = 'translateY(0)'
						e.currentTarget.style.boxShadow = 'none'
					}}
				>
					На главную
				</button>
			</Link>
		</div>
	)
}
