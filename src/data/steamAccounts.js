import { mythicAccounts } from './accounts/mythicAccounts';
import { legendaryAccounts } from './accounts/legendaryAccounts';
import { epicAccounts } from './accounts/epicAccounts';
import { rareAccounts } from './accounts/rareAccounts';
import { uncommonAccounts } from './accounts/uncommonAccounts';
import { commonAccounts } from './accounts/commonAccounts';

export const steamAccounts = [
  ...mythicAccounts,
  ...legendaryAccounts,
  ...epicAccounts,
  ...rareAccounts,
  ...uncommonAccounts,
  ...commonAccounts
];