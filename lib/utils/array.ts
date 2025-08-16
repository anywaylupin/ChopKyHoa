export const compact = <T>(array: T[]) =>
  array.filter(Boolean as unknown as (value: T) => value is Exclude<T, false | null | undefined | 0 | ''>);

export const chunk = <T>(array: T[], size = 1): T[][] => [array.slice(0, size)].concat(chunk(array.slice(size), size));

export const merge = <T>(array: T[], ...args: unknown[]) => [...array, ...args.flat()] as T[];

export const last = <T>(array: T[]) => array[array.length - 1];

export const uniq = <T>(array: T[], sort = false) => {
  const uniqueArray = Array.from(new Set(array));
  return sort
    ? uniqueArray.sort((a, b) => {
        if (a === b) return 0;
        else return a > b ? 1 : -1;
      })
    : uniqueArray;
};

export const range = (size: number): number[] => Array.from({ length: size }, (_, i) => i);

export const intersection = <T>(...args: T[][]) => {
  if (args.length === 0) return [];
  return args.reduce((acc, array) => acc.filter((item) => array.includes(item)), []);
};

export const diff = <T>(...args: T[][]) => {
  if (args.length === 0) return [];
  const [first, ...rest] = args;
  const restFlat = rest.flat();
  return first.filter((item) => !restFlat.includes(item));
};

export const allBut = <T>(array: T[], ...args: T[]) => array.filter((value) => !args.includes(value));

export const allButFirst = <T>([, ...rest]: T[]) => rest;

export const getRandomElement = <T>(array: T[]) => array[Math.floor(Math.random() * array.length)];
