import { Component, Input, OnInit } from '@angular/core';
import { userData } from 'src/model/userData.model';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit{
  @Input() contact!:userData;
  ngOnInit(): void {
    // this.contact = new userData();
    // this.contact.nom="Jones";
    // this.contact.prenom="Caellum";
    // this.contact.tel=55512345;
    // this.contact.mail="Caellum@jones.com";
    // this.contact.image="/assets/img.jpg";

  }

}
