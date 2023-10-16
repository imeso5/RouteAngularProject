import { Component } from '@angular/core';
import { ProductsService } from 'src/app/Services/products.service';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.css']
})
export class ProductsComponent {
  products: any[] = [];
  constructor(private _ProductService: ProductsService) {}
  ngOnInit(): void {
    this._ProductService.getAllProducts().subscribe((res) => {
      console.log(res);
      this.products = res.data;
    });
  }
}
