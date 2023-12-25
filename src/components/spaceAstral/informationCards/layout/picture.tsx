// project picture with buttons

import { type FC } from "react"

interface Props {
    image : ImageMetadata,
    url?: string,
    gitUrl?: string
}

export const PicWithButtons : FC<Props> = ({image, url, gitUrl}) => {

    return (
        <section>
            <Image image={image}/>


            
            <div>
                {url &&
                <VisitButton link={url}/>
                }

                {gitUrl &&
                <GitButton link={gitUrl}/>
                }
            </div>

        </section>
    )
}

const Image:FC<Props> = ({image}) => {
    return (
        <picture>
           <source srcSet={image.src} type="image/webp" /> 
           <img src={image.src} alt={"project-image"} loading="eager" />
        </picture>
    )
}

interface Button {
    link : string
}

const VisitButton :FC<Button> = ({link}) => {
    return <a href={link}><button role="button">Visit</button></a>
}

const GitButton :FC<Button> = ({link}) => {
    return <a href={link}><button role="button">Github</button></a>
}