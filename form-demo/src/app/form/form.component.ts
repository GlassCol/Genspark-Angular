import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

  submit(Login: any) {
    console.log("Form Submitted", Login)
  }

  user = {
    id: 1,
    email: "johnSmith@google.com",
    password: "test",
    phone: 678-867-5309
  }

  ngOnInit(): void {
  }

}
