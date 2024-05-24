import { Component, inject } from '@angular/core';
import { SafePipe } from '@luismdev/ngx-utils/pipes';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { environment } from '../../../../../../environments/environment';
import { BrandsModel } from '../../../../shared/models/brands.model';
import { HowItWorksModel } from '../../../../shared/models/how-it-works.model';
import { FeaturesModel } from '../../../../shared/models/features.model';
import { CodePlatformsModel } from '../../../../shared/models/code-platforms.model';
import { ConsoleCodeModel } from '../../../../shared/models/console-code.model';
import { DashModel } from '../../../../shared/models/dash.model';
import { MarqueeModel } from '../../../../shared/models/marquee.model';
import { HowItWorks } from '../../../../shared/interfaces/how-it-works.interface';
import { Feature } from '../../../../shared/interfaces/feature.interface';
import { Dash } from '../../../../shared/interfaces/dash.interface';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [SafePipe, TranslateModule],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss',
})
export class LandingComponent {
  #translateService: TranslateService = inject(TranslateService);

  public howItWorks: HowItWorks[] = HowItWorksModel[this.#translateService.currentLang];
  public features: Feature[] = FeaturesModel[this.#translateService.currentLang];
  public dash: Dash[] = DashModel[this.#translateService.currentLang];
  public brands: string[] = BrandsModel;
  public activeFeature = 0;
  public codePlatforms = CodePlatformsModel;
  public code: string = ConsoleCodeModel;
  public marquee = [...MarqueeModel, ...MarqueeModel];
  public urls = environment.urls;
}
