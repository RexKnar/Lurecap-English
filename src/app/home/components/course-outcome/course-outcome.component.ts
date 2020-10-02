import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-outcome',
  templateUrl: './course-outcome.component.html',
  styleUrls: ['./course-outcome.component.scss']
})
export class CourseOutcomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sectionTitle: sectionTitleContent[] = [
    {
        subTitle: "Outcomes",
        title: 'What will you gain from this course',
        paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
    }
]
processImage: Image[] = [
    {
        img: 'assets/img/outcome.jpg'
    }
]
processContent: Content[] = [
    {
        img: 'assets/img/People-Flat.png',
        title: 'A more confident YOU!',
        number: '1'
    },
    {
        img: 'assets/img/People-Flat.png',
        title: 'The ability to express your ideas better!',
        number: '2'
    },
    {
        img: 'assets/img/People-Flat.png',
        title: 'Understand conversations better!',
        number: '3'
    },
    {
        img: 'assets/img/People-Flat.png',
        title: 'Improved Grammar and Vocabulary!',
        number: '4'
    },
    {
        img: 'assets/img/People-Flat.png',
        title: 'No Mother Tougue Influence!',
        number: '5'
    },
    {
        img: 'assets/img/People-Flat.png',
        title: 'Improved pronunciation and fluency!',
        number: '6'
    }
]

}
class sectionTitleContent {
subTitle : string;
title : string;
paragraphText : string;
}
class Image {
img: string;
}
class Content {
img: string;
title : string;
number : string;
}
