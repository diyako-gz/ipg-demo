import { Component } from '@angular/core';

@Component({
  selector: 'app-codesubmit',
  templateUrl: './codesubmit.component.html',
  styleUrls: ['./codesubmit.component.less']
})
export class CodesubmitComponent {

  moveNext(event: Event, index: number): void {
    const inputElement = event.target as HTMLInputElement;
    if (!inputElement) return;

    const nextInput = document.getElementById(`otp${index + 1}`) as HTMLInputElement | null;
    
    if (inputElement.value.length === 1 && nextInput) {
      nextInput.focus();
    }
  }
}
