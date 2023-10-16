import { Component, Input } from '@angular/core';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-brand',
  templateUrl: './brand.component.html',
  styleUrls: ['./brand.component.css'],
})
export class BrandComponent {
  @Input() brand: any;
  constructor(private _ModalService:ModalService) {}

  openBrand(){
    this._ModalService.openModal("brand-modal", new Map<string, any>([["brand", this.brand]]))
  }
}
