import { Component, OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy } from '@angular/core';
import { NgForm } from '@angular/forms';
import { UserService } from '../user.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit, DoCheck, AfterViewInit, AfterViewChecked, OnDestroy {

  users;
  selectedUser;
  today = new Date();

  constructor(private service: UserService) {
    console.log('Constructor is Executed');
    this.getData();
   }

  ngOnInit() {
    console.log('ngOninit is eexecuted');
  }

ngDoCheck() {
  console.log('ngDoCheck Executed');
}

ngAfterViewInit() {
  console.log('ngAfterViewInit Executed')
}

ngAfterViewChecked() {
  console.log('ngAfterViewChecked Executd');
}

ngOnDestroy() {
  console.log('ngOnDestroy Function Executed');
}

  loginData(form: NgForm) {
    console.log(form.value);
    this.service.postUser(form.value).subscribe(data => {
      console.log(data);
      this.getData();
    } , err => {
      console.log(err);
    } , () => {
      console.log('Data posted successfully');
    });
  }

  getData() {
    this.service.getUsers().subscribe(data => {
      console.log(data);
      this.users = data;
    } , err => {
      console.log(err);
    } , () => {
      console.log('data got successfully');
    });
  }

  deleteData(user) {
    console.log(user);
    this.service.deleteUser(user.id).subscribe(data => {
      console.log(data);
      this.getData();
    } , err => {
      console.log(err);
    } , () => {
      console.log('data delete successfully');
    });
  }

  selectUser(user) {
    console.log(user);
    this.selectedUser = user;
  }

  updateData(form) {
    console.log(form.value);
    this.service.updateUser(form.value.id , form.value).subscribe(data => {
      console.log(data);
    } , err => {
      console.log(err);
    } , () => {
      console.log('data updated sucessfully');
    });
  }
}
