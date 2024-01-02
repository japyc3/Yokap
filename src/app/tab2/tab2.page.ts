import { Component } from '@angular/core';
import { AlertController, ModalController, Platform } from '@ionic/angular';
import { OperationPage } from '../operation/operation.page';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  constructor(public modalController: ModalController) { }

  ngOnInit() { }
  
  async saveOperation(){
    const modal = this.modalController.create({
      component: OperationPage,
      animated: true,
      mode: 'ios',
      backdropDismiss: false,
      cssClass: 'operation-conf',
    })
    return (await modal).present();
  }
}
