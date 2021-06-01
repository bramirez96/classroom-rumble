import { atom, atomFamily } from 'recoil';
import { Rumbles } from '../../api';
import { logger, persist } from '../effects';

export const ids = atom<number[] | undefined>({
  key: 'rumbleIds',
  default: undefined,
  effects_UNSTABLE: [logger()],
});

export const getById = atomFamily<
  Rumbles.IRumbleWithSectionInfo | undefined,
  number
>({
  key: 'rumbleById',
  default: undefined,
});

export const selected = atom<number | undefined>({
  key: 'selectedRumble',
  default: undefined,
  effects_UNSTABLE: [persist('rumble:selected')],
});
