(function(a,n){typeof exports=="object"&&typeof module!="undefined"?n(exports):typeof define=="function"&&define.amd?define(["exports"],n):(a=typeof globalThis!="undefined"?globalThis:a||self,n(a.FormControl={}))})(this,function(a){"use strict";var n={props:{dropShadow:[Boolean,String],dropShadowableClassPrefix:{type:String,default:"drop-shadow"},shadow:[Boolean,String],shadowableClassPrefix:{type:String,default:"shadow"}},computed:{shadowableClass(){const t=this.dropShadow===!0?"":this.dropShadow&&`-${this.dropShadow}`,e=this.shadow===!0?"":this.shadow&&`-${this.shadow}`;return{[`${this.dropShadowableClassPrefix}${t}`]:!!this.dropShadow,[`${this.shadowableClassPrefix}${e}`]:!!this.shadow}}}};/*! *****************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */var o=function(){return o=Object.assign||function(e){for(var i,r=1,s=arguments.length;r<s;r++){i=arguments[r];for(var l in i)Object.prototype.hasOwnProperty.call(i,l)&&(e[l]=i[l])}return e},o.apply(this,arguments)};function b(t){return t.toLowerCase()}var C=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],y=/[^A-Z0-9]+/gi;function S(t,e){e===void 0&&(e={});for(var i=e.splitRegexp,r=i===void 0?C:i,s=e.stripRegexp,l=s===void 0?y:s,m=e.transform,E=m===void 0?b:m,v=e.delimiter,F=v===void 0?" ":v,u=f(f(t,r,"$1\0$2"),l,"\0"),h=0,c=u.length;u.charAt(h)==="\0";)h++;for(;u.charAt(c-1)==="\0";)c--;return u.slice(h,c).split("\0").map(E).join(F)}function f(t,e,i){return e instanceof RegExp?t.replace(e,i):e.reduce(function(r,s){return r.replace(s,i)},t)}function w(t,e){return e===void 0&&(e={}),S(t,o({delimiter:"."},e))}function p(t,e){return e===void 0&&(e={}),w(t,o({delimiter:"-"},e))}function d(t,e,i="-"){const r=e.toString().replace(new RegExp(`^${t}${i}?`),"");return[p(r),t].filter(s=>!!s).join(i)}function g(t){return!Array.isArray(t)&&typeof t=="object"}var x={directives:{bindEvents:{bind(t,e,i){if(t.addEventListener("focus",()=>{i.context.hasFocus=!0}),t.addEventListener("blur",()=>{i.context.hasFocus=!1}),t.addEventListener(t.tagName==="SELECT"?"change":"input",r=>{i.context.isEmpty=!t.value,i.context.currentValue=t.value}),i.context.hasChanged=!!t.value,i.context.bindEvents.forEach(r=>{t.addEventListener(r,s=>{i.context.$emit(r,s)})}),t.tagName==="SELECT"){const r=t.querySelector('[value=""]');r&&r.value===t.value&&(i.context.defaultEmpty=!0)}}}},mixins:[n],inheritAttrs:!1,props:{activity:{type:Boolean,default:!1},bindEvents:{type:Array,default(){return["focus","blur","change","click","keypress","keyup","keydown","progress","paste"]}},componentName:{type:String,default(){return this.$options.name}},defaultControlClass:{type:String,default:"form-control"},defaultValue:{default:null},error:[Boolean,String],errors:{type:Object,default(){return{}}},feedback:[String,Array],group:{type:Boolean,default:!0},helpText:[Number,String],hideLabel:Boolean,indicator:{type:String,default:"spinner"},indicatorSize:String,inline:Boolean,invalid:Boolean,label:[Number,String],labelClass:{type:[Object,String],default:"form-label"},pill:Boolean,plaintext:Boolean,size:String,spacing:String,valid:Boolean,value:{default:null}},data(){return{currentValue:this.value||this.defaultValue,defaultEmpty:!1,hasChanged:!1,hasFocus:!1,isEmpty:!(this.value||this.defaultValue)}},computed:{id(){return this.$attrs.id||this.$attrs.name},controlAttributes(){return Object.keys(this.$attrs).concat([["id",this.id],["class",this.controlClasses]]).reduce((t,e)=>(Array.isArray(e)?t[e[0]]=e[1]:t[e]=this[e]||this.$attrs[e],t),{})},controlClass(){return this.defaultControlClass},controlSizeClass(){return d(this.size,this.controlClass)},formGroupClasses(){return{[p(this.componentName)]:!!this.componentName,[this.size&&d(this.size,this.componentName)]:!!this.size,"default-empty":this.defaultEmpty,"form-group":this.group,[this.size&&d(this.size,"form-group")]:!!this.size,"has-activity":this.activity,"has-changed":this.hasChanged,"has-focus":this.hasFocus,"is-empty":this.isEmpty,"is-invalid":!!(this.invalid||this.invalidFeedback),"is-valid":!!(this.valid||this.validFeedback)}},controlClasses(){return Object.assign({[this.controlClass]:!!this.controlClass,[this.controlSizeClass]:!!this.controlSizeClass,"form-control-icon":!!this.$slots.icon,"is-valid":!!(this.valid||this.validFeedback),"is-invalid":!!(this.invalid||this.invalidFeedback),[this.pillClasses]:this.pill,[this.plaintextClass]:this.plaintext,[this.spacing]:!!this.spacing},this.shadowableClass)},hasDefaultSlot(){return!!this.$slots.default},invalidFeedback(){if(this.error)return this.error;const t=this.getFieldErrors();return Array.isArray(t)?t.filter(e=>e&&typeof e=="string").join("<br>"):t},pillClasses(){return"rounded rounded-pill"},plaintextClass(){return"form-control-plaintext"},validFeedback(){return Array.isArray(this.feedback)?this.feedback.join("<br>"):this.feedback}},watch:{hasFocus(){this.getInputField().readOnly||(this.hasChanged=!0)},value(t){this.currentValue=t},currentValue(){this.hasChanged=!0}},mounted(){this.value===null&&this.defaultValue!==null&&this.$emit("input",this.defaultValue)},methods:{blur(){this.getInputField()&&this.getInputField().blur()},focus(){this.getInputField()&&this.getInputField().focus()},getInputField(){return this.$el.querySelector(".form-control, input, select, textarea")},getFieldErrors(){let t=this.error||this.errors;return g(this.errors)&&(t=this.errors[this.$attrs.name||this.$attrs.id]),!t||Array.isArray(t)||g(t)?t:[t]},onInput(t){this.$emit("input",t.target.value),this.$emit("update:value",t.target.value)}}};a.FormControl=x,Object.defineProperty(a,"__esModule",{value:!0}),a[Symbol.toStringTag]="Module"});
