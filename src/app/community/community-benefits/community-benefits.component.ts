import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-community-benefits',
  templateUrl: './community-benefits.component.html',
  styleUrls: ['./community-benefits.component.scss']
})
export class CommunityBenefitsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  sectionTitle: sectionTitleContent[] = [
    {
        title: 'We provide you an amazing way to learn English',
        paragraphText: 'Speak Refine community provides real conversations. No boring exercises, because we know you need to speak in order to become better.'
    }
]
singleFeaturedServicesBox: featuredServicesContent[] = [
    {
        icon: 'flaticon-analysis',
        title: 'Worldwide learning community',
        paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        linkIcon: 'flaticon-right',
        linkText: 'Read More',
        link: 'services-details'
    },
    {
        icon: 'flaticon-structure',
        title: 'Free account for our students',
        paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        linkIcon: 'flaticon-right',
        linkText: 'Read More',
        link: 'services-details'
    },
    {
        icon: 'flaticon-idea',
        title: 'Fully dedicated environment',
        paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        linkIcon: 'flaticon-right',
        linkText: 'Read More',
        link: 'services-details'
    },
    {
        icon: 'flaticon-analysis',
        title: ' A powerful matchmaking algorithm.',
        paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        linkIcon: 'flaticon-right',
        linkText: 'Read More',
        link: 'services-details'
    },
    {
        icon: 'flaticon-structure',
        title: 'Take advantage of conversation practise',
        paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        linkIcon: 'flaticon-right',
        linkText: 'Read More',
        link: 'services-details'
    },
    {
        icon: 'flaticon-idea',
        title: 'Enjoy the learning experience on mobile',
        paragraphText: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.',
        linkIcon: 'flaticon-right',
        linkText: 'Read More',
        link: 'services-details'
    }
]

}
class sectionTitleContent {
title : string;
paragraphText : string;
}
class featuredServicesContent {
icon : string;
title : string;
paragraphText : string;
linkIcon : string;
linkText : string;
link : string;
}
