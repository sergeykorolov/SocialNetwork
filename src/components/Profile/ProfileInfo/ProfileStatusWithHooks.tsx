import React, {FC, useEffect, useState} from "react";
import style from "./ProfileInfo.module.css"

type PropsType = {
    status: string
    updateStatus: (status: string) => void
    isOwner: boolean
}

const ProfileStatusWithHooks: FC<PropsType> = (props) => {

    let [editMode, setEditMode] = useState(false);
    let [status, setStatus] = useState(props.status);

    // выполняется после отрисовки компоненты всегда когда придет другой status
    useEffect(() => {
        setStatus(props.status);
    }, [props.status]);

    const activateEditMode = () => {
        setEditMode(true);
    }

    const deactivateEditMode = () => {
        setEditMode(false);
        props.updateStatus(status)
    }

    const onStatusChange = (event: any) => {
        setStatus(event.currentTarget.value);
    }

    return (
        <div>
            {props.isOwner
                ? <div>
                    {!editMode &&
                        <div className={style.status}>
                            <span title="изменить статус" className={style.statusBody}
                            onClick={activateEditMode}>{status || "---------"}</span>
                        </div>
                    }
                    {editMode &&
                        <div className={style.status}>
                            <input autoFocus={true}
                               onBlur={deactivateEditMode}
                               onChange={onStatusChange}
                               value={status}/>
                        </div>
                    }
                </div>
                : <div className={style.status}>
                    <span className={style.statusBody}>{status || "---------"}</span>
                </div>
            }
        </div>
    )
}

export default ProfileStatusWithHooks;