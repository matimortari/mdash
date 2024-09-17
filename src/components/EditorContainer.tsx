import MDEditor from "@uiw/react-md-editor"
import { useState } from "react"

export default function EditorContainer() {
	const [value, setValue] = useState("")

	// Handle changes in the Markdown editor
	const handleChange = (newValue) => {
		setValue(newValue)
	}

	return (
		<div className="h-full w-full px-2">
			<MDEditor height="100%" minHeight={500} value={value} onChange={handleChange} />
		</div>
	)
}
