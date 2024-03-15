import { Component, EventEmitter, Input, Output } from '@angular/core'
import { NgIf } from '@angular/common'
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faEnvelope, faPhone, faX, faLink, faLocationDot, faSpinner } from '@fortawesome/free-solid-svg-icons';
import { UserDetailsDirective } from './user-details.directive'
import { bacgkroundColor } from './background-color'

@Component({
  standalone: true,
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrl: './user-details.component.css',
  imports: [NgIf, UserDetailsDirective, FontAwesomeModule],
})
export class UserDetailsComponent {
  @Input() show: boolean = false
  @Input() loading: boolean = true
  @Input() data: Record<string, any> = {}
  @Output() close = new EventEmitter()
  faEnvelope = faEnvelope
  faPhone = faPhone
  faX = faX
  faLink = faLink
  faLocationDot = faLocationDot
  faSpinner = faSpinner

  onCloseModal() {
    this.close.emit()
  }

  onSetBackground() {
    let selectedColor = bacgkroundColor['A']
    if (this.data.name) {
      selectedColor = bacgkroundColor[this.data.name[0].toUpperCase()]
    }
    return `background-image: linear-gradient(to bottom right, ${selectedColor}, #eee);`
  }
}