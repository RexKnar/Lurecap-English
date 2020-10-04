import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-content',
  templateUrl: './home-content.component.html',
  styleUrls: ['./home-content.component.scss']
})
export class HomeContentComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  aboutImage: Image[] = [
    {
      img: 'assets/img/3727712_04.png'
    }
  ]
  aboutContent: Content[] = [
    {
      title: 'Speaking English in The World Today',
      paragraphText1: 'Textbook based learning is not enough to make you a fluent English speaker.Our approach is 100% Conversational. You will learn Real English, From 20+ years experts. You will learn slang, idioms etc. You will remember longer because you learn through practice and not cramming.',
      paragraphText2: 'All our courses have, as one of the key objectives, the significant improvement of students’ speaking skills. Whilst the main focus of these classes is clearly different, students universally need to improve their English speaking ability to be able to compete successfully in whatever work arena they choose to put themselves into.',
      paragraphText3: 'Improve your knowledge of the English language and pronunciation and practice your speaking and vocabulary with our video lessons. Choose your English course level from the list below and start learning online today. Take any of our high quality online English lessons available 24/7 and improve your English speaking skills along with your grammar, reading and writing. ',
      defaultBtnIcon: 'flaticon-right',
      defaultBtnText: 'More About Us',
      defaultBtnLink: 'about-us-4'
    }
  ]
  contentList: List[] = [
    {
      icon: 'flaticon-tick',
      title: 'Deal with most typical situations when travelling',
    },
    {
      icon: 'flaticon-tick',
      title: 'Express and respond to a range of feelings'
    },
    {
      icon: 'flaticon-tick',
      title: 'Agree and disagree politely with others'
    },
    {
      icon: 'flaticon-tick',
      title: 'Express personal beliefs, views and opinions'
    }
  ]

}
class Image {
  img: string;
}
class Content {
  title: string;
  paragraphText1: string;
  paragraphText2: string;
  paragraphText3: string;
  defaultBtnIcon: string;
  defaultBtnText: string;
  defaultBtnLink: string;
}
class List {
  icon: string;
  title: string;
}
