// worm hole component to jump to the planets project without needind to explore from space

import { useState, type FC, useEffect } from "react";
import { CriptedTitle } from "../spaceAstral/astre_title"

import { WormWindow } from "./worm_window"

// import "./worm_hole.scss"


interface projectStruct {
    index : number,
    name : string,
    shortDescription : string,
    image : ImageMetadata,
    description  : string,
    techStack : string[],
    details : any[],
    gitLink : string,
    webLink? : string,
}

interface Props{
    Projects : projectStruct[]
}

export const WormHolePage :FC<Props> = ({ Projects }) => {    
    const [margins, setMargins] = useState<Array<number[]>>([])
    const [sizes, setSizes] = useState<Array<number[]>>([])

    const [scroll, setScroll] = useState(0)
    
    useEffect(() => {
        const marginTopLimit = [30, 3];
        const marginLeftLimit = [20, 1];
        const widthLimit = [90, 50]
        const heightLimit = [70, 30]
    
        const generateRandom = (limit:number[]): number => {
            const [max, min] = limit
            return (Math.random() * (max - min + 1)) + min;
        };
        
        const new_margins = []
        const new_sizes = []
        for (let index = 0; index < Projects.length; index++) {

            new_margins.push([
                generateRandom(marginTopLimit), generateRandom(marginLeftLimit)
            ])
            new_sizes.push([
                generateRandom(widthLimit), generateRandom(heightLimit)
            ])            
        }
        setSizes(new_sizes)
        setMargins(new_margins);
    
    }, []);

    const updateScroll = (event:React.UIEvent<HTMLDivElement>) => {
        // get the percentage scrolled
        let value = event.target as HTMLDivElement
        
        //find max scroll width
        let max = value.scrollHeight - value.clientHeight
        // find percentage
        let scrollPercentage = value.scrollTop / max

        setScroll(scrollPercentage)
        
    }

    if (margins.length === 0){return}
    else if (sizes.length === 0){return}

    const i = 0

    return (
        <div id="worm-hole" onScroll={(evt)=>updateScroll(evt)}>

            <HeadMessage />

            <div className="window">
                
                <WormWindow key={i} titre={title} description={description}
                                            image={image} margin={margins[i]}
                scroll={scroll} size={sizes[i]}
                index={i}
                />

            </div>
        </div>
    )
}



const HeadMessage:FC = () => {
    return (
        <header>
            {/* <CriptedTitle title="Jump into the wormholes to get directly to your destination 🚀." header={true} duration={3000}/> */}
            <h1>Jump into the wormholes to get directly to your destination 🚀.</h1>
        </header>
    )
}