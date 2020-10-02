import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-list',
  templateUrl: './course-list.component.html',
  styleUrls: ['./course-list.component.scss']
})
export class CourseListComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sectionTitle: sectionTitleContent[] = [
    {
        subTitle: "We offer",
        title: 'Learn English With Us !',
        paragraphText: 'Learning vocabulary and grammar alone will not enable you to speak well in English. For that, you will have to acquire proper speaking skills. These can be acquired only through practice. Enroll Now'
    }
]


}
class sectionTitleContent {
subTitle : string;
title : string;
paragraphText : string;
}
class ServicesItem {
icon : string;
title : string;
paragraphText : string;
btnIcon : string;
btnText : string;
link : string;
}

