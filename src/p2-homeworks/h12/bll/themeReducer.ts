const CHANGE_THEME = 'CHANGE_THEME'
type InitStateType = {
    theme:string
}
type ActionType = ReturnType<typeof changeThemeC>
const initState = {
theme:'dark'
};

export const themeReducer = (state = initState, action:ActionType): InitStateType => { // fix any
    switch (action.type) {
        case CHANGE_THEME: {
            return {...state,theme:action.theme};
        }
        default: return state;
    }
};

export const changeThemeC = (theme: string) => ({type:'CHANGE_THEME',theme}) as const; // fix any