import {Timestamp as FTimestamp} from '@google-cloud/firestore';

export type Timestamp = FTimestamp;
export type CoreTypes = {
  id: string;
  deleted?: boolean;
  createdAt?: Timestamp;
  updatedAt?: Timestamp;
  deletedAt?: Timestamp;
  createdBy?: string;
  updatedBy?: string;
  deletedBy?: string;
};
