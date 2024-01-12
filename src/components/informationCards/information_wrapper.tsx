// wrapper aound all the informations card which display the right one given a key

import { useState, type FC, useEffect } from "react"

import { ProjectInfoPage } from "./info_page"
import { NavButtons } from "./navButtons"

import { All_Projects } from "../all_projects"
import { GeneralState, useGeneralState, flying } from "../state_management"
import { useStore } from "@nanostores/react"

export const InformationWrapper:FC = () => {
    const [active, setActive] = useState<number>(GeneralState.get()["project"] as number)
    
    // rendering when selected index change
    useEffect(() => {
        setActive(
            GeneralState.get()["project"] as number
        )
    }, [useStore(GeneralState)["project"]])

    // exit if no project to render
    if (active < 0){return}

    // land the ship
    flying.set(false)

    const next = () => {
        const nextActive = active + 1 >= All_Projects.length ? 0 : active + 1
        useGeneralState(null, nextActive)
    }
    
    const previous = () => {
        const nextActive = active - 1 < 0 ? All_Projects.length - 1 : active -1
        useGeneralState(null, nextActive)
    }
    
    const exit = () => {
        const new_state = {...GeneralState.get()}
        new_state["project"] = -1
        GeneralState.set(new_state)
    }

    const project = All_Projects[active]

    return (
            <ProjectInfoPage project={project}>

                <NavButtons exit={exit} next={next} previous={previous} position={`${active + 1}/${All_Projects.length}`}/>

            </ProjectInfoPage>

    )
}