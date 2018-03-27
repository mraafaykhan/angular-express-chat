import { Component, OnInit } from '@angular/core';
import { MessagesListComponent } from '../messages-list/messages-list.component';
import * as io from 'socket.io-client';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private socket= io.connect('http://localhost:3000');
  private severSocket:any;
  currentMessage: any = {};
  cachedMessages: any = [];
  message: any = {
    username: 'foo daddy',
    lastTime: '10: 33 PM',
    messageText: 'foo bar quxed'
  };
  constructor() { }

  ngOnInit() {

    this.socket.on('connect', function(){
      console.log('connected to server');
    })
    this.socket.emit("newevent", "message message");
    this.socket.on('testevent', (message)=> console.log(message));
  }

  sendMessage(message: String){

    console.log('foo is sending',message);
    this.socket.emit("newevent", "message message");
    this.socket.emit('sendMesssage', message);
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
