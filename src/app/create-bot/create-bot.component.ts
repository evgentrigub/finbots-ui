import { Component, OnInit } from '@angular/core';
import { IndustriesService } from '../Services/industries.service';


@Component({
  selector: 'app-create-bot',
  templateUrl: './create-bot.component.html',
  styleUrls: ['./create-bot.component.css']
})
export class CreateBotComponent implements OnInit {

  industries: string[] = []
  formatLabel(value: number | null) {
    if (!value) {
      return 0;
    }
    if (value <= 100) {
      return value + '%';
    }
    return value;
  }

  constructor(private industiesService: IndustriesService) { }

  ngOnInit() {
    this.industries = this.industiesService.getIndustries()
  }

}
