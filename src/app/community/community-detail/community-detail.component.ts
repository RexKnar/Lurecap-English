import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-detail',
  templateUrl: './community-detail.component.html',
  styleUrls: ['./community-detail.component.scss']
})
export class CommunityDetailComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
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
        subTitle: 'community',
        title: 'Talk to people! Make Friends! ',
        paragraphText1: 'Speak Refine community provides real conversations. No boring exercises, because we know you need to speak in order to become better.',
        paragraphText2: 'Here, anyone can learn and practice speaking in front of others. It is a great place to get more confidence for speaking with people in English. It is not an English learning community, but rather it is a general speaking practice community.It’s simple: if you want to practice speaking English, the best way to do it is to practice with a real person. It is a very lively community where you can easily find a group of people to practice your English with. Connect with others as often as you like to practice when and where you prefer!',
        link: 'team-1',
        linkText: 'About Us',
        linkIcon: 'flaticon-view'
    }
]

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
