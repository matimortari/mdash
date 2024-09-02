import EditorContainer from "./components/EditorContainer"
import Footer from "./components/Footer"
import Navbar from "./components/Navbar"

export default function Home() {
	return (
		<>
			<Navbar />
			<main className="flex flex-col items-center justify-center">
				<EditorContainer />
			</main>
			<Footer />
		</>
	)
}
