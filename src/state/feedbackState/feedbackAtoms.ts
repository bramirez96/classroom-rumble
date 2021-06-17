import { atom, atomFamily } from 'recoil';
import { Feedback } from '../../api';
import { logger } from '../effects';

export const ids = atom<number[] | undefined>({
  key: 'feedbackIds',
  default: undefined,
  effects_UNSTABLE: [logger()],
});

export const getById = atomFamily<Feedback.IFeedback | undefined, number>({
  key: 'feedbackById',
  default: undefined,
  effects_UNSTABLE: [logger()],
});

export const getSubIdsByRumbleAndVoterId = atomFamily<
  number[] | undefined,
  { voterId?: number; rumbleId?: number } | undefined
>({
  key: 'feedbackSubIdsByRumbleAndStudent',
  default: undefined,
  effects_UNSTABLE: [logger()],
});
