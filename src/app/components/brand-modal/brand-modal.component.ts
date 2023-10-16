import { Component, Input } from '@angular/core';
import { Brand } from 'src/app/Interfaces/brand';
import { ModalService } from 'src/app/Services/modal.service';

@Component({
  selector: 'app-brand-modal',
  templateUrl: './brand-modal.component.html',
  styleUrls: ['./brand-modal.component.css']
})
export class BrandModalComponent {
constructor(public _ModalService:ModalService){}
@Input() brand!: Brand;
}
