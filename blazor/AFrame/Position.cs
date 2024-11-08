﻿using Microsoft.AspNetCore.Components;

namespace AFrame;

public class Position
{
	[Parameter]
	public double PosX { get; set; } = 0;
	[Parameter]
	public double PosY { get; set; } = 0;
	[Parameter]
	public double PosZ { get; set; } = 0;

	public Position() {}

	public Position(double posX, double posY, double posZ)
	{
		PosX = posX;
		PosY = posY;
		PosZ = posZ;
	}

	public override string ToString()
	{
		return $"{PosX} {PosY} {PosZ}";
	}
}
