import { Component, OnInit } from '@angular/core';
import { FormBuilder,  Validators } from '@angular/forms';
import { UserService } from '../../service/user.service'
import { Router } from '@angular/router';

@Component({
  selector: 'app-personal-edit',
  templateUrl: './personal-edit.component.html',
  styleUrls: ['./personal-edit.component.scss'],
})
export class PersonalEditComponent implements OnInit {
	personalForm = this.fb.group({
		sso_user: this.fb.group({
	  	nickname: ['123',  Validators.required],
	  	avatar: [''],
	  	real_name: ['',  Validators.required],
	  	mobile: ['',  Validators.required],
	  	organization: ['',  Validators.required],
	  	position: ['',  Validators.required],
	  	department: ['',  Validators.required]
		})
  })
  constructor(private fb: FormBuilder,
  	private service: UserService,
	  private router: Router,) {

  }

  ngOnInit() {
  	this.getCurrentUser();
  }

  getCurrentUser() {
  	this.service.getCurrentUser().subscribe(res=>{
  		this.personalForm.patchValue(res)
  	})
  }

	onSubmit() {
	  // TODO: Use EventEmitter with form value
	  console.warn(this.personalForm.value);
	  this.service.updateUserInfo(this.personalForm.value).subscribe(res=>{
	  	this.router.navigate(['../']);
	  })
	}
}
