import React from "react";
import style from "./ProfileInfo.module.css"

class ProfileStatus extends React.Component {

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => {
        this.setState({   // асинхронная функция
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState({   // асинхронная функция
            editMode: false
        });
        this.props.updateStatus(this.state.status);
    }
    onStatusChange = (event) => {
        this.setState({
            status: event.currentTarget.value
        })
    }

    componentDidUpdate(prevProps, prevState) {
        if(prevProps.status !== this.props.status) {
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                <div className={style.status}>
                    <span onDoubleClick={this.activateEditMode}>{this.props.status || "---------"}</span>
                </div>
                }
                {this.state.editMode &&
                <div>
                    <input autoFocus={true}
                           onChange={this.onStatusChange}
                           onBlur={this.deactivateEditMode}
                           value={this.state.status}/>
                </div>
                }
            </div>
        )
    }
}

export default ProfileStatus;