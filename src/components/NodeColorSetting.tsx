import {SketchPicker} from "react-color";
import styled from "styled-components";
import {nodeColor} from "../interfaces/SpeedBarChartInterface";
import {useState} from "react";

type NodeColorSettingProps = {
    normalColor: nodeColor,
    slowColor: nodeColor,
    verySlowColor: nodeColor,
    setNormalColor: Function,
    setSlowColor: Function,
    setVerySlowColor: Function,

}

const NodeColorSetting: any = ({
                                   normalColor,
                                   slowColor,
                                   verySlowColor,
                                   setNormalColor,
                                   setSlowColor,
                                   setVerySlowColor
                               }: NodeColorSettingProps) => {
    const [colorPickVisible, setColorPickVisible] = useState('');
    const [color, setColor] = useState<nodeColor>()
    const onColorSwatchClick = (key: string) => {
        console.log('hi')
        setColorPickVisible(key);
    }

    const handleColorChange = (color: any) => {
        setColor(color);
    }
    console.log(color);
    return (
        <SettingBox>
            <div>보통
                <ColorSwatch onClick={() => onColorSwatchClick('normal')}>
                    <ColorBox backgroundColor={normalColor.color}>
                        {colorPickVisible === 'normal' ?
                            <SketchPicker/>
                            : null}
                    </ColorBox>
                </ColorSwatch>
            </div>
            <div>
                느림
                <ColorSwatch onClick={() => onColorSwatchClick('slow')}>
                    <ColorBox backgroundColor={slowColor.color} onClick={() => setColorPickVisible('')}>
                        {colorPickVisible === 'slow' ?
                            <PopBox>
                                <SketchPicker onChange={handleColorChange}/>
                            </PopBox> : null}
                    </ColorBox>
                </ColorSwatch>
            </div>
            <div>
                매우 느림
                <ColorSwatch onClick={() => onColorSwatchClick('verySlow')}>
                    <ColorBox backgroundColor={verySlowColor.color}>
                        {colorPickVisible === 'verySlow' ?
                            <div>
                                <SketchPicker/>
                            </div> : null}
                    </ColorBox>
                </ColorSwatch>
            </div>
        </SettingBox>
    )
}
export default NodeColorSetting;

const ColorBox = styled.div<{ backgroundColor: any }>`
  width: 36px;
  height: 14px;
  border-radius: 2px;
  background: rgba(${props => props.backgroundColor.r}, ${props => props.backgroundColor.g}, ${props => props.backgroundColor.b}, ${props => props.backgroundColor.a});
`;

const ColorSwatch = styled.div`
  padding: 5px;
  background: #fff;
  border-radius: 1px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, .1);
  display: inline-block;
  cursor: pointer;
`;

const SettingBox = styled.div`
  background-color: lightslategray;
`;

const PopBox = styled.div`
  position: absolute;
  z-index: auto;
`;

const CoverBox = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
`;