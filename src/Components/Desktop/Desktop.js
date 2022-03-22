import React from "react";
import style from './Desktop.module.css'
import Card from "./Card";
import Add from "./Add";
import {connect} from "react-redux";
import {setDeleteCards, setNumberCards} from "../../redux/addCard_reducer";

class Desktop extends React.Component {

    render() {
        let addCard = () => {
            return this.props.setNumberCards();
        };
        let addCardDelete = () => {
            return this.props.setDeleteCards();
        };

        let cardsNumbers = this.props.numberСards.map(w => {
            return <Card delet={addCardDelete}/>
        });

        return <>
            <div className={style.desktop}>
                {cardsNumbers}
                <Add addCard={addCard}/>
                {this.props.numberСards}
            </div>
        </>
    }
}

const mapStateToProps = (props) => {
    return {
        numberСards: props.addCard_reducer.numberСards,
    }
}

export default connect(mapStateToProps, {setNumberCards,setDeleteCards})(Desktop);