import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-banner',
  templateUrl: './home-banner.component.html',
  styleUrls: ['./home-banner.component.scss']
})
export class HomeBannerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  mainBannerContent: Content[] = [
    {
        title: 'Do you want to speak better English? ',
        paragraphText: 'Improve your knowledge of the English language and pronunciation and practice your speaking and vocabulary with our video lessons. ',
        defaultBtnIcon: 'flaticon-structure',
        defaultBtnText: 'Enroll Now',
        defaultBtnLink: 'about-us-1'
    }
]

}
class Content {
title : string;
paragraphText : string;
defaultBtnIcon : string;
defaultBtnText: string;
defaultBtnLink : string;

}
