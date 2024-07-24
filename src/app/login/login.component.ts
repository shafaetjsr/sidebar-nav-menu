
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginDto } from '../core/classes/LoginDto.model';
import { LoginServiceService } from '../core/service/login-service.service';
import { ApiResponseModel } from '../core/classes/ApiResponse.model';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  loginObj:LoginDto =new LoginDto();
  constructor(private router:Router,private loginSrv:LoginServiceService){
    
  }

  onLogin()
  {
    this.loginSrv.doLogin(this.loginObj).subscribe((res:ApiResponseModel)=>{
      if(res.vCode=="1")
      {
        localStorage.setItem("token",res.data.token);
        localStorage.setItem("user",res.data.user);
        this.router.navigateByUrl('dashboard');
      }else{
        alert(res.vMsg)
      }
    },error=>{
      alert(JSON.stringify(error))
    });
    // if(this.loginObj.emailId=='a' && this.loginObj.password =='a')
    // {
    //   this.router.navigateByUrl('dashboard');
    // }
  }

}



