// Feature order for each model. MUST match the order P1 trained with (see the comment at the top of each model file).
// Model B keeps H (size) and drops MOID, matching train.py.
import { score as scoreA } from '../model/model_A.js';
import { score as scoreB } from '../model/model_B.js';

export const FEAT_A = ['a', 'e', 'i', 'om', 'w', 'q', 'ad', 'H', 'moid'];
export const FEAT_B = ['a', 'e', 'i', 'om', 'w', 'q', 'ad', 'H'];

export function scoreBoth(el) {
  return {
    pA: scoreA(FEAT_A.map((k) => el[k]))[1],
    pB: scoreB(FEAT_B.map((k) => el[k]))[1],
  };
}
