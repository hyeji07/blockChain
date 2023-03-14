import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist();

//Kaikas
export const walletAtom = atom({
  key: 'walletAtom',
  default: null,
  /* effects_UNSTABLE: [persistAtom], */
});
