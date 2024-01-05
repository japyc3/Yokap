import { Component, OnInit } from '@angular/core';
import { Storage } from '@ionic/storage-angular'
import { User } from '../models/user';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss']
})

export class Tab1Page implements OnInit {

  user!:User
  total!: number

  constructor(private userService:UserService, private storage2: Storage, ) {
    this.user = userService.getUser();
  }

  async ngOnInit() {
    // this.total = this.activatedRoute.snapshot.paramMap.get('total');
    await this.storage2.get('total').then((total) => {
      if (total) {
        this.total = total;
      }
    });

  }

}
