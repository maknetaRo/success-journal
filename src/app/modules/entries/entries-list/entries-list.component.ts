import { Component } from '@angular/core';
import { AddBtnComponent } from '../components/add-btn/add-btn.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-entries-list',
  standalone: true,
  imports: [AddBtnComponent, CommonModule],
  templateUrl: './entries-list.component.html',
  styleUrl: './entries-list.component.scss'
})
export class EntriesListComponent {

}
