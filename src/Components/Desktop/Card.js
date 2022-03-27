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

    let inputName = <input
        size='7'
        id="name"
        name="name"
        type="text"
        autoFocus={true}
        onChange={formikName.handleChange}
        value={formikName.values.name}
        onBlur={formikName.handleSubmit}
    />
    let inputField = <input
        size='7'
        id="translation_ru"
        name="translation_ru"
        type="text"
        autoFocus={true}
        onChange={formikTranslation_ru.handleChange}
        value={formikTranslation_ru.values.translation_ru}
        onBlur={formikTranslation_ru.handleSubmit}
    />

    const InputForm = (props) => {
        return <>
            <form onSubmit={props.formik.handleSubmit}>
                <input
                    size='7'
                    id={props.id}
                    name={props.id}
                    type="text"
                    autoFocus={true}
                    onChange={props.formik.handleChange}
                    value={props.formik.values.value}
                    onBlur={props.formik.handleSubmit}
                />
            </form>
        </>
    }

    /* end Formik */

    return <>
        <InputForm id={'translation_ru'} formik={formikTranslation_ru}/>
        <div className={style.card}>
            <div className={style.card__delete} onClick={() => props.addCardDelete(newName)}>X</div>
            <div className={style.card__name}>
                {switchCardName ? cardName : <form onSubmit={formikName.handleSubmit}>{inputName}</form>}
            </div>
            <div className={style.card__transcription}>
                {cardTranscription}
            </div>
            <div className={style.card__field}>
                {switchCardField ? cardField : <form onSubmit={formikTranslation_ru.handleSubmit}>{inputField}</form>}
                {/*<input value={props.opt.translation_ru} size='5' autoFocus={true} onBlur={() => props.editFieldCard(newName)}/>*/}
            </div>
        </div>
    </>
}

export default Card;

