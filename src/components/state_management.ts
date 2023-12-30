
import { atom } from "nanostores";

export const velocityX = atom(0)
export const velocityY = atom(0)

export const flying = atom(true)

const initPositions = {
    1 : [0, 0],
    2 : [0, 0],
    3 : [0, 0]
}

export const Positions = atom<{[key : number] : number[]}>(initPositions) 

type StateDict = {[key : string] : boolean}

const windowState : StateDict = {
    "information" : true,
    "exploration" : false,
    "accessibility" : false,
}


export const GeneralState = atom(windowState)