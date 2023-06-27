import { Component, Input, OnInit } from '@angular/core';
import { userData } from 'src/model/userData.model';
import { contact } from 'src/services/contact.service';

@Component({
  selector: 'app-liste-contact',
  templateUrl: './liste-contact.component.html',
  styleUrls: ['./liste-contact.component.css']
})


export class ListeContactComponent implements OnInit {
  constructor(private listeContact : contact){}
 tab!:userData[];

  ngOnInit(): void {
    this.tab = this.listeContact.getContacts();
  }

}


