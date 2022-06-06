import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const Weather = (props: any) => {
  const [area, setArea] = useState();
  const [headline, setHeadline] = useState();
  const [text, setText] = useState();

  const Contents = styled.div`
    margin-top: 30px;
  `;
  const Textarea = styled.p`
    white-space: pre-wrap;
  `;
  const ContentsItem = styled.div`
    margin: 0 auto;
    padding: 25px 15px;
    width: 900px;
    border: 2px solid #e8e8e8;
    background-color: #e8fcf3;
  `;

  useEffect(() => {
    const WeatherFetch = async () => {
      const url: string = `https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${props.url}.json`;
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
      <Contents>
        <ContentsItem>
          <p>エリア</p>
          <p>{area}</p>
          <p>ヘッドライン</p>
          <p>{headline}</p>
          <p>詳細</p>
          <Textarea>{text}</Textarea>
        </ContentsItem>
      </Contents>
    </>
  );
};
