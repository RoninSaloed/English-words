import React, { useEffect, useState } from "react"
import "./menu.css"
import { Routes, Route, Link, NavLink } from "react-router-dom"
import { MenuProps } from "./menu.props"
import App from "../../App"
import Home from "../../pages/Home"
import Dictionary from "../Dictionary/Dictionary"



export const Menu = ({ stop, setstep, step, PercentBar, question, value, changeValue, Next, Add, add, active, range, word, wordUa, setAdd }: MenuProps): JSX.Element => {

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
                    </nav>
                </div>
                <Routes>
                    <Route path='/' element={<Home PercentBar={PercentBar} range={range} add={add} question={question} value={value} changeValue={changeValue} Next={Next}
                        Add={Add} active={active} step={step} setstep={setstep} stop={stop} word={word} wordUa={wordUa} />}></Route>
                    <Route path='/Dictionary' element={<Dictionary add={add} setAdd={setAdd} />}></Route>
                </Routes>
            </div>
        </div>
    )
}