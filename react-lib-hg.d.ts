declare module 'react-lib-hg' {
    import { ReactNode } from 'react';
  
    export interface AwesomeButtonProps {
      variant?: 'primary' | 'secondary' | 'success';
      fun?: () => void;
      children: ReactNode;
    }
  
    export function AwesomeButton(props: AwesomeButtonProps): JSX.Element;
  }