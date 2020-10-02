import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-intro',
  templateUrl: './course-intro.component.html',
  styleUrls: ['./course-intro.component.scss']
})
export class CourseIntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  projectStartImage: Image[] = [
    {
        img: 'assets/img/OnlineClassTips.jpg'
    }
]
projectStartContent: Content[] = [
    {
        title: 'Learn English Speaking in weeks!',
        paragraphText: 'Our classes are designed for English learners who have studied some English at school but can’t speak fluently. If you know at least 200 words in English and know some basic grammar, we guarantee that we will make you fluent in English in few months. We will make you speak English naturally and effortlessly. We will make your accent clearer and will make you speak like a native English speaker',
        defaultBtnIcon: 'flaticon-web',
        defaultBtnText: 'Contact Us',
        defaultBtnLink: 'contact'
    }
]

}
class Image {
img : string;
}
class Content {
title : string;
paragraphText: string;
defaultBtnIcon : string;
defaultBtnText : string;
defaultBtnLink : string;
}