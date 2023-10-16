import { Component, OnInit } from '@angular/core';
import { BrandService } from 'src/app/Services/brand.service';

@Component({
  selector: 'app-brands',
  templateUrl: './brands.component.html',
  styleUrls: ['./brands.component.css'],
})
export class BrandsComponent implements OnInit {
  brands: any[] = [];
  constructor(private _brandServices: BrandService) {}
  ngOnInit(): void {
    this._brandServices.getAllBrands().subscribe((res) => {
      console.log(res);
      this.brands = res.data;
    });
  }
}
