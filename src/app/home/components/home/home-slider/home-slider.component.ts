import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-slider',
  templateUrl: './home-slider.component.html',
  styleUrls: ['./home-slider.component.scss']
})
export class HomeSliderComponent implements OnInit {

  constructor() { }

  singleCaseStudyItem: singleCaseStudyItemContent[] = [
    {
        subTitle: 'Case study #1',
        title: 'Data Science in Pharmaceutical Industries',
        paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
        link: 'case-studies-details-1',
        linkText: 'Details More',
        linkIcon: 'flaticon-view',
        img: 'assets/img/case-study/img1.jpg'
    },
    {
        subTitle: 'Case study #2',
        title: 'Mathematics, Advanced Statistics in Python',
        paragraphText1: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.',
        paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Quis ipsum suspendisse ultrices gravida.',
        link: 'case-studies-details-1',
        linkText: 'Details More',
        linkIcon: 'flaticon-view',
        img: 'assets/img/case-study/img2.jpg'
    }
]

  ngOnInit(): void {
  }

}
class singleCaseStudyItemContent {
subTitle: string;
title: string;
paragraphText1: string;
paragraphText2: string;
link: string;
linkText: string;
linkIcon: string;
img: string;
}
