import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-standup-config',
  templateUrl: './standup-config.component.html',
  styleUrls: ['./standup-config.component.css']
})

export class StandupConfigComponent implements OnInit {
  title= "Daily Stand Up";

  constructor() { }

  ngOnInit() {
  }
}
