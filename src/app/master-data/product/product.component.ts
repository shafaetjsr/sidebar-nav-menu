import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { MasterService } from '../../core/service/master.service';
import { ApiResponseModel } from '../../core/classes/ApiResponse.model';
import { ProductType } from '../../core/classes/product-type';

@Component({
  selector: 'app-product',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './product.component.html',
  styleUrl: './product.component.css'
})
export class ProductComponent implements OnInit {

  brands: any;
  product:ProductType = new ProductType();
  products:any;
  productId:any;
  showSaveBtn:boolean=true;

  constructor(private mstrServ:MasterService){}

  ngOnInit(): void {
    this.getBrand();
    this.getProduct();
  }

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

  doSave(){
    this.mstrServ.productSave(this.product).subscribe((res:ApiResponseModel)=>{
      if(res.vCode=="1"){
        alert(res.vMsg);
        this.product= new ProductType();
        this.getProduct();
      }else{
        alert(res.vMsg);
      }
    },error=>{
      alert(JSON.stringify(error))
    })
  }

  getProduct(){
    this.mstrServ.getProducts().subscribe((res:ApiResponseModel)=>{
      if(res.vCode=="1"){
        this.products= res.data;
      }
    },error=>{
      alert(JSON.stringify(error))
    })
  }

  doEdit(product: any) {
    this.productId = product.id;
    this.showSaveBtn = false;
    this.mstrServ.getProductId(this.productId).subscribe((res:ApiResponseModel)=>{
      if(res.vCode=="1")
      {
        this.product = res.data;
      }
    },error=>{
      alert(JSON.stringify(error))
    })
  }

  doUpdate(){
    this.mstrServ.productUpdate(this.product,this.productId).subscribe((res:ApiResponseModel)=>{
      if(res.vCode=="1"){
        alert(res.vMsg);
        this.getProduct();
        this.showSaveBtn = true;
        this.product= new ProductType();
      }else{
        alert(res.vMsg)
      }
    },error=>{
      alert(JSON.stringify(error))
    })
  }

  doDelete(brand: any) {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.mstrServ.productDelete(brand.id).subscribe((res: ApiResponseModel) => {
        if (res.vCode == "1") {
          alert(res.vMsg);
          this.getProduct();
        } else {
          alert(res.vMsg);
        }
      }, error => {
        alert(JSON.stringify(error))
      })
    }
  }


}
