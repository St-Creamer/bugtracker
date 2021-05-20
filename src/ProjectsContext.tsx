import React,{ createContext,SetStateAction } from "react";
import { IProject } from "./App";

const projects:IProject[] = []
const setProjects: React.Dispatch<SetStateAction<IProject[]>>= () =>{}

export const ProjectsContext = createContext({projects,setProjects});