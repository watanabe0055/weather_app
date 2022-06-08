import React from "react";

import { WeatherUrl } from "../weather/WeatherUrl";

import { WeatherFetch } from "../weather/WeatherFetch";
export const Weather = () => {
  const res = WeatherUrl();
  console.log(res[0]);

  return <WeatherFetch url={"110000"} />;
};
