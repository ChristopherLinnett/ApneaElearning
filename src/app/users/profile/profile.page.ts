import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.page.html',
  styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {
email;
firstname;
lastname;
password;
editMode = false

  constructor() { }

  ngOnInit() {
  }

}
