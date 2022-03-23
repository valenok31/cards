import React from "react";
import style from './Desktop.module.css'

const Card = (props) => {
    let newName = props.number;
    return <>
        <div className={style.card}>
            <div className={style.card__delete} onClick={props.delet}>X</div>
            <div className={style.card__name} onClick={() => {
                return props.editNameCard(newName);
            }}>
                Card #{props.number+1}
            </div>
            <div className={style.card__field}>{props.opt.name}</div>
        </div>
    </>
}

export default Card;