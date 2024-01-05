import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormControl, FormGroup } from '@angular/forms';
import { UserService } from '../services/user.service';
import { User } from '../models/user';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.page.html',
  styleUrls: ['./welcome.page.scss'],
})
export class WelcomePage implements OnInit {
  userForm:FormGroup = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  })

  constructor(private userService:UserService, private router: Router) { 
  }

  ngOnInit() {
    
  }

  async login() {
    const user:User = {
      username: this.userForm.value.username,
      password: this.userForm.value.password
    }
    const response = await this.userService.login(user);
    if(response.status === 'OK'){
      this.router.navigate(['/home']);
    }
  }

}
