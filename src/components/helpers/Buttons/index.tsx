import { cn } from 'lib/utils/cn';

//--- Type Definations
export type buttonProps = {
  text: string;
};

const Button = ({ text }: buttonProps) => {
  return <button className={cn('bg-blue-400', 'text-black')}>{text}</button>;
};

export default Button;
