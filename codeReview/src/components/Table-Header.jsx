import React from 'react'
import TableItem from './Table-Item'
import "./Table.css"
import { useNavigate } from 'react-router-dom'
import{useDispatch} from 'react-redux'
import {reset} from "../store/action"

const Table = () => {
    const dispatch = useDispatch()
    const navigate = useNavigate()

    return (
        <>
        <span className="heading">Employee Records </span>
        <button onClick={() => navigate("/form")}>+ADD</button>
        <button className="reset-btn" onClick={() => dispatch(reset())}>RESET</button>
       
        <div className='showbox'>
            <div className='HeadingTab'>
                <div>ID</div>
                <div>Full Name</div>
                <div>Email</div>
                <div>Gender</div>
                <div>Designation</div>
                <div>Mobile</div>
                <div>Buttons</div>
            </div>
        </div>
       
        </>
    )
}









export default Table