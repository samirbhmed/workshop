import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentModel } from '../../models/student.model';

/**
 * Generated class for the StudentDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-details',
  templateUrl: 'student-details.html',
})
export class StudentDetailsPage {

  student = new StudentModel();

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.student = this.navParams.get('student');
  }

}
