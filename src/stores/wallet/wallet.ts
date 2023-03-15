import { atom } from 'recoil';
import { recoilPersist } from 'recoil-persist';

const { persistAtom } = recoilPersist({
  key: 'walletKey',
  storage: localStorage,
});

//Kaikas.
export const walletKey = atom({
  key: 'walletKey',
  default: null,
  effects_UNSTABLE: [persistAtom],
});
