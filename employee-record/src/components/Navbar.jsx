import React from 'react'
import TableItem from './Table-Item'
import "./Table.css"
import { useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import {reset} from "../store/action"

const Navbar = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <>
        <span className="heading">Employee Records </span>
        <button onClick={() => navigate("/form")}>+ADD</button>
        <button onClick={() => navigate("/")}>Home</button>
        <button className="reset-btn" onClick={() => console.log("rahul")} >RESET</button>     
        </>
    )
}



export default Navbar;