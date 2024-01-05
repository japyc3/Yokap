import { Injectable } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import { User } from '../models/user';
import { Operation, OperationType } from '../models/operation.model';

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
    };
    let op1:Operation = {
      type: OperationType.IN,
      amount: 10000,
      date: new Date(),
      note: 'Entrée de base'
    };
    let op2:Operation = {
      type: OperationType.IN,
      amount: 5000,
      date: new Date(),
      note: 'Entrée de base'
    };
    let op3:Operation = {
      type: OperationType.IN,
      amount: 12000,
      date: new Date(),
      note: 'Entrée de base'
    };
    let op4:Operation = {
      type: OperationType.OUT,
      amount: -1000,
      date: new Date(),
      note: 'Entrée de base'
    };
    let op5:Operation = {
      type: OperationType.LOAD,
      amount: 5000,
      date: new Date(),
      note: 'Entrée de base'
    };
    let op6:Operation = {
      type: OperationType.CREDIT,
      amount: 10000,
      date: new Date(),
      note: 'Entrée de base'
    };
    let op7:Operation = {
      type: OperationType.OUT,
      amount: -5000,
      date: new Date(),
      note: 'Entrée de base'
    };
    let op8:Operation = {
      type: OperationType.OUT,
      amount: -4000,
      date: new Date(),
      note: 'Entrée de base'
    };
    //storage.set("listOperations_" + user.username, [op1, op2, op3, op4, op5, op6, op7, op8]);
    storage.set(user.username, user);
    this._storage = storage;
  }

  async saveItem(key:string, value:any){
    await this._storage.set(key, value);
  }

  async getItem(key:string){
    return await this._storage.get(key);
  }
}
