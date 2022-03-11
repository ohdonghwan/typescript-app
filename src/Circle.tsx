import styled from "styled-components";
import {useState} from "react";

interface ContainerProps {
    bgColor: string;
    borderColor: string;
}

const Container = styled.div<ContainerProps>`
  width: 200px;
  height: 200px;
  background-color: ${props => props.bgColor};
  border-radius: 200px;
  border: solid 2px ${props => props.borderColor};
`;

interface CircleProps {
    bgColor: string;
    borderColor?: string;
}

const Circle = ({bgColor, borderColor}: CircleProps) => {
    const [counter, setCounter] = useState(0);


    return (<Container bgColor={bgColor} borderColor={borderColor ?? bgColor}/>);
}

export default Circle;


interface PlayerShape {
    name: string;
    age: number;
}

const sayHello = (playerObj: PlayerShape) => `Hello ${playerObj.name} you are ${playerObj.age} old`

sayHello({name: "nico", age: 12})
