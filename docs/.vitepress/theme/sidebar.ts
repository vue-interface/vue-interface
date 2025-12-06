import type { DefaultTheme } from 'vitepress';

export const sidebar: DefaultTheme.SidebarItem[] = [{
    text: 'Activity Indicator',
    link: '/packages/activity-indicator/'
}, {
    text: 'Autogrow',
    link: '/packages/autogrow/'
}, {
    text: 'Breadcrumb',
    link: '/packages/breadcrumb/'
}, {
    text: 'Button',
    link: '/packages/btn/'
}, {
    text: 'Button Group',
    link: '/packages/btn/btn-group'
}, {
    text: 'Button Activity',
    link: '/packages/btn-activity/'
}, {
    text: 'Button Dropdown',
    link: '/packages/btn-dropdown/'
}, {
    text: 'Checkbox Field',
    link: '/packages/checkbox-field/'
}, {
    text: 'Dropdown Menu',
    link: '/packages/dropdown-menu/'
}, {
    text: 'Form Control',
    link: '/packages/form-control/',
    items: [
        {
            text: 'Form Control',
            link: '/packages/form-control/'
        },
        {
            text: 'Form Check',
            link: '/packages/form-control/form-check'
        },
        {
            text: 'Form Select',
            link: '/packages/form-control/form-select'
        },
        {
            text: 'Form Switch',
            link: '/packages/form-control/form-switch'
        },
        {
            text: 'useFormControl',
            link: '/packages/form-control/use-form-control'
        }
    ]
}, {
    text: 'Input Field',
    link: '/packages/input-field/'
}, {
    text: 'Light Switch Field',
    link: '/packages/light-switch-field/'
}, {
    text: 'Modal',
    link: '/packages/modal/'
}, {
    text: 'Pagination',
    link: '/packages/pagination/'
}, {
    text: 'Radio Field',
    link: '/packages/radio-field/'
}, {
    text: 'Select Field',
    link: '/packages/select-field/'
}, {
    text: 'Slide Deck',
    link: '/packages/slide-deck/'
}, {
    text: 'Slide Panel',
    link: '/packages/slide-panel/',
    items: [
        {
            text: 'Slide Panel',
            link: '/packages/slide-panel/'
        },
        {
            text: 'useSlidePanel',
            link: '/packages/slide-panel/use-slide-panels'
        }
    ]
}, {
    text: 'Textarea Field',
    link: '/packages/textarea-field/'
}, {
    text: 'Tooltip',
    link: '/packages/tooltip/'
}];