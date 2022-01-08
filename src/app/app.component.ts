import { Component } from '@angular/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  imgParent = 'https://static.platzi.com/media/user_upload/bike-143dcfe9-3190-49fd-88f7-d3bf74182072.jpg';
  showImage = true;



  onLoaded(img: string){
    console.log('Log Padre', img);
  }

  toggleImage(){
    this.showImage = !this.showImage;
  }
}
