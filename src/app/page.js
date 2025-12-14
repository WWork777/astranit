import Hero from '@/components/main-page/Hero/Hero'
import Pluses from '@/components/main-page/Pluses/Pluses'
import ProtectionRing from '@/components/main-page/Protection-ring/ProtectionRing'
import RealBenefit from '@/components/main-page/Real-benefit/RealBenefit'
import SavedData from '@/components/main-page/Saved-data/SavedData'
import Services from '@/components/main-page/Services/Services'
import Start from '@/components/main-page/Start/Start'
import UnderHero from '@/components/main-page/Under-hero/UnderHero'

export default function Home() {
	return (
		<>
			<Hero />
			<UnderHero />
			<Pluses />
			<Start />
			<SavedData />
			<ProtectionRing />
			<RealBenefit />
			<Services />
		</>
	)
}
