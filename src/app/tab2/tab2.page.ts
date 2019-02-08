import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

    username: string = ""
    password: string = ""

    constructor(){}
      ngOnInit(){
        }

      logging(){
        const {username, password} = this  
      }
}
