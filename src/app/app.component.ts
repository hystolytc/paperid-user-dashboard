import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { UserDetailsComponent } from './user-details/user-details.component'
import { UserListComponent } from "./user-list/user-list.component";
import { ConfigService } from "./config/config.service";
import { HeaderComponent } from "./components/header/header.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, UserListComponent, UserDetailsComponent, HeaderComponent],
  providers: [ConfigService],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent implements OnInit {
  title = 'side-modal';
  showModal = false
  loadingDataList = true
  loadingUserDetail = true
  dataList: Record<string, any>[] = []
  userDetail: Record<string, any> = {}

  constructor(private configService: ConfigService) {}

  ngOnInit(): void {
    this.configService.getUsers().subscribe(data => {
      this.loadingDataList = false
      this.dataList = data
    })
  }

  onShowModal(data?: Record<string, any>) {
    if (!this.showModal) {
      this.loadingUserDetail = true
      this.onFetchUserDetail(data?.id)
      this.showModal = true
      return
    }

    this.userDetail = {}
    this.showModal = false
  }

  onFetchUserDetail(userId: number) {
    this.configService.getUsersDetail(userId).subscribe(data => {
      this.userDetail = data
      this.loadingUserDetail = false
    })
  }
}
