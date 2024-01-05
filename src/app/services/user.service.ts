import { Injectable } from '@angular/core';
import { User } from '../models/user';
import { StorageService } from './storage.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private user!:User

  constructor(private storeService:StorageService) {
    this.user = {
      username: 'nsisse',
      password: 'password'
    }
  }

  getUser(): User { return this.user; }

  login(user:User) : any {
    const response = this.storeService.getItem(user.username).then( (value:any) => {
      if(user.password === value.password){
        this.user = user;
        return {
          status: 'OK',
          message: 'Identifiant Correct'
        } 
      }
      return {
        status: 'Error',
        message: 'Identifiant incorrect'
      } 
    }).catch(error => console.log(error))
    return response;
  }

  signUp(user:User) : any {
    const response = this.storeService.saveItem(user.username, user).then( () => {
      this.user = user;
      return {
        status: 'OK',
        message: 'Utilisateur crée'
      }
    }).catch( error => console.log(error))
    return response;
  }
}
