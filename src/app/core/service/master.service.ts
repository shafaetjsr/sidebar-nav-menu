import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiResponseModel } from '../classes/ApiResponse.model';
import { environment } from '../../../environments/environment';
import { Constant } from '../constant/Constant';
import { Brand } from '../classes/Brand';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  brandSave(obj:Brand):Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.BRAND_SAVE,obj)
  }

  getbrands():Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.BRAND_GET)
  }

  getbrandbyId(id:any):Observable<ApiResponseModel>{
    return this.http.get<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.BRAND_GET_BY_ID+id)
  }

  brandUpdate(obj:Brand,id:any):Observable<ApiResponseModel>{
    return this.http.post<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.BRAND_UPDATE+id,obj)
  }
  
  brandDelete(id:any):Observable<ApiResponseModel>{
    return this.http.delete<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.BRAND_DELETE+id)
  }
}
