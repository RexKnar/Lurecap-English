import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-detail',
  templateUrl: './home-detail.component.html',
  styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  ourMissionImage: Image[] = [
    {
        img: 'assets/img/online-classes.jpg'
    }
]
ourMissionContent: Content[] = [
    {
        title: 'You’ll finally understand every English word you hear ',
        paragraphText1: 'Want to start speaking English from your first lesson? You will! Our lessons take you by the hand and guide you through real English conversations.',
        paragraphText2: 'Learning for travel or love? Want to focus on reading, writing, grammar or culture? You get lessons based on your goals and needs.',
        defaultBtnIcon: 'flaticon-right',
        defaultBtnText: 'Enroll Now',
        defaultBtnLink: 'courses'
    }
]
featuresList: List[] = [
    {
        icon: 'flaticon-tick',
        title: 'No Textbooks '
    },
    {
        icon: 'flaticon-tick',
        title: 'No Memorization'
    },
    {
        icon: 'flaticon-tick',
        title: 'Audio & Video Lessons '
    },
    {
        icon: 'flaticon-tick',
        title: 'Personalized Guidance '
    },
    {
        icon: 'flaticon-tick',
        title: 'Change how you speak English'
    }
]

}
class Image {
img : string;
}
class Content {
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
