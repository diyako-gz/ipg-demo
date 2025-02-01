import { Component } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-resualt-page',
  imports: [ReactiveFormsModule],
  standalone: true,
  templateUrl: './resualt-page.component.html',
  styleUrl: './resualt-page.component.less'
})
export class ResualtPageComponent {
  acceptTerms: boolean = false; // برای ذخیره وضعیت تیک زدن

  submitForm() {
    if (this.acceptTerms) {
      console.log('شرایط و ضوابط پذیرفته شد');
      // اینجا می‌توانید کدهایی برای ارسال داده‌ها یا ادامه فرآیند اضافه کنید
    } else {
      console.log('لطفاً شرایط و ضوابط را بپذیرید');
    }
  }
}
