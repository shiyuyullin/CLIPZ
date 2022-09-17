import { Component, OnInit, Input, ElementRef } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.css'],
})
export class ModalComponent implements OnInit {
  @Input() modalID: string = '';

  constructor(public modal: ModalService, public el: ElementRef) {}

  closeModal() {
    this.modal.toggleModal(this.modalID);
  }

  ngOnInit(): void {
    // teleport/transport
    document.body.append(this.el.nativeElement);
  }
}
