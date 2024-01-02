import { Component, OnInit } from '@angular/core';
import { AlertController, ModalController } from '@ionic/angular';
import { Storage } from '@ionic/storage-angular';
import { Router } from '@angular/router';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {

  constructor(public modalController: ModalController, public alertController: AlertController, private storage: Storage, private router: Router) { }

  async ngOnInit() {
    await this.storage.create();
  }
  async connection() {

    const alert = await this.alertController.create({
      header: 'Nom d\'utilisateur',
      message: 'Veuillez entrer votre nom d\'utilisateur',
      inputs: [
        {
          name: 'username',
          type: 'text',
          placeholder: 'Nom d\'utilisateur',
        },
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'button-cancel',
        },
        {
          text: 'Enregistrer',
          cssClass: 'save-button',
          handler: (data) => {
            if (data.username) {
              this.saveUser(data.username);
            }
          },
        },
      ],
    });
    await alert.present();
  }
  async saveUser(username: string) {
    this.storage.set('username', username).then(()=>{
      this.router.navigate(['../tabs/tab1']);
    });
    console.log(username);
  }

}
