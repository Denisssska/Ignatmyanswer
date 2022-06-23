import React, {ChangeEvent} from 'react'

type SuperDoubleRangePropsType = {
    onChangeRange: (value: [number, number]) => void
    value: [number, number]
    // min, max, step, disable, ...
}

const SuperDoubleRange: React.FC<SuperDoubleRangePropsType> = (
    {
        onChangeRange, value,
        // min, max, step, disable, ...
    }
) => {
    // сделать самому, можно подключать библиотеки
const onChangeCallback = (e: ChangeEvent<HTMLInputElement>)=>{

}
    return (
        <>
            <input
                min={value[0]}
                max={value[1]}
                type={'range'}
                onChange={onChangeCallback}
            />

        </>
    )
}

export default SuperDoubleRange
