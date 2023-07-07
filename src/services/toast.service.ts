import { Injectable } from '@angular/core';
import {
  NbGlobalLogicalPosition,
  NbGlobalPhysicalPosition,
  NbToastrService,
} from '@nebular/theme';

@Injectable({
  providedIn: 'root',
})
export class ToastService {
  physicalPositions = NbGlobalPhysicalPosition;
  logicalPositions = NbGlobalLogicalPosition;

  constructor(private toastrService: NbToastrService) {}

  showToast(titulo: string, mensaje: string, status: string) {
    this.toastrService.show(mensaje, titulo, {
      position: this.physicalPositions.TOP_RIGHT,
      status: status,
    });
  }
}
