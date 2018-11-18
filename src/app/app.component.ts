import { Component } from '@angular/core';
import { Category } from './category';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
	title = 'portal';
	categoryName = "Clubs";
	clubCategory: Category = {
		name: "Clubs",
		linkArray: [
			{ name: "Programming Club", link: "https://ephs.club", logo: "assets/logos/programming.svg" },
			{ name: "Dev Club", link: "https://ephs.club/dev", logo: "assets/logos/dev.svg" },
			{ name: "Smash Club", link: "https://ephs.club/smash", logo: "assets/logos/dev.svg" },
			{ name: "Trace (Tutoring)", link: "https://ephs.club/trace", logo: "assets/logos/trace.svg" },
			{ name: "Quiz Bowl", link: "https://ephs.club/quizbowl", logo: "assets/logos/quiz.svg" },

		]
	};
	officialCategory: Category = {
		name: "Official Links",
		linkArray: [
			{ name: "EPHS Homepage", link: "https://www.edenpr.org/ephs", logo: "assets/logos/ep.png" },
			{ name: "Infinite Campus", link: "https://edenprairiemn.infinitecampus.org/campus/portal/eden_prairie.jsp", logo: "assets/logos/ic.png" },
			{ name: "Schoology", link: "https://edenpr.schoology.com/login/ldap?school=46406747", logo: "assets/logos/schoology.png" },
			{ name: "Naviance", link: "https://student.naviance.com/ephs", logo: "assets/logos/naviance.svg" },
			{ name: "Core", link: "https://core.ephs.club", logo: "assets/logos/core.png" },
		]
	};
	extraLinks: Category = {
		name: "Additional Links",
		linkArray: [
			{ name: "Common App", link: "https://www.commonapp.org", logo: "assets/logos/common.svg"},
		]
	};
}
