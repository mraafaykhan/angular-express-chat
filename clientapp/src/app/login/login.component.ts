import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit() {
  }

  login(username, password): void {
    this.authService.login(username, password).subscribe(data =>{
      localStorage.setItem('token', data.token);
      console.log('logged in', data.token);
    });
  }

}
