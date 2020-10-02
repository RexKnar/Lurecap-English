import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home-brief',
  templateUrl: './home-brief.component.html',
  styleUrls: ['./home-brief.component.scss']
})
export class HomeBriefComponent implements OnInit {

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
        subTitle: 'About',
        title: 'we guarantee that we will make you fluent in English in few months. ',
        paragraphText1: 'Improve your knowledge of the English language and pronunciation and practice your speaking and vocabulary with our video lessons. Choose your English course level from the list below and start learning online today. Take any of our high quality online English lessons available 24/7 and improve your English speaking skills along with your grammar, reading and writing.',
        paragraphText2: 'All our courses have, as one of the key objectives, the significant improvement of students’ speaking skills.these classes is clearly different, students universally need to improve their English speaking ability to be able to compete successfully in whatever work arena they choose to put themselves into.',
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
