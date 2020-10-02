import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss']
})
export class SignupComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  pageTitleArea: pageTitle[] = [
    {
        title: 'Contact Us'
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

