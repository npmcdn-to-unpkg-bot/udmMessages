import {Component, OnInit} from 'angular2/core';

import {MessageComponent} from './message.component';
import {Message} from './message';
import {MessageService} from './message.service';


@Component({
    selector: 'my-message-list',
    template: `
    
       <section class="col-md-8 col-md-oset-2">
          <my-message *ngFor="#message of messages" [message]="message" (editClicked) = "message.content = $event"></my-message>
       </section>
    
    
    `,
    directives:[MessageComponent]
})



export class MessageListComponent implements OnInit {
    constructor(private _messageService: MessageService){}
    
    
     messages:Message[] = [];
    
    ngOnInit(){
        this.messages = this._messageService.getMessages();
    }
}