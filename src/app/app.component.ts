import { Component, OnInit } from '@angular/core';
import { CommonTranslateService } from '@eing/common';
import commonHuHU from '@eing/common/src/translations/hu-HU.json';
import workflowHuHU from '@eing/workflow/src/translations/hu-HU.json';

import huHU from '@translations/hu-HU.json';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  constructor(private commonTranslateService: CommonTranslateService) {}

  ngOnInit(): void {
    this.commonTranslateService.addCommonTranslation('hu-HU', commonHuHU);
    this.commonTranslateService.addTranslation('hu-HU', workflowHuHU);
    this.commonTranslateService.addTranslation('hu-HU', huHU);
    this.commonTranslateService.addBackendTranslation('hu-HU');
  }
}
