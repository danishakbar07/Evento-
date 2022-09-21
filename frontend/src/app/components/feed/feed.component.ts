import { Component, OnInit } from '@angular/core';
import { TutorialService } from 'src/app/services/details.service';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
  styleUrls: ['./feed.component.scss']
})
export class FeedComponent implements OnInit {
  panelOpenState:boolean=false
  events:string[]=["Birthday","Marriage","Meet-up"]
  constructor(private uiService:TutorialService) { }

  ngOnInit(): void {
  }
 getData(){
  this.uiService.getUser().subscribe((value)=>{
    console.log(value);
    
  })

  
 }
}
