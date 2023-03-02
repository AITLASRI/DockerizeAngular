import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-chat',
  templateUrl: './chat.page.html',
  styleUrls: ['./chat.page.scss'],
})
export class ChatPage implements OnInit {
  messages: { text: string, sent: boolean }[] = [
    { text: 'Hello!', sent: false },
    { text: 'Hi there!', sent: true },
    { text: 'How can I help you today?', sent: true },
  ];

  inputText: string = '';

  constructor() { }

  ngOnInit() {
  }

  sendMessage() {
    if (this.inputText.trim() !== '') {
      this.messages.push({ text: this.inputText, sent: false });
      this.inputText = '';
    }
  }
}
