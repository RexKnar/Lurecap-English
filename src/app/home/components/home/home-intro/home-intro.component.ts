import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-intro',
  templateUrl: './home-intro.component.html',
  styleUrls: ['./home-intro.component.scss']
})
export class HomeIntroComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  singleFunfactsBox: Funfacts[] = [
    {
        icon: 'assets/img/icon1.png',
        title: 'Confidence',
        subTitle: 'Confidence'
    },
    {
        icon: 'assets/img/icon2.png',
        title: 'Fluency',
        subTitle: 'Fluency'
    },
    {
        icon: 'assets/img/icon3.png',
        title: 'Accuracy',
        subTitle: 'Accuracy'
    },
    {
        icon: 'assets/img/icon4.png',
        title: 'Pronunciation',
        subTitle: 'Pronunciation'
    }
];
  exploreLearningContent: Content[] = [
    {
        title: 'Have you been learning English for years but still cant speak fluently?',
        paragraphText: 'This is because you are learning English the wrong way.Learning grammar and vocabulary will NOT make you a fluent English speaker.The only way to improve Spoken English is to practice with Native English Speakers.',
        defaultBtnIcon: 'flaticon-right',
        linkText: 'Enroll Now',
        link: 'courses-grid'
    }
]
exploreLearningVideo: Video[] = [
    {
        img: 'assets/img/8558-01.png',
        icon: 'flaticon-google-play',
        videoLink: 'https://www.youtube.com/watch?v=Y5KCDWi7h9o'
    }
]

}
class Content {
title : string;
paragraphText : string;
defaultBtnIcon : string;
linkText : string;
link : string;
}
class Video {
img : string;
icon : string;
videoLink : string;
}
class Funfacts {
  icon: string;
  title: string;
  subTitle: string;
}