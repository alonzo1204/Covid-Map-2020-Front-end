import { Component , Input,EventEmitter, Output} from '@angular/core';


@Component({
  selector: 'ngx-addComment',
  styleUrls: ['./addComment.component.scss'],
  templateUrl: './addComment.component.html',
})
export class AddCommentComponent {
  @Output() greetEvent = new EventEmitter();
  coment:string;

  //@Input() comentStartDate:boolean;
 constructor(){}
 
 createComent(){
  this.greetEvent.emit(this.coment);
 }
}
