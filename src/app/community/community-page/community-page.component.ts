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
            img: 'assets/img/community/1.jpg'
        }
    ];
    projectStartContent: Content[] = [
        {
            title: 'Community',
            paragraphText: 'Designed by English experts, our online English classes and courses provide a safe, inclusive learning community. Our highly qualified teachers help learners, adults as well children improve their English speaking, listening, reading and writing skills online, build their confidence and achieve their goals.',
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
