using Microsoft.AspNetCore.Components;

namespace AFrame;

public class Size
{
	[Parameter]
	public double Width { get; set; } = 1;

	[Parameter]
	public double Height { get; set; } = 1;

	public Size() { }

	public Size(double width, double height)
	{
		Width = width;
		Height = height;
	}
}
