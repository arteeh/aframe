const scripts = [];
const entities = [];

scripts.push('<script src="https://raw.githubusercontent.com/arteeh/aframe/master/site-browser/site-browser.js"></script>');

entities.push("<site-browser aframe-injected></site-browser>");
entities.push('<a-circle color="#CCC" radius="1" position="10 1 5"></a-circle>');

for (var i = 0; i < scripts.length; i++) {
	const fragment = document.createRange().createContextualFragment(scripts[i]);
	document.head.append(fragment);
}

var scene = document.body.querySelector("a-scene");
if (scene == null) {
	console.log("No a-scene found")
}
else {
	for (var i = 0; i < entities.length; i++) {
		if(entities[i] == null)
		{
			console.log("entities[i] is null");
		}
		scene.insertAdjacentHTML("beforeend", entities[i]);
	}
}