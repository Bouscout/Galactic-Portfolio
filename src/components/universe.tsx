// components for handling the rendering of the other components

import { useState, type FC, useEffect, type ReactNode } from "react";

import { GeneralState } from "./state_management";

interface Props {
    mode : string,
    children : ReactNode
}

export const Universe:FC<Props> = ({mode, children}) => {
    const [render, setRender] = useState(false)

    useEffect(() => {
        const renderState = GeneralState.get()[mode]
        setRender(renderState)
    }, [GeneralState.get()[mode]])

    return (
        <>
        {render &&
        children
        }
        </>
    )
}