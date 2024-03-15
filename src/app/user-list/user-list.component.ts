import { Component, EventEmitter, Input, Output } from '@angular/core';
import { NgIf, NgFor } from "@angular/common";
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faSpinner } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-user-list',
  standalone: true,
  imports: [NgIf, NgFor, FontAwesomeModule],
  templateUrl: './user-list.component.html',
  styleUrl: './user-list.component.css'
})
export class UserListComponent {
  @Input() dataList: Record<string, any>[] = []
  @Input() loading: boolean = true
  @Output() selectedUser = new EventEmitter<Record<string, any>>()
  faSpinner = faSpinner
  
  onSelectedUser(data: Record<string, any>) {
    this.selectedUser.emit(data)
  }
}
