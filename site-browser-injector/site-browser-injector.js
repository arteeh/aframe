var siteBrowserScript = '<script src="https://aframe.io/releases/1.6.0/aframe.js"></script>'
var siteBrowserHtml = "<site-browser></site-browser>"


var scenes = document.body.querySelectorAll("a-scene");
for(var i = 0; i < scenes.length; i++)
{
	scenes[i].insertAdjacentHTML("beforeend", siteBrowserHtml);
}