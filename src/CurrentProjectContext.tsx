import { createContext , SetStateAction} from "react"
import {IProject} from "./App"

const current:IProject = {
    _id:"0",
    dateStarted:"0",
    name:"none",
    status:"todo",
    users:[]
} 
const setCurrent: React.Dispatch<SetStateAction<IProject>>= () =>{}

export const CurrentProjectContext = createContext({current,setCurrent})