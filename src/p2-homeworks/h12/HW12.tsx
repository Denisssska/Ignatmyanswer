import React from "react";
import s from "./HW12.module.css";
import SuperSelect from "../h7/common/c5-SuperSelect/SuperSelect";
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "../h10/bll/store";
import {changeThemeC} from "./bll/themeReducer";

const themes = ['dark', 'red', 'some'];

function HW12() {
     // useSelector
const theme = useSelector<AppStoreType>(state=>{
    console.log(state.theme.theme)
    return state.theme.theme
}) as string
    const dispatch = useDispatch()
    // useDispatch, onChangeCallback
const onChangeOption = (value:string)=>{
    dispatch(changeThemeC(value))
}

    return (
            <div className={s[theme]}>
                <hr/>
                <span className={s[theme + '-text']}>
                homeworks 12
            </span>
                {/*should work (должно работать)*/}
                {/*SuperSelect or SuperRadio*/}
                <SuperSelect onChangeOption={(value)=>onChangeOption(value)} options={themes}/>
                <hr/>
            </div>
    );
}

export default HW12;
