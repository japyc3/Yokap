import { Injectable } from '@angular/core';
import { StorageService } from './storage.service';
import { Operation, OperationType } from '../models/operation.model';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})

export class OperationsService {
  private TABLE_NAME = "listOperations_"

  constructor(private storeService: StorageService, private userService:UserService) {
  }

  async saveOperation(operation:Operation){
    let list = this.getList();
    (await list).push(operation);
    const response = await this.storeService.saveItem(this.TABLE_NAME + this.userService.getUser().username, list).then(() => {
      return {
        status: 'OK',
        message: 'Enregistrement effectué'
      }
    });
    return response;
  }

  async getList() {
    const response = await this.storeService.getItem(this.TABLE_NAME + this.userService.getUser().username).then((val:Operation[]) => {
      if(val){
        return val;
      }
      return []
    });
    return response;
  }

  async getListByType(type:OperationType) {
    const response = await this.storeService.getItem(this.TABLE_NAME + this.userService.getUser().username).then((val:Operation[]) => {
      if(!val) {
        return []
      }
      switch(type){
        case OperationType.IN : {
          return val.filter(val => val.type === type);
        }
        case OperationType.OUT : {
          return val.filter(val => val.type === type);
        }
        case OperationType.LOAD : {
          return val.filter(val => val.type === type);
        }
        case OperationType.CREDIT : {
          return val.filter(val => val.type === type);
        }
        default: return []
      }
    });
    return response;
  }

  async getTotal() {
    const response = await this.storeService.getItem(this.TABLE_NAME + this.userService.getUser().username).then((val:Operation[]) => {
      let total = 0;
      if(val){
        for(let operation of val){
          total += operation.amount;
        }
      }
      return total;
    });
    return response;
  }
}
