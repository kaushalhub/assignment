import { Component, OnInit } from '@angular/core';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  
  FormData : []
  
  newFinaldata :any = []

  constructor( public FormDataService: FormDataService ) { 
  }

  ngOnInit(): void {
    this.getData()
  }

  getData(){

    // const data = JSON.parse(localStorage.getItem('Forms'))
    // this.FormData = data
    this.FormDataService.getTableData()
  }

  onClick(){
    this.FormDataService.setFormData();
    // var arrayLength = this.FormData.length
    // for(let i = 0; i < arrayLength; i++){
    //  var finalData = JSON.parse(localStorage.getItem('Forms'))[i]
    //  this.newFinaldata = finalData
    //  console.log(this.newFinaldata)
    // }
  }

}
