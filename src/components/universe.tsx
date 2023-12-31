// components for handling the rendering of the other components

import { useState, type FC, useEffect, type ReactNode } from "react";

import { GeneralState } from "./state_management";
import { useStore } from "@nanostores/react";

interface Props {
    mode : string,
    children : ReactNode
}

export const Universe:FC<Props> = ({mode, children}) => {
    const renderState = GeneralState.get()[mode]
    const [render, setRender] = useState(renderState)

    useEffect(() => {
        const renderState = GeneralState.get()[mode]
        setRender(renderState)

    }, [useStore(GeneralState)[mode]])

    console.log(mode, " : render is ", render)
    return (
        <>
        {render &&
        children
        }
        </>
    )
}