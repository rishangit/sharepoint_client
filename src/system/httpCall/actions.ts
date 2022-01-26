import { setBussy } from '@sys/action';

import store from '../../root/store';

export const setActionBussy = (payload:any) => {
  store.dispatch(setBussy(payload));
};
