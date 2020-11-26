import React, {FC} from "react";
import style from "./FormsControls.module.css"
import {Field} from "redux-form";

type FormControlPropsType = {
    input: any
    meta: any
}

const FormControl: FC<FormControlPropsType> = ({input, meta: {touched, error}, children}) => {
    const hasError = touched && error;
    return (
        <div className={style.formControl + " " + (hasError ? style.error : "")}>
            <div>
                {children}
            </div>
            {hasError && <span>{error}</span>}
        </div>
    )
}

type TextareaPropsType = {
    input: any
    meta: any
    child: any
}

export const Textarea: FC<TextareaPropsType> = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><textarea {...input}{...restProps}/></FormControl>
}

type InputPropsType = {
    input: any
    meta: any
    child: any
}

export const Input: FC<InputPropsType> = (props) => {
    const {input, meta, child, ...restProps} = props;
    return <FormControl {...props}><input {...input}{...restProps}/></FormControl>
}

// type CreateFieldPropsType = {
//     placeholder: string
//     name: string
//     validators: any
//     component: any
// }


// @ts-ignore
export const createField = (placeholder, name, validators, component, props = {}, text = "") => (
    <div>
        <Field placeholder={placeholder} name={name}
                validate={validators}
                component={component}
               {...props}
        />{text}
    </div>
)