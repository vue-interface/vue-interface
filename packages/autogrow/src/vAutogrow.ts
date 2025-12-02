import { nextTick, type DirectiveBinding } from 'vue';

const STYLE_ATTRIBUTES: (keyof CSSStyleDeclaration)[] = [
    'font',
    'fontFamily',
    'fontKerning',
    'fontSize',
    'fontStretch',
    'fontStyle',
    'fontVariant',
    'fontVariantLigatures',
    'fontVariantCaps',
    'fontVariantNumeric',
    'fontVariantEastAsian',
    'fontWeight',
    'lineHeight',
    'letterSpacing',
    'padding',
    'margin',
    'textAlign',
    'textAlignLast',
    'textDecoration',
    'textDecorationLine',
    'textDecorationStyle',
    'textDecorationColor',
    'textDecorationSkipInk',
    'textIndent',
    'textRendering',
    'textShadow',
    'textOverflow',
    'textTransform',
    'width',
    'wordBreak',
    'wordSpacing',
    'wordWrap'
];
  
function escape(html: string): string {
    const el = document.createElement('textarea');    
    el.textContent = html;
    return el.innerHTML;
}
  
function int(str: number|string): number {
    if(typeof str === 'number') {
        return str;
    } else if(!str || !str.replace) {
        return 0;
    }
    
    return parseInt(str.replace(/[^\d.]+/g, '')) || 0;
}
  
function input(div: HTMLElement, el: HTMLInputElement, minHeight: number, maxHeight: number): void {
    const value = el.value;
    
    // Handle empty input
    if(!value) {
        div.innerHTML = '&nbsp;';
    } else {
        // Replace line breaks with <br> tags
        div.innerHTML = escape(value).replace(/(?:\r\n|\r|\n)/g, '<br />');
        
        // Add a non-breaking space only if the text ends with a newline
        // This ensures proper height calculation for trailing newlines
        if(value.endsWith('\n') || value.endsWith('\r\n') || value.endsWith('\r')) {
            div.innerHTML += '<br />';
        } else {
            div.innerHTML += '&nbsp;';
        }
    }
  
    const dynamicHeight = Math.max(minHeight, height(div));
  
    el.style.overflow = 'hidden';
    el.style.height = (
        (!maxHeight || dynamicHeight < maxHeight) ? dynamicHeight : maxHeight
    ) + 'px';
}
  
function height(el: HTMLElement): number {
    return int(style(el, 'height') as string|number);
}
  
function style(el: HTMLElement, attr: keyof CSSStyleDeclaration) {
    return window.getComputedStyle(el)[attr];
}
  
function mimic(el: HTMLElement): HTMLElement {
    const div = document.createElement('div');
    const styles = window.getComputedStyle(el);
  
    div.style.position = 'absolute';
    div.style.zIndex = '-1';
    div.style.visibility = 'hidden';
    div.style.top = '0px';
    div.style.whiteSpace = 'pre-wrap'; // Important: preserve whitespace and wrapping
    div.style.wordWrap = 'break-word';
    
    el.parentNode?.insertBefore(div, el.nextSibling);
  
    STYLE_ATTRIBUTES.forEach(key => {
        if(key in div.style) {
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            div.style[key as any] = styles[key as any];
        }
    });
  
    return div;
}
  
function init(el: HTMLInputElement, binding: DirectiveBinding): void {
    const minHeight = height(el);
    const div = mimic(el);
    const maxHeight = binding.value !== true ? binding.value : 0;
  
    el.addEventListener('input', event => {
        input(div, event.target as HTMLInputElement, minHeight, maxHeight);
    });
  
    // Initial calculation
    input(div, el, minHeight, maxHeight);
}
  
export default {
    mounted(el: HTMLInputElement, binding: DirectiveBinding): void {
        if(binding.value === false) {
            return;
        }
      
        init(el, binding);
      
        el.addEventListener('resize', () => {
            nextTick(() => {
                el.dispatchEvent(new Event('input'));
            });
        });
    }
};