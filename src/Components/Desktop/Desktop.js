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
        let addCardDelete = () => {
            return this.props.setDeleteCards();
        };
        let editNameCard = (newName) => {
            return this.props.setEditName(newName)
        }
        let editFieldCard = (newName) => {
            return this.props.setEditField(newName)
        }

        let cardsNumbers = this.props.numberСards.map((w, n) => {
            return <Card kay={n} id={n}
                         delet={addCardDelete}
                         opt={w}
                         editNameCard={editNameCard}
                         editFieldCard={editFieldCard}
                         switchCardField={this.props.switchCardField}
                         switchCardName={this.props.switchCardName}/>
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
        switchCardField: props.addCard_reducer.switchCardField,

    }
}

export default connect(mapStateToProps, {
    setNumberCards,
    setDeleteCards,
    setEditName,
    setEditField,
})(Desktop);