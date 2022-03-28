import React from "react";
import style from './Desktop.module.css'
import {useFormik} from 'formik';

const Card = (props) => {
    let newName = props.id;
    let switchCardName = props.opt.switchCardName;
    let switchCardField = props.opt.switchCardField;
    let cardName = <div onClick={() => props.editNameCard(newName)}>{props.opt.name}</div>;
    let cardTranscription = <div>{props.opt.transcription}</div>;
    let cardField = <div onClick={() => props.editFieldCard(newName)}>{props.opt.translation_ru}</div>;

    /* Formik */
    const formikName = useFormik({
        initialValues: {
            name: props.opt.name,
        },
        onSubmit: values => {
            props.editNameCard(props.id, values.name);
        },
    });
    const formikTranslation_ru = useFormik({
        initialValues: {
            translation_ru: props.opt.translation_ru,
        },
        onSubmit: values => {
            props.editFieldCard(props.id, values.translation_ru);
        },
    });

    let inputName = (
        <form onSubmit={formikName.handleSubmit}>
            <input
                size='7'
                id="name"
                name="name"
                type="text"
                autoFocus={true}
                onChange={formikName.handleChange}
                value={formikName.values.name}
                onBlur={formikName.handleSubmit}
            />
        </form>)

    let inputField = (
        <form onSubmit={formikTranslation_ru.handleSubmit}>
            <input
                size='7'
                id="translation_ru"
                name="translation_ru"
                type="text"
                autoFocus={true}
                onChange={formikTranslation_ru.handleChange}
                value={formikTranslation_ru.values.translation_ru}
                onBlur={formikTranslation_ru.handleSubmit}
            />
        </form>)
    /* end Formik */

    return <>
        <div className={style.card}>
            <div className={style.card__delete} onClick={() => props.addCardDelete(newName)}>X</div>
            <div className={style.card__name}>
                {switchCardName ? cardName : inputName}
            </div>
            <div className={style.card__transcription}>
                {cardTranscription}
            </div>
            <div className={style.card__field}>
                {switchCardField ? cardField : inputField}
            </div>
        </div>
    </>
}

export default Card;

