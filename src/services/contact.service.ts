import { Injectable } from "@angular/core";
import { userData } from "src/model/userData.model";

@Injectable ({
    providedIn:"root"
})

export class contact {
    tab:userData[]=[
        {
          nom:"Jones",
          prenom:"Caellum",
          tel: 55512345,
          mail: "Caellum@jones.com",
          image:"./assets/caellumJones.jpg",
          job:'supplier',
          id:21456
        },
        {
          nom:"Doe",
          prenom:"John",
          tel: 555432019,
          mail: "John@Doe.com",
          image:"/assets/johnDoe.jpg",
          job:"client",
          id:75298
        },
        {
          nom:"Harry",
          prenom:"Hartley",
          tel: 555678234,
          mail: "Harry@hartley.com",
          image:"/assets/harryHartley.jpg",
          job:"client",
          id:93568
        },
        {
          nom:"Smith",
          prenom:"Jane",
          tel: 555154783,
          mail: "Jane@smith.com",
          image:"/assets/janeSmith.jpg",
          job:"client",
          id:12903
        }
      ]
    getContacts():userData[] {
        return this.tab;
    }
    getOneContact(id:number):userData{
      for(let i=0;i<this.tab.length; i++) {
        if (this.tab[i].id === id)
        return this.tab[i];
      }
      return new userData();
    }
}