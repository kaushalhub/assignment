import { Injectable } from '@angular/core';
import { form } from '.././app/model/form.model';

@Injectable({
  providedIn: 'root'
})
export class FormDataService {

  form = new form()
  dataarray: any = [{...form}];
  tableArray:any = [];

  constructor() { }
    setForm(){
      return this.form
    }

    getFormData() {
      return this.dataarray = JSON.parse(localStorage.getItem('Forms'))
    }

    setFormData(){
      
      this.dataarray = JSON.parse(localStorage.getItem('Forms'))
      console.log(this.dataarray)
    }

    addForm(){
      this.dataarray.push(new form())
    }

    resmoveForm(index){
      this.dataarray.splice(index, 1)
    }

    saveData(){
    console.log(this.dataarray);
    this.dataarray = Object.assign(this.dataarray);
    localStorage.setItem('Forms', JSON.stringify(this.dataarray))
    this.tableArray = this.dataarray
    this.dataarray = [{...form}]
    }

    getTableData(){
      this.tableArray = JSON.parse(localStorage.getItem('Forms'))
    }

}
