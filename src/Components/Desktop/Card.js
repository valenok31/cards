import React from "react";
import style from './Desktop.module.css'

const Card = (props) => {
    return <>
        <div className={style.card}>
            <div className={style.card__name}>
                <button onClick={props.delet}>Delete</button>
            </div>
        </div>
    </>
}

export default Card;