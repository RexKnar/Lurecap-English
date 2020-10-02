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
        img: 'assets/img/our-mission/img2.png'
    }
]
ourMissionContent: Content[] = [
    {
        title: 'Real-world Data Challenges Prepare to Be A Data Science Leader',
        paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        defaultBtnIcon: 'flaticon-right',
        defaultBtnText: 'Apply Now',
        defaultBtnLink: 'membership-levels'
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
