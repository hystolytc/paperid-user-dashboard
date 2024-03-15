import { Directive, HostListener } from '@angular/core'

@Directive({
  standalone: true,
  selector: '[clickStopPropagation]'
})
export class UserDetailsDirective {
  @HostListener("click", ["$event"])
  onClick(event: any): void {
    event.stopPropagation()
  }
}