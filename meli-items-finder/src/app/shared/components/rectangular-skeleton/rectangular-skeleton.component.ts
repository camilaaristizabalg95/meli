import { Component, OnInit, Input, AfterViewInit, ViewChildren } from '@angular/core';

@Component({
  selector: 'rectangular-skeleton',
  templateUrl: './rectangular-skeleton.component.html',
  styleUrls: ['./rectangular-skeleton.component.sass']
})
export class RectangularSkeletonComponent implements OnInit, AfterViewInit {

  @ViewChildren('skeleton') skeletons;

  @Input('width') width: string;
  @Input('height') height: number;
  @Input('count') count: number;

  items:number[] = [];

  constructor() {
   }

  ngOnInit(): void {
    this.items.length = this.count
  }

  ngAfterViewInit(){

    this.skeletons._results.forEach(
      skeleton => skeleton.nativeElement.setAttribute('style', `width: ${this.width}; height: ${this.height};`)
    )

  }

}
