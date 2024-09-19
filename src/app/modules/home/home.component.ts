import { Component } from '@angular/core';
import { MatCardModule } from '@angular/material/card';
import { MatDividerModule } from '@angular/material/divider';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [MatCardModule,
            MatDividerModule,
            MatButtonModule,
            MatIconModule,
            NgIf
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  showLearnMore: boolean = false;

  constructor() {
    this.showLearnMore = false;
  }

  onLearnMore() {
    console.log('Learn More button clicked!');
    this.showLearnMore = true;
  }

  onCloseLearnMore() {
    console.log('Close Learn More button clicked!');
    this.showLearnMore = false;
  }

}
