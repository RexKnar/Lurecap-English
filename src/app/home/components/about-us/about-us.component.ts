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



