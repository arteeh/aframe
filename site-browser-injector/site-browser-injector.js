var siteBrowserScript = '<script src="https://raw.githubusercontent.com/arteeh/aframe/master/site-browser/site-browser.js"></script>'
var siteBrowserHtml = "<site-browser></site-browser>"
var temp = '<a-circle color="#CCC" radius="5" position="10 1 5"></a-circle>'

var head = document.head.insertAdjacentHTML("beforeend", siteBrowserScript);

var scenes = document.body.querySelectorAll("a-scene");
for(var i = 0; i < scenes.length; i++)
{
	scenes[i].insertAdjacentHTML("beforeend", temp);
	scenes[i].insertAdjacentHTML("beforeend", siteBrowserHtml);
}