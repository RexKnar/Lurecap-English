import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-value',
  templateUrl: './about-value.component.html',
  styleUrls: ['./about-value.component.scss']
})
export class AboutValueComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sectionTitle: sectionTitleContent[] = [
    {
        subTitle: "Our Values",
        title: 'To Speak English With Confidence',
        paragraphText: 'Basic tips to enhance your Spoken English skills include; speaking regularly, improving grammar, listening and reading every day, recording your voice to analyse fluency etc.'
    }
]
historyTimeline: TimelineBlock[] = [
    {
        year: '',
        date: '',
        title: 'Our Vision',
        paragraphText1: 'To become one of the leading institutes by setting standards of excellence in innovative curriculum design, teaching, professional development, and cross-cultural understanding.',
        paragraphText:'Expanding possibilities, strengthening communities',
        img: 'assets/img/business.png'
    },
    {
        year: '',
        date: '',
        title: 'Our Mission',
        paragraphText1: 'To meet lifelong learning needs by offering high quality, accessible, innovative and responsive education and training programs to learners of all ages by building on the strengths of and collaborating with the resources of the University and the community.',
        paragraphText:'To provide quality English language instruction to all individuals who have chosen English as their medium of communication for academic or professional pursuits and to promote international and intercultural understanding.',
        img: 'assets/img/illustration.png'
    }
]

}
class sectionTitleContent {
subTitle : string;
title : string;
paragraphText : string;
}
class TimelineBlock {
year : string;
date : string;
title : string;
paragraphText : string;
paragraphText1 : string;
img : string;
}
