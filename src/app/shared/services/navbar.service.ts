import { Injectable, HostListener, Inject } from "@angular/core";
import { BehaviorSubject, Observable, Subscriber } from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class NavbarService {

  constructor() { }


  MENUITEMS: Menu[] = [
    {
      path: "",
      title: "Home",
      icon: "home",
      type: "parent",
      badgeType: "primary",
      active: false,
      // children: [
      //   { path: "/home", title: "Edit Banner", type: "link", active: false, },
      //   { path: "/settings/edit-slider", title: "Edit Slider", type: "link", active: false, },
      // ],
    },
    {
      path: "/about-us",
      title: "About",
      icon: "about",
      type: "link",
      badgeType: "primary",
      active: false,
    },
    {
      path: "/courses",
      title: "Courses",
      icon: "course",
      type: "link",
      badgeType: "primary",
      active: false,
    },
    {
      path: "/community",
      title: "Community",
      icon: "community",
      type: "link",
      badgeType: "primary",
      active: false,
    },
    {
      path: "/contact-page",
      title: "Contact",
      icon: "contact",
      type: "link",
      badgeType: "primary",
      active: false,
    }
  ];

  items = new BehaviorSubject<Menu[]>(this.MENUITEMS);
}

export interface Menu {
  path?: string;
  title?: string;
  icon?: string;
  type?: string;
  badgeType?: string;
  badgeValue?: string;
  active?: boolean;
  bookmark?: boolean;
  children?: Menu[];
}
