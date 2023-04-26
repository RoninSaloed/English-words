import React, { useEffect, useState } from "react"
import "./menu.css"
import { Routes, Route, Link, NavLink } from "react-router-dom"
import { MenuProps } from "./menu.props"
import App from "../../App"
import Home from "../../pages/Home"
import Dictionary from "../Dictionary/Dictionary"
import classNames from "classnames"



export const Menu = ({ stop, setstep, step, PercentBar, question, value, changeValue, Next, Add, add, active, range, word, wordUa, setAdd, levelChangeFirst, levelChangeSecond, vissible, display, setDisplay, setVisible }: MenuProps): JSX.Element => {

    const [burger, setBurger] = useState("burger unclicked")
    const [menu, setMenu] = useState("menu hidden")
    const [menuActive, setMenuActive] = useState(false)
    const [buttonFirstActive, setButtonActive] = useState("buttonFirst active")
    const [buttonSecondActive, setButtonSecondActive] = useState("buttonSecond active")

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
                        <div className="menuLevelButtons">
                            <button className={step <= 99 ? buttonFirstActive : "buttonFirst unActive"} disabled={step <= 99 ? true : false} onClick={levelChangeFirst}>simple words</button>
                            <button className={step >= 100 ? buttonSecondActive : "buttonSecond unActive"} disabled={step >= 100 ? true : false} onClick={levelChangeSecond}>phrasal verbs</button>
                        </div>
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
                    <Route path='/' element={<Home setVisible={setVisible} setDisplay={setDisplay} display={display} vissible={vissible} PercentBar={PercentBar} range={range} add={add} question={question} value={value} changeValue={changeValue} Next={Next}
                        Add={Add} active={active} step={step} setstep={setstep} stop={stop} word={word} wordUa={wordUa} />}></Route>
                    <Route path='/Dictionary' element={<Dictionary add={add} setAdd={setAdd} />}></Route>
                </Routes>
            </div>
        </div>
    )
}