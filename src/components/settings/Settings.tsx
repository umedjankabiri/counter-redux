import React, {ChangeEvent, FC, memo, useState} from 'react';
import {Input} from "../input/Input";
import s from "./Settings.module.css"
import styleInput from "../input/Input.module.css"
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import {
   clearInputsAC,
   initialSettingsStateType,
   setMaxValueAC,
   setStartValueAC
} from "../../redures/settings-reducer";
import {Button} from "../buttons/Button";
import {clearCounterAC} from "../../redures/counter-reducer";

type DisplaySettingsType = {
   onClickEnter: ()=> void
}
export const Settings: FC<DisplaySettingsType> = memo(({onClickEnter}) => {
   const value = useSelector<RootStateType, initialSettingsStateType>(state => state.settings)
   const [error, setError] = useState<string | null>('')
   const dispatch = useDispatch()
   const MINVALUE = 0;
   const maxValue = value.maxValue
   const startValue = value.startValue
   const disableEnter = maxValue === startValue && startValue === maxValue
   const disableClear = startValue === MINVALUE && maxValue === MINVALUE

   const onChangeMaxValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const tempMaxValue = +event.currentTarget.value
      if (tempMaxValue < MINVALUE) {
         setError('Max value should be bigger than zero!')
      } else {
         dispatch(setMaxValueAC(tempMaxValue))
         setError(null)
      }
   }
   const onChangeMinValueHandler = (event: ChangeEvent<HTMLInputElement>) => {
      const tempStartValue = +event.currentTarget.value
      if (tempStartValue < MINVALUE)
         setError('Min value should be bigger than zero!')
      else if (tempStartValue >= maxValue)
         setError('Min value should be less than Max Value!')
      else {
         dispatch(setStartValueAC(tempStartValue))
         setError(null)
      }
   }
   const onClickClearHandler = () => {
      dispatch(clearInputsAC())
      dispatch(clearCounterAC(MINVALUE))
      setError(null)
   }
   const onClickEnterHandler = () => {
      dispatch(setMaxValueAC(maxValue))
      dispatch(setStartValueAC(startValue))
      setError(null)
      onClickEnter()
   }

   return (
      <div className={s.settingsWrapper}>
         <div className={s.InputMaxValue}>
            <p className={s.minMaxText}>Max value: </p>
            <Input onChange={onChangeMaxValueHandler}
                   value={maxValue.toString()}
                   className={error ? styleInput.error : styleInput.standardInput}/>
         </div>
         <div className={s.InputMinValue}>
            <p className={s.minMaxText}>Start value: </p>
            <Input onChange={onChangeMinValueHandler}
                   value={startValue.toString()}
                   className={error ? styleInput.error : styleInput.standardInput}/>
         </div>
         <span className={s.errorMessage}>
            {error}
         </span>
         <div className={s.buttons}>
            <Button onClick={onClickEnterHandler} disable={disableEnter}>Enter</Button>
            <Button onClick={onClickClearHandler} disable={disableClear}>Clear</Button>
         </div>
      </div>
   );
});
