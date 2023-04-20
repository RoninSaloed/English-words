import React, { useEffect, useState } from "react"
import "./menu.css"
import { Routes, Route, Link, NavLink } from "react-router-dom"
import { MenuProps } from "./menu.props"
import App from "../../App"
import Home from "../../pages/Home"
import Dictionary from "../Dictionary/Dictionary"
import ElementList from "../../pages/ElementList"



export const Menu = ({ }: MenuProps): JSX.Element => {

    const [burger, setBurger] = useState("burger unclicked")
    const [menu, setMenu] = useState("menu hidden")
    const [menuActive, setMenuActive] = useState(false)


    const updateMenu = () => {
        if (!menuActive) {
            setBurger("burger clicked")
            setMenu("menu visible")
        } else {
            setBurger("burger unclicked")
            setMenu("menu hidden")
        }
        setMenuActive(!menuActive)
    }
    return (
        <div className="menuWrapper">
            <div className="menuBlur">
                <header className="menuHeader">
                    <nav className="menuNav">
                        <div className="menuBurger" onClick={updateMenu}>
                            <div className={burger}></div>
                            <div className={burger}></div>
                            <div className={burger}></div>
                        </div>
                        {/* <div className="buttonsBody">
                            <div className="buttonsRadio">
                                <button >First level</button>
                                <button >Second level</button>
                                <button >Third level</button>
                            </div>
                        </div> */}
                    </nav>
                </header>
                <div className={menu}>

                    <nav>
                        <li>
                            <NavLink to="/">Home</NavLink>
                        </li>
                        <li>
                            <NavLink to="/Dictionary">Dictionary</NavLink>
                        </li>
                        <li>
                            <NavLink to="/ElementList">ElementList</NavLink>
                        </li>
                    </nav>
                </div>
                <Routes>
                    <Route path='/' element={<Home />}></Route>
                    <Route path='/Dictionary' element={<Dictionary />}></Route>
                    <Route path='/ElementList' element={<ElementList />}></Route>
                </Routes>
            </div>
        </div>
    )
}