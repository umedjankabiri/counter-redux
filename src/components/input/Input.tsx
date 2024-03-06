import React, {ChangeEvent, FC, memo} from 'react';

type DisplaySettingsProps = {
   onChange: (event: ChangeEvent<HTMLInputElement>)=> void
   value: number | string
   className?: string
   disable?: boolean
}
export const Input: FC<DisplaySettingsProps> =
   memo(({onChange, disable, className, value}) => {
   return (
      <input type='number' className={className}
             onChange={onChange}
             disabled={disable}
             value={value}/>
   );
});
