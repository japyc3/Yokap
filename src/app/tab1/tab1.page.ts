import { Component, OnInit } from '@angular/core';
import { User } from '../models/user';
import { UserService } from '../services/user.service';
import { OperationsService } from '../services/operations.service';
import { Operation, OperationType } from '../models/operation.model';
import { ViewWillEnter } from '@ionic/angular';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit, ViewWillEnter {

  user!:User
  total: number = 0
  list:{
    in:Operation[],
    out:Operation[],
    load:Operation[],
    credit:Operation[]
  } = {
    in: [],
    out: [],
    load: [],
    credit: []
  }

  constructor(private userService:UserService, private operationService:OperationsService, ) {
    this.user = userService.getUser();
  }
  ionViewWillEnter(): void {
    this.ngOnInit();
  }

  ngOnInit() {
    this.updateTotal();
    this.updateList();
  }

  updateTotal(){
    this.operationService.getTotal().then(val => this.total = val);
  }

  updateList(){
    this.operationService.getListByType(OperationType.IN).then(val => this.list.in = val);
    this.operationService.getListByType(OperationType.OUT).then(val => this.list.out = val);
    this.operationService.getListByType(OperationType.LOAD).then(val => this.list.load = val);
    this.operationService.getListByType(OperationType.CREDIT).then(val => this.list.credit = val);
  }

}
