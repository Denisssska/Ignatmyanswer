import React from 'react'
import {Navigate, Route, Routes} from "react-router-dom";
import PreJunior from "./pages/PreJunior";
import Error404 from "./pages/Error404";
import JuniorPlus from "./pages/JuniorPlus";
import Junior from "./pages/Junior";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    JUNIOR: '/Junior',
    JUNIOR_PLUS: '/JuniorPlus',

}

function Pages() {
    return (
        <div>
            {/*Routes выбирает первый подходящий роут*/}
            <Routes>

                {/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/}
                <Route path={'/PreJunior/*'} element={<Navigate to={PATH.PRE_JUNIOR}/>}/>
                <Route path={PATH.PRE_JUNIOR} element={<PreJunior/>}/>

                <Route path={'/Junior/*'} element={<Navigate to={PATH.JUNIOR}/>}/>
                <Route path={PATH.JUNIOR} element={<Junior/>}/>

                <Route path={'/JuniorPlus/*'} element={<Navigate to={PATH.JUNIOR_PLUS}/>}/>
                <Route path={PATH.JUNIOR_PLUS} element={<JuniorPlus/>}/>


                {/*он отрисуется если пользователь захочет попасть на несуществующую страницу*/}

                <Route path={'/*'} element={<Error404/>}/>

            </Routes>
        </div>
    )
}

export default Pages
