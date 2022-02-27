import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { character } from 'src/app/interfaces/interfaces';

@Injectable({
  providedIn: 'root'
})
export class DataLocalService {

  private _storage: Storage | null = null;
  constructor(private storage: Storage) {

    this.init();
  }
    async init() {
     const storage = await this.storage.create();
     this._storage = storage;
    }
    setData(key, value){
      this.storage.set(key, value)
   }
   async getData(){
    const data = await this.storage.get('key')
    return data
  }
    
  }


