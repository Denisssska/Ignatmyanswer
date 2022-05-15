import {UserType} from "../HW8";

type SortNameActionUpType = {
    type: 'sort'
    payload: 'up'
}
type SortNameActionDownType = {
    type: 'sort'
    payload: 'down'
}
type CheckAgeActionType = {
    type: 'check'
    payload: number
}
type ActionsType = SortNameActionUpType
    | CheckAgeActionType
    | SortNameActionDownType;

export const homeWorkReducer = (state: UserType, action: ActionsType): UserType => { // need to fix any
    switch (action.type) {
        case 'sort': {
            let newState = [...state]// need to fix
            if (action.payload === 'up')
                newState.sort(function (a, b) {
                        return a.age - b.age
                    }
                )
            if (action.payload === 'down')
                newState.sort(function (a, b) {
                        return b.age - a.age
                    }
                )
            return newState
        }
        case 'check': {

            return state.filter((item) => item.age >= action.payload)
            // need to fix

        }
        default:
            return state
    }
}