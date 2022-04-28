import React from 'react'
import {NavLink} from "react-router-dom";
import c from './Header.module.css'

function Header() {
    return (
        <div>
            {/*<div>Наведите мышь</div>*/}
            <div >Наведите мышью
                <div className={c.container}>
                   <NavLink className={c.nav1} to='/PreJunior'>PreJunior</NavLink>
                   <NavLink className={c.nav2} to='/Junior'>Junior</NavLink>
                  <NavLink className={c.nav3} to='/JuniorPlus'>JuniorPlus</NavLink>
                </div>
            </div>



            {/*<NavLink className={c.nav} to='/PreJunior'>PreJunior</NavLink>*/}
            {/*<NavLink className={c.nav} to='/Junior'>Junior</NavLink>*/}
            {/*<NavLink className={c.nav} to='/JuniorPlus'>JuniorPlus</NavLink>*/}


        </div>
    )
}

export default Header
