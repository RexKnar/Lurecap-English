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
        img: 'assets/img/8294-01.png'
    }
]
ourMissionContent: Content[] = [
    {
        title: 'You’ll finally understand every English word you hear ',
        paragraphText1: 'Want to start speaking English from your first lesson? You will! Our lessons take you by the hand and guide you through real English conversations.',
        paragraphText2: 'you’ll gain the skills and confidence to communicate well in English, anywhere in the world.',
        defaultBtnIcon: 'flaticon-right',
        defaultBtnText: 'Enroll Now',
        defaultBtnLink: 'courses'
    }
]

ourMissionList: List[] = [
    {
        
        title: 'No Textbooks'
    },
    {
       
        title: 'No Memorization'
    },
    {
        
        title: 'Audio & Video Lessons '
    },
    {
        
        title: 'Increase your vocabulary'
    },
    {
        
        title: 'Personalized Guidance '
    },
    {

        title: 'Git rid of MTI'
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
title : string;
}
