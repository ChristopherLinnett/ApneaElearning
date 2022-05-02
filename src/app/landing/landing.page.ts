import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-landing',
  templateUrl: './landing.page.html',
  styleUrls: ['./landing.page.scss'],
})
export class LandingPage implements OnInit {
  availableCourses = ['AIDA1','AIDA2','AIDA3','AIDA4','AIDA Monofin Freediver', 'AIDA Competition Freediver', 
  'AIDA Competition Safety', 'AIDA Judge', 'AIDA Instructor', 'Crossover Evaluation', 'AIDA Youth Instructor', 
  'AIDA Youth Course', 'Emergency Medical Responder', ]
  constructor() { }

  random() {
    return Math.random()
  }

  ngOnInit() {
  }

}
