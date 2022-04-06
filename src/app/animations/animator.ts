import { animate, state, style, transition, trigger } from "@angular/animations";

export const transformFormAbove = trigger('transformFromAbove', [
    transition(':enter', [
        style({
            transform: 'translateY(-100%)'
        }), animate(500, style({
            transform: 'translateY(0)'
        }))
    ])
])
export const slide = trigger('slide', [
    state('left', style({
        transform: 'translateX(-100%)'
    })),
    state('left-absolute', style({
        transform: 'translateX(-100%)', 
        position: 'absolute',
        width: '100%'
    })),
    state('invision', style({
        transform: 'translateX(0)'
    })),
    state('invision-absolute', style({
        transform: 'translateX(0)',
        position: 'absolute', 
        width: '100%'
    })),
    state('right', style({
        transform: 'translateX(100%)'
    })),
    state('right-absolute', style({
        transform: 'translateX(100%)',
        position: 'absolute', 
        width: '100%'
    })),
    transition('left => invision', animate(500)),
    transition('invision-absolute => right-absolute', animate(500)),
    transition('invision-absolute => left-absolute', animate(500)),
    transition('right => invision', animate(500))
])
export const leaveLeft = trigger('leaveLeft', [
    transition(':leave', [
        style({
            transform: 'translateX(0)'
        }), animate(500, style({
            transform: 'translateX(-100%)'
        }))
    ])    
])
export const leaveUp = trigger('leaveUp', [
    transition(':leave', [
        style({
            transform: 'translateY(0)'
        }), animate(500, style({
            transform: 'translateY(-100%)'
        }))
    ])    
])
export const leaveRight = trigger('leaveRight', [
    transition(':leave', [
        style({
            transform: 'translateX(0)'
        }), animate(500, style({
            transform: 'translateX(100%)'
        }))
    ])    
])
export const enterUp = trigger('enterUp', [
    transition(':enter', [
        style({
            transform: 'translateY(0)'
        }), animate(500, style({
            transform: 'translateY(-100%)'
        }))
    ])    
])

