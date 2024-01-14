// black hole singularity animation

import "./my_infos.scss"
import { useState, useEffect, useRef , type FC, type ReactNode } from "react";

import { HyperSpaceButton, WormHolesButton } from "./mainButtons";

interface Props {
    children? : ReactNode
}

export const BlackHole:FC<Props> = ({ children = null }) => {
    const [AllStars, setAllStars] = useState<Array<Array<any>>>([])
    const [starSpeed, setStarSpeed] = useState(0)
    const [fillColor, setFillColor] = useState("#000")
    const [expanded, setExpanded] = useState(false)
    const speedOffset = 256

    const numStars = 512

    let width = window.innerWidth
    let height = window.innerHeight

    let centerX = Math.round(width / 2)
    let centerY = Math.round(height / 2)

    let depth = (width + height) / 2;
    let starColorRatio = 1 / depth
    
    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    
    let pencil : CanvasRenderingContext2D | null 
    
    // variable initialization
    if (canvasRef.current && containerRef.current){
        width = containerRef.current.clientWidth 
        height = containerRef.current.clientHeight
    
        centerX = Math.round(width / 2)
        centerY = Math.round(height / 2)
    
        depth = (width + height) / 2;
        starColorRatio = 1 / depth

        pencil = canvasRef.current.getContext("2d")!
        pencil.canvas.width = width
        pencil.canvas.height = height

        // pencil.fillStyle='#010510';
        pencil.fillStyle = fillColor;
        pencil.strokeStyle = '#fff';
    }

    // mouse mousement
    let localVelocityX = 0
    let localVelocityY = 0
    document.onmousemove = (e : MouseEvent) => {
        const {pageX, pageY} = e
        localVelocityX = (pageX - centerX) * 0.05
        localVelocityY = (pageY - centerY) * 0.05
    }

    const hyperSpeed = () => {
        if (!pencil){return}
                
        setFillColor("rgba(0, 0, 0, 0.1)")

        // If the value is less than 30, schedule the next increment
        let actualSpeed = starSpeed + 1

        const increment = () => {
            if (actualSpeed < 8) {
              setStarSpeed(actualSpeed);
              actualSpeed += 1; 

              // Schedule the next increment
              setTimeout(increment, 1000);
            }else {
                setExpanded(true)
            }
        };

        increment()
        
    }
   
    useEffect(() => {
        init()
        setStarSpeed(4)
    }, [])

    if (starSpeed > 0){
        animate()
    }

    
  
    function init(){
        for(var i=0;i<numStars;i++){
            AllStars[i]=new Array(6);
            AllStars[i][0] = Math.random() * width*2 - centerX*2;
            AllStars[i][1] = Math.random() * height*2 - centerY*2;
            AllStars[i][2] = Math.round(Math.random() * depth);
            AllStars[i][3] = Math.random() * width*2 - centerX*2;
            AllStars[i][4] = Math.random() * height*2 - centerY*2;
        }
        }

    function animate(){
        if (!pencil){return}

        pencil.fillStyle = fillColor
        pencil.fillRect( 0, 0, width, height);

        for(let i=0; i < numStars; i++){
            // condition for checking if the star should be drawn or not
            let draw=true;

            // update the star with the mouse position
            if (false){
                AllStars[i][0]-=localVelocityX ;
                AllStars[i][1]-=localVelocityY ;
            }
            AllStars[i][2]-=starSpeed;
            
            // Check the boundary conditions to make sure stars aren't offscreen.
           
            if(AllStars[i][0] > centerX << 1){ 
                AllStars[i][0] -= width << 1; 
                draw=false; 
            } 
            if(AllStars[i][0] < -centerX << 1){ 
                AllStars[i][0] += width << 1; 
                draw=false;
            }
            if(AllStars[i][1]>centerY<<1){ 
                AllStars[i][1]-=height<<1; 
                draw=false; 
            } 
            if(AllStars[i][1]<-centerY<<1){ 
                AllStars[i][1]+=height<<1; 
                draw=false; 
            }
            if(AllStars[i][2]>depth){ 
                AllStars[i][2]-=depth; 
                draw=false;
            } 
            if(AllStars[i][2]<0){ 
                AllStars[i][2]+=depth; 
                draw=false; 
            }

            let [x, y, z, lastX, lastY] = AllStars[i]

            // Our calculated position and where the star is going to be drawn on the screen
            AllStars[i][3] = centerX + (x / z) * speedOffset;
            AllStars[i][4] = centerY + (y / z) * speedOffset;
            

            if(!draw){continue}
            else if(lastX < 0 || lastX > width){continue}
            else if (lastY < 0 || lastY > height){continue}

         
            pencil.lineWidth=( 1 - starColorRatio * z) * 2;
            pencil.beginPath();
            // Draw the star from its previous position to the new position
            pencil.moveTo(lastX, lastY);
            pencil.lineTo(AllStars[i][3], AllStars[i][4]);
            pencil.stroke();
            pencil.closePath();

        }
       
        requestAnimationFrame(animate)
       
    }
   
    return (
        <>
            <div id="black-hole" ref={containerRef}>

            <canvas width={100} height={100} ref={canvasRef} />

            <div id="singularity" style={{
                animation : expanded ? "singularity 4s ease-in 1s forwards" : ""
                }} />
            </div>

            <WormHolesButton func={hyperSpeed} />
            {/* <HyperSpaceButton func={hyperSpeed} /> */}

            {(!expanded && children) &&
            children
            }

        </>
    ) 
    
}