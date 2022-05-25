import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';

@Injectable({
  providedIn: 'root',
})
export class DatastorageService {
  constructor(public storage: Storage) {
    this.init();
  }

  async init() {
    const storage = await this.storage.create();
  }

  async lookup(datafield:string) {
    return this.storage.get(datafield)
  }
  async save(datafield: string, value: any) {
    return this.storage.set(datafield, value)
  }
  async clear(){
    this.storage.clear()
  }
}
