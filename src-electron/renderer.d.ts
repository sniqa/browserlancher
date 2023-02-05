export interface ElectronAPI {
	lanchBrowser: (args: { path: string; url: string }) => Promise<void>
}

declare global {
	interface Window {
		electronApis: ElectronAPI
	}
}
