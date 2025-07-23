import { nextTick } from "vue";

const STYLE_ATTRIBUTES: string[] = [
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
    // 'textDecorationPosition',
    'textIndent',
    'textRendering',
    'textShadow',
    // 'textSizeAdjust',
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
  
// function unescape(html: string): string {
//     const el = document.createElement('textarea');
//     el.innerHTML = html;
//     return el.textContent;
// }
  
function int(str: any): number {
    if(typeof str === 'number') {
        return str;
    } else if(!str || !str.replace) {
        return 0;
    }
    
    return parseInt(str.replace(/[^\d.]+/g, '')) || 0;
}
  
function input(div: HTMLElement, el: HTMLInputElement, minHeight: number, maxHeight: number): void {
    div.innerHTML = escape(el.value).replace(/(?:\r\n|\r|\n)/g, '<br />') + '&nbsp;';
  
    let dynamicHeight = Math.max(minHeight, height(div));
    
    if(div.innerHTML.match(/(<br\s?\/?\>)+/)) {
        dynamicHeight += int(style(el, 'lineHeight'));
    }
  
    el.style.overflow = 'hidden';
    el.style.height = (
        (!maxHeight || dynamicHeight < maxHeight) ? dynamicHeight : maxHeight
    ) + 'px';
}
  
function height(el: HTMLElement): number {
    return int(style(el, 'height'));
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
    
    el.parentNode!.insertBefore(div, el.nextSibling);
  
    STYLE_ATTRIBUTES.forEach(key => {
        if(key in div.style) {
            div.style[key as any] = styles[key as any];
        }
    });
  
    return div;
}
  
function init(el: HTMLInputElement, binding: any): void {
    const minHeight = height(el);
    const div = mimic(el);
    const maxHeight = binding.value !== true ? binding.value : 0;
  
    el.addEventListener('input', event => {
        input(div, event.target as HTMLInputElement, minHeight, maxHeight);
    });
  
    input(div, el, minHeight, maxHeight);
}
  
export default {
    mounted(el: HTMLInputElement, binding: any): void {
        if(binding.value === false) {
            return;
        }
      
        init(el, binding);
      
        el.addEventListener("resize", () => {
            nextTick(() => {
                el.dispatchEvent(new Event('input'));
            });
        })
    }
};