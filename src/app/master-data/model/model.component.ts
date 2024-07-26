import { Component, OnInit } from '@angular/core';
import { MasterService } from '../../core/service/master.service';
import { ApiResponseModel } from '../../core/classes/ApiResponse.model';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ProductModel } from '../../core/classes/product-model';
import { ToastrModule } from 'ngx-toastr';

@Component({
  selector: 'app-model',
  standalone: true,
  imports: [FormsModule, CommonModule,ToastrModule],
  templateUrl: './model.component.html',
  styleUrl: './model.component.css'
})
export class ModelComponent implements OnInit {

  brands: any;
  products:any;
  models:any;
  modelObj:ProductModel = new ProductModel();
  selectedBrandId:string ='';


  ngOnInit(): void {
    this.getBrand();
    this.getModels();
  }

  constructor(private mstrServ: MasterService) { }

  getBrand() {
    this.mstrServ.getbrands().subscribe((res: ApiResponseModel) => {
      if (res.vCode == "1") {
        this.brands = res.data;
      } else {
        alert(res.vMsg)
      }
    }, error => {
      alert(JSON.stringify(error))
    })
  }

  onBrandChange(event: Event): void {
    this.selectedBrandId= (event.target as HTMLSelectElement).value;
    this.mstrServ.getProductByBrandId(this.selectedBrandId).subscribe((res:ApiResponseModel)=>{
      if(res.vCode=="1"){
        this.products=res.data;
      }else{
        alert(res.vMsg)
      }
    },error=>{
      alert(JSON.stringify(error))
    })

  }

  getModels(){
    this.mstrServ.getModels().subscribe((res:ApiResponseModel)=>{
      if(res.vCode=="1"){
        this.models=res.data;
      }
    })
  }

  doSave(){
    this.mstrServ.modelSave(this.modelObj).subscribe((res:ApiResponseModel)=>{
      if(res.vCode=="1"){
        alert(res.vMsg);
        this.getModels();
      }else{
        alert(res.vMsg)
      }
    },error=>{
      alert(JSON.stringify(error))
    })
  }

  doEdit(model:any){
    // Not Complate Model Edite Part
    this.mstrServ.getModelId(model.id).subscribe((res:ApiResponseModel)=>{
      if(res.vCode=="1"){
        this.modelObj=res.data;
        alert(JSON.stringify(this.modelObj))
      }
    },error=>{
      alert(JSON.stringify(error))
    })
  }

  doDelete(brand: any) {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.mstrServ.modelDelete(brand.id).subscribe((res: ApiResponseModel) => {
        if (res.vCode == "1") {
          alert(res.vMsg);
          this.getModels();
        } else {
          alert(res.vMsg);
        }
      }, error => {
        alert(JSON.stringify(error))
      })
    }
  }

}
