import { Component, OnInit } from '@angular/core';
import { WebsocketService } from '../service/websocket.service';
import { ChatService } from '../service/chat.service';

export class Message {
	author: string;
	message: string
}

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {

	showMessages: Message[] = []

  constructor(private chatService: ChatService) {
  	let that = this;
  	chatService.messages.subscribe(msg => {
  		console.log("Response from websocket: " + msg);
  		msg.author = 'server'
  		that.showMessages.push(msg)
  	})
  }

  private message: Message = {
  	author: 'totorialedge',
  	message: 'this is a test message'
  }

  ngOnInit() {
  }

  sendMsg() {
  	this.chatService.messages.next(this.message);
  	this.showMessages.push(this.message)
  }

}
