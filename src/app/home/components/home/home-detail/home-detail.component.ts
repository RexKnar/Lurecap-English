import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home-detail',
    templateUrl: './home-detail.component.html',
    styleUrls: ['./home-detail.component.scss']
})
export class HomeDetailComponent implements OnInit {

    constructor() { }

    ngOnInit(): void {
    }

    ourMissionImage: Image[] = [
        {
            img: 'assets/img/homedetail.png'
        }
    ]
    ourMissionContent: Content[] = [
        {

            subTitle: '',
            title: 'You’ll finally understand every English word you hear ',
            paragraphText1: 'Want to start speaking English from your first lesson? You will! Our lessons take you by the hand and guide you through real English conversations.',
            paragraphText2: 'you’ll gain the skills and confidence to communicate well in English, anywhere in the world.',
            defaultBtnIcon: 'flaticon-right',
            defaultBtnText: 'Enroll Now',
            defaultBtnLink: 'courses',
        }
    ]
    ourMissionList: List[] = [
        {
            icon: 'flaticon-tick',
            title: 'No Textbooks'
        },
        {
            icon: 'flaticon-tick',
            title: 'No Memorization'
        },
        {
            icon: 'flaticon-tick',
            title: 'Audio & Video Lessons '
        },
        {
            icon: 'flaticon-tick',
            title: 'Increase your vocabulary'
        },
        {
            icon: 'flaticon-tick',
            title: 'Personalized Guidance '
        },
        {
            icon: 'flaticon-tick',
            title: 'Git rid of MTI'
        }
    ]

}
class Image {
    img: string;
}
class Content {
    subTitle: string;
    title: string;
    paragraphText1: string;
    paragraphText2: string;
    defaultBtnIcon: string;
    defaultBtnText: string;
    defaultBtnLink: string;
}
class List {
    icon: string;
    title: string;
}