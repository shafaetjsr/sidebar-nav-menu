import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule,HttpClientModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj:Login;
  constructor(private http:HttpClient,private router:Router){
    this.loginObj = new Login();
  }

  onLogin()
  {
    if(this.loginObj.emailId=='a' && this.loginObj.password =='a')
    {
      this.router.navigateByUrl('dashboard');
    }
  }

}

export class Login{
  emailId:string;
  password:string;
  constructor(){
    this.emailId='';
    this.password='';
  }
}
