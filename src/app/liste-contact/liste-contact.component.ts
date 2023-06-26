import { Component, Input, OnInit } from '@angular/core';
import { userData } from 'src/model/userData.model';
import { contact } from 'src/services/contact.service';

@Component({
  selector: 'app-liste-contact',
  templateUrl: './liste-contact.component.html',
  styleUrls: ['./liste-contact.component.css']
})


export class ListeContactComponent implements OnInit {
  
 tab!:userData[];
  constructor(private listeContact : contact){}

  ngOnInit(): void {
    let infoContact = 1;
    this.tab = this.listeContact.getContacts();
  }

}


