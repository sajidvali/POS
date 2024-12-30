import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
import { Router } from '@angular/router';


@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private tokenSubject = new BehaviorSubject<string | null>(null);
  token$ = this.tokenSubject.asObservable();

  constructor(private http: HttpClient, private router: Router) {}

  // login(username: string, password: string) {
  //   return this.http.post<{ token: string }>('/api/login', { username, password }).subscribe(response => {
  //     this.tokenSubject.next(response.token);
  //     localStorage.setItem('authToken', response.token);
  //   });
  // }

  login(formData: FormData) {
    // const headers = new HttpHeaders({
    //   'Content-Type': 'multipart/form-data',
    // });
    return this.http.post<{ token: string }>('/api/method/login', formData)
    .subscribe(response => {
      this.tokenSubject.next(response.token);
      localStorage.setItem('authToken', response.token);
      this.router.navigate(['/home']);
    }, error => {
      console.error('Login failed', error);
    });
  }
  
  getToken() {
    return this.tokenSubject.value || localStorage.getItem('authToken');
  }

  logout() {
    this.tokenSubject.next(null);
    localStorage.removeItem('authToken');
    this.router.navigate(['/login']);
    console.log("Logged out, token ")
  }
}
