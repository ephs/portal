import { Component, OnInit, Input } from '@angular/core';
import {trigger, state, style, animate, transition, query, stagger} from '@angular/animations';
import { Link } from '../link';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';

@Component({
  selector: 'app-link-panel',
  templateUrl: './link-panel.component.html',
	styleUrls: ['./link-panel.component.scss'],
  animations: [
    trigger('hover', [
      state('true', style({
				backgroundColor: '#060607B3',
				transform: 'scale(1)'
      })),
      state('false', style({
				backgroundColor: '#06060780',
				transform: 'scale(1.05)' 
      })),
      transition('true => false', [
        animate('0.2s')
      ]),
      transition('false => true', [
        animate('0.2s')
      ]),
    ]),
	  trigger('listStagger', [
      transition('* <=> *',
        [
          query(':enter', [
            style({ opacity: 0, transform: 'translateY(-15px)' }),
            stagger('50ms',
              animate('550ms ease-out',
                style({transform: 'translateY(0px)'})))
          ], { optional: true }),
          query(':leave', animate('50ms', style({ opacity: 0 })) ,{
            optional: true
          })
        ])
     ])	
  ],
})
export class LinkPanelComponent implements OnInit {

	hover: boolean = true;
	@Input() link: Link;
	@Input() compact;

  constructor() { }

  ngOnInit() {
	}

	toggleHover() {
		this.hover = !this.hover;
	}

}
