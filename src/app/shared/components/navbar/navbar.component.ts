import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Menu, NavbarService } from '../../services/navbar.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss'],
})
export class NavbarComponent implements OnInit {
  public menuItems: Menu[];
  public url: any;
  public fileurl: any;

  constructor(private router: Router, public navServices: NavbarService) {
    this.navServices.items.subscribe((menuItems) => {
      this.menuItems = menuItems;
      this.router.events.subscribe((event) => {
        if (event instanceof NavigationEnd) {
          menuItems.filter((items) => {
            if (items.path == event.url) {
              this.setNavActive(items);
            }
            if (!items.children) {
              return false;
            }
            items.children.filter((subItems) => {
              if (subItems.path === event.url) {
                this.setNavActive(subItems);
              }
              if (!subItems.children) {
                return false;
              }
              subItems.children.filter((subSubItems) => {
                if (subSubItems.path === event.url) {
                  this.setNavActive(subSubItems);
                }
              });
            });
          });
        }
      });
    });
  }

  ngOnInit(): void {}

  // Active Nave state
  setNavActive(item) {
    this.menuItems.filter((menuItem) => {
      if (this.menuItems && this.menuItems.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem != item) {
        menuItem.active = false;
      }
      if (menuItem.path == item.path) {
        menuItem.active = true;
      }
      if (menuItem.children && menuItem.children.includes(item)) {
        menuItem.active = true;
      }
      if (menuItem.children) {
        menuItem.children.filter((submenuItems) => {
          if (submenuItems.path == item.path) {
            menuItem.active = true;
            submenuItems.active = true;
          }
        });
      }
    });
  }
}
