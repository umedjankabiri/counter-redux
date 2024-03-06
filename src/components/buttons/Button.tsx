import React, {FC, memo, ReactNode} from 'react';

type ButtonProps = {
   onClick: () => void
   children: ReactNode
   name?: string
   className?: string
   disable?: boolean
}
export const Button: FC<ButtonProps> =
   memo(({name, className, disable, children, onClick}) => {
   return (
      <button className={className} disabled={disable} onClick={onClick}>{children}</button>
   );
});
