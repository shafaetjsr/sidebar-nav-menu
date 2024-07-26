import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';
import { ApiResponseModel } from '../classes/ApiResponse.model';
import { environment } from '../../../environments/environment';
import { Constant } from '../constant/Constant';
import { Brand } from '../classes/Brand';
import { ProductType } from '../classes/product-type';
import { ProductModel } from '../classes/product-model';

@Injectable({
  providedIn: 'root'
})
export class MasterService {

  constructor(private http:HttpClient) { }

  //#region  Brand
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

//#endregion

//#region  Product

productSave(obj:ProductType):Observable<ApiResponseModel>{
  return this.http.post<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.PRODUCT_SAVE,obj)
}

getProducts():Observable<ApiResponseModel>{
  return this.http.get<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.PRODUCT_GET)
}

getProductId(id:any):Observable<ApiResponseModel>{
  return this.http.get<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.PRODUCT_GET_BY_ID+id)
}

productUpdate(obj:ProductType,id:any):Observable<ApiResponseModel>{
  return this.http.post<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.PRODUCT_UPDATE+id,obj)
}

productDelete(id:any):Observable<ApiResponseModel>{
  return this.http.delete<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.PRODUCT_DELETE+id)
}

getProductByBrandId(id:any):Observable<ApiResponseModel>{
  return this.http.get<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.PRODUCT_GET_BY_BRAND_ID+id)
}
//#endregion

//#region Model
modelSave(obj:ProductModel):Observable<ApiResponseModel>{
  return this.http.post<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.MODEL_SAVE,obj)
}

getModels():Observable<ApiResponseModel>{
  return this.http.get<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.MODEL_GET)
}

getModelId(id:any):Observable<ApiResponseModel>{
  return this.http.get<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.MODEL_GET_BY_ID+id)
}

modelUpdate(obj:ProductModel,id:any):Observable<ApiResponseModel>{
  return this.http.post<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.MODEL_UPDATE+id,obj)
}

modelDelete(id:any):Observable<ApiResponseModel>{
  return this.http.delete<ApiResponseModel>(environment.api_url+Constant.API_END_POINT.MODEL_DELETE+id)
}
//#endregion


}
