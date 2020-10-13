import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-thankyou',
  templateUrl: './thankyou.component.html',
  styleUrls: ['./thankyou.component.scss']
})
export class ThankyouComponent implements OnInit {

  constructor(
    private readonly _router: Router,) { }

  ngOnInit(): void {

    setTimeout(this.redirectPage, 1000);
  }

  public redirectPage()
  {
    this._router.navigate(['/signup']);
    window.open('https://portal.speakrefine.com');
  }
}
