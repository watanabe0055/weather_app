import React from "react";

import { WeatherUrl } from "../weather/WeatherUrl";

import { WeatherFetch } from "../weather/WeatherFetch";
export const Weather = () => {
  const res = WeatherUrl();
  const listItems = res.map((res) => (
    <WeatherFetch key={res.toString()}>{res[1]}</WeatherFetch>
  ));
  return (
    <>
      {/* <WeatherFetch url={res[0][1]} /> */}
      <div>{listItems}</div>
    </>
  );
};
