import { animate, state, style, transition, trigger } from '@angular/animations';

export const fundido =
    trigger('FadeIn', [
        transition(':enter', [
            style({
                opacity: '0'
            }),
            animate('500ms linear')
        ])
    ]);
