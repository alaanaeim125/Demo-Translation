import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-apple',
  templateUrl: './apple.component.html',
  styleUrls: ['./apple.component.css']
})
export class AppleComponent implements OnInit {

  data:any = [];
  users: any[]  [];
  admins: any[] = [];

  constructor() { }

  ngOnInit(): void {
  }

}
