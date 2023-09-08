import { Component, Input } from '@angular/core';

@Component({
	selector: 'app-card',
	templateUrl: './card.component.html',
	styleUrls: ['./card.component.css'],
})
export class CardComponent {
	@Input() gameCoverURL: string = '';
	@Input() gameLabel: string = 'EXCLUSIVE';
	@Input() gameType: string = 'XPTO PS4';
	@Input() gamePrice: string = 'R$ 159,90';
}
