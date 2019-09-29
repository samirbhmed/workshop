import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { NewStudentPage } from '../new-student/new-student';
import { NativeStorage } from '@ionic-native/native-storage';
import { StudentModel } from '../../models/student.model';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  students: StudentModel[] = [];

  constructor(public navCtrl: NavController, private nativeStorage: NativeStorage) {

  }

  /*ionViewDidLoad() {
    alert('ionViewDidLoad NewStudentPage');
  }*/

  /*ionViewDidEnter() {
    alert('ionViewDidEnter NewStudentPage');
  }*/

  /*ionViewWillLoad() {
    alert('ionViewWillLoad NewStudentPage');
  }*/

  ionViewWillEnter() {
    this.nativeStorage.getItem('students_list').then(res => {
      this.students = res;
    });
  }

  addNewStudent() {
    this.navCtrl.push(NewStudentPage, { 'students': this.students })
  }

  getDetails(student) {
    this.navCtrl.push('StudentDetailsPage', { 'student': student });
  }

}
