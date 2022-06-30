import React, {useState} from 'react';
import SuperCheckbox from "../h4/common/c3-SuperCheckbox/SuperCheckbox";
import SuperButton from "../h4/common/c2-SuperButton/SuperButton";
import axios from "axios";


type UsersType = {
    created: string
    email: string
    isAdmin: boolean
    name: string
    rememberMe: boolean
    token: string
    tokenDeathTime: number
    updated: string
    _id: string
}

const RequestApi = () => {
    const [mass, setMass] = useState<Array<UsersType>>()
    console.log(mass)
    let b = mass?.map(item => item)
    let a = false
    const onChangeChecked = (value: boolean) => {
        a = value
    }

    const postHandler = () => {

        const instans = axios.create({
            baseURL: 'https://neko-cafe-back.herokuapp.com/',

        });

        instans.post('auth/test', {success: a})
            .then((res) => console.log(res))
            .catch((error) => {
                console.log({...error});
                console.log(error.response ? error.response.data.errorText : error.message);
            })
        instans.get('auth')
            .then((res) => setMass(res.data.users))
    }
    let c
    let d
    let e
    let f =[]
    for (let key in b) {
        // @ts-ignore
        c = b[key]
        console.log(key)
       for(key in c){
           d = c[key]
           e = key
           console.log(c[key])
           f.push(key +': '+ c[key])
       }
    }
    return (
        <div>
            <SuperButton title={'Post'} onClick={postHandler}>Post</SuperButton>
            <SuperCheckbox onChangeChecked={(value) => onChangeChecked(value)}/>
            {f.map( (item,index)=><div key={index}><span>{item}</span></div>)}
        </div>
    );
};

export default RequestApi;