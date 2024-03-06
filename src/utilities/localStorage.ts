import {RootStateType} from "../store/store";

export const loadState = (): any => {
   try {
      // const state = localStorage.getItem('state')
      // if (state === null)
      //    return undefined
      // return JSON.parse(state)
      const value = localStorage.getItem('value');
      const maxValue = localStorage.getItem('maxValue');
      const startValue = localStorage.getItem('startValue');
      if (value === null || maxValue === null || startValue === null)
         return undefined
      return {
         counter: {
            value: JSON.parse(value)
         },
         settings: {
            maxValue: JSON.parse(maxValue),
            startValue: JSON.parse(startValue)
         }
      }
   } catch (error) {
      return undefined;
   }
}
export const saveState = (state: RootStateType) => {
   try {
      // const newState = JSON.stringify(state)
      // localStorage.setItem('state', newState);

      const value = JSON.stringify(state.counter.value)
      const maxValue = JSON.stringify(state.settings.maxValue)
      const startValue = JSON.stringify(state.settings.startValue)
      localStorage.setItem('value', value);
      localStorage.setItem('maxValue', maxValue);
      localStorage.setItem('startValue', startValue);
   } catch (error) {

   }
};
