const LOADING = 'LOADING;'
export type InitStateType={
loading:boolean
}
export const initState = {
loading:false
}

export const loadingReducer = (state:InitStateType = initState, action: ActionsType): InitStateType => { // fix any
    switch (action.type) {
        case LOADING: {
            return {...state,loading:action.loading}
        }
        default: return state
    }
}
export type ActionsType = ReturnType<typeof loadingAC>
export const loadingAC = (loading:boolean) => ({type:LOADING,loading}) as const; // fix any