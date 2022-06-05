import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-swipernav',
  templateUrl: './swipernav.component.html',
  styleUrls: ['./swipernav.component.scss'],
})
export class SwipernavComponent implements OnInit {
  @Output() forwardButtonPress: EventEmitter<any> = new EventEmitter();
  @Output() backButtonPress: EventEmitter<any> = new EventEmitter();
  constructor() { }

  ngOnInit() {}

  forwardFunction(){
    this.forwardButtonPress.emit(null)
  }
  backFunction(){
    this.backButtonPress.emit(null)
  }
}
