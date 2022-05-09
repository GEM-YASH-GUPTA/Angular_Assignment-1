import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-driven',
  templateUrl: './template-driven.component.html',
  styleUrls: ['./template-driven.component.css']
})
export class TemplateDrivenComponent implements OnInit {

  
  constructor() { }
  formData = []; 
  // @ViewChild('userForm') Forms: NgForm;
  ngOnInit(): void {
  }
  onSubmit(data : any){
    console.warn(data);
  }
  user = {
    username: "",
    college: "",
    cgpa: "",
    year: "",
    doj:"",
    skills: "",
    file :""
  }
  array:any=[];
  // objectKeys=Object.keys;
  submitted = false;
  display_table =false;
  submitdata(data:any){
      if(data.valid){
        // console.log("yash");
        // this.formData.push(this.userForm.value)
        // var array=[data];
        this.submitted=true;
        // this.array.push(data.value)
      //   // console.log(this.array)

      //   let values = data.value;
        

      //   console.log(this.array);
      //   let obj: any = {
          
      //     username: values.username,
      //     college:values.college,
      //     cgpa: values.cgpa,
      //     year:values.year,
      //     doj:values.doj,
      //     skills: values.skills,
      //     file :values.file
      //   };
      // //  let  use = {
      // //     username: "",
      // //     college: "",
      // //     cgpa: "",
      // //     year: "",
      // //     doj:"",
      // //     skills: "",
      // //     file :""
        // }
    
      //   this.array.push(Object.values(obj));
        // data.reset();
      //   console.log(this.array)
      // this.adddata()
      }
      else{
        alert("Please Enter Correct Details");
      }
  }

  adddata(data:any){
    this.submitted=false;
    this.display_table=true;
        // this.array.push(data.value)
        // console.log(this.array)

        let values = data.value;
        

        console.log(this.array);
        let obj: any = {
          
          username: values.username,
          college:values.college,
          cgpa: values.cgpa,
          year:values.year,
          doj:values.doj,
          skills: values.skills,
          file :values.file
        };
      //  let  use = {
      //     username: "",
      //     college: "",
      //     cgpa: "",
      //     year: "",
      //     doj:"",
      //     skills: "",
      //     file :""
      //   }
    
        this.array.push(Object.values(obj));
        // data.reset();
        console.log(this.array)
        data.reset();
  }
}
