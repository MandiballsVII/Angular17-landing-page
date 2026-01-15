import { NgClass } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, NgClass],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  menuOption: string = '';

  onOption(menuOption: string){
    this.menuOption = menuOption;
  }
}
