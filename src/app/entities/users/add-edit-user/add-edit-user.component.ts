import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.scss'],
})
export class AddEditUserComponent implements OnInit {
  display: boolean = true;

  constructor() {}

  ngOnInit(): void {
    console.log('asdasdds');
  }
}
