import { useState, type FC, useRef, useEffect } from "react"
import { velocityX, velocityY, flying } from "../state_management"

import "./stars.scss"

interface Props {
    numStars : number
}


export const AllStars :FC<Props> = ({numStars}) => {
    const [AllStars, setAllStars] = useState<Array<Array<any>>>([])

    // declare speed of each layer
    const speed = 0.02
    
    const themeColor: object = {
    purple_haze : "hsl(275,82.8%, ",
    green_nebula : "hsl(167.2,95.9%, ",
    blue_planet : "hsl(197.1,33.1%, ",
    star_orange : "hsl(0,84.5%,",
    }

    // canvas set up
    let width = window.innerWidth
    let height = window.innerHeight

    const canvasRef = useRef<HTMLCanvasElement>(null)
    const containerRef = useRef<HTMLDivElement>(null)
    
    
    let pencil : CanvasRenderingContext2D | null 
    
    if (canvasRef.current && containerRef.current){

        width = containerRef.current.clientWidth 
        height = containerRef.current.clientHeight


        pencil = canvasRef.current.getContext("2d")!
        pencil.canvas.width = width
        pencil.canvas.height = height
    }

   

    // move and draw each star in a list of star
    function update(listStars:Array<Array<any>>) : void{
        if (!pencil){return} // exit if no pencil

        for (let index = 0; index < listStars.length; index++) {
            let [x, y, radius, color] = listStars[index]
        
            // drawing star
            pencil.beginPath();
            pencil.arc(x, y, radius * 2, 0, 2 * Math.PI);
            pencil.fillStyle = color;
            pencil.fill();
            
            if (flying.get()){
                x  -= localVelocityX * radius
                y -= localVelocityY * radius
            }
            
            // handling out of bound
            x = x - radius > width ? -radius : x
            x = x + radius < 0 ? width + radius : x
            
            y = y - radius > height ? -radius : y
            y = y + radius < 0 ? height + radius : y
            
            // move the star
            listStars[index][0] = x
            listStars[index][1] = y
        }
    }

    // get mouse position to determine direction of animation
    let localVelocityX = 0
    let localVelocityY = 1

    document.onmousemove = (e : MouseEvent) => {
        const {clientX, clientY} = e
        localVelocityX = (clientX - (width / 2)) * speed
        localVelocityY = (clientY - (height / 2)) * speed

        velocityX.set(localVelocityX)
        velocityY.set(localVelocityY)
       
    }

    

    // animation
    function animate() :void{
        if (!pencil){return}
        // if (!flying.get()){
        //     requestAnimationFrame(animate);
        //     return
        // }
        
        pencil.fillStyle = '#010510';
        pencil.fillRect(0, 0, width, height);
        
        // drawing stars
        update(AllStars)
        
        
        requestAnimationFrame(animate);
    }

    // create the star arrays
    useEffect(() => {
         // creating star arrays
        function createStarSheet(numStars:number) : Array<any> {
        
            let randomX, randomY, radius, color
            const sheetStars = Array(numStars).fill(0)

            for (let index = 0; index < numStars; index++) {
                // star coordinate
                randomX = Math.round(Math.random() * width)
                randomY = Math.round(Math.random() * height)
                radius = Math.random()
                            
                color = Object.values(themeColor)[Math.floor(Math.random() * 4)]

                color = `${color} ${Math.trunc((Math.round(radius * 100)))}%)`

                sheetStars[index] = [randomX, randomY, radius, color]
            }
            return sheetStars
        }
        const stars = createStarSheet(numStars)
        setAllStars(stars)
        update(stars)
    }, [])

    
    animate()


    return (
        <div id="black-hole" ref={containerRef}>
            <canvas width={100} height={100} ref={canvasRef}/>
        </div>
    ) 
}