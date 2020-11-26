import React from "react";
import {Redirect} from "react-router-dom";
import {connect} from "react-redux";
import {AppStateType} from "../redux/redux-store";

type MapStatePropsType = {
    isAuth: boolean
}

type PropsType = MapStatePropsType;

let mapStateToPropsForRedirect = (state: AppStateType): MapStatePropsType => ({
    isAuth: state.auth.isAuth
});

export const withAuthRedirect = (Component: any) => {

    class RedirectComponent extends React.Component<PropsType> {
        render() {
            if (!this.props.isAuth) return <Redirect to={"/login"}/>;
            return <Component {...this.props} />
        }
    }

    let ConnectedAuthRedirectComponent = connect(mapStateToPropsForRedirect)(RedirectComponent);

    return ConnectedAuthRedirectComponent;
}