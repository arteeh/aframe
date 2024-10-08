﻿using Microsoft.AspNetCore.Components;

namespace AFrame;

public class Rotation
{
	[Parameter]
	public double RotX { get; set; } = 0;
	[Parameter]
	public double RotY { get; set; } = 0;
	[Parameter]
	public double RotZ { get; set; } = 0;

	public string Rot { get { return $"{RotX} {RotY} {RotZ}"; } }

	public Rotation() { }

	public Rotation(double rotX, double rotY, double rotZ)
	{
		RotX = rotX;
		RotY = rotY;
		RotZ = rotZ;
	}

	public override string ToString()
	{
		return $"{RotX} {RotY} {RotZ}";
	}
}
