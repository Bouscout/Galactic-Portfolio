// worm hole component to jump to the planets project without needind to explore from space

import { useState, type FC, useEffect } from "react";
import { TiltingInfos } from "./titlting_infos";
import { CriptedTitle } from "../spaceAstral/astre_title"

import "./worm_hole.scss"

interface Props{
    Projects : Array<any>
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

    return (
        <div id="worm-hole" onScroll={(evt)=>updateScroll(evt)}>

            <HeadMessage />

            <div className="window">
                
                {Projects.map((project, i) => {
                    const [title, description, image] = project
                    return <Window key={i} titre={title} description={description} image={image} margin={margins[i]} scroll={scroll} size={sizes[i]}/>
                })}

            </div>
        </div>
    )
}

interface windowProps {
    titre : string,
    description : string,
    image : ImageMetadata,
    margin : number[],
    size : number[],
    scroll : number,

}

const Window:FC<windowProps> = ({titre, description, image, margin, size, scroll}) => {
    const [width, height] = size
    const [top, left] = margin

    const inStyle = {
        width : `${width}%`,
        height : `${height}%`,
        marginTop : top+"%",
        marginLeft : left+"%",
        backgroundImage : `url("${image.src}")`,
        backgroundPositionY : `${(1 - scroll)*100}%`,
    
    } as React.CSSProperties

    return (
        <article>
            <div style={inStyle} />

            <TiltingInfos image={image}>
                <h2>{titre}</h2>
                <h3>{description}</h3>
            </TiltingInfos>

        </article>
    )
}


const HeadMessage:FC = () => {
    return (
        <header>
            <CriptedTitle title="Jump into the wormholes to get directly to your destination 🚀." header={true} duration={3000}/>
        </header>
    )
}