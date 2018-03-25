import { Component, OnInit } from '@angular/core';
import { MessagesListComponent } from '../messages-list/messages-list.component';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  currentMessage: any = {};
  cachedMessages: any = [];
  message: any = {
    username: 'foo daddy',
    lastTime: '10: 33 PM',
    messageText: 'foo bar quxed'
  };
  constructor() { }

  ngOnInit() {
  }
  setDetailedMessage(message): void {

    // todo first get it working then make optimizations like cacheing

    // this.cachedMessages.array.forEach(element => {
    //   if(element.id===message.id){
    //     this.currentMessage=element;
    //     return;
    //   }
    // });
    // get message from server;
    // messageService.getDetailedMessage(message.id, this.currentMessage);
  }

}
