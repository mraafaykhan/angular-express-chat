import { Component, OnInit } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  errorMessage: String = '';
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }

  login(username, password): void {
    this.authService.login(username, password).subscribe(data => {
      console.log(data);
      if (data.success) {
      localStorage.setItem('token', data.token);
      this.router.navigate(['./home']);
    } else {
      this.errorMessage = data.message;
      setTimeout(() => this.errorMessage = '', 5000);
    }
    });
  }

}
