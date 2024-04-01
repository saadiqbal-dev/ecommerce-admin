import axios from "axios";
import { NextResponse, NextRequest } from "next/server";

export async function GET(req: NextRequest) {
  const searchParams = req.nextUrl.searchParams;
  const latitude = searchParams.get("latitude");
  const longitude = searchParams.get("longitude");

  if (!latitude) {
    return new NextResponse("No latutde passed", { status: 401 });
  }

  if (!longitude) {
    return new NextResponse("No longitude passed", { status: 401 });
  }

  const { data: weatherData } = await axios.get(
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&current=temperature_2m,wind_speed_10m&hourly=temperature_2m,relative_humidity_2m,wind_speed_10m`
  );

  return Response.json(weatherData);
}
