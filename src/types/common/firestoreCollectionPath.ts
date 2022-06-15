import {CoreTypes} from './firestoreCommonType';

export class FirestoreCollectionPath<T extends CoreTypes> {
  private readonly path: string;
  private constructor(path: string) {
    this.path = path;
  }
  public getPath = () => this.path;
  public static createRoot = <T extends CoreTypes>(collectionName: string) =>
    new FirestoreCollectionPath<T>(collectionName);
  public static createPath = <T extends CoreTypes>(
    parent: FirestoreCollectionPath<any>,
    id: string,
    collectionName: string
  ) => new FirestoreCollectionPath<T>([parent.getPath(), id, collectionName].join('/'));
}
