'use client'
import {  useContext } from "react"
import { BrowserContext } from "app/getuser"


export default function GetUser({pibrowser,desktop,params:{lang}}){

    const pimode = useContext(BrowserContext)
    console.log(pimode.pimode)
    return(
        <>
            {pimode.pimode ? pibrowser : desktop} 
        </>
    )
}