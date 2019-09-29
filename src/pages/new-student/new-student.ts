import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
import { StudentModel } from '../../models/student.model';
import { NativeStorage } from '@ionic-native/native-storage';

/**
 * Generated class for the NewStudentPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-new-student',
  templateUrl: 'new-student.html',
})
export class NewStudentPage {

  student: StudentModel = new StudentModel();
  students: StudentModel[] = [];

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeStorage: NativeStorage,
    private alertCtrl: AlertController, private toastCtrl: ToastController) {

  }

  ionViewDidLoad() {
    this.students = this.navParams.get('students');
  }

  saveNewStudent() {

    this.students.push(this.student);
    this.nativeStorage.setItem('students_list', this.students).then(_ => {
      let alert = this.alertCtrl.create({
        title: 'Success',
        subTitle: 'A new student added successfully',
        buttons: ['Ok']
      });
      alert.present();

      let toast = this.toastCtrl.create({
        message: 'A new student added successfully',
        duration: 3000,
        position: 'bottom'
      });
      toast.present();


      this.navCtrl.pop();
    }, error => { });
  }

}
