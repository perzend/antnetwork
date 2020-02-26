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
    let dialogs = [
        {id: '1', name: 'BigAnt'},
        {id: '2', name: 'RedAnt'},
        {id: '3', name: 'Queen'},
        {id: '4', name: 'Vasya'},
        {id: '5', name: 'Petya'},
        {id: '6', name: 'Demo'},
        {id: '7', name: 'BlackAnt'}
    ]

    let messages= [
        {id: '1', message: 'Hi Guys! WTF'},
        {id: '2', message: 'Iam Queen'},
        {id: '3', message: 'Relax. Take it easy'},
    ]

    //Create JSX with .map. Long record: = dialogs.map ( (d) => { ... } );
    let dialogsElements = dialogs.map(d => <DialogItem name={d.name} id={d.id}/>);

    let messagesElements = messages.map(m => <Message message={m.message}/>);

    return (
        <div className={s.dialogs}>
            <div className={s.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={s.messages}>
                {messagesElements}
            </div>
        </div>
    )
}

export default Dialogs;