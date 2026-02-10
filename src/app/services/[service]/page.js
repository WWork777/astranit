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
