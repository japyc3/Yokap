import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Platform } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { OperationsService } from '../services/operations.service';

@Component({
  selector: 'app-operation',
  templateUrl: './operation.page.html',
  styleUrls: ['./operation.page.scss'],
})

export class OperationPage implements OnInit {

  amount!: number
  operationType!: String
  label!: String
  date!: string
  total: number = 0
  libelle!: string

  constructor(private alertController: AlertController, public platform: Platform, private modalController: ModalController, private storage: Storage, private storage3: Storage, private storage2: Storage, private router: Router, private operationsService: OperationsService) { }
  
  async ngOnInit() {
    // await this.storage1.create();
    await this.storage3.create();
    this.date = new Date().toISOString();
  }

  async sauvegarder() {

    console.log("Type d'opération : " + this.operationType + '\n', "Montant : " + this.amount + ' FCFA\n', "Libellé : " + this.label + '\n', "Date d'enregistrement : " + this.date);
    if (this.operationType === 'entrée' || this.operationType === 'epargne' || this.operationType === 'credit') {
      this.total += this.amount;
    } else if ((this.operationType === 'sortie' || this.operationType === 'pret') && this.amount < this.total) {
      this.total -= this.amount;
    } else if ((this.operationType === 'sortie' || this.operationType === 'pret') && this.amount > this.total) {
      alert("Solde insuffisant !!!!");
    }
    // handler: (data) => {
    //   if(data.total) {
    //     this.saveTotal(data.total);
    //   }
    // }
  // await this.operationsService.set('Total', this.total);
    this.storage3.set('total', this.total);
    console.log("Total : " + this.total + " FCFA");
  }
  
  saveTotal(){}
  // this.storage2.set('libelle', this.libelle);

}
