
import { atom } from "nanostores";

export const first_time = atom(true) // first time user landing on the page

export const velocityX = atom(0)
export const velocityY = atom(0)

export const flying = atom(true)

// Project position in space
const initPositions = {
    1 : [0, 0],
    2 : [0, 0],
    3 : [0, 0]
}
export const Positions = atom<{[key : number] : number[]}>(initPositions) 
// Project position in space


// main state
type StateDict = {[key : string] : boolean | number}

const windowState : StateDict = {
    "information" : false,
    "exploration" : false,
    "accessibility" : true,
    "project" : -1,
}
export const GeneralState = atom(windowState)

export const useGeneralState:Function = (state:string | null, index:number = -1) : void => {
    // changing the general state
    if (state){
        const newState : {[key : string] : boolean | number} = {}

        Object.keys(windowState).forEach(key => {
            newState[key] = false
        });

        // set the selected state to true
        newState[state] = true
        newState["project"] = -1

        GeneralState.set(newState)
    }

    // changing the selected project
    else if(index >= 0){
        const newState = {
            ...GeneralState.get()
        }
        newState["project"] = index
        GeneralState.set(newState)
    }
}

// main state


