import React from "react";
import style from './Desktop.module.css'
import Card from "./Card";
import Add from "./Add";

const Desktop = () => {
    return <>
        <div className={style.desktop}>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Card/>
            <Add/>
        </div>
    </>

}

export default Desktop;