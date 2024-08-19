AFRAME.registerComponent('site-browser',
{
	schema: {},
	init: function ()
	{
		console.log("Site Browser version: 1.0");

		// test
		var thing = document.createElement('a-dodecahedron');
		thing.setAttribute("position", "11 2 1");
		this.el.appendChild(thing);
	},
	update: function () {},
	tick: function () {},
	remove: function () {},
	pause: function () {},
	play: function () {}
});