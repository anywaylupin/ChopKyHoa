declare module 'tailwindcss/lib/util/flattenColorPalette' {
  export default function flattenColorPalette(pallette: Record<string, string>): Record<string, string>;
}

declare type Numberish = React.Key;

declare type DirectionSide = 'top' | 'bottom' | 'left' | 'right';

declare type MinMaxValue = { min?: number; max?: number };

declare type StringNode = JSX.Element | React.ReactNode | string;

declare type DispatchState<S = boolean> = React.Dispatch<React.SetStateAction<S>>;

declare type StateContextType<S = boolean> = [S, DispatchState<S>];

declare type PropsWithClass<P = unknown, T = undefined> = React.PropsWithChildren<
  { className?: string; containerClassName?: string } & P
> &
  (T extends undefined ? unknown : React.HTMLProps<T>);

declare type PropsWithSVG<P = unknown, T = undefined> = PropsWithClass<
  P & { fill?: string; width?: number; height?: number },
  T
>;
