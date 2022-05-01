import React from 'react'
import style from './Message.module.css';

type NewArrType = {
    avatar: string,
    name: string,
    message: string,
    time: string

}

function Message(props: NewArrType) {
    return (
        <div className={style.message}>
                <img src={props.avatar} alt='logo'/>
            <div className={style.angle}/>
            <div className={style.text}>
                <div className={style.name}>{props.name}</div>
                <div>{props.message}</div>
                <div className={style.time}>{props.time}</div>
            </div>
        </div>
    )
}

export default Message
