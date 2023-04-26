import { useEffect, useState } from 'react';
import './App.css';
import React from 'react';
import { Menu, Result, Words } from "./Components/components"
import firstLevel from "./levelFirst.json"


interface addArr {
  word: string
  wordUa: string
  id: number
  [key: string]: any
}
function App() {
  let [value, setValue] = React.useState<string | undefined>()
  const [step, setstep] = useState<number>((JSON.parse(localStorage.getItem("step") || localStorage.step || 0)))
  const [active, setActive] = useState<boolean>()
  let [add, setAdd] = useState<addArr[]>((JSON.parse(localStorage.getItem("add") || localStorage.add || "[]")))
  const range = 11
  const question = firstLevel[step]
  const stop = step % range == 0 && step != 0
  const simpleWord = 0
  const phrasalVerbs = 100
  const [vissible, setVisible] = useState("unvisible")
  const [display, setDisplay] = useState("displaynone")
  const changeValue = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  }
  const Next = (e: React.MouseEvent<HTMLButtonElement>) => {

    if (value?.toLowerCase() == question.wordUa.toLowerCase()) {
      setstep(step + 1)
      setValue("")
      setActive(true)
    }
    else {
      setActive(false)
    }
    setVisible("unvisible")
    setDisplay("displaynone")
  }
  const Add = () => {

    setAdd([...add, question])
  }

  function PercentBar(): number {
    const percentBar = (((step % range) / range) * 100);
    return percentBar
  }
  function levelChangeFirst() {
    setstep(simpleWord);
  }
  function levelChangeSecond() {
    setstep(phrasalVerbs);
  }
  useEffect(() => {
    localStorage.setItem("add", JSON.stringify(add))
  }, [add])

  useEffect(() => {
    localStorage.setItem("step", JSON.stringify(step))
  }, [step])


  return (
    <div className="App">
      <Menu levelChangeFirst={levelChangeFirst} levelChangeSecond={levelChangeSecond} setAdd={setAdd} word={question.word} wordUa={question.wordUa} range={range} PercentBar={PercentBar()} add={add} question={question} value={value} changeValue={changeValue} Next={Next}
        Add={Add} active={active} step={step} setstep={setstep} stop={stop} setVisible={setVisible} setDisplay={setDisplay} display={display} vissible={vissible} ></Menu>


    </div >
  );
}
export default App;
