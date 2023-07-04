import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  isNavOpen = false;
  constructor() { }

  ngOnInit(): void {
  }

  toggleNav(): void {
    this.isNavOpen = !this.isNavOpen;
  }

}
