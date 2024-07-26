import { Component, OnInit, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Brand } from '../../core/classes/Brand';
import { MasterService } from '../../core/service/master.service';
import { ApiResponseModel } from '../../core/classes/ApiResponse.model';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-brands',
  standalone: true,
  imports: [FormsModule, CommonModule],
  templateUrl: './brands.component.html',
  styleUrl: './brands.component.css'
})
export class BrandsComponent implements OnInit {
  @ViewChild('brandForm') brandForm!: NgForm;

  brandObj: Brand = new Brand();
  br: Brand = new Brand();
  brands: any;
  brandId: any;
  showSaveBtn: boolean = true;

  constructor(private mstrServ: MasterService) { }

  ngOnInit(): void {
    this.getBrand();
    //this.getbrandbyId();
    //this.brandUpdate();
  }

  doSave() {
    if (this.brandObj.brand_name) {
      this.mstrServ.brandSave(this.brandObj).subscribe((res: ApiResponseModel) => {
        if (res.vCode == "1") {
          alert(res.vMsg)
          this.brandObj = new Brand();
          this.brandForm.resetForm();
          this.getBrand();
        } else {
          alert(res.vCode)
        }
      }, error => {
        alert(JSON.stringify(error))
      })
    }
  }

  brandUpdate() {

    this.br.Id = 17;
    this.br.brand_name = 'asdad';

    this.mstrServ.brandUpdate(this.br, 18).subscribe((res: ApiResponseModel) => {
      if (res.vCode == "1") {
        alert(res.vMsg)
      } else {
        alert(res.vMsg)
      }
    }, error => {
      alert(JSON.stringify(error))
    })
  }


  doEdit(brand: any) {
    this.getbrandbyId(brand.id);
    this.brandId = brand.id;
    this.showSaveBtn = false;
  }

  doDelete(brand: any) {
    if (window.confirm('Are sure you want to delete this item ?')) {
      this.mstrServ.brandDelete(brand.id).subscribe((res: ApiResponseModel) => {
        if (res.vCode == "1") {
          alert(res.vMsg);
          this.getBrand();
        } else {
          alert(res.vMsg);
        }
      }, error => {
        alert(JSON.stringify(error))
      })
    }
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

  getbrandbyId(id: any) {
    this.mstrServ.getbrandbyId(id).subscribe((res: ApiResponseModel) => {
      if (res.vCode == "1") {
        this.brandObj = res.data;
        //console.log(JSON.stringify(this.brandObj))
      } else {
        alert(res.vMsg)
      }
    }, error => {
      alert(JSON.stringify(error))
    })
  }

  doUpdate() {
    this.mstrServ.brandUpdate(this.brandObj, this.brandId).subscribe((res: ApiResponseModel) => {
      if (res.vCode == "1") {
        alert(res.vMsg)
        this.showSaveBtn = true;
        this.getBrand();
        this.brandObj = new Brand();
        this.brandForm.resetForm();
      } else {
        alert(res.vMsg)
      }
    }, error => {
      alert(JSON.stringify(error))
    })
  }


}
