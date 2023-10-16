import { Injectable } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { BrandModalComponent } from '../components/brand-modal/brand-modal.component';

@Injectable({
  providedIn: 'root'
})
export class ModalService {

  components = new Map<string, any>([
    ['brand-modal', BrandModalComponent]
  ]);

  constructor(private ngbModalService: NgbModal) {}

  openModal(
    componentName: string,
    inputs?: Map<string, any>,
    size: string = ''
  ) {
    const modalRef = this.ngbModalService.open(
      this.components.get(componentName),
      { backdrop: 'static', size: size }
    );
    if (inputs) {
      inputs.forEach((value, key) => {
        modalRef.componentInstance[key] = value;
      });
    }
  }

  closeModal() {
    this.ngbModalService.dismissAll();
  }
}
