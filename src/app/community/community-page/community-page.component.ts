import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-community-page',
    templateUrl: './community-page.component.html',
    styleUrls: ['./community-page.component.scss']
})
export class CommunityPageComponent implements OnInit {

    constructor() { }

    projectStartImage: Image[] = [
        {
            img: 'assets/img/6487-01.png'
        }
    ];
    projectStartContent: Content[] = [
        {
            title: 'Get fluent, quickly ',
            paragraphText: 'The Speak Refine Community is the best way to practice speaking in English.We Provide A Better Language Exchange platform for our students.Learn how to speak fluently by talking with people like you.',
            defaultBtnIcon: 'flaticon-web',
            defaultBtnText: 'Get Started',
            defaultBtnLink: 'contact'
        }
    ];
    singleFunfactsBox: Funfacts[] = [
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
    ];

    ngOnInit(): void {
    }

}
class Image {
    img: string;
}
class Content {
    title: string;
    paragraphText: string;
    defaultBtnIcon: string;
    defaultBtnText: string;
    defaultBtnLink: string;
}

class Funfacts {
    icon: string;
    title: string;
    subTitle: string;
}
