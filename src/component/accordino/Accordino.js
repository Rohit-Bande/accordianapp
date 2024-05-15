import React from "react";
import {questions} from './Api';
import { useState } from "react";
import MyAccordian from "./MyAccordian";

const Accordino = () => {

    const [data, setData] = useState(questions);

    return (
        <>
        <section className="main-div">  
        <h1> React interview question</h1>
        {data.map((currEle) => {
            const{id} = currEle;
            return <MyAccordian  key={id} {...currEle}/>;
        })}
        </section>
        </>
    )
}

export default Accordino;