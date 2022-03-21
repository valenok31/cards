import React from "react";
import style from './Desktop.module.css'

const Desktop = () => {
    return <>
        <div className={style.desktop}>
            <div className={style.card}>
                Hi!
                <button>Delete</button>
            </div>
            <div className={style.card}>
                Hi!
                <button>Delete</button>
            </div>
            <div className={style.card}>
                Hi!
                <button>Delete</button>
            </div>
            <div className={style.card}>
                Hi!
                <button>Delete</button>
            </div>
            <div className={style.add}>
                add
            </div>

        </div>
    </>

}

export default Desktop;