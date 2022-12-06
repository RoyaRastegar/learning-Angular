import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
})
export class StarComponent implements OnInit,OnChanges {
  @Input() rating: number=4;
  width: number | undefined;
  constructor() { }

  ngOnInit(): void {
  }
  ngOnChanges(): void {
      this.width=this.rating * 100/5;
  }

}
