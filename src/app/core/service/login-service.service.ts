import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../../environments/environment';
import { Constant } from '../constant/Constant';
import { LoginDto } from '../classes/LoginDto.model';
import { ApiResponseModel } from '../classes/ApiResponse.model';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient) { }

  doLogin(obj:LoginDto):Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.LGOIN,obj)
  }

}
