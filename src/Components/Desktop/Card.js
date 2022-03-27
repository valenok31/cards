import React from "react";
import style from './Desktop.module.css'

const Card = (props) => {
    let newName = props.opt.id;
    let switchCardName = props.opt.switchCardName;
    let switchCardField = props.opt.switchCardField;
    let cardName = <div onClick={() => props.editNameCard(newName)}>{newName}</div>;
    let cardField = <div onClick={() => props.editFieldCard(newName)}>{props.opt.name}</div>;
    console.log('switchCardName='+switchCardName);
    return <>
        <div className={style.card}>
            <div className={style.card__delete} onClick={props.delet}>X</div>
            <div className={style.card__name}>
                {switchCardName ? cardName :
                    <input size='5' onBlur={() => props.editNameCard(newName)}/>}
            </div>
            <div className={style.card__field}>
                {switchCardField ? cardField : <input size='5' onBlur={() => props.editFieldCard(newName)}/>}
            </div>
        </div>
    </>
}

export default Card;