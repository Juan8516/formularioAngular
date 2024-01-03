import { Component } from '@angular/core';

@Component({
  selector: 'app-registration-list',
  templateUrl: './list.component.html',
  styleUrl: './list.component.css'
})
export class ListComponent {
  public listNames: string[] = ['Juan', 'Paula', 'Simon', 'Lucelly', 'Emilio'];
}
