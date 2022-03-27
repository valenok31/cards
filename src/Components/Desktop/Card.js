import React from "react";
import style from './Desktop.module.css'

const Card = (props) => {
    let newName = props.opt.id-1;
    let switchCardName = props.switchCardName;
    let switchCardField = props.switchCardField;
    let cardName = <span onClick={() => props.editNameCard(newName)}>{newName + 1}</span>
    let cardField = <span onClick={() => props.editFieldCard(newName)}>{props.opt.name}</span>

    return <>
        <div className={style.card}>
            <div className={style.card__delete} onClick={props.delet}>X</div>
            <div className={style.card__name}>
                {switchCardName ? cardName :
                    <input size='5' autoFocus={true} onBlur={() => props.editNameCard(newName)}/>}
            </div>
            <div className={style.card__field} >
                {switchCardField ? cardField : <input size='5' autoFocus={true} onBlur={() => props.editFieldCard(newName)}/>}
            </div>
        </div>
    </>
}

export default Card;