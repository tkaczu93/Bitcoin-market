import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-confirmation-modal',
  templateUrl: './confirmation-modal.component.html',
  styleUrls: ['./confirmation-modal.component.scss']
})
export class ConfirmationModalComponent {

  @Output() cancel: EventEmitter<any> = new EventEmitter()
  @Input() modalMessage: string = ""
  @Output() confirm: EventEmitter<any> = new EventEmitter()
  @Input() yesButtonStyle: string = ""

  closeModal(){
    this.cancel.emit()
  }
  confirmModal(){
    this.confirm.emit()
  }
}
