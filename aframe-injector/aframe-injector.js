const scripts = [];
const entities = [];

entities.push("<site-browser aframe-injected></site-browser>");
entities.push('<a-dodecahedron aframe-injected position="10 1 5" color="#FF926B" radius="1"></a-dodecahedron>');

// for (var i = 0; i < scripts.length; i++) {
// 	const fragment = document.createRange().createContextualFragment(scripts[i]);
// 	document.head.append(fragment);
// }

var scene = document.body.querySelector("a-scene");
for (var i = 0; i < entities.length; i++) {
	scene.insertAdjacentHTML("beforeend", entities[i]);
}