import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Storage } from '@ionic/storage-angular';
import anime from 'animejs/lib/anime.es.js';
import { OperationsService } from '../services/operations.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  username!: string
  segmentValue!: number
  event: any
  total!: number
  typeTransaction!: string
  dateTransaction!: Date
  priceTransaction!: number
  value: any = ""

  constructor(private storage: Storage, private storage2: Storage, private activatedRoute: ActivatedRoute, private operationService: OperationsService) {

  }

  async ngOnInit() {
    // this.total = this.activatedRoute.snapshot.paramMap.get('total');
    await this.storage2.get('total').then((total) => {
      if (total) {
        this.total = total;
      }
    });

    await this.storage.get('username').then((username) => {
      if (username) {
        this.username = username;
      }
    });

  }


  segmentChanged() {
    // console.log(event);
    // this.segmentValue = event.detail.value;
  }

}
