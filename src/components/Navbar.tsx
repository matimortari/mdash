import logo from "/logo.png"

export default function Navbar() {
	return (
		<nav className="flex flex-col items-center justify-center p-3">
			<div className="flex flex-row items-center justify-center gap-4">
				<img src={logo} alt="Logo" className="h-10 w-10" />

				<div className="flex flex-col items-center justify-center">
					<h1 className="text-sm font-semibold">MDash - Live Markdown Editor & Preview</h1>
					<p className="hidden text-xs text-muted-foreground md:block">Press Ctrl + 0 to toggle fullscreen mode.</p>
				</div>
			</div>
		</nav>
	)
}
