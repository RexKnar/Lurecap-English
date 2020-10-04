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
            paragraphText1: 'The Spoken English Training Program at Speak Refine is a comprehensive course suite that focuses on communication skills in addition to reading, writing and listening  skills of the English language. Our Expert Mentors provide you in-depth training in Vocabulary, Pronunciation, and Grammar to strengthen your communication skills which aid you in communicating English fluently. Expertly crafted Spoken English Online Course modules to cater to global industry standards Improved pronunciations and implement different accents while you talk A curriculum complied with the perspective to enrich your vocabulary and make you Speak confidently in English',
            paragraphText2: 'Designed by English experts, our online English classes and courses provide a safe, inclusive learning community. Our highly qualified teachers help learners, adults as well children improve their English speaking, listening, reading and writing skills online, build their confidence and achieve their goals.',
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
