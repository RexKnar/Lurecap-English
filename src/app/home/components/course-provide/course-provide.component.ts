import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-course-provide',
  templateUrl: './course-provide.component.html',
  styleUrls: ['./course-provide.component.scss']
})
export class CourseProvideComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sectionTitle: sectionTitleContent[] = [
    {
        subTitle: "We Provide",
        title: 'What will you learn?',
        paragraphText: 'The ability to express your ideas better, in both spoken and written forms, with more accuracy.'
    }
]
singleServicesItem: ServicesItem[] = [
    {
        icon: 'assets/img/services/icon1.png',
        title: 'Speaking Skills ',
        paragraphText: 'Everyday conversations, e.g. workplace interactions, travelling, communicating with friends, etc.',
        btnIcon: 'flaticon-right',
        btnText: 'Read More',
        link: 'single-services-2'
    },
    {
        icon: 'assets/img/services/icon2.png',
        title: 'Beginner-level Grammar and Vocabulary ',
        paragraphText: 'Adjectives, Adverbs, Vocabulary for Routine Use',
        btnIcon: 'flaticon-right',
        btnText: 'Read More',
        link: 'single-services-2'
    },
    {
        icon: 'assets/img/services/icon3.png',
        title: 'Listening Skills ',
        paragraphText: 'For Lectures, Presentations, Interviews,  workplace interactions, communicating with friends, etc.',
        btnIcon: 'flaticon-right',
        btnText: 'Read More',
        link: 'single-services-2'
    }
]

}
class sectionTitleContent {
subTitle : string;
title : string;
paragraphText : string;
}
class ServicesItem {
icon : string;
title : string;
paragraphText : string;
btnIcon : string;
btnText : string;
link : string;
}
