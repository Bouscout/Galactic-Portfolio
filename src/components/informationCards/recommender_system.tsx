// recommender system project information

import { RegularCard } from "./regularCard"
import { PicWithButtons } from "./picture"

import NeonPlanet from "../../../assets/planets/neon_planet.webp"
import type { FC } from "react"


const shortDescription = "Introducing Buushido's cutting-edge Recommender System – a seamless blend of collaborative filtering algorithms and transformer encoders. Elevate your anime journey with personalized recommendations crafted just for you. Our advanced technology ensures an unparalleled streaming experience, guiding you to the hidden gems and latest releases that perfectly match your unique taste." 
const Title = "Recommender System"



export const RecommendationSystem :FC = () => {
    const link = "https://buushido.com"
    const githubLink = "https://github.com/Bouscout/Recommender-System"
    

    return (
        <RegularCard>
            
            <PicWithButtons 
            image={NeonPlanet}
            url={link}
            gitUrl={githubLink}
            />
        
            <Description />

        </RegularCard>
)
}

const Description:FC = () => {
    return (
        <section>
            <h2>{Title}</h2>
            <p>{shortDescription}</p>
        </section>
    )
}