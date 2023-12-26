// compass to show where the next objects are
import "./compass.scss"

import { useState, type FC } from "react";

import { Positions } from "../state_management";
import { useStore } from "@nanostores/react";

export const Compass:FC = () => {
    const range = 5000
    const hypotenus = 50
    const ship = [0, 0]
    const scanDelay = 3000 // ms

    const [ astres, setAstres] = useState<Array<number[]>>([])

    setTimeout(() => {
        setAstres(Object.values(Positions.get()))
    }, scanDelay);

    const Inbound = (x:number, y:number) => {
        x = x - 50
        y = 50 - y
        const distance = Math.sqrt(Math.pow(Math.abs(x), 2) + Math.pow(Math.abs(y), 2));
        return distance <= hypotenus
    }

    const getShortDistance = (deltaX:number, deltaY:number) : Array<number> => {
        // find the angle in rad 
        const angle = Math.atan2(deltaY, deltaX) ;

        const shortLeft = (Math.cos(angle) * hypotenus) + 50
        const shortTop = (Math.sin(angle) * hypotenus)  + 50

        return [shortLeft, shortTop]
    }

    const getPosition = (origin:Array<number>, point:Array<number>) => {
        const [x, y] = origin
        const [ptX, ptY] = point

        // relative to the position of the origin
        const scale = 50
        const offset = 50

        // distance between the points
        const deltaX = x + ptX
        const deltaY = y + ptY

        let xPos = (Math.min(deltaX / range, 1) * scale) + offset
        let yPos = (Math.min(deltaY / range, 1) * scale) + offset

        if (Inbound(xPos, yPos)){
            return [xPos, yPos]
        }
        else {
            return getShortDistance(deltaX, deltaY)
        }
        
    } 

    return (
        <section id="compass-container">
            <aside>

                <div></div>

                {astres.map((point, i) => {
                    const [x, y] = getPosition(ship, point)
                        return <div key={i} style={{
                        left : `${x}%`, top : `${y}%`,
                    }}></div>
                })}

            </aside>
        </section>
    )
}