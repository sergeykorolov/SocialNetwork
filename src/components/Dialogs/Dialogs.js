import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs
        .map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} avatar={props.avatars[dialog.id-1].avatar}/>);
    let messagesElements = props.messages
        .map(message => <Message message={message.message} avatar={props.avatars[message.id-1].avatar} />);

    let newMessageElement = React.createRef();

    let onAddMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    }

    if (!props.isAuth) return <Redirect to={"/login"}/>

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <div>
                <textarea
                    placeholder='Enter your message'
                    onChange={ onMessageChange }
                    ref={newMessageElement}
                    value={props.newMessageText} />
                <button onClick={ onAddMessage }>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;