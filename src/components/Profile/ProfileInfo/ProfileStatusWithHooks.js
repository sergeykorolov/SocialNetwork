import React, {useEffect, useState} from "react";
import style from "./ProfileInfo.module.css"

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    // выполняется после отрисовки компоненты всегда когда придет другой status
    useEffect( () => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (event) => {
        setStatus(event.currentTarget.value);
    }

    return (
        <div>
            {!editMode &&
            <div>
                <strong className={style.status}>Status: </strong>
                <span className={style.statusBody} onDoubleClick={activateEditMode}>{status || "---------"}</span>
            </div>
            }
            {editMode &&
            <div>
                <input autoFocus={true}
                       onBlur={deactivateEditMode}
                       onChange={onStatusChange}
                       value={status}/>
            </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;