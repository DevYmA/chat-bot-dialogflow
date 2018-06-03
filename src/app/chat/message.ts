export class Message {
    content: string;
    timestamp: Date;
    avatar: string;
    sendBy:string;
  
    constructor(content: string, avatar: string, sendBy: string,timestamp?: Date){
      this.content = content;
      this.timestamp = timestamp;
      this.avatar = avatar;
      this.sendBy = sendBy;
    }
  }
  