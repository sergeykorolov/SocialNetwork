import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {addMessageCreator, updateNewMessageTextCreator} from "../../redux/dialogsReducer";

const Dialogs = (props) => {

    let dialogsElements = props.dialogPage.dialogs
        .map(dialog => <DialogItem id={dialog.id} name={dialog.name} avatar={props.dialogPage.avatars[dialog.id-1].avatar}/>);
    let messagesElements = props.dialogPage.messages
        .map(message => <Message message={message.message} avatar={props.dialogPage.avatars[message.id-1].avatar} />);

    let newMessageElement = React.createRef();

    let addMessage = () => {
        props.dispatch (addMessageCreator());
    }

    let onMessageChange = (event) => {
        let text = event.target.value;
        props.dispatch(updateNewMessageTextCreator(text));
    }

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
                    onChange={onMessageChange}
                    ref={newMessageElement}
                    value={props.dialogPage.newMessageText} />
                <button onClick={addMessage}>Отправить</button>
            </div>
        </div>
    )
}

export default Dialogs;