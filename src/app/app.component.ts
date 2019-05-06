import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataServiceService } from './data-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'GridApp';
  tvshows = {};
  users = [];
  columns = [];
  pages = [];
  apiUsers = [];
  recordsPerPageArray = [5, 10, 15];
  recordsPerPage = 5;
  displayRecords = [];
  startIndex;
  currentPage = 1;
  /**
   *
   */
  constructor(
    private _httpClient: HttpClient,
    private _dataService: DataServiceService
  ) {}
  ngOnInit() {
    this.getData();
  }
  changePage(pageNo: number) {
    console.log(pageNo);
    this.currentPage = pageNo;
    // this.getData();
    console.log(this.currentPage);

    this.startIndex = (pageNo - 1) * this.recordsPerPage;
    this.displayRecords = this.users.slice(
      this.startIndex,
      this.startIndex + this.recordsPerPage
    );
  }
  nextPage() {
    if (this.currentPage < Math.ceil(this.users.length / this.recordsPerPage)) {
      this.changePage(this.currentPage + 1);
    }
  }
  previousPage() {
    console.log(this.currentPage);

    if (this.currentPage > 1) {
      this.changePage(this.currentPage - 1);
    }
  }
  displayingUsers() {
    // return this.users;
    return this.displayRecords;
  }
  getData() {
    this._dataService.getData().subscribe(data => {
      console.log(data);
      this.users = data;
      this.columns = Object.keys(data[0]);
      this.displayRecords = data.slice(0, 5);
      this.pages = Array.from(
        Array(Math.ceil(data.length / this.recordsPerPage)).keys()
      ).map(value => value + 1);

      console.log(data.length / this.recordsPerPage);
    });
  }
  changeRecordsPerPages(data: any) {
    this.recordsPerPage = data;
    this.displayRecords = this.users.slice(0, this.recordsPerPage);
    // this.pages = [...Array(Math.ceil(this.users.length / this.recordsPerPage))];
    this.pages = Array.from(
      Array(Math.ceil(this.users.length / this.recordsPerPage)).keys()
    ).map(value => value + 1);
  }
}
