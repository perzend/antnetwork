import React from 'react';
import s from './Dialogs.module.css';
import {NavLink} from "react-router-dom";

const DialogItem = (props) => {
    let path = '/dialogs/' + props.id;
    return (
        <div className={s.dialog}>
            <NavLink to={path}>{props.name}</NavLink>
        </div>
    )
}

const Message = (props) => {
    return (
        <div className={s.message}>
            {props.message}
        </div>
    )
}

const Dialogs = (props) => {
    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                <DialogItem name='BigAnt' id='1'/>
                <DialogItem name='RedAnt' id='2'/>
                <DialogItem name='BlackAnt' id='3'/>
                <DialogItem name='Queen' id='4'/>
                <DialogItem name='Vasya' id='5'/>
                <DialogItem name='Petya' id='6'/>
                <DialogItem name='Demo' id='7'/>
            </div>
            <div className={s.messages}>
                <Message message='Hi Guys! WTF'/>
                <Message message='Iam Queen'/>
                <Message message='Relax. Take it easy'/>
            </div>
        </div>
    )
}

export default Dialogs;