import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-about-us-why',
    templateUrl: './about-us-why.component.html',
    styleUrls: ['./about-us-why.component.scss']
})
export class AboutUsWhyComponent implements OnInit {

    constructor() { }
    whyChooseUsContent: Content[] = [
        {
            title: 'Why Choose Us?',
            paragraphText1: 'Speak Refine is an English language training institute that thrives to provide proper language training to candidates. The institute is run by well-trained and dedicated teaching staff that aims to offer the best possible environment to students. When it comes to the fee structure, EngMates offers great discounts and affordable fee. The institute is result oriented and is identified because of their proud students who hold proof for their dedication in professional positions they are in. The institute has small groups and individual attention is given to each and every student.',
            paragraphText2: 'The learning system is based on practical training. The trained teachers do exact individual analysis and provide training according to students grasping level. The batch consists of well behaved, educated, disciplined students so that all students get positive learning atmosphere. The master trainer arranges doubt clearing sessions for students whenever needed.',
            linkIcon: 'flaticon-right',
            linkText: 'More About Us',
            link: 'about-us-1'
        }
    ]
    ourBrandPartnersList: List[] = [
        {
            title: 'Why We Are Special',
        }
    ]
    brandPartnersImg: Image[] = [
        {
            img: 'assets/img/partner/img1.png'
        },
        {
            img: 'assets/img/partner/img2.png'
        },
        {
            img: 'assets/img/partner/img3.png'
        },
        {
            img: 'assets/img/partner/img4.png'
        },
        {
            img: 'assets/img/partner/img5.png'
        },
        {
            img: 'assets/img/partner/img6.png'
        }
    ]
    featuresList: Lists[] = [
        {
            icon: 'flaticon-tick',
            title: 'Experts at Teaching Online'
        },
        {
            icon: 'flaticon-tick',
            title: 'Proven Career Outcomes'
        },
        {
            icon: 'flaticon-tick',
            title: 'Practice with Native English Speakers'
        },
        {
            icon: 'flaticon-tick',
            title: 'Learn From 20+ Years Experts'
        }
    ]


    ngOnInit(): void {
    }

}
class Content {
    title: string;
    paragraphText1: string;
    paragraphText2: string;
    linkIcon: string;
    linkText: string;
    link: string;
}
class List {
    title: string;
}
class Image {
    img: string;
}
class Lists {
    icon: string;
    title: string;
}
