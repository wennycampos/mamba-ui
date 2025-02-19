import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SharedModule} from '@shared/shared.module';

import {FaqShowcaseComponent} from './faq-showcase.component';
import {Faq1Component} from './faq1/faq1.component';
import {Faq2Component} from './faq2/faq2.component';
import {Faq3Component} from './faq3/faq3.component';
import {Faq4Component} from './faq4/faq4.component';

const routes: Routes = [
	{
		path: '',
		component: FaqShowcaseComponent,
	},
];

@NgModule({
	imports: [RouterModule.forChild(routes), SharedModule],
	declarations: [
		FaqShowcaseComponent,
		Faq1Component,
		Faq2Component,
		Faq3Component,
		Faq4Component,
	],
})
export class FaqModule {}
