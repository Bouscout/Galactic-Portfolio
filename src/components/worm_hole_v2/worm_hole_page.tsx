// worm hole component to jump to the planets project without needind to explore from space

import { useState, type FC,  useRef } from "react";

import WormWindow  from "./worm_window"
import { All_Projects } from "../all_projects";


import "./worm_hole.scss"

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

const WormHolePage :FC = () => {
    const Projects : projectStruct[] = All_Projects

    const [scrollPercent, setScrollPercent] = useState(0)
    const [scrollX, setScroll] = useState(0)
    const [expanded, setExpanded] = useState(-1)

    const containerRef = useRef<HTMLDivElement>(null)

    const cardWidth = 17
    const separation = 2 + cardWidth
    const range = separation * (Projects.length - 1)

    const scrollSep = 50 / (Projects.length - 1)

    let smallIndex = 0
    const getCardPos = (index : number) : number => {
        let position : number
        let smallCardwidth = 6
        if (expanded >= 0){

            if(index === expanded){return -1}

            position = 10 + (2 + smallCardwidth) * smallIndex
            smallIndex += 1
            return position
        }
        position = 50 + (separation * index) - (scrollPercent * range)
        return position
    }

    const getScrollPos = (index : number) : number => {
        const scrollPos = (50 + (index * scrollSep)) - (scrollPercent * 50)
        return scrollPos
    }


    const updateScroll = (event:React.UIEvent<HTMLElement>) => {
        event.preventDefault()
        event.stopPropagation();
        // get the percentage scrolled
        let value = event.target as HTMLDivElement
        
        const weight = 0.65
        // weighting the scroll
        if (containerRef.current){
            // containerRef.current.scrollLeft = scrollX

            const difference = value.scrollLeft - scrollX

            // setting the weighted value
            const newScrollValue = scrollX + (weight * difference)
            containerRef.current.scrollLeft = newScrollValue

            setScroll(newScrollValue)
        }

        // for parallax effect
        //find max scroll width
        let max = value.scrollWidth - value.clientWidth
        // find percentage
        let scrollPercentage = value.scrollLeft / max

        setScrollPercent(scrollPercentage)
        
    }

    return (
        <div id="worm-hole">

            <HeadMessage />

            {expanded >= 0 &&
            <ExitButton func={setExpanded}/>
            }
            
            {/* <SpecialCard /> */}

            {Projects.map((project, i) => {
                const pos = getCardPos(i)
                const scrollPos = getScrollPos(i)
                
                return <WormWindow key={i} project={project}
                        scroll={scrollPos} position={pos}
                        index={i}
                        select={expanded} trigger={setExpanded}
                        />
            })}

            {/* place holder for scrolling */}
            <div id="panorama" onScroll={(evt)=>updateScroll(evt)} ref={containerRef} >
                {Array(Projects.length).fill(0).map(x => {
                    return <div />
                })}
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


interface buttonProps {
    func : Function
} 

export const ExitButton :FC<buttonProps> = () => {
    return (
        <button id="exit-button" style={{pointerEvents : "none"}}>
            <h2>
                <i className="fa-solid fa-xmark"></i>
            </h2>
            <h4>Close</h4>
        </button>
    )
}

export default WormHolePage

// Astro detected an unhandled rejection. Here's the stack trace:
// TypeError: Cannot read properties of null (reading 'useState')
//     at Module.useState (C:\Users\boudi\galactic_portfolio\node_modules\react\cjs\react.development.js:1622:21)
//     at WormHolePage (C:/Users/boudi/galactic_portfolio/src/components/worm_hole_v2/worm_hole_page.tsx:15:67)
//     at Tester (C:/Users/boudi/galactic_portfolio/node_modules/@astrojs/react/server.js:41:18)
//     at describeNativeComponentFrame (C:\Users\boudi\galactic_portfolio\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:3732:7)
//     at describeFunctionComponentFrame (C:\Users\boudi\galactic_portfolio\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:3827:12)
//     at getStackByComponentStackNode (C:\Users\boudi\galactic_portfolio\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:5294:19)
//     at getCurrentStackInDEV (C:\Users\boudi\galactic_portfolio\node_modules\react-dom\cjs\react-dom-server-legacy.node.development.js:5460:12)
//     at ReactDebugCurrentFrame.getStackAddendum (C:\Users\boudi\galactic_portfolio\node_modules\react\cjs\react.development.js:130:16)
//     at printWarning (C:\Users\boudi\galactic_portfolio\node_modules\react\cjs\react-jsx-dev-runtime.development.js:71:40)
//     at error (C:\Users\boudi\galactic_portfolio\node_modules\react\cjs\react-jsx-dev-runtime.development.js:61:7)
// See Docs Reference
// Make sure your promises all have an await or a .catch() handler.