import { Injectable } from '@angular/core';
import { CourseService } from '../course.service';

@Injectable({
  providedIn: 'root'
})
export class CurrentModuleService {
  moduleCount: number;
  currentModuleIndex: number;
  currentInnerIndex: number;
  innerModuleCount: number;
    constructor(private courseService: CourseService) { }

  setStartPoint(){

  }

  initialise(moduleIndex,innerIndex){
    this.currentModuleIndex = moduleIndex
    this.currentInnerIndex = innerIndex
    this.moduleCount = this.courseService.getAllModules().length
    this.innerModuleCount = this.courseService.getAllModules()[moduleIndex].innerModules.length
  }

  next(){
    if (this.currentInnerIndex >= this.innerModuleCount && this.currentModuleIndex >= this.moduleCount) {
      console.log("finished Modules")
      return
    }
    if (this.currentInnerIndex >= this.innerModuleCount) {
      this.currentModuleIndex++
      this.currentInnerIndex = 0
      this.innerModuleCount = this.courseService.getAllModules()[this.currentModuleIndex].innerModules.length
      return {module: this.currentModuleIndex, inner: this.currentInnerIndex}
    }
    this.currentInnerIndex++
    return this.currentInnerIndex
  }
  back(){
    if (this.currentInnerIndex == 0 && this.currentModuleIndex == 0){
      return
    }
    if (this.currentInnerIndex == 0){
      this.currentModuleIndex--
      this.innerModuleCount = this.courseService.getAllModules()[this.currentModuleIndex].innerModules.length
      this.currentInnerIndex = this.innerModuleCount-1
      return {module: this.currentModuleIndex, inner: this.currentInnerIndex}
    }
    this.currentInnerIndex--
    return this.currentInnerIndex
  }

  getCurrentPosition(){
    return {module: this.currentModuleIndex, inner: this.currentInnerIndex}
  }

}
