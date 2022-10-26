import React, { useReducer } from "react";
import ErrorPage from "../404Page/404Page";
import Header from "../Header/Header";
import '../Home/Home.css';

const initialState = 0;
const reducer = (count, action) => {
    switch (action) {
        case 'add':
            return count + 1;
        case 'minus':
            return count - 1;
        case 'reset':
            return 0;
        default:
            throw new Error("Something went wrong")
    }
}
export default function Help() {

    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <section className="wrapper">
            <Header />
            <h5 className="title">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.
                <br /> Help asperiores ullam adipisci?
            </h5>
            <p className="pText">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Asperiores, eius dignissimos incidunt iure eos facere explicabo? Odio, illum vel ea quod sit, assumenda autem quis consequuntur alias laboriosam eos, vero rerum nisi maiores! Hic dolorem natus debitis! Quasi temporibus commodi eveniet dicta.
                <br />
            </p>
            <ul className="list">
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
                <li>Lorem ipsum dolor sit amet consectetur.</li>
            </ul>
            <div className="counter">
                <button className="counterButton" onClick={() => dispatch("add")}>+</button>
                <p className="count"> {count} </p>
                <button className="counterButton" onClick={() => dispatch("minus")}>-</button>
            </div>
        </section>

    );
}
