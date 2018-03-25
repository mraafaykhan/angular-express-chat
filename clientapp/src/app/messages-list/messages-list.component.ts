import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-messages-list',
  templateUrl: './messages-list.component.html',
  styleUrls: ['./messages-list.component.css']
})
export class MessagesListComponent implements OnInit {
  @Input() message: any;
  constructor() { }

  ngOnInit() {
  }

}
