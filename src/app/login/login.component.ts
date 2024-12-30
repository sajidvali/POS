import { Component } from '@angular/core';
import { AuthService } from '../auth.service'
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-login',
  imports: [FormsModule, CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent { 
  username: string = '';
  password: string = '';

  constructor(private authService: AuthService) {}

  onSubmit() {
    const formData = new FormData();
    formData.append('cmd', "login");
    formData.append('usr', this.username);
    formData.append('pwd', this.password)
    this.authService.login(formData);
  }
}
