import {loadMermaid, Plugin} from 'obsidian';
import elkLayouts from "@mermaid-js/layout-elk";

export default class MyPlugin extends Plugin {

	async onload() {
		const globalMermaid = await loadMermaid();
		globalMermaid.registerLayoutLoaders(elkLayouts);
	}

	onunload() {
	}
}
