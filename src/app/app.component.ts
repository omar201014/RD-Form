import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'reactiveForm-assignment';
  projectForm:FormGroup;


  ngOnInit(): void {
    this.projectForm = new FormGroup({
      'projectName': new FormControl(null ,[Validators.required]),
      'userMail':new FormControl(null ,[Validators.required ,Validators.email]),
      'projectStatus':new FormControl('critical')
    })
  }

  onSubmit(){
    console.log(this.projectForm);
  }

}
