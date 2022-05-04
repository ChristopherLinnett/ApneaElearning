import { Component, OnInit } from '@angular/core';
import { CourseService } from '../course.service';

@Component({
  selector: 'app-overview',
  templateUrl: './overview.page.html',
  styleUrls: ['./overview.page.scss'],
})
export class OverviewPage implements OnInit {
  moduleList:{ completed: boolean; innerModules: { completed: boolean; content: string; title: string; }[]; title: string; }[]

  constructor(private courseService: CourseService) { }

  ngOnInit() {
  }
showModules() {
  this.moduleList = this.courseService.AIDA2Default
  }

}
