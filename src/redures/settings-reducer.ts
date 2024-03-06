type setMaxValueActionType = ReturnType<typeof setMaxValueAC>
type setStartValueActionType = ReturnType<typeof setStartValueAC>
type clearInputActionType = ReturnType<typeof clearInputsAC>
export type ActionsSettingsType = setMaxValueActionType
   | setStartValueActionType
   | clearInputActionType

export type initialSettingsStateType = {
   maxValue: number
   startValue: number
}
const initialState: initialSettingsStateType = {
   maxValue: 0,
   startValue: 0
}

export const settingsReducer = (state = initialState, action: ActionsSettingsType): initialSettingsStateType => {
   switch (action.type) {
      case "SET-MAX-VALUE": {
         return {
            ...state,
            maxValue: action.maxValue
         }
      }
      case "SET-START-VALUE": {
         return {
            ...state,
            startValue: action.startValue
         }
      }
      case "CLEAR-INPUTS": {
         return {
            ...state,
            maxValue: 0,
            startValue: 0
         }
      }
      default:
         return state
   }
}

export const setMaxValueAC = (maxValue: number) =>
   ({type: 'SET-MAX-VALUE', maxValue: maxValue} as const)
export const setStartValueAC = (startValue: number) =>
   ({type: 'SET-START-VALUE', startValue: startValue} as const)
export const clearInputsAC = () =>
   ({type: 'CLEAR-INPUTS'} as const)
