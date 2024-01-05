import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { OperationsService } from '../services/operations.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Operation, OperationType } from '../models/operation.model';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.page.html',
  styleUrls: ['./operation.page.scss'],
})

export class OperationPage implements OnInit {

  operationForm:FormGroup = new FormGroup({
    type: new FormControl(),
    amount: new FormControl(),
    note: new FormControl()
  });

  constructor(private router: Router, private operationsService: OperationsService) { }
  
  ngOnInit() {
  }

  save() {
    let type;
    switch(this.operationForm.value.type) {
      case 'in': {
        type = OperationType.IN;
        break;
      }
      case 'out': {
        type = OperationType.OUT;
        break;
      }
      case 'load': {
        type = OperationType.LOAD;
        break;
      }
      case 'credit': {
        type = OperationType.CREDIT;
        break;
      }
      case 'epargne': {
        type = OperationType.OUT;
        break;
      }
      default: type = OperationType.IN
    }

    let amount = type == OperationType.OUT ? -1*this.operationForm.value.amount : this.operationForm.value.amount;
    const operation:Operation = {
      type: type,
      amount: amount,
      date: new Date(),
      note: this.operationForm.value.note
    };

    this.operationsService.saveOperation(operation).then(resp => {
      if(resp.status === 'OK')this.router.navigate(['/home/dashboard']);
      this.operationForm.reset();
    });
  }

}
