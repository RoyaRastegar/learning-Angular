import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { IComment } from '../comment';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
comments:IComment[]=[];
@ViewChild('commentText') comm:ElementRef | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  addComment(){
    let c:IComment={
      comment:this.comm?.nativeElement.value,
      dislike:0,
      like:0,
      numberOfReview:0,
      star:0
    }
    this.comments.push(c);
  }
  reviewsCount(c:IComment,n:HTMLInputElement){
    c.numberOfReview++;
    c.star=parseInt(n.value);
  }
  commentLike(c:IComment){
    c.like++;
  }
  commentDisLike(c:IComment){
    c.dislike++;
  }

}
