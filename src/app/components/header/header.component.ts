import { Component } from "@angular/core";
import { NgOptimizedImage } from "@angular/common";

@Component({
  standalone: true,
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
  imports: [NgOptimizedImage]
})
export class HeaderComponent {}