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
        subTitle: 'Develop your soft skills and become more confident using English. '
    },
    {
        icon: 'assets/img/icon2.png',
        title: 'Fluency',
        subTitle: 'Get more comfortable communicating  in various scenarios.'
    },
    {
        icon: 'assets/img/icon3.png',
        title: 'Accuracy',
        subTitle: 'Focus on using grammar and vocabulary accurately in English. '
    },
    {
        icon: 'assets/img/icon4.png',
        title: 'Pronunciation',
        subTitle: 'Get rid of mother tongue influence (MTI)'
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
        img: 'assets/img/homeintro.png',
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