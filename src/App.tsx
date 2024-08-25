import MDEditor from "@uiw/react-md-editor"
import { useState } from "react"
import logo from "/logo.png"

export default function Home() {
	const [value, setValue] = useState("")

	const handleChange = (newValue) => {
		setValue(newValue)
	}

	return (
		<>
			<main className="flex h-screen flex-col items-center justify-center p-20">
				<div className="flex flex-row items-center justify-center">
					<img src={logo} alt="Logo" className="icon" />
					<strong>MDash - Live Markdown Editor & Preview</strong>
				</div>

				<MDEditor fullscreen={true} value={value} onChange={handleChange} />
			</main>
		</>
	)
}
