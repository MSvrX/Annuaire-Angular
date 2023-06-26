import { Component, OnInit } from '@angular/core';
import { userData } from 'src/model/userData.model';
import { contact } from 'src/services/contact.service';

@Component({
  selector: 'app-detail-contact',
  templateUrl: './detail-contact.component.html',
  styleUrls: ['./detail-contact.component.css']
})
export class DetailContactComponent implements OnInit {
  contact!:userData;
  tab!:userData[];
  constructor(private listeContact : contact){}
  ngOnInit(): void {

  }


}


