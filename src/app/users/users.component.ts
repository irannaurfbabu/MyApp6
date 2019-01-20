import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
// import { trigger,style,transition,animate,keyframes,query,stagger } from '@angular/animations';

import { DataService } from './../data.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
  // animations: [
  //   trigger('listStagger',[
  //     transition('* <=> *',[
  //       query(':enter',[
  //         style({opacity: 0, trnasform: 'translateY(-15px)'}),
  //         stagger('50ms',
  //         animate('550ms ease-out',
  //           style({opacity: 1, trnasform: 'translateY(0px)'})))
  //       ], {optional: true}),
  //       query(':leave', animate('550ms', style({opacity: 0})), {optional: true})
  //     ])
  //   ])
  // ]
})
export class UsersComponent implements OnInit {

  users$: Object;


  constructor(private data: DataService) { }

  ngOnInit() {

    this.data.geUsers().subscribe(
      data => this.users$ = data
    )

  }

}
