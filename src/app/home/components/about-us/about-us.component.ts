import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  aboutImage: Image[] = [
    {
      img: 'assets/img/about/img5.jpg'
    }
  ]
  aboutContent: Content[] = [
    {
      subTitle: 'About Us',
      title: 'The only way to learn spoken English is to speak English',
      paragraphText1: 'Our course is designed to help you practice and fine-tune your written and spoken communication skills. It has a specific focus on using grammar and vocabulary accurately.Learning outcomes are',
    }
  ]
  

  featuresList: List[] = [
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
  ]
  singleScientistItem1: ScientistItem1[] = [
    {
        img: "assets/img/managing-teen.jpg"
    }
]
singleScientistItem2: ScientistItem2[] = [
    {
        img: "assets/img/desk.jpg"
    }
]
singleScientistItem3: ScientistItem3[] = [
    {
        img: "assets/img/118053918_m.jpg"
    }
]
scientistSectionTitle: SectionTitle[] = [
    {
        subTitle: 'About',
        title: 'we guarantee that we will make you fluent in English in few months. ',
        paragraphText1: 'Improve your knowledge of the English language and pronunciation and practice your speaking and vocabulary with our video lessons. Choose your English course level from the list below and start learning online today. Take any of our high quality online English lessons available 24/7 and improve your English speaking skills along with your grammar, reading and writing.',
        paragraphText2: 'All our courses have, as one of the key objectives, the significant improvement of students’ speaking skills.these classes is clearly different, students universally need to improve their English speaking ability to be able to compete successfully in whatever work arena they choose to put themselves into.',
        link: 'team-1',
        linkText: 'About Us',
        linkIcon: 'flaticon-view'
    }
]
  ngOnInit(): void {
  }


}
class Image {
  img: string;
}
class Content {
  subTitle: string;
  title: string;
  paragraphText1: string;
}
class List {
  icon: string;
  title: string;
  subTitle: string;
}
class Text {
  title : string;
  paragraphText : string;
  paragraphText1 : string;

  
}

class ScientistItem1 {
  img : string;
  }
  class ScientistItem2 {
  img : string;
  }
  class ScientistItem3 {
  img : string;
  }
  class SectionTitle {
  subTitle : string;
  title : string;
  paragraphText1 : string;
  paragraphText2 : string;
  link : string;
  linkText : string;
  linkIcon : string;
  }

