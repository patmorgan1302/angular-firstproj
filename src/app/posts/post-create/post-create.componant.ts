import { Component } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.componant.html',
  styleUrls: ['./post-create.componant.css']
})
export class PostCreateComponant {
  enteredValue = '';
  newPost = ' ';

  onAddPost() {
    this.newPost = this.enteredValue
  }
}
