import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {

  constructor() { }

  aboutImage: Image[] = [
    {
        img: 'assets/img/about/img5.jpg'
    }
]
aboutContent: Content[] = [
    {
        subTitle: 'About Us',
        title: 'The only way to learn spoken English is to speak English',
        paragraphText1: 'Our course is designed to help you practice and fine-tune your written and spoken communication skills. It has a specific focus on using grammar and vocabulary accurately.Learning outcomes are',
        paragraphText2: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna.'
    }
]
featuresList: List[] = [
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
]
aboutText: Text[] = [
    {
        title: 'Our History',
        paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication.',
        featuresList1: 'Activate Listening',
        featuresList2: 'Brilliant minds',
        featuresList3: 'Better. Best. Wow!',
        featuresList4: 'Branding it better!',
        icon: 'flaticon-tick'
    },
    {
        title: 'Our Mission',
        paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication.',
        featuresList1: 'Creating. Results.',
        featuresList2: 'Expect more',
        featuresList3: 'Good thinking',
        featuresList4: 'In real we trust',
        icon: 'flaticon-tick'
    },
    {
        title: 'Who we are',
        paragraphText: 'Real innovations and a positive customer experience are the heart of successful communication.',
        featuresList1: 'Stay real. Always.',
        featuresList2: 'We have you covered',
        featuresList3: 'We turn heads',
        featuresList4: 'Your brand, promoted',
        icon: 'flaticon-tick'
    }
]
  ngOnInit(): void {
  }


}
class Image {
img: string;
}
class Content {
subTitle: string;
title: string;
paragraphText1: string;
paragraphText2: string;
}
class List {
icon: string;
title: string;
subTitle: string;
}
class Text {
title: string;
paragraphText: string;
featuresList1: string;
featuresList2: string;
featuresList3: string;
featuresList4: string;
icon: string;
}


