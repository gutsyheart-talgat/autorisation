import React from 'react'
import {NavLink} from 'react-router-dom'
import style from './nav.module.css'

export default function Nav(){
    return(
        <div className={style.cont}>
            <NavLink to="/login" exact className={style.nav}>Login</NavLink>
            <NavLink to="/signin" exact className={style.nav}>Sing In</NavLink>
        </div>
    )
}