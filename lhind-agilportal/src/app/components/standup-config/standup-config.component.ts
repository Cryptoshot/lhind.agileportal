import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-standup-config',
  templateUrl: './standup-config.component.html',
  styleUrls: ['./standup-config.component.css']
})

export class StandupConfigComponent implements OnInit {
  title= "Daily Stand Up";

  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }

    if (value >= 1) {
      return Math.round(value / 1);
    }

    return value;
  }

  constructor() { }

  ngOnInit() {
  }
}
