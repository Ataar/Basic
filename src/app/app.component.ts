import { Component } from '@angular/core';
import { Iperson } from './shared/models/persons';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'Basic';

persons : Array<Iperson> =[
{
  fname :'Akash',
  lname : 'Munde',
  email : 'Akash@gmail.com',
  age :20,
  contact :7846356561
},

{
  fname :'Vinod',
  lname : 'Bhale',
  email : 'Vinod@gmail.com',
  age :35,
  contact :9878546298
},

{
  fname :'Zaid',
  lname : 'Zargar',
  email : 'Zaid@gmail.com',
  age :40,
  contact :9846576293
},
{
  fname :'Shreya',
  lname : 'Agarwal',
  email : 'Shreya@gmail.com',
  age :32,
  contact :9724567430
}

]

persons01: Array<Iperson> =[
  {
    fname :'Vishnu',
    lname : 'Munde',
    email : 'Akash@gmail.com',
    age :20,
    contact :7846356561
  },
  
  {
    fname :'Vinod',
    lname : 'Bhale',
    email : 'Vinod@gmail.com',
    age :35,
    contact :9878546298
  },
  
  {
    fname :'Zaid',
    lname : 'Zargar',
    email : 'Zaid@gmail.com',
    age :40,
    contact :9846576293
  },
  {
    fname :'Shreya',
    lname : 'Agarwal',
    email : 'Shreya@gmail.com',
    age :32,
    contact :9724567430
  }
  
  ]
  data : Array<string> =["Javascript", "Angular", " HTML", "CSS"]


  
}
