import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  books:any;
  totalBooks: number=10;
  search: Array<any> = [];
  sort!: string;
  constructor(private router:Router) { }

  ngOnInit(): void {
  }

}
