import Footer from '@/components/layout/footer/Footer'
import Header from '@/components/layout/header/Header'
import GeneralModal from '@/components/modals/GeneralModal'
import Connect from '@/components/ui/connect/Сonnect'
import { Roboto } from 'next/font/google'
import localFont from 'next/font/local'
import './globals.css'

const roboto = Roboto({
	variable: '--font-montserrat',
	weight: ['100', '200', '300', '400', '500', '600', '700', '800'],
	subsets: ['cyrillic', 'cyrillic-ext'],
})

const bebasNeue = localFont({
	src: [
		{
			path: './fonts/Bebas-Neue-Regular.ttf',
			weight: '400',
			style: 'normal',
		},
		{
			path: './fonts/Bebas-Neue-Bold.ttf',
			weight: '500',
			style: 'normal',
		},
	],
})

export const metadata = {
	icons: {
		icon: [
			{ rel: 'icon', type: 'image/svg+xml', url: '/favicon/favicon.svg' },
			{
				rel: 'icon',
				type: 'image/png',
				sizes: '96x96',
				url: '/favicon/favicon-96x96.png',
			},
		],
		shortcut: '/favicon/favicon.ico',
		apple: '/favicon/apple-touch-icon.png',
	},
	manifest: '/favicon/site.webmanifest',
}

export default function RootLayout({ children }) {
	return (
		<html lang='ru'>
			<body className={`${bebasNeue.variable}  ${roboto.variable} antialiased`}>
				<Header />
				{children}
				<Footer />
				<Connect />
				<GeneralModal />
			</body>
		</html>
	)
}
