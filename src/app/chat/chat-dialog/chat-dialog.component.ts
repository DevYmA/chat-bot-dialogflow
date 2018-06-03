import { Component, OnInit } from '@angular/core';
import { Message } from '../message';
import { ChatService } from '../chat.service';

@Component({
  selector: 'app-chat-dialog',
  templateUrl: './chat-dialog.component.html',
  styleUrls: ['./chat-dialog.component.css']
})
export class ChatDialogComponent implements OnInit {

  message:Message = new Message('', 'assets/images/user.png',"USER");
  messages:Message[] = [];

  constructor(private chatService:ChatService) { }

  ngOnInit() {
  }


  sendMessage(){
    this.message.timestamp = new Date();
    this.messages.push(this.message);

    this.chatService.talk(this.message.content).subscribe(res => {
      this.messages.push(
        new Message(res.result.fulfillment.speech, 'assets/images/bot.png', "BOT",res.timestamp)
      );
    });

    this.message = new Message('', 'assets/images/user.png',"USER");
  }


}
