import React, {FC} from "react";
import {Form, reduxForm} from "redux-form";
import {createField, Input, Textarea} from "../../common/FormsControls/FormsControls";
import style from './ProfileInfo.module.css';
import styleForm from '../../common/FormsControls/FormsControls.module.css';
import {ProfileType} from "../../../types/types";

type PropsType = {
    handleSubmit: any
    profile: ProfileType
    error: any
}

const ProfileDataForm: FC<PropsType> = ({handleSubmit, profile, error}) => {
    return (
        <Form onSubmit={handleSubmit}>
            {error && <div className={styleForm.formSummaryError}>
                {error}
            </div>
            }
            <div>
                <strong className={style.itemLabel}>Full name:</strong>
                <div className={style.input}>{createField("Full name", "fullName", [], Input)}</div>
            </div>
            <div>
                <strong className={style.itemLabel}>Looking for a job:</strong>
                <div className={style.checkbox}>{createField("", "lookingForAJob", [], Input, {type: "checkbox"})}</div>
            </div>
            <div>
                <strong className={style.itemLabel}>My professional skills:</strong>
                <div className={style.textarea}>{createField("My professional skills", "lookingForAJobDescription", [], Textarea )}</div>
            </div>

            <div>
                <strong className={style.itemLabel}>About me:</strong>
                <div className={style.textarea}>{createField("About me", "aboutMe", [], Textarea )}</div>
            </div>
            <div><strong>Contacts:</strong> {Object.keys(profile.contacts).map(key => {
                return <div key={key}>
                    <strong className={style.contactForm}>{key}:</strong>
                    <div className={style.input}>{createField(key, "contacts." + key, [], Input)}</div>
                </div>
            })}</div>
            <div><button>save</button></div>
        </Form>
    )
}

// @ts-ignore
const ProfileDataFormReduxForm = reduxForm({form: 'edit-profile'})(ProfileDataForm);

export default ProfileDataFormReduxForm;