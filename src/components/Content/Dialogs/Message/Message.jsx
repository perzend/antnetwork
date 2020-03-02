import React from 'react';
import s from '../Dialogs.module.css';

const Message = (props) => {
    let temp;
    if (props.flag == 'su') {
        temp = s.suMessage;
    } else {
        temp = s.auMessage;
    }

    return (

        <div className = {temp}>
            {props.id} {props.message}

        </div>
    )
}
export default Message;