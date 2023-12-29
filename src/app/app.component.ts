import { Component } from '@angular/core';
 
declare var showCard:boolean;
 
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  name: string ='';
  showGreetingsInsideAppFromWebComponent = false;
  showCard:boolean = showCard
 
  onShowGreetings({detail}: any){
   this.showGreetingsInsideAppFromWebComponent = detail.showGreetings;
  }
}