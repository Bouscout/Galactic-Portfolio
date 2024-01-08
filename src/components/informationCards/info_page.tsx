// page for presenting details about a project
// buttons to go to next or exit
// display a sidebar and in depth project details
// preferably visual informations

import type { FC } from "react"
import "./infos_page.scss"

import { SideBar } from "./sideBar"
import { ProjectDetails } from "./details"
import { NavButtons } from "./navButtons"


const shortDescription = `Welcome to Buushido, your ultimate destination for anime streaming. Immerse yourself in a thoughtfully curated collection, seamlessly blending timeless classics with the latest sensations. With user-friendly features enhancing every aspect, Buushido ensures you spend your time savoring only the finest anime experiences`
const Title = "Buushido Anime Streaming"


const link = "https://buushido.com"
const githubLink = "https://github.com/Bouscout/Buushido_Frontend"

import BuushidoPage from "../../../assets/projects/buushido_website.png"
import BuushidoView from "../../../assets/projects/buushido_view_page.png"
import BuushidoFilm from "../../../assets/projects/buushido_film_page.png"
const LongDescription = `Welcome to Buushido, your ultimate destination for anime streaming. Immerse yourself in a thoughtfully curated collection, seamlessly blending timeless classics with the latest sensations. With user-friendly features enhancing every aspect, Buushido ensures you spend your time savoring only the finest anime experiences`


export const ProjectInfoPage:FC = () => {
    
    
    return (
        <section id="project-container">
            <SideBar 
            title={Title}
            techStack={["Python", "JavaScript", "Django", "ReactJs", "MySQL", "RestAPI"]}
            description={shortDescription}
            gitLinks={githubLink}
            webLinks={link}
            >
                <NavButtons />

            </SideBar>
            
            
            <ProjectDetails
            images={[BuushidoPage, BuushidoView, BuushidoFilm]}
            />
        </section>
    )
}
