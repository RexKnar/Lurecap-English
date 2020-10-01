import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-about',
  templateUrl: './course-about.component.html',
  styleUrls: ['./course-about.component.scss']
})
export class CourseAboutComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  ourMissionImage: Image[] = [
    {
        img: 'assets/img/home-banner.jpg'
    }
]
ourMissionContent: Content[] = [
    {
        subTitle: 'Course',
        title: 'Do you want to speak better English? ',
        paragraphText1: 'This course will help you reach that goal. Speak English Professionally: In person, Online and On the Phone will boost your English speaking skills. ',
        paragraphText2: 'Throughout the course, , you’ll gain the skills and confidence to communicate well in English, anywhere in the world. ',
        defaultBtnIcon: 'flaticon-right',
        defaultBtnText: 'Read More',
        defaultBtnLink: 'about-us-2'
    }
]
ourMissionList: List[] = [
    {
        icon: 'flaticon-tick',
        title: 'more fluent and accurate '
    },
    {
        icon: 'flaticon-tick',
        title: 'appropriate body language and tone'
    },
    {
        icon: 'flaticon-tick',
        title: 'confidence to communicate '
    },
    {
        icon: 'flaticon-tick',
        title: 'Increase your vocabulary'
    },
]

}
class Image {
img : string;
}
class Content {
subTitle : string;
title : string;
paragraphText1 : string;
paragraphText2 : string;
defaultBtnIcon : string;
defaultBtnText : string;
defaultBtnLink : string;
}
class List {
icon : string;
title : string;
}
