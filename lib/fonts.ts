import { Montserrat, Montserrat_Alternates } from 'next/font/google';

export const montserrat = Montserrat({
  subsets: ['latin', 'vietnamese']
});

export const montserratAlternates = Montserrat_Alternates({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
  subsets: ['latin', 'vietnamese']
});
