import Hero from '@/components/main-page/Hero/Hero'
import Pluses from '@/components/main-page/Pluses/Pluses'
import ProtectionRing from '@/components/main-page/Protection-ring/ProtectionRing'
import SavedData from '@/components/main-page/Saved-data/SavedData'
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
		</>
	)
}
