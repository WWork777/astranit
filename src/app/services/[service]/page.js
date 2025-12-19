import OneService from '@/components/one-service-page/OneService'
import { services } from '@/data'

export async function generateMetadata({ params }) {
	const { service } = await params
	const page = services.find(page => page.link == service)

	if (!page) {
		return {
			title: 'РЕШЕНИЕ НЕ НАЙДЕНО!',
			description: 'Эта услуга не оказывается.',
		}
	}
	return {
		title: `${page.title.toUpperCase()}`,
		description: `${page.title}`,
		// keywords: keywords(),
		// alternates: {
		// 	canonical: `${process.env.NEXT_PUBLIC_BASE_URL}/category/${url}/${target}`,
		// },
		// openGraph: {
		// 	title: ``,
		// 	description: '',
		// 	url: `${process.env.NEXT_PUBLIC_BASE_URL}/category/${url}/${target}`,
		// 	images: [
		// 		{
		// 			url: 'https://juristkemerovo.ru/og/og.png',
		// 			alt: page.category,
		// 		},
		// 	],
		// },
	}
}

export default async function ServicePage({ params }) {
	const { service } = await params
	return (
		<>
			<OneService link={service} />
		</>
	)
}
