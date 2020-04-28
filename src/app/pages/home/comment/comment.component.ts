import { Component } from '@angular/core';
import { CommentService } from '../../../auth/_services/comment.service' 
import { DataComment  } from '../../../model/comment'

@Component({
  selector: 'ngx-comment',
  styleUrls: ['./comment.component.scss'],
  templateUrl: './comment.component.html',
})
export class CommentComponent {

constructor( private CommentService: CommentService){

  this.getComments()
}

ngOnInit(): void {
}

getComments() {
  this.CommentService.getComments().subscribe(
    data => {
      console.log("getComments",data)
      this.CommentService.comments = data as DataComment[];
    },
    err => {
      console.log(err)
    }
  );
}

}
