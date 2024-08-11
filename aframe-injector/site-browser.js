let siteBrowserHtml = document.createElement('siteBrowserHtml');

var xhr = new XMLHttpRequest();
xhr.open('GET', 'site-browser.html', true);
xhr.onreadystatechange = function() {
    if (this.readyState !== 4) return;
    if (this.status !== 200) return;
    siteBrowserHtml.innerHTML = this.responseText;
};
xhr.send();

customElements.define("site-browser", class SiteBrowser extends HTMLElement {
	constructor() {
		// Always call super first in constructor
		super();

		// Attach a shadow root to the element.
		let shadowRoot = this.attachShadow({ mode: 'open' });
		shadowRoot.appendChild(siteBrowserHtml.content.cloneNode(true));
	}

	connectedCallback() {
		console.log("Site Browser version 1.0");
	}

	disconnectedCallback() {
		console.log("Site Browser removed from page.");
	}

	adoptedCallback() {
		console.log("Site Browser moved to new page.");
	}
});