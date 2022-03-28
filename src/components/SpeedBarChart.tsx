import {Controls, Player} from "@lottiefiles/react-lottie-player";
import React, {useEffect, useState} from "react";
import sampleResponse from "../mocks/sample_start.json";
import startChart from "../lottie/startChart";
import endNormalChart from "../lottie/EndNormalChart";
import endSlowChart from "../lottie/EndSlowChart";
import endVerySlowChart from "../lottie/EndVerySlowChart";
import styled from "styled-components";
import {Button, Popover} from "antd";
import {nodeColor, responseOjb} from "../interfaces/SpeedBarChartInterface";
import NodeInfos from "./NodeInfos";
import DataFlowChartCenter from "./charts/DataFlowChartCenter";
import sampleResponse2 from "../mocks/sample_2.json"
import sampleResponse3 from "../mocks/sample_3.json"

const initResponseState = {
    response: {normal: 0, count: 0, verySlow: 0, slow: 0},
    totalCount: 0,
    requestCount: 0
}

const SpeedBarChart = ({width, height}: any) => {
    const sampleData: responseOjb = sampleResponse;

    const [responseData, setResponseData] = useState<responseOjb>(initResponseState);
    const [normalColor, setNormalColor] = useState<nodeColor>({
        color: {r: '70', g: '100', b: '255', a: '100'}
    })
    const [slowColor, setSlowColor] = useState<nodeColor>({
        color: {r: '255', g: '143', b: '74', a: '100'}
    })
    const [verySlowColor, setVerySlowColor] = useState<nodeColor>({
        color: {r: '255', g: '83', b: '83', a: '100'}
    })

    useEffect(() => {
        setResponseData(sampleData);
    }, [])

    const drawChart: any = (chartComponent: Function, speed: number) => {
        return (
            <div style={{position: 'absolute'}}>
                <Player src={chartComponent} speed={speed} autoplay loop
                        style={{width: '100%', height: height}}><Controls
                    visible={false}/></Player>
            </div>
        )
    }

    const requestStartChart: any = (speed: number, dotCount: number) => {
        let chartObject = [];
        for (let count = 0; count < dotCount; count++) {
            const randomNumber = Math.random();
            chartObject.push(drawChart(startChart(randomNumber * 200, normalColor), (speed * randomNumber + 1)));
        }
        return chartObject;
    }

    const responseEndChart: any = (speed: number, normal: number, slow: number, verySlow: number) => {
        let chartObject = [];
        if (slow) {
            if (slow > 3) {
                slow = 3
            }
            for (let count = 0; count < slow; count++) {
                const randomNumber = Math.random();
                chartObject.push(drawChart(endSlowChart(randomNumber * 200, slowColor), (speed * randomNumber + 1)));
            }
        }
        if (verySlow) {
            if (verySlow > 3) {
                verySlow = 3
            }
            for (let count = 0; count < verySlow; count++) {
                const randomNumber = Math.random();
                chartObject.push(drawChart(endVerySlowChart(randomNumber * 200, verySlowColor), (speed * randomNumber + 1)));
            }
        }
        if (normal) {
            if (normal > 15) {
                normal = 15
            }
            for (let count = 0; count < normal; count++) {
                const randomNumber = Math.random();
                chartObject.push(drawChart(endNormalChart(randomNumber * 200, normalColor), (speed * randomNumber + 1)));
            }
        }
        return chartObject;
    }

    function createStartChart(): any {
        const {requestCount: dotCount} = responseData;
        if (dotCount < 11) {
            return requestStartChart(1, dotCount);
        } else if (dotCount < 61) {
            return requestStartChart(2, 15);
        } else {
            return requestStartChart(2, 20);
        }
    }


    function createEndChart(): any {
        const {count: dotCount, normal, slow, verySlow} = responseData.response;
        if (dotCount < 11) {
            return responseEndChart(2, normal, slow, verySlow);
        } else if (dotCount < 61) {
            return responseEndChart(2, normal, slow, verySlow);
        } else {
            return responseEndChart(3, normal, slow, verySlow);
        }
    }

    const popoverContent = (
        <NodeInfos response={responseData.response}
                   normalColor={normalColor}
                   slowColor={slowColor}
                   verySlowColor={verySlowColor}
        />
    )
    const popoverTitle = (
        <span style={{fontWeight: "bold", fontSize: '15px'}}>응답시간</span>
    )

    function handleDeleteClick() {
        setResponseData(initResponseState);
    }

    function handleAddClick() {
        setResponseData(sampleResponse2);
    }

    function handleAddClick2() {
        setResponseData(sampleResponse3);
    }

    return (
        <>
            <OuterBox style={{width: width}}>
                <ChartLeftOuterBox>
                    <ChartInfoLeftBox>
                        {responseData.requestCount}
                    </ChartInfoLeftBox>
                    {createStartChart()}
                </ChartLeftOuterBox>
                <CenterOuterBox height={height}>
                    <DataFlowChartCenter data={responseData} height={height}/>
                </CenterOuterBox>
                <ChartRightOuterBox>
                    <Popover content={popoverContent} trigger={"hover"} title={popoverTitle}>
                        <NodeInfoOuterBox>
                            <NodeInfoBox nodeColor={normalColor}>{responseData.response.normal}</NodeInfoBox>
                            <NodeInfoBox nodeColor={slowColor}>{responseData.response.slow}</NodeInfoBox>
                            <NodeInfoBox nodeColor={verySlowColor}>{responseData.response.verySlow}</NodeInfoBox>
                        </NodeInfoOuterBox>
                    </Popover>
                    <ChartInfoRightBox>
                        {responseData.response.count}
                    </ChartInfoRightBox>
                    {createEndChart()}
                </ChartRightOuterBox>
            </OuterBox>
            <Button onClick={handleDeleteClick}>데이터삭제</Button>
            <Button onClick={handleAddClick}>데이터추가</Button>
            <Button onClick={handleAddClick2}>데이터변경</Button>
        </>
    )
}

export default SpeedBarChart;

const OuterBox = styled.div`
  border-radius: 5px;
  border: 2px solid ${props => props.theme.accentColor};
  display: flex;
`;

const ChartRightOuterBox = styled.div`
  position: relative;
  width: 100%;
`

const ChartLeftOuterBox = styled.div`
  position: relative;
  width: 100%;
`

const CenterOuterBox = styled.div<{ height: string }>`
  height: ${props => props.height};
  position: relative;

`

const ChartInfoLeftBox = styled.div`
  position: absolute;
  bottom: 0;
  float: left;
  left: 0;
  font-size: 30px;
  z-index: 1;
  color: ${props => props.theme.textColor};
`;

const ChartInfoRightBox = styled.div`
  position: absolute;
  bottom: 0;
  float: right;
  right: 0;
  font-size: 30px;
  z-index: 1;
  color: ${props => props.theme.textColor};
`;

const ChartInfoCenterBox = styled.div`
  bottom: 0;
  justify-content: center;
  position: absolute;
  z-index: 1;
  color: ${props => props.theme.textColor};
`

const NodeInfoOuterBox = styled.div`
  width: 100px;
  display: flex;
  right: 0;
  float: right;
  justify-content: right;
  z-index: 2;
`;

const NodeInfoBox = styled.div<{ nodeColor: nodeColor }>`
  width: 20%;
  height: 20%;
  text-align: center;
  margin: 1px;
  border-radius: 1px;
  background-color: rgba(${props => props.nodeColor.color.r}, ${props => props.nodeColor.color.g}, ${props => props.nodeColor.color.b}, ${props => props.nodeColor.color.a});
  z-index: 2;
  color: ${props => props.theme.textColor};
`;

