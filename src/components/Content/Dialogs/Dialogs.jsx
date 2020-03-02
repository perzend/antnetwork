import React from 'react';
import s from './Dialogs.module.css';
import DialogItem from "./Dialog/DialogItem";
import Message from "./Message/Message";


const Dialogs = (props) => {

//Create JSX with .map. Long record: = dialogs.map ( (d) => { ... } );
let dialogsElements = props.state.dialogs.map(d => <DialogItem name={d.auName} id={d.id} avatar = {d.pathToAuAvatar}/>);

let messagesElements = props.state.dialogs.map(m => m.auMessages.map(mm => <Message id={mm.id} message = {mm.auMessage}/>));

    let suMessagesElements = props.state.selfUserMessages.map(msu => <Message id={msu.id} message = {msu.suMessage} flag = 'su'/>);


    let newMessageText = React.createRef();

   let sendMessage = () => {
       let message = newMessageText.current.value;
       alert(message);
   }

return (
    <div className={s.dialogs}>
        <div className={s.dialogsItems}>
            {dialogsElements}
        </div>
        <div>
            {messagesElements}
            {suMessagesElements}
            <div>
            <textarea ref={newMessageText} name="" id="" cols="30" rows="10">

            </textarea><br/>
                <button onClick = {sendMessage}>Send</button>
            </div>
        </div>
    </div>
)
}

export default Dialogs;