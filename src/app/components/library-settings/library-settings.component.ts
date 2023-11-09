import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {ActivatedRoute, Router} from "@angular/router";
import {AlertService} from "../../services/alert.service";
import {first} from "rxjs/operators";
import validate = WebAssembly.validate;
import {AdminService} from "../../services/admin.service";

@Component({
  selector: 'app-library-settings',
  templateUrl: './library-settings.component.html',
  styleUrls: ['./library-settings.component.css']
})
export class LibrarySettingsComponent implements OnInit {

  loginForm: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
    private alertService: AlertService,
    private adminService:AdminService,
  ) {

  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      no_shelf: ['', Validators.required],
      size_shelf: ['', Validators.required]
    });

  }

  // convenience getter for easy access to form fields
  get f() { return this.loginForm.controls; }

  onSubmit() {
    this.submitted = true;

    // reset alerts on submit
    this.alertService.clear();

    // stop here if form is invalid
    if (this.loginForm.invalid || this.f.no_shelf.value <=0 || this.f.size_shelf.value <=0 ) {
      this.alertService.error('يجب ان تكون القيم اكبر من الصفر');
      return;
    }

    this.loading = true;
    this.adminService.DistributeBooks({'no_shelf':this.f.no_shelf.value, 'size_shelf':this.f.size_shelf.value})
      .pipe(first())
      .subscribe(
        data => {
          if(data['status'] == true){
            this.loading =false;
            this.alertService.success(data['msg']);

          }else if(data['status'] == false){
            this.alertService.error(data['msg']);
          }
      }
     );
  }
}
