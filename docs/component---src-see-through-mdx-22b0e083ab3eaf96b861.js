(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{"5HNO":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return s})),n.d(t,"default",(function(){return d}));n("5hJT"),n("W1QL"),n("K/PF"),n("t91x"),n("75LO"),n("PJhk");var o=n("mXGw"),r=n("/FXl"),i=n("TjRS"),c=n("ZFoC"),a=n("6j+u"),u=n("bFyf");n("aD51");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var s={};void 0!==s&&s&&s===Object(s)&&Object.isExtensible(s)&&!s.hasOwnProperty("__filemeta")&&Object.defineProperty(s,"__filemeta",{configurable:!0,value:{name:"_frontmatter",filename:"src/SeeThrough.mdx"}});var h={_frontmatter:s},b=i.a;function d(e){var t,n,d=e.components,p=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,["components"]);return Object(r.b)(b,l({},h,p,{components:d,mdxType:"MDXLayout"}),Object(r.b)("h1",{id:"seethrough"},"SeeThrough"),Object(r.b)("h2",{id:"props"},"Props"),Object(r.b)(c.d,{of:a.a,isToggle:!0,mdxType:"Props"}),Object(r.b)("h2",{id:"importing"},"Importing"),Object(r.b)("p",null,"To use the react-see-through component, you want to do:"),Object(r.b)("code",null,"import { SeeThrough } from 'react-see-through';"),Object(r.b)("p",null,"after installing."),Object(r.b)("h2",{id:"basic-usage"},"Basic usage"),Object(r.b)("h3",{id:"clicking-on-the-masked-black-area-stops-the-see-through-effect"},"Clicking on the masked (black) area stops the see-through effect."),Object(r.b)(c.c,{__position:2,__code:"() => {\n  const [active, setActive] = useState(false)\n  return (\n    <div style={{ padding: '60px' }}>\n      <button onClick={() => setActive(true)}>Activate</button>\n      <SeeThrough\n        active={active}\n        onClick={masked => masked && setActive(false)}\n      >\n        <div>Some text</div>\n        <div>Other text</div>\n      </SeeThrough>\n    </div>\n  )\n}",__scope:(t={props:p,DefaultLayout:i.a,useState:o.useState,Playground:c.c,Props:c.d,SeeThrough:a.a,SeeThroughController:u.a},t.DefaultLayout=i.a,t._frontmatter=s,t),mdxType:"Playground"},(function(){var e=Object(o.useState)(!1),t=e[0],n=e[1];return Object(r.b)("div",{style:{padding:"60px"}},Object(r.b)("button",{onClick:function(){return n(!0)}},"Activate"),Object(r.b)(a.a,{active:t,onClick:function(e){return e&&n(!1)},mdxType:"SeeThrough"},Object(r.b)("div",null,"Some text"),Object(r.b)("div",null,"Other text")))})),Object(r.b)("hr",null),Object(r.b)("h2",{id:"absolutefixed-elements"},"Absolute/fixed elements"),Object(r.b)("h3",{id:"uses-childsearchdepth-to-explicitly-search-more-children-see-the-props-documentation-at-the-top-for-more-info"},"Uses childSearchDepth to explicitly search more children. See the props documentation at the top for more info."),Object(r.b)("h4",{id:"note-if-you-dont-know-what-depth-to-use-just-use-numberpositive_infinity-and-only-lower-it-if-things-get-slow"},"NOTE: If you don't know what depth to use, just use ",Object(r.b)("inlineCode",{parentName:"h4"},"Number.POSITIVE_INFINITY")," and only lower it if things get slow."),Object(r.b)(c.c,{__position:3,__code:"() => {\n  const [active, setActive] = useState(false)\n  return (\n    <div style={{ padding: '60px' }}>\n      <button onClick={() => setActive(true)}>Activate</button>\n      <SeeThrough\n        active={active}\n        onClick={masked => masked && setActive(false)}\n        childSearchDepth={2}\n      >\n        <div>\n          <div>My cool content</div>\n          <div style={{ position: 'absolute', left: 50 }}>\n            Other absoluteLY cool content\n          </div>\n        </div>\n      </SeeThrough>\n    </div>\n  )\n}",__scope:(n={props:p,DefaultLayout:i.a,useState:o.useState,Playground:c.c,Props:c.d,SeeThrough:a.a,SeeThroughController:u.a},n.DefaultLayout=i.a,n._frontmatter=s,n),mdxType:"Playground"},(function(){var e=Object(o.useState)(!1),t=e[0],n=e[1];return Object(r.b)("div",{style:{padding:"60px"}},Object(r.b)("button",{onClick:function(){return n(!0)}},"Activate"),Object(r.b)(a.a,{active:t,onClick:function(e){return e&&n(!1)},childSearchDepth:2,mdxType:"SeeThrough"},Object(r.b)("div",null,Object(r.b)("div",null,"My cool content"),Object(r.b)("div",{style:{position:"absolute",left:50}},"Other absoluteLY cool content"))))})),Object(r.b)("hr",null),Object(r.b)("h2",{id:"multiple-active-seethroughs-at-once"},"Multiple active SeeThroughs at once"),Object(r.b)("p",null,"Look at ",Object(r.b)("a",l({parentName:"p"},{href:"/react-see-through/docs/see-through-controller"}),"SeeThroughController")," for examples on multiple active SeeThroughs"))}void 0!==d&&d&&d===Object(d)&&Object.isExtensible(d)&&!d.hasOwnProperty("__filemeta")&&Object.defineProperty(d,"__filemeta",{configurable:!0,value:{name:"MDXContent",filename:"src/SeeThrough.mdx"}}),d.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-see-through-mdx-22b0e083ab3eaf96b861.js.map