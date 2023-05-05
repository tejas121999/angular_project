import { Component } from '@angular/core';
import { SecondpageComponent } from '../secondpage/secondpage.component';
import { ApiServiceService } from '../api-service.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.scss']
})
export class HomepageComponent {

  array_new: any = []
  getPostData: any = []
  constructor(
    private secondPage: SecondpageComponent,
    private services: ApiServiceService
  ) { }

  ngOnInit(): void {
    this.getAllPost()
  }

  getAllPost() {
    var temp = {
      "limit": 10,
      "offset": 0
    }
    this.services.getPost(temp).subscribe({
      next: (res: any) => {
        console.log(res.getPost.rows)
        this.getPostData = res.getPost.rows
      }, error: (e: any) => {
        console.log(e)
      }
    })
  }
}
