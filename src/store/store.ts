import {combineReducers, legacy_createStore} from "redux";
import {counterReducer} from "../redures/counter-reducer";
import {settingsReducer} from "../redures/settings-reducer";
import {loadState, saveState} from "../utilities/localStorage";

export type RootStateType = ReturnType<typeof rootReducer>
const rootReducer = combineReducers({
   counter: counterReducer,
   settings: settingsReducer
})

export const store = legacy_createStore(rootReducer, loadState())

store.subscribe(() => {
   const value = store.getState().counter?.value
   const maxValue = store.getState().settings?.maxValue
   const startValue = store.getState().settings?.startValue
      saveState({
         counter: {
            value: value
         },
         settings: {
            maxValue: maxValue,
            startValue: startValue
         }
      })
})
// store.subscribe(() => {
//    saveState({
//       counter: store.getState().counter,
//       settings: store.getState().settings
//    })
// })
