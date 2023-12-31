// buushido streaming project information

import { RegularCard } from "./layout/regularCard"
import { PicWithButtons } from "./layout/picture"

import JapanPlanet from "../../../../assets/planets/japan_planet.webp"
import type { FC } from "react"

const shortDescription = `Welcome to Buushido, your ultimate destination for anime streaming. Immerse yourself in a thoughtfully curated collection, seamlessly blending timeless classics with the latest sensations. With user-friendly features enhancing every aspect, Buushido ensures you spend your time savoring only the finest anime experiences`
const Title = "Buushido Anime Streaming"


export const BuushidoProject :FC = () => {
    const link = "https://buushido.com"
    const githubLink = "https://github.com/Bouscout/Buushido_Frontend"
    

    return (

        <section id="project-container">
            <RegularCard>
                <PicWithButtons 
                image={JapanPlanet}
                url={link}
                gitUrl={githubLink}
                />

                <Description />
            </RegularCard>

        </section>
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