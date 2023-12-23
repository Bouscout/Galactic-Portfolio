// mouse cursor represented by a blob with changing color

import { useState, type FC } from "react";


export const BlobCursor: FC = () => {
    // need to track the mouse cursor
    const [x, setX] = useState(0)
    const [y, setY] = useState(0)

    // update mouse position
    window.onmousemove = (e) => {
        const {clientX, clientY} = e
        setX(clientX)
        setY(clientY)
    
    }

    return (
        <>
        <Blob x={x} y={y}/>
        <Glass />
        </>
    )
}

interface BlobProps{
    x : number,
    y : number,
}

const Blob:FC<BlobProps> = ({x, y}) =>{
    return <div id="blob" style={{
        left : `${x}px`, top : `${y}px`
    }}>
        <div />
    </div>
}

const Glass:FC = () =>{
    return <div id="glass"></div>
}