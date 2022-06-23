import React, {useState} from 'react'
import {Box, Slider} from "@mui/material";

function HW11() {

    let [value1, setValue1] = useState< number[] | number>(10)
    const [value2, setValue2] = useState<number[] | number>([10, 37])

    const onChangeRange = ( value1: number[] | number) => {
        setValue1(value1)
        // @ts-ignore
        setValue2([value1,value2[1]])
    }

    const onChangeRangeDuble = (event: Event, array: number[] | number) => {
        setValue2(array)
        // @ts-ignore
        setValue1(array[0])
    }
    return (
        <div>
            <hr/>
            homeworks 11

            {/*should work (должно работать)*/}
            <div>

                {/*<SuperRange*/}
                {/*    onChangeRange={(value) => {*/}
                {/*        onChangeRange(value)*/}

                {/*    }}*/}
                {/*    // сделать так чтоб value1 изменялось*/}
                {/*/>*/}
            </div>

            <div>

                <Box sx={{width: 300}}>

                    <Slider

                        getAriaLabel={() => 'Temperature range'}
                        value={value1}
                        onChange={(event, value1) => onChangeRange( value1)}
                        valueLabelDisplay="auto"

                        // getAriaValueText={setValue1}
                    />

                </Box>

            </div>
            <div>

                <Box sx={{width: 300}}>

                    <Slider
                        getAriaLabel={() => 'Temperature range'}
                        value={value2}
                        onChange={(event, array) => onChangeRangeDuble(event, array)}
                        valueLabelDisplay="auto"
                        disableSwap={true}
                        // getAriaValueText={setValue1}
                    />

                </Box>
                {/*<SuperDoubleRange*/}
                {/*    onChangeRangeDuble={(value:number[])=>{onChangeRangeDuble(value)}}*/}
                {/*   value ={[value1,value2]}*/}
                {/*/>*/}

            </div>

            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperRange/>*/}
            {/*<AlternativeSuperDoubleRange/>*/}
            <hr/>
        </div>
    )
}

export default HW11
