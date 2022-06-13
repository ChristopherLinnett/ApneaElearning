import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class DatastorageService {
  constructor(public storage: Storage) {
    this.init();
  }

  /**
   * The function is async, so it returns a promise. The promise resolves to the storage object
   */
  async init() {
    const storage = await this.storage.create();
  }

  /**
   * This function returns a promise that resolves to the value of the datafield passed to it.
   * @param {string} datafield - The name of the data field you want to retrieve.
   * @returns The value of the datafield key.
   */
  async lookup(datafield: string) {
    return this.storage.get(datafield);
  }
  /**
   * This function saves the datafield and value to the storage.
   * @param {string} datafield - The name of the data field you want to save.
   * @param {any} value - any - The value to be stored.
   * @returns The promise is being returned.
   */
  async save(datafield: string, value: any) {
    return this.storage.set(datafield, value);
  }
  /**
   * The clear() function clears the entire storage
   */
  async clear() {
    this.storage.clear();
  }
}
