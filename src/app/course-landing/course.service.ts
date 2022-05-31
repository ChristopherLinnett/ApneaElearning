import { Injectable, OnInit } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class CourseService implements OnInit {
  allCourses = [
    { index: 0,
      title: 'AIDA1',
      description:
        'This course offers a basic knowledge of freediving and introductory skills such as relaxation of body and mind, finning techniques, duck dives and equalisation.',
    },
    { index: 1,
      title: 'AIDA2',
      description: `The static and dynamic sessions in confined water are used to teach relaxation, breathing, finning and safety techniques. In the open water sessions students will apply the skills they have learned in the pool / confined water sessions and combine them with the basic skills of open water freediving such as equalizing, duck diving, vertical swimming, body positioning, turns and use of buoyancy.

  The freediving theory will include: Introduction to Freediving, Freediving Breathing Cycle, Basic Physiology of Freediving, Equalization, Freediving Techniques, Safety in Freediving, Equipment in Freediving, Freediving Disciplines.`,
    },
    { index: 2,
      title: 'AIDA3',
      description: `The course is designed to further develop skills from previous levels, to acquire new skills and gain a higher knowledge of safety procedures and techniques. The new techniques that are introduced are free-fall, Frenzel Equalizing, the use of training tables, the risks of increasing and decreasing pressure and also how to minimize these risks. Students will train these skills in the most common disciplines of freediving: Static Apnoea, Dynamic Apnoea, Free Immersion and Constant Weight.

  The theory will include: Physiology, Equalization, Barotrauma, Lungs at Depth, Buoyancy, Shallow Water Blackout, Training Concepts, The Mammalian Dive Response, Decompression Sickness , Surface Intervals and the Freediver's Code of Conduct.`,
    },
    { index: 3,
      title: 'AIDA4',
      description: `This course familiarises students with techniques, knowledge and safety procedures for deep freediving that go beyond recreational freediving. The new techniques will include FRC diving, mouth-fill equalization and packing. The skills are developed within these categories of freediving: Static Apnea, Dynamic Apnea, Constant Weight, Free Immersion and Variable Weight. In addition to the in-water skills this course introduces full body warm-ups and stretching, specific stretching of breathing muscles, training concepts and diet that benefits the freediver and help shape their development as a diver. You will also be, acquainted with packing and reverse packing, mainly within vital capacity as a part of the dry lessons.

  An important set of skills concerns managing open water equipment. The use of appropriate knots and braiding techniques, setting the depth on the dive line, constructing a safe bottom weight from a weight belt and diving leads, safe handling of other additional equipment (bottom plate, torches, lanyards, etc.).

  One of the purposes of this course is to prepare successful candidates for the role of "Assistant Instructor". This new role will include leading an appropriate warm-up session for confined and open water freediving and supervising students of all course levels during their confined or open water sessions.

  The theory sessions will include: Physics - Dalton's Law, Boyle's Law, Henry's law, Decompression Sickness, Nitrogen Narcosis, Failure Depth and how to increase VC and decrease RV, FRC Diving, Mouth-Fill, Packing, Fitness and Training, Nutrition and Diet for Freedivers.`,
    },
    { index: 4,
      title: 'AIDA Instructor',
      description: `This course familiarises students with techniques, knowledge and safety procedures for deep freediving that go beyond recreational freediving. The new techniques will include FRC diving, mouth-fill equalization and packing. The skills are developed within these categories of freediving: Static Apnea, Dynamic Apnea, Constant Weight, Free Immersion and Variable Weight. In addition to the in-water skills this course introduces full body warm-ups and stretching, specific stretching of breathing muscles, training concepts and diet that benefits the freediver and help shape their development as a diver. You will also be, acquainted with packing and reverse packing, mainly within vital capacity as a part of the dry lessons.

  An important set of skills concerns managing open water equipment. The use of appropriate knots and braiding techniques, setting the depth on the dive line, constructing a safe bottom weight from a weight belt and diving leads, safe handling of other additional equipment (bottom plate, torches, lanyards, etc.).

  One of the purposes of this course is to prepare successful candidates for the role of "Assistant Instructor". This new role will include leading an appropriate warm-up session for confined and open water freediving and supervising students of all course levels during their confined or open water sessions.

  The theory sessions will include: Physics - Dalton's Law, Boyle's Law, Henry's law, Decompression Sickness, Nitrogen Narcosis, Failure Depth and how to increase VC and decrease RV, FRC Diving, Mouth-Fill, Packing, Fitness and Training, Nutrition and Diet for Freedivers.`,
    },
  ];
  thisCourse: { index: number, title: string; description: string };
  courseDate;
  courseChange: Subject<{ title: string; description: string }>;
  constructor() {}

  ngOnInit() {}

  getCourse() {
    //returns a course object
    return this.thisCourse;
  }
  getAllCourses() {
    return this.allCourses
  }
  setCourse(course) {
    //takes a course title, sets current course to the course that contains that title
    for (let item of this.allCourses) {
      if (item.title == course) {
        this.thisCourse = item;
      }
    }
  }
}
