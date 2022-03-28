import React, {useCallback, useEffect, useState} from "react";
import {Controls, Player} from "@lottiefiles/react-lottie-player";
import CenterNoDataChart from "../../lottie/CenterNoDataChart";
import CenterNodataToData from "../../lottie/CenterNodataToData";
import CenterChart from "../../lottie/CenterChart";
import CenterDataToNoData from "../../lottie/CenterDataToNoData";
import {responseOjb} from "../../interfaces/SpeedBarChartInterface";
import styled from "styled-components";

type props = {
    data: responseOjb,
    height: any,
}

function DataFlowChartCenter({data, height}: props) {
    const [dataState, setDataState] = useState('noData');
    const [dataStartFlag, setDataStartFlag] = useState(false);
    const totalTestCount = data.totalCount;

    useEffect(() => {
        console.log('dataState >>> ', dataState);
        if (totalTestCount > 0 && !dataStartFlag) {
            setDataState('start')
        }
        // if (dataStartFlag) {
        //     setDataState('coming');
        // }
        if (totalTestCount === 0 && dataStartFlag) {
            setDataState('endData')
        }
    }, [totalTestCount, dataState, dataStartFlag])

    const createCenterChart = () => {
        if (dataState === 'noData') {
            return <Player src={CenterNoDataChart()} autoplay style={{width: '100%', height: '100%'}}>
            </Player>
        }
        if (dataState === 'start') {
            return <Player
                onStateChange={state => console.log('state >>> ', state)}
                onEvent={event => {
                    console.log(event);
                    if (event === 'pause') {
                        setDataState('coming')
                        setDataStartFlag(true);
                    }
                }}
                src={CenterNodataToData()} autoplay style={{width: '100%', height: '100%'}}>
            </Player>
        }
        if (dataState === 'coming') {
            return <Player
                src={CenterChart()} autoplay loop style={{width: '100%', height: '100%'}}>
            </Player>
        }
        if (dataState === 'endData') {
            return <Player
                onEvent={event => {
                    if (event === 'pause') {
                        setDataState('noData')
                        setDataStartFlag(false);
                    }
                }}
                src={CenterDataToNoData()} autoplay style={{width: '100%', height: '100%'}}>
            </Player>
        }
    }

    // const createCenterChart = useCallback(() => {
    //     if (dataState === 'noData' && !dataStartFlag) {
    //         return <Player src={CenterNoDataChart()} autoplay loop
    //                        style={{width: '100%', height: height}}><Controls
    //             visible={false}/></Player>
    //     } else if (dataState === 'start') {
    //         return <Player onEvent={(event) => {
    //             if (event === 'complete') {
    //                 setDataState('coming')
    //             }
    //         }}
    //                        src={CenterNodataToData()} autoplay
    //                        style={{width: '100%', height: height}}><Controls
    //             visible={false}/></Player>
    //     } else if (dataState === 'coming' && dataStartFlag) {
    //         return <Player src={CenterChart()} autoplay loop
    //                        style={{width: '100%', height: height}}><Controls
    //             visible={false}/></Player>
    //     } else if (dataState === 'noData' && dataStartFlag) {
    //         return <Player onEvent={(event) => {
    //             if (event === 'complete') {
    //                 setDataStartFlag(false);
    //             }
    //         }}
    //                        src={CenterDataToNoData()} autoplay
    //                        style={{width: '100%', height: height}}><Controls
    //             visible={false}/></Player>
    //     }
    // }, [dataState, dataStartFlag])

    return (<>
        <TotalCountBox>{data.totalCount}</TotalCountBox>
        {createCenterChart()!}
    </>)
}

export default DataFlowChartCenter;

const TotalCountBox = styled.div`
  position: absolute;
  justify-items: center;
  bottom: 0;
`;