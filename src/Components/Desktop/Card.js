import React from "react";
import style from './Desktop.module.css'

const Card = () => {
    return <>
        <div className={style.card}>
            <div className={style.card__name}>
                <button>Delete</button>
            </div>
        </div>
    </>
}

export default Card;