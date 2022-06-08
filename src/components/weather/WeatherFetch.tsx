import React, { useEffect, useState } from "react";
import styled from "styled-components";

export const WeatherFetch = (props: any) => {
  const [area, setArea] = useState();
  const [headline, setHeadline] = useState();
  const [text, setText] = useState();

  const Contents = styled.div`
    margin-top: 30px;
  `;
  const Textarea = styled.p`
    white-space: pre-wrap;
    line-height: 1.2em;
  `;
  const ContentsItem = styled.div`
    margin: 0 auto;
    padding: 25px 15px;
    width: 940px;
    border: 2px solid #e8e8e8;
    background-color: #e8fcf3;
  `;
  const Heading = styled.p`
    padding: 5px 10px;
    border-left: 4px solid #4dc0b2;
  `;
  const WeatherInfo = styled.p`
    margin-left: 25px;
  `;

  useEffect(() => {
    const WeatherFetch = async () => {
      const url: string = `https://www.jma.go.jp/bosai/forecast/data/overview_forecast/${props.url}.json`;
      const response: any = await fetch(url);
      const reslut: any = await response.json();

      const weatherDate = {
        area: reslut.targetArea,
        headline: reslut.headlineText || "特に情報は出ていません",
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
          <Heading>エリア</Heading>
          <WeatherInfo>{area}</WeatherInfo>
          <Heading>ヘッドライン</Heading>
          <WeatherInfo>{headline}</WeatherInfo>
          <Heading>詳細</Heading>
          <Textarea>{text}</Textarea>
        </ContentsItem>
      </Contents>
    </>
  );
};

const cssInJs = () => {
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
};
