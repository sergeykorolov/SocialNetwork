import React, {FC} from "react";
import {reduxForm} from "redux-form";
import {createField, Input} from "../common/FormsControls/FormsControls";
import {required} from "../../utils/validators/validators";
import {connect} from "react-redux";
import {login} from "../../redux/auth-reducer";
import {Redirect} from "react-router-dom";
import style from "../common/FormsControls/FormsControls.module.css";
import styleLogin from "./Login.module.css";
import {AppStateType} from "../../redux/redux-store";

type LoginFormPropsType = {
    handleSubmit: any
    error: any
    captchaUrl: string
}

const LoginForm: FC<LoginFormPropsType> = ({handleSubmit, error, captchaUrl}) => {
    return (
        <form onSubmit={handleSubmit}>
            {createField("Email", "email", [required], Input)}
            {createField("Password", "password", [required], Input, {type: "password"})}
            <div className={styleLogin.checkbox}>
                {createField(null, "rememberMe", [], Input, {type: "checkbox"}, "remember me")}
            </div>

            {captchaUrl && <img src={captchaUrl}/>}
            {captchaUrl && createField("Symbols from image", "captcha", [required], Input, {})}

            {error && <div className={style.formSummaryError}>
                {error}
            </div>
            }
            <div className={styleLogin.loginButton}>
                <button>Login</button>
            </div>
            <div className={styleLogin.hint}>
                <div><b>данные тестового аккаунта:</b></div>
                <div>Email: <i>free@samuraijs.com</i></div>
                <div>Password: <i>free</i></div>
            </div>
        </form>
    )
}

// @ts-ignore
const LoginReduxForm = reduxForm({form: 'login'})(LoginForm);

type LoginPropsType = {
    login: (email: string, password: string, rememberMe: boolean, captcha: string) => void
    isAuth: boolean
    captchaUrl: string
}

const Login: FC<LoginPropsType> = (props) => {
    const onSubmit = (formData: any) => {
        props.login(formData.email, formData.password, formData.rememberMe, formData.captcha);
    }

    if (props.isAuth) {
        return <Redirect to={"/profile"}/>
    }

    return <div className={styleLogin.loginBlock}>
            <h1>Login</h1>
            <LoginReduxForm onSubmit={onSubmit}/>
        </div>
}

type MapStatePropsType = {
    isAuth: boolean
    captchaUrl: string | null
}

const mapStateToProps = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth,
    captchaUrl: state.auth.captchaUrl
})

// @ts-ignore
export default connect(mapStateToProps, {login})(Login)