import React from "react";
import style from './Desktop.module.css'

const Card = (props) => {
    let newName = props.id;
    let switchCardName = props.opt.switchCardName;
    let switchCardField = props.opt.switchCardField;
    let cardName = <div onClick={() => props.editNameCard(newName)}>{props.opt.name}</div>;
    let cardTranscription = <div>{props.opt.transcription}</div>;
    let cardField = <div onClick={() => props.editFieldCard(newName)}>{props.opt.translation_ru}</div>;
    return <>
        <div className={style.card}>
            <div className={style.card__delete} onClick={() => props.addCardDelete(newName)}>X</div>
            <div className={style.card__name}>
                {switchCardName ? cardName :
                    <input value={props.opt.name} size='5' autoFocus={true} onBlur={() => props.editNameCard(newName)}/>}
            </div>
            <div className={style.card__transcription}>
                {cardTranscription}
            </div>
            <div className={style.card__field}>
                {switchCardField ? cardField :
                    <input value={props.opt.translation_ru} size='5' autoFocus={true} onBlur={() => props.editFieldCard(newName)}/>}
            </div>
        </div>
    </>
}

export default Card;