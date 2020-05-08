import React from "react";
import style from './Dialogs.module.css';
import DialogItem from "./DialogItem/DialogItem";
import Message from "./Message/Message";
import {Redirect} from "react-router-dom";
import {Field, reduxForm} from "redux-form";
import {Textarea} from "../common/FormsControls/FormsControls";
import {maxLengthCreator, required} from "../../utils/validators/validators";

const Dialogs = (props) => {

    let dialogsElements = props.dialogs
        .map(dialog => <DialogItem key={dialog.id} id={dialog.id} name={dialog.name} avatar={props.avatars[dialog.id-1].avatar}/>);
    let messagesElements = props.messages
        .map(message => <Message key={message.id} message={message.message} avatar={props.avatars[message.id-1].avatar} profile={props.profile}/>);

    if (!props.isAuth) return <Redirect to={"/login"}/>

    const addMessage = (formData) => {
        props.addMessage(formData.newMessageText);
    }

    return (
        <div className={style.dialogs}>
            <div className={style.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={style.messages}>
                {messagesElements}
            </div>
            <AddMessageReduxForm onSubmit={addMessage}/>
        </div>
    )
}

const maxLength50 = maxLengthCreator(50);

const AddMessageForm = (props) => {
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <Field placeholder="Enter your message" name="newMessageText"
                       validate={[required, maxLength50]}
                       component={Textarea}/>
            </div>
            <div>
                <button>Отправить</button>
            </div>
        </form>
    )
}

// redux-form оборачивает
const AddMessageReduxForm = reduxForm({form: "dialogAddMessageForm"})(AddMessageForm);

export default Dialogs;