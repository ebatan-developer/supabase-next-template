import {CoreTypes} from '../../common/firestoreCommonType';
import {FirestoreCollectionPath} from '../../common/firestoreCollectionPath';

export type UserStatus = 'unconfirmed' | 'active' | 'retire';
export type StoreTypesUsers = CoreTypes & {
  displayName: string;
  email: string;
  status: UserStatus;
  isDeveloper?: boolean;
  isServiceAccount?: boolean;
  iconName?: string;
  tellNumber?: string;
  userInfo?: {
    firstName: string;
    familyName: string;
    postalCode?: string;
    pref?: string;
    address1?: string;
    address2?: string;
  };
};
export const CollectionUsers = () => FirestoreCollectionPath.createRoot<StoreTypesUsers>('users');
