import React from "react";
import style from "./ProfileInfo.module.css";

class ProfileInfo extends React.Component {

    state = {
        editMode: false
    }

    activateEditMode = () => {
        this.setState( {   // асинхронная функция
            editMode: true
        })
    }

    deactivateEditMode = () => {
        this.setState( {   // асинхронная функция
            editMode: false
        })
    }

    render() {
        return (
            <div>
                {!this.state.editMode &&
                    <div>
                        <span onDoubleClick={this.activateEditMode}>{this.props.status}</span>
                    </div>
                }
                {this.state.editMode &&
                    <div>
                        <input autoFocus={true} onBlur={this.deactivateEditMode} value={this.props.status}/>
                    </div>
                }
            </div>
        )
    }
}

export default ProfileInfo;