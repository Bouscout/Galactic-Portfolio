// page for presenting details about a project
// buttons to go to next or exit
// display a sidebar and in depth project details
// preferably visual informations

import type { FC, ReactNode } from "react"
import "./infos_page.scss"

import { SideBar } from "./sideBar"
import { ProjectDetails } from "./details"
import { NavButtons } from "./navButtons"


const shortDescription = `Welcome to Buushido, your ultimate destination for anime streaming. Immerse yourself in a thoughtfully curated collection, seamlessly blending timeless classics with the latest sensations. With user-friendly features enhancing every aspect, Buushido ensures you spend your time savoring only the finest anime experiences`
const Title = "Buushido Anime Streaming"


const link = "https://buushido.com"
const githubLink = "https://github.com/Bouscout/Buushido_Frontend"


const LongDescription = `Welcome to Buushido, your ultimate destination for anime streaming. Immerse yourself in a thoughtfully curated collection, seamlessly blending timeless classics with the latest sensations. With user-friendly features enhancing every aspect, Buushido ensures you spend your time savoring only the finest anime experiences`


interface projectStruct {
    name : string,
    shortDescription : string,
    image : ImageMetadata,
    description  : string,
    techStack : string[],
    details : any[],
    gitLink : string,
    webLink? : string,
}

interface Props {
    project : projectStruct,
    children : ReactNode,
}

export const ProjectInfoPage:FC<Props> = ({ project, children }) => {
    
    const { name, description, techStack, gitLink, webLink, image, details} = project
    
    return (
        <section id="project-container">
            <SideBar 
            title={name}
            techStack={techStack}
            description={description}
            gitLinks={gitLink}
            webLinks={webLink}
            image={image}
            >   
                {/* nav buttons */}
                {children} 
                {/* nav buttons */}

            </SideBar>
            
            
            <ProjectDetails
            images={details}
            />
        </section>
    )
}
