import { Analytics } from "@vercel/analytics/react"
import EditorContainer from "./components/EditorContainer"
import Footer from "./components/Footer"
import TopNav from "./components/TopNav"

export default function Home() {
	return (
		<>
			<Analytics />
			<TopNav />
			<main className="flex flex-col items-center justify-center">
				<EditorContainer />
			</main>
			<Footer />
		</>
	)
}
