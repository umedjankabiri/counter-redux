import React, {FC, memo, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {RootStateType} from "../../store/store";
import {
   clearCounterAC,
   DecrementCounterAC,
   incrementCounterAC,
   initialCounterStateType
} from "../../redures/counter-reducer";
import {Button} from "../buttons/Button";
import s from '../counter/Counter.module.css'
import {Settings} from "../settings/Settings";
import {Display} from "../display/Display";
import {initialSettingsStateType} from "../../redures/settings-reducer";

export const Counter: FC = memo(() => {
   const counter = useSelector<RootStateType, initialCounterStateType>(state => state.counter)
   const settings = useSelector<RootStateType, initialSettingsStateType>(state => state.settings)
   const [currentScreen, setCurrentScreen] = useState<boolean>(false)

   const dispatch = useDispatch()
   const counterValue = counter.value
   const maxValue = settings.maxValue
   const startValue = settings.startValue
   const disablePlus = counterValue === maxValue
   const disableMinus = counterValue === startValue && counterValue <= startValue
   const disableClear = counterValue === startValue

   const onClickIncrement = () => {
      dispatch(incrementCounterAC(counterValue))
   }
   const onClickDecrement = () => {
      dispatch(DecrementCounterAC(counterValue))
   }
   const onClickClear = () => {
      dispatch(clearCounterAC(startValue))
   }
   const onClickEnterAndSettings = () => {
      setCurrentScreen(!currentScreen)
   }

   return (
      <div className={s.mainWrapper}>
         {!currentScreen
            ?
            <div className={s.settingsWrapper}>
               <Settings onClickEnter={onClickEnterAndSettings}/>
            </div>
            :
            <div className={s.counterWrapper}>
               <Display className={s.display} title={counterValue} />
               <div className={s.buttonsWrapper}>
                  <Button onClick={onClickIncrement} disable={disablePlus}>Plus</Button>
                  <Button onClick={onClickDecrement} disable={disableMinus}>Minus</Button>
                  <Button onClick={onClickClear} disable={disableClear}>Clear</Button>
                  <Button onClick={onClickEnterAndSettings}>Settings</Button>
               </div>
            </div>
         }
      </div>
   );
});
