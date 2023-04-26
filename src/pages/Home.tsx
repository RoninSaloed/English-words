import { Menu, Result, Words } from "../Components/components"
import firstLevel from "../levelFirst.json"
import './home.css';
import { HomeProps } from "./home.props"



export const Home = ({ stop, setstep, step, PercentBar, question, value, changeValue, Next, Add, add, active, range, word, wordUa, vissible, display, setDisplay, setVisible }: HomeProps): JSX.Element => {

    return (
        <div className="Home">
            <div className="Main">
                {stop != true ?
                    <Words
                        setstep={setstep}
                        data={firstLevel}
                        PercentBar={PercentBar}
                        question={question}
                        value={value}
                        onChange={changeValue}
                        changeValue={changeValue}
                        Next={Next}
                        Add={Add}
                        add={add}
                        active={active}
                        step={step}
                        word={word}
                        wordUa={wordUa}
                        setVisible={setVisible}
                        setDisplay={setDisplay}
                        display={display}
                        vissible={vissible}
                    ></Words>
                    : <Result
                        range={range}
                        setstep={setstep}
                        data={firstLevel}
                        PercentBar={PercentBar}
                        question={question}
                        value={value}
                        onChange={changeValue}
                        changeValue={changeValue}
                        Next={Next}
                        Add={Add}
                        add={add}
                        active={active}
                        step={step}
                        word={word}
                        wordUa={wordUa} />}

            </div>
        </div>
    );
}
export default Home
