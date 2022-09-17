import { Component, OnInit, OnDestroy } from '@angular/core';
import { ModalService } from 'src/app/services/modal.service';

@Component({
  selector: 'app-auth-modal',
  templateUrl: './auth-modal.component.html',
  styleUrls: ['./auth-modal.component.css'],
})
export class AuthModalComponent implements OnInit, OnDestroy {
  constructor(public modal: ModalService) {}

  ngOnInit(): void {
    this.modal.register('auth');
  }

  // Prevent memory leak for cases where the modal is destroyed
  // but the service is still keeping an instance in the modals array
  ngOnDestroy(): void {
    this.modal.unregister('auth');
  }
}
