import {ActionsSettingsType} from "./settings-reducer";

type incrementCounterActionType = ReturnType<typeof incrementCounterAC>
type DecrementCounterActionType = ReturnType<typeof DecrementCounterAC>
type clearCounterActionType = ReturnType<typeof clearCounterAC>
export type ActionsCounterType = incrementCounterActionType
   | DecrementCounterActionType
   | clearCounterActionType
   | ActionsSettingsType

export type initialCounterStateType = {
   value: number
}
const initialState: initialCounterStateType = {
   value: 0
}

export const counterReducer = (state = initialState, action: ActionsCounterType): initialCounterStateType => {
   switch (action.type) {
      case 'INCREMENT-COUNTER': {
         return {
            ...state,
            value: action.value + 1
         }
      }
      case 'DECREMENT-COUNTER': {
         return {
            ...state,
            value: action.value - 1
         }
      }
      case "CLEAR-COUNTER": {
         return {
            ...state,
            value: action.value
         }
      }
      case "SET-START-VALUE": {
         return {
            ...state,
            value: action.startValue
         }
      }
      case "SET-MAX-VALUE": {
         return {
            ...state,
            value: action.maxValue
         }
      }

      default:
         return state
   }
}

export const incrementCounterAC = (value: number) => ({type: 'INCREMENT-COUNTER', value: value} as const)
export const DecrementCounterAC = (value: number) => ({type: 'DECREMENT-COUNTER', value: value} as const)
export const clearCounterAC = (value: number) => ({type: 'CLEAR-COUNTER', value: value} as const)
