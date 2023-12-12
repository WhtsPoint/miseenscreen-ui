import { Scene } from '@/widgets/scene'
import WelcomeSection from '@/layer/main/ui/WelcomeSection'
import StackPage from '@/layer/main/ui/StackPage'

export default function MainPage() {
    return (<Scene nextPage={'/services'}>{[
        <WelcomeSection key={0} />,
        <StackPage key={1} />
    ]}</Scene>)
}