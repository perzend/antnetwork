import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import * as serviceWorker from './serviceWorker';

let preparedDialogs = [
    {id: '1', name: 'BigAnt'},
    {id: '2', name: 'RedAnt'},
    {id: '3', name: 'Queen'},
    {id: '4', name: 'Vasya'},
    {id: '5', name: 'Petya'},
    {id: '6', name: 'Demo'},
    {id: '7', name: 'BlackAnt'}
]

let preparedMessages = [
    {id: '1', message: 'Hi Guys! WTF'},
    {id: '2', message: 'Iam Queen'},
    {id: '3', message: 'Relax. Take it easy'},
]

let preparedPosts = [
    {id: '1', message: 'Hi, how are you!', likesCount: '12'},
    {id: '2', message: 'It\'s my first post', likesCount: '4'},
    {id: '3', message: 'This message from postsData massive', likesCount: '555'}
]

ReactDOM.render(<App dialogs={preparedDialogs} messages={preparedMessages}
                     posts={preparedPosts}/>, document.getElementById('root'));


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
