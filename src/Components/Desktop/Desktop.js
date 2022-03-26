import React from "react";
import style from './Desktop.module.css'
import Card from "./Card";
import Add from "./Add";
import {connect} from "react-redux";
import {setDeleteCards, setEditName, setNumberCards} from "../../redux/addCard_reducer";

class Desktop extends React.Component {

    render() {
        let addCard = () => {
            return this.props.setNumberCards();
        };
        let addCardDelete = () => {
            return this.props.setDeleteCards();
        };
        let editNameCard = (newName) => {
            return this.props.setEditName(newName)
        }
        let endEditNameCard = (newName) => {
            return this.props.setEditName(newName)
        }

        let cardsNumbers = this.props.numberСards.map((w, n) => {
            return <Card delet={addCardDelete} number={n} opt={w} editNameCard={editNameCard}/>
        });

        return <>
            <div className={style.desktop}>
                {cardsNumbers}
                <Add addCard={addCard}/>
            </div>
        </>
    }
}

const mapStateToProps = (props) => {
    return {
        numberСards: props.addCard_reducer.numberСards,
        switchCardName: props.addCard_reducer.switchCardName,
        toggleCardName: props.addCard_reducer.toggleCardName,

    }
}

export default connect(mapStateToProps, {setNumberCards, setDeleteCards, setEditName})(Desktop);