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
  aboutText: Text[] = [
    {
        title: 'Our Vision',
        paragraphText: 'Expanding possibilities, strengthening communities.',
       paragraphText1: 'To become one of the leading institutes in the U.S. by setting standards of excellence in innovative curriculum design, teaching, professional development, and cross-cultural understanding.'
    },
    {
        title: 'Our Mission',
        paragraphText: 'To meet lifelong learning needs by offering high quality, accessible, innovative and responsive education and training programs to learners of all ages by building on the strengths of and collaborating with the resources of the University and the community.',
       paragraphText1: 'To provide quality English language instruction to all individuals who have chosen English as their medium of communication for academic or professional pursuits and to promote international and intercultural understanding.'
        
    },
    
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
class Text {
  title : string;
  paragraphText : string;
  paragraphText1 : string;

  
}



