import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(username, password): void {
    this.authService.login(username, password).subscribe(data =>{
      if (data.success) {
      localStorage.setItem('token', data.token);
      this.router.navigate(['./home']);
    }
    });
  }

}
