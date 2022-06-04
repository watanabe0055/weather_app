import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Weather = () => {
  const [area, setArea] = useState();
  const [headline, setHeadline] = useState();
  const [text, setText] = useState();

  const Textarea = styled.p`
    white-space: pre-wrap;
  `;

  useEffect(() => {
    const WeatherFetch = async () => {
      const url: string =
        "https://www.jma.go.jp/bosai/forecast/data/overview_forecast/130000.json";
      const response: any = await fetch(url);
      const reslut: any = await response.json();
      console.log(reslut);
      const weatherDate = {
        area: reslut.targetArea,
        headline: reslut.headlineText,
        text: reslut.text,
      };
      setArea(weatherDate.area);
      setHeadline(weatherDate.headline);
      setText(weatherDate.text);
    };
    WeatherFetch();
  }, []);

  return (
    <>
      <p>エリア</p>
      <p>{area}</p>
      <p>ヘッドライン</p>
      <p>{headline}</p>
      <p>詳細</p>
      <Textarea>{text}</Textarea>
    </>
  );
};
