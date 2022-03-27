import React from "react";
import style from './Desktop.module.css'
import Card from "./Card";
import Add from "./Add";
import {connect} from "react-redux";
import {setDeleteCards, setEditField, setEditName, setNumberCards} from "../../redux/addCard_reducer";

class Desktop extends React.Component {

    render() {
        let addCard = () => {
            return this.props.setNumberCards();
        };
        let addCardDelete = (newName) => {
            return this.props.setDeleteCards(newName);
        };
        let editNameCard = (id, newName) => {
            return this.props.setEditName(id, newName)
        }
        let editFieldCard = (id, newName) => {
            return this.props.setEditField(id, newName)
        }

        let cardsNumbers = this.props.numberСards.map((u, n) => {
            return <Card kay={n} id={n}
                         addCardDelete={addCardDelete}
                         opt={u}
                         editNameCard={editNameCard}
                         editFieldCard={editFieldCard}/>
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
    }
}

export default connect(mapStateToProps, {
    setNumberCards,
    setDeleteCards,
    setEditName,
    setEditField,
})(Desktop);