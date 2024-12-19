import { Component, Input } from '@angular/core';
import { MatCardModule } from '@angular/material/card';

@Component({
  selector: 'app-loading-placeholder',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './loading-placeholder.component.html',
  styleUrl: './loading-placeholder.component.scss'
})
export class LoadingPlaceholderComponent {
  @Input() dataDescription: string = 'Loading...';

}
