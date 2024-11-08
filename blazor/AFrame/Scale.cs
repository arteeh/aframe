﻿using Microsoft.AspNetCore.Components;

namespace AFrame;

public class Scale
{
	[Parameter]
	public double SclX { get; set; } = 1;
	[Parameter]
	public double SclY { get; set; } = 1;
	[Parameter]
	public double SclZ { get; set; } = 1;

	public string Scl { get { return $"{SclX} {SclY} {SclZ}"; } }

	public Scale() { }

	public Scale(double sclX, double sclY, double sclZ)
	{
		SclX = sclX;
		SclY = sclY;
		SclZ = sclZ;
	}

	public override string ToString()
	{
		return $"{SclX} {SclY} {SclZ}";
	}
}
