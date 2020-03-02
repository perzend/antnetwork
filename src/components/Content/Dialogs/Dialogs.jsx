import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

//Create JSX with .map. Long record: = dialogs.map ( (d) => { ... } );
let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.auName} id={d.id} avatar = {d.pathToAuAvatar}/>);

let messagesElements = props.state.dialogs.map(m => m.auMessages.map(mm => <Message id={mm.id} message = {mm.auMessage}/>));

    let suMessagesElements = props.state.selfUserMessages.map(msu => <Message id={msu.id} message = {msu.suMessage} flag = 'su'/>);

return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div>
            {messagesElements}
            {suMessagesElements}
        </div>
    </div>
)
}

export default Dialogs;