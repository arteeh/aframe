console.log("Site Browser version 1.0");

class SiteBrowser extends HTMLElement
{
	constructor() {
		// Always call super first in constructor
		super();
	}
	
	connectedCallback()
	{
		console.log("Site Browser version 1.0");
	}
	
	disconnectedCallback()
	{
		console.log("Custom element removed from page.");
	}
	
	adoptedCallback()
	{
		console.log("Custom element moved to new page.");
	}
}

customElements.define("site-browser", SiteBrowser);