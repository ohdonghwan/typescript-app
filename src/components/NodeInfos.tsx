import styled from "styled-components";
import {nodeColor} from "../interfaces/SpeedBarChartInterface";

type infos = {
    response: {
        count: number,
        normal: number,
        slow: number,
        verySlow: number,
    },
    normalColor: nodeColor,
    slowColor: nodeColor,
    verySlowColor: nodeColor,
}

const NodeInfos = ({response, normalColor, slowColor, verySlowColor}: infos) => {
    return (
        <>
            <NodeInfoPopupBox color={normalColor}>보통 : {response.normal}</NodeInfoPopupBox>
            <NodeInfoPopupBox color={slowColor}>느림 : {response.slow}</NodeInfoPopupBox>
            <NodeInfoPopupBox color={verySlowColor}>매우 느림 : {response.verySlow}</NodeInfoPopupBox>
        </>
    )
}

export default NodeInfos;

const NodeInfoPopupBox = styled.div<{ color: any }>`
  color: rgb(${props => props.color.color.r}, ${props => props.color.color.g}, ${props => props.color.color.b});
  font-size: 12px;
`;