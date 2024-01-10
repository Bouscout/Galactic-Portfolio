 // page for the extra details of a project
// preferably visual details displayed to the right of the sidebar

import type { FC } from "react"

interface Props {
    elements : any[] ,
}

export const ProjectDetails:FC<Props> = ({ elements }) => {
    const format = elements[0]
    elements = elements.slice(1, elements.length)
    return (
        <section>
           {elements.map((element, i) => {
            if (format === "img"){
                const image: ImageMetadata = element
                return (
                    <img src={image.src} alt="Project image" key={i}></img>
                )
            
            }else if (format === "video"){

                const videoSrc : string = element
                return (
                    <video loop autoPlay >
                        <source src={videoSrc} type="video/mp4" />
                        Your browser does not support the video tag.
                    </video>
                )
            }
           })}
        </section>
    )
}