import { Component } from '@angular/core';
import { EntriesListComponent } from '../../modules/entries/entries-list/entries-list.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [EntriesListComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
