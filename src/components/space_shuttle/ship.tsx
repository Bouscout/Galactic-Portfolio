// mouse cursor space ship

import { useState, type FC, useRef } from "react";
import { flying } from "../state_management";
import { useStore } from "@nanostores/react";

export const Ship: FC = () => {
    const trailSize = 20
    const [trail, setTrail] = useState<Array<Array<any>>>([])
    const [angle, setAngle] = useState(180)
    const [posX, setPosX] = useState(0)
    const [posY, setPosY] = useState(0)
    const isFlying = useStore(flying)


    function createTrail(): void {
        let newTrail = trail.slice()
        const length = newTrail.unshift([posX, posY])
        if (length > trailSize){
            newTrail = newTrail.slice(0, trailSize)
        }
        setTrail(newTrail)
    }


    function SteerShip(lastX:number, lastY:number): void {
        const deltaX = lastX - posX;
        const deltaY = lastY - posY;

        const angle = Math.atan2(deltaY, deltaX) * (180 / Math.PI);
        setAngle(angle + 90)
    }

    function calculateDistance(x1: number, y1: number, x2: number, y2: number): number {
        return Math.sqrt(Math.pow(x2 - x1, 2) + Math.pow(y2 - y1, 2));
      }

      window.onmousemove = (e : MouseEvent) => {
            if (isFlying){
                const {clientX, clientY} = e
                

                SteerShip(clientX, clientY)
                createTrail()
                setTimeout(() => {
                    setPosX(clientX)
                    setPosY(clientY)
                }, 100);
            }
        }   


    return (
        <>
        <div id="space-ship" style={{
            left : `${posX}px`, top : `${posY}px`,
            transform : `rotate(${angle}deg)`,
        }}></div>

        {trail.map((elem, i) => {
            const [x, y] = elem
            return <Smoke x={x} y={y} key={i} index={i}/>
        })}

        {/* <div id="test"></div> */}
        </>
    )
} 

interface smokeProps {
    x : number,
    y : number,
    index : number,
}

const Smoke:FC<smokeProps> = ({x, y, index}) => {
    const size = 1.5 * index
    const delay = 1000 / Math.pow(index + 1, 2)
    const key = Math.floor(Math.random() * 100)

    return <div 
        key={key}
        className="smoke" style={{
            transform : `translate(${x}px, ${y}px)`,
            width : `${size}px`,
            animation : `fade 1s linear ${delay}ms forwards`,
    }}/>
}