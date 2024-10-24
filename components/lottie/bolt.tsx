import { BaseLottie } from './base-lottie';

export const LottieBolt = ({ className }: PropsWithClass) => (
  <BaseLottie className={className} path="/lottie-bolt.json" autoplay loop />
);
