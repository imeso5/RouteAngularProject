import { Component } from '@angular/core';
import { Category } from 'src/app/Interfaces/category';
import { CateogiresService } from 'src/app/Services/cateogires.service';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.css']
})
export class CategoriesComponent {
  categories: Category[] = [];
  subcats!:any[]
  constructor(private _CateogiresService: CateogiresService) {}
  ngOnInit(): void {
    this._CateogiresService.getAllcategories().subscribe((res) => {
      console.log(res);
      this.categories = res.data;
    });
  }

  showSubCats(Id:string){
    this._CateogiresService.getAllSubCategoriesOnCategory(Id).subscribe({
      next:(res)=>{
        this.subcats=res.data
        console.log(res.data);

      }
    })
  }
}
