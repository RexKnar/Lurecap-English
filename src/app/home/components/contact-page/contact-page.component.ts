import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-contact-page',
  templateUrl: './contact-page.component.html',
  styleUrls: ['./contact-page.component.scss']
})
export class ContactPageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pageTitleArea: pageTitle[] = [
    {
        title: 'Contact Us'
    }
]
/**
contactInfoBox1: InfoBox1[] = [
    {
        icon: 'bx bx-map',
        title: 'Our Address',
        location: '5-306, Karungal Road, Marthandam.'
    }
]
contactInfoBox2: InfoBox2[] = [
    {
        icon: 'bx bx-phone-call',
        title: 'Contact',
        number: '+91-94874 27429',
        email: 'academy@speakrefine.com'
    }
]
contactInfoBox3: InfoBox3[] = [
    {
        icon: 'bx bx-time-five',
        title: 'Hours of Operation',
        text1: 'Monday - Friday: 09:00 - 20:00',
        text2: 'Sunday & Saturday: 10:30 - 22:00'
    }
]*/

contactInfoBox2: InfoBox2[] = [
    {
        icon: 'bx bx-phone-call',
        title: 'Contact',
        number: '+91-94874 27429',
        email: 'academy@speakrefine.com'
    }
]

sectionTitle: sectionTitleContent[] = [
    {
        
        title: 'Need to Share Your Views?',
        paragraphText: 'We would Love to Hear from you !'
    }
]
contactImage: Image[] = [
    {
        img: 'assets/img/contact.png'
    }
]

}
class pageTitle {
title : string;
}
class InfoBox1 {
icon : string;
title : string;
location : string;
}
class InfoBox2 {
icon : string;
title : string;
number : string;
email : string;
}
class InfoBox3 {
icon : string;
title : string;
text1 : string;
text2 : string;
}

class sectionTitleContent {

title : string;
paragraphText : string;
}
class Image {
img : string;
}
