import {CoreTypes} from '../../../common/firestoreCommonType';
import {Timestamp} from '@google-cloud/firestore';
import {FirestoreCollectionPath} from '../../../common/firestoreCollectionPath';
import {CollectionUsers} from '../storeTypesUsers';

export type StoreTypesUsersAnnounce = CoreTypes & {
  announceId: string;
  isRead?: boolean;
  readAt?: Timestamp;
};

export const CollectionUsersAnnounce = (userId: string) =>
  FirestoreCollectionPath.createPath<StoreTypesUsersAnnounce>(CollectionUsers(), userId, 'announce');
