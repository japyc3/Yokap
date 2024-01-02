import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-first',
  templateUrl: './first.page.html',
  styleUrls: ['./first.page.scss'],
})
export class FirstPage implements OnInit {
  username!: string
  isFirstLaunch: boolean = true
  constructor(private storage1: Storage) { }
  async ngOnInit() {
    await this.storage1.create();
    this.storage1.get('isFirstLaunch').then((val) => {
      this.isFirstLaunch = val !== null ? false : true
        ;

      if (this.isFirstLaunch) {
        this.runWelcomeAnimation();
      }
    });
  }

  runWelcomeAnimation() {
    // Animation pour l'effet d'écriture manuscrite
    const welcomeAnimation = anime.timeline({ loop: false });
    welcomeAnimation
      .add({
        targets: '.welcome-text',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
      })
      .add({
        targets: '.welcome-text',
        delay: 1000,
        opacity: 0,
        duration: 1000,
        easing: 'easeInOutQuad',
      })
      .add({
        targets: '.username-input',
        opacity: [0, 1],
        duration: 1000,
        easing: 'easeInOutQuad',
      });

    welcomeAnimation.finished.then(() => {
      const inputElement = document.getElementById('username-input') as HTMLInputElement;
      inputElement.focus();
    });
  }

  saveUsername() {
    if (this.username) {
      this.storage1.set('isFirstLaunch', false);
      this.storage1.set('username', this.username);
    }
  }

}
