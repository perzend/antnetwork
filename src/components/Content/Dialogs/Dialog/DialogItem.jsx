import React from 'react';
import s from '../Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {

    let path = '/dialogs/' + props.id;

    return (
        <div>
            <img className={s.avatarsImage} src={props.avatar}/>
                <div className={s.dialog}>
                    <NavLink to={path}>{props.name}</NavLink>
                </div>
        </div>
)
}

export default DialogItem;