import { Component, OnInit, ViewChild } from '@angular/core';
import { form } from '../model/form.model';
import { FormDataService } from '../form-data.service';

@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  form = new form()
  dataarray: any = [];

  constructor( public FormDataService: FormDataService ) { }


  ngOnInit(): void {
    this.dataarray = (this.FormDataService.dataarray)

    console.log(this.dataarray)
  }

  addForm(){
    this.FormDataService.addForm();
    // this.form = new form()
    // this.dataarray.push(this.FormDataService.setForm())
  }

  removeForm(index){
    this.FormDataService.resmoveForm(index)
  }

  onsubmit(){

    this.FormDataService.saveData();
  }

}
