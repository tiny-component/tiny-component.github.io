"use strict";/*! bee-mobile v1.0.0 */(self.webpackChunkbee_mobile=self.webpackChunkbee_mobile||[]).push([[177],{177:function(L,m,n){n.r(m),n.d(m,{default:function(){return g}});var e=n(6540),C=n(6942),u=n.n(C),l=n(2095),f=n(3176);class g extends e.PureComponent{constructor(){super(...arguments),this.handleChange=s=>{const r=s}}render(){const{className:s}=this.props,r=u()("AccordionCase",s);return e.createElement(f.U,{className:r},e.createElement("div",{className:"CasePanel"},e.createElement(l._,{className:"bm-paper-2dp"},e.createElement(l.A,{header:"Accordion1"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."),e.createElement(l.A,{header:"Accordion1"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))),e.createElement("div",{className:"CasePanel"},e.createElement(l._,{closeOthers:!0,onChange:this.handleChange,className:"bm-paper-2dp"},e.createElement(l.A,{header:"Accordion1"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."),e.createElement(l.A,{header:"Accordion1"},"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse malesuada lacus ex, sit amet blandit leo lobortis eget."))))}}},2095:function(L,m,n){n.d(m,{_:function(){return M},A:function(){return g}});var e=n(6540),C=n(6942),u=n.n(C),l=n(3097),f=n(1202);function g(s){const{children:r,className:v,disableRipple:E,header:d,prefixCls:h="bm-Accordion",index:p,name:x,disabled:b,onChange:t}=s,[i,P]=(0,e.useState)(!!s.expanded),N=u()(h,{[`${h}-expanded`]:i},v),O=a=>{b||t&&t({event:a,index:x||p,expanded:i})};return(0,e.useEffect)(()=>{P(!!s.expanded)},[s==null?void 0:s.expanded]),e.createElement("div",{className:N},e.createElement("div",{className:"bm-AccordionHeader",onClick:O},e.createElement("div",{className:"bm-AccordionHeader-toggle"},d),E?null:e.createElement(f.A,{hidden:!1})),e.createElement(l.SD,{in:i,className:"bm-AccordionContent"},e.createElement(e.Fragment,null,e.createElement("div",{className:"bm-AccordionContentInner"},r))))}function M(s){const{children:r,className:v,closeOthers:E,activeIndex:d=[],disableRipple:h=!0,onChange:p,prefixCls:x="bm-AccordionGroup"}=s,b=u()(x,v),[t,i]=(0,e.useState)(Array.isArray(d)?d:[d]),P=()=>{let a=t||[];const c=s.closeOthers;return Array.isArray(t)||(a=[t]),c&&t.length>1&&(a=[t[t.length-1]]),a},N=a=>{const c=a.index,A=a.expanded;let o=[...t];E?o=A?[]:[c]:A?o=t.filter(D=>c!==D):o.push(c),i(o),p&&p(o)},O=e.Children.map(r,(a,c)=>{const{disabled:A,name:o}=a.props,D=P().indexOf(o||c)>-1;return e.cloneElement(a,{closeOthers:E,disableRipple:h,disabled:A,expanded:D,name:o,index:c,onChange:N})});return e.createElement("div",{className:b},O)}}}]);

//# sourceMappingURL=177.bd4f71baf4483555017e.chunk.js.map