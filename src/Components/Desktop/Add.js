import React from "react";
import style from './Desktop.module.css'

const Add = (props) => {

    return <>
        <div className={style.add} onClick={props.addCard}>
            <div className={style.add__name}><p>add</p></div>
        </div>
    </>
}

export default Add;