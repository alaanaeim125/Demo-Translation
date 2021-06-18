import { IData } from './../../models/data.module';
import { DataService } from './../../services/data.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';

@Component({
  selector: 'app-excel',
  templateUrl: './excel.component.html',
  styleUrls: ['./excel.component.css']
})
export class ExcelComponent implements OnInit {

  comments: IData[] = [];
  constructor(private dataServ: DataService) { }

  ngOnInit(): void {
    this.getAllData()
  }

  getAllData() {
    this.dataServ.getAllData().subscribe(res => {
      this.comments = res;
    }, err => console.log(err))
  }

  downloadFile() {
    this.dataServ.exportAsExcelFile(this.comments, 'sample');
  }

}
