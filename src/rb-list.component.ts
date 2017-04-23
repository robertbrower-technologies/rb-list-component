import { Component } from '@angular/core';
import { RbListService } from 'rb-list-service';

@Component({
  selector: 'rb-list-component',
  templateUrl: './rb-list.component.html'
})
export class RbListComponent {

  constructor(private rbListService: RbListService) {
  }

}
