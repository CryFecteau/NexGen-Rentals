import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-loading',
  templateUrl: './loading.component.html',
  styleUrls: ['./loading.component.scss']
})
export class LoadingComponent implements OnInit {
  @Output() isLoading = new EventEmitter<boolean>();

  isButtonDisabled: boolean = true;
  buttonText: string = 'Loading...';

  constructor() { }

  ngOnInit(): void {
    setTimeout(() => {
      this.isButtonDisabled = false;
      this.buttonText = 'Enter';
    }, 3000);
  }

  handleEnterClick() {
    this.isLoading.emit(false);
  }
}
