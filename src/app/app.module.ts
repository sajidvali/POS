import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // Import HTTP_INTERCEPTORS
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
// import { AuthInterceptor } from './interceptor/auth.interceptor'; // Import the interceptor
import { RouterModule } from '@angular/router';
// import { DashboardComponent } from './dashboard/dashboard.component';
import { routes } from './app.routes';


@NgModule({
  declarations: [AppComponent, LoginComponent],
  imports: [HttpClientModule, FormsModule, RouterModule.forRoot(routes)],
  providers: [
    // {
    //   provide: HTTP_INTERCEPTORS, // Provide the interceptor
    //   useClass: AuthInterceptor,
    //   multi: true // Important: multi must be true
    // }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }