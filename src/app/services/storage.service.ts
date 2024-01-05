import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  private _storage!:Storage

  constructor(private storage:Storage) { }

  async intit() {
    const storage = await this.storage.create();
    let user: User = {
      username: 'nsisse',
      password: 'password'
    }
    storage.set(user.username, user)
    this._storage = storage;
  }

  async saveItem(key:string, value:any){
    await this._storage.set(key, value);
  }

  async getItem(key:string){
    return await this._storage.get(key);
  }
}
