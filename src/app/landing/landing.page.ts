import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  availableCourses = ['AIDA1','AIDA2','AIDA3','AIDA4']
  constructor() { }

  
  ngOnInit() {
  }

}
