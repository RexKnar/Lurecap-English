import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-declare',
  templateUrl: './community-declare.component.html',
  styleUrls: ['./community-declare.component.scss']
})
export class CommunityDeclareComponent implements OnInit {

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
        title: 'Declaration',
        paragraphText1: 'If anyone asks you to meet them in person, then only do so in a public place, and go together with a responsibile adult who you know and trust.',
        paragraphText2: 'Speak Refine and its Directors, Employees, or collaborators may not be held responsible for any issues, or activity held on, or outwith the speakrefine.com website.',
        defaultBtnIcon: 'flaticon-right',
        defaultBtnText: 'Enroll Now',
        defaultBtnLink: 'courses'
    }
]
featuresList: List[] = [
    {
        icon: 'flaticon-tick',
        title: 'Avoid talking about sensitive subjects such as caste, Politics, Religion etc.. '
    },
    {
        icon: 'flaticon-tick',
        title: 'Never exchange credit card details or any other forms of payment.'
    },
    {
        icon: 'flaticon-tick',
        title: 'Do not give your home address to others. '
    },
    {
        icon: 'flaticon-tick',
        title: 'Be careful not to give too much personal information. '
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
icon : string;
title : string;
}
