import {Page, NavController} from 'ionic-angular';
import {FormBuilder, Validators, ControlGroup, FORM_DIRECTIVES} from 'angular2/common'; //1


@Page({
  directives: [FORM_DIRECTIVES],    // 2
  templateUrl: 'build/pages/user/user.html',
})
export class UserPage {
  memberForm: ControlGroup;

  constructor(public nav: NavController, fb: FormBuilder) {
    this.nav = nav;
    this.memberForm = fb.group({
      fullname: ["",Validators.required],
      username: ["",Validators.required],
      //password: ["",Validators.required]
      password: ["",Validators.compose([Validators.required,Validators.minLength(8)])] // required password 8 charactor
    });
  }

  addMember(event){
      //console.log("คลิกแล้วนะ");
      //console.log(this.memberForm.value);
      console.log(JSON.stringify(this.memberForm.value));
      let fullname = this.memberForm.controls['fullname'].value;
      let username = this.memberForm.controls['username'].value;
      let password = this.memberForm.controls['password'].value;
      console.log(fullname);
      console.log(username);
      console.log(password);
      event.preventDefault();
  }

}
