import React,{ createContext , SetStateAction } from "react";
import {IUser} from "./App"

const me:IUser = {
    _id:"0",
    email:"no-one@gmail.com",
    name:"no-one",
    password:"0000000",
    projects:[],
    role:"none"
}
const setMe: React.Dispatch<SetStateAction<IUser>>= () =>{}
export const UserContext = createContext({me,setMe});