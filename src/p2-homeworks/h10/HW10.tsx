import React from 'react'
import SuperButton from '../h4/common/c2-SuperButton/SuperButton'
import {useDispatch, useSelector} from "react-redux";
import {AppStoreType} from "./bll/store";
import {InitStateType, loadingAC} from "./bll/loadingReducer";

function HW10() {
    const stateSelector = useSelector<AppStoreType>((state)=>state.loading) as InitStateType
const dispatch = useDispatch()
    // useSelector, useDispatch
    // const loading = false

    const setLoading = () => {
         dispatch(loadingAC(true))

        setTimeout(()=>dispatch(loadingAC(false)),3000)
        console.log('loading...')
    };

    return (
        <div>
            <hr/>
            homeworks 10

            {/*should work (должно работать)*/}
            {stateSelector.loading
                ? (
                    <div><img src="https://i.gifer.com/origin/34/34338d26023e5515f6cc8969aa027bca.gif" alt="qq"/></div>
                ) : (
                    <div>
                        <SuperButton onClick={setLoading}>set loading...</SuperButton>
                    </div>
                )
            }
            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<Alternative/>*/}
            <hr/>
        </div>
    )
}

export default HW10
