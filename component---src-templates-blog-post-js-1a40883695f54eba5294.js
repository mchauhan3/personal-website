"use strict";(self.webpackChunkpersonal_website=self.webpackChunkpersonal_website||[]).push([[751],{2729:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,i=/[_.\- ]+/,l=new RegExp("^"+i.source),s=new RegExp(i.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const i=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):i(e);return e!==i(e)&&(e=((e,r,n)=>{let i=!1,l=!1,s=!1;for(let o=0;o<e.length;o++){const c=e[o];i&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),i=!1,s=l,l=!0,o++):l&&s&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),s=l,l=!1,i=!0):(i=r(c)===c&&n(c)!==c,s=l,l=n(c)===c&&r(c)!==c)}return e})(e,i,c)),e=e.replace(l,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,i):i(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,o.lastIndex=0,e.replace(s,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},2532:function(e,t,a){a.d(t,{L:function(){return g},M:function(){return k},P:function(){return E},S:function(){return H},_:function(){return s},a:function(){return l},b:function(){return u},g:function(){return d},h:function(){return o}});var r=a(6540),n=(a(2729),a(5556)),i=a.n(n);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},l.apply(this,arguments)}function s(e,t){if(null==e)return{};var a,r,n={},i=Object.keys(e);for(r=0;r<i.length;r++)t.indexOf(a=i[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(e,t,a){const r={};let n="gatsby-image-wrapper";return"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function u(e,t,a,r,n){return void 0===n&&(n={}),l({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:l({},n,{opacity:t?1:0})})}function d(e,t,a,r,n,i,s,o){const c={};i&&(c.backgroundColor=i,"fixed"===a?(c.width=r,c.height=n,c.backgroundColor=i,c.position="relative"):("constrained"===a||"fullWidth"===a)&&(c.position="absolute",c.top=0,c.left=0,c.bottom=0,c.right=0)),s&&(c.objectFit=s),o&&(c.objectPosition=o);const u=l({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:l({opacity:t?0:1,transition:"opacity 500ms linear"},c)});return u}const m=["children"],p=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},g=function(e){let{children:t}=e,a=s(e,m);return r.createElement(r.Fragment,null,r.createElement(p,l({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],h=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:i="",shouldLoad:o}=e,c=s(e,f);return r.createElement("img",l({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:i}))},y=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,i=s(e,h);const o=i.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,l({},i,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:i}=e;return r.createElement("source",{key:t+"-"+i+"-"+a,type:i,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var v;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},y.displayName="Picture",y.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const w=["fallback"],E=function(e){let{fallback:t}=e,a=s(e,w);return t?r.createElement(y,l({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",l({},a))};E.displayName="Placeholder",E.propTypes={fallback:n.string,sources:null==(v=y.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const k=function(e){return r.createElement(r.Fragment,null,r.createElement(y,l({},e)),r.createElement("noscript",null,r.createElement(y,l({},e,{shouldLoad:!0}))))};k.displayName="MainImage",k.propTypes=y.propTypes;const S=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],L=["style","className"],x=e=>e.replace(/\n/g,""),C=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),l=3;l<r;l++)n[l-3]=arguments[l];return e.alt||""===e.alt?i().string.apply(i(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},N={image:i().object.isRequired,alt:C},T=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],I=["style","className"],A=new Set;let _,j;const O=function(e){let{as:t="div",image:n,style:i,backgroundColor:u,className:d,class:m,onStartLoad:p,onLoad:g,onError:f}=e,h=s(e,T);const{width:b,height:y,layout:v}=n,w=c(b,y,v),{style:E,className:k}=w,S=s(w,I),L=(0,r.useRef)(),x=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);m&&(d=m);const C=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(v,b,y);return(0,r.useEffect)((()=>{_||(_=a.e(108).then(a.bind(a,1108)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=L.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==p||p({wasCached:!0}),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==p||p({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==g||g({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void A.add(x);if(j&&A.has(x))return;let t,r;return _.then((e=>{let{renderImageToString:a,swapPlaceholderImage:s}=e;L.current&&(L.current.innerHTML=a(l({isLoading:!0,isLoaded:A.has(x),image:n},h)),A.has(x)||(t=requestAnimationFrame((()=>{L.current&&(r=s(L.current,x,A,i,p,g,f))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{A.has(x)&&j&&(L.current.innerHTML=j(l({isLoading:A.has(x),isLoaded:A.has(x),image:n},h)),null==p||p({wasCached:!0}),null==g||g({wasCached:!0}))}),[n]),(0,r.createElement)(t,l({},S,{style:l({},E,i,{backgroundColor:u}),className:k+(d?" "+d:""),ref:L,dangerouslySetInnerHTML:{__html:C},suppressHydrationWarning:!0}))},R=(0,r.memo)((function(e){return e.image?(0,r.createElement)(O,e):null}));R.propTypes=N,R.displayName="GatsbyImage";const M=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function q(e){return function(t){let{src:a,__imageData:n,__error:i}=t,o=s(t,M);return i&&console.warn(i),n?r.createElement(e,l({image:n},o)):(console.warn("Image not loaded",a),null)}}const P=q((function(e){let{as:t="div",className:a,class:n,style:i,image:o,loading:m="lazy",imgClassName:p,imgStyle:f,backgroundColor:h,objectFit:b,objectPosition:y}=e,v=s(e,S);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),f=l({objectFit:b,objectPosition:y,backgroundColor:h},f);const{width:w,height:C,layout:N,images:T,placeholder:I,backgroundColor:A}=o,_=c(w,C,N),{style:j,className:O}=_,R=s(_,L),M={fallback:void 0,sources:[]};return T.fallback&&(M.fallback=l({},T.fallback,{srcSet:T.fallback.srcSet?x(T.fallback.srcSet):void 0})),T.sources&&(M.sources=T.sources.map((e=>l({},e,{srcSet:x(e.srcSet)})))),r.createElement(t,l({},R,{style:l({},j,i,{backgroundColor:h}),className:O+(a?" "+a:"")}),r.createElement(g,{layout:N,width:w,height:C},r.createElement(E,l({},d(I,!1,N,w,C,A,b,y))),r.createElement(k,l({"data-gatsby-image-ssr":"",className:p},v,u("eager"===m,!1,M,m,f)))))})),z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?i().number.apply(i(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},W=new Set(["fixed","fullWidth","constrained"]),F={src:i().string.isRequired,alt:C,width:z,height:z,sizes:i().string,layout:e=>{if(void 0!==e.layout&&!W.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};P.displayName="StaticImage",P.propTypes=F;const H=q(R);H.displayName="StaticImage",H.propTypes=F},4040:function(e,t,a){var r=a(6540),n=a(4794),i=a(3895);t.A=e=>{let{location:t,title:a,children:l}=e;let s;return s="/blog/"===t.pathname?r.createElement("h1",{className:"main-heading"},a):r.createElement(n.Link,{className:"header-link-home",to:"/blog"},a),r.createElement(i.A,{location:t,title:a},r.createElement("header",{className:"global-header"},s),l)}},3895:function(e,t,a){var r=a(6540);t.A=e=>{let{location:t,title:a,children:n}=e;return r.createElement("div",{className:"global-wrapper"},r.createElement("main",null,n),r.createElement("footer",null,"© ",(new Date).getFullYear(),", Built with"," ",r.createElement("a",{href:"https://www.gatsbyjs.com"},"Gatsby")))}},7528:function(e,t,a){var r=a(6540),n=a(4794);t.A=e=>{var t,a,i;let{description:l,title:s,children:o}=e;const{site:c}=(0,n.useStaticQuery)("3589320610"),u=l||c.siteMetadata.description,d=null===(t=c.siteMetadata)||void 0===t?void 0:t.title;return r.createElement(r.Fragment,null,r.createElement("title",null,d?s+" | "+d:s),r.createElement("meta",{name:"description",content:u}),r.createElement("meta",{property:"og:title",content:s}),r.createElement("meta",{property:"og:description",content:u}),r.createElement("meta",{property:"og:type",content:"website"}),r.createElement("meta",{name:"github:card",content:"summary"}),r.createElement("meta",{name:"github:creator",content:(null===(a=c.siteMetadata)||void 0===a||null===(i=a.social)||void 0===i?void 0:i.github)||""}),r.createElement("meta",{name:"github:title",content:s}),r.createElement("meta",{name:"github:description",content:u}),o)}},5384:function(e,t,a){a.r(t),a.d(t,{Head:function(){return c},default:function(){return u}});var r=a(6540),n=a(4794),i=a(2532);var l=()=>{var e,t;const l=(0,n.useStaticQuery)("230163734"),s=null===(e=l.site.siteMetadata)||void 0===e?void 0:e.author,o=null===(t=l.site.siteMetadata)||void 0===t?void 0:t.social;return r.createElement("div",{className:"bio"},r.createElement(i.S,{className:"bio-avatar",layout:"fixed",formats:["auto","webp","avif"],src:"../images/profile-pic.png",width:50,height:50,quality:95,alt:"Profile picture",__imageData:a(2039)}),(null==s?void 0:s.name)&&r.createElement("p",null,"Written by ",r.createElement("strong",null,s.name)," ",(null==s?void 0:s.summary)||null," ",r.createElement("a",{href:"https://github.com/"+((null==o?void 0:o.github)||"")},"Follow me on Github!")))},s=a(4040),o=a(7528);const c=e=>{let{data:{markdownRemark:t}}=e;return r.createElement(o.A,{title:t.frontmatter.title,description:t.frontmatter.description||t.excerpt})};var u=e=>{var t;let{data:{previous:a,next:i,site:o,markdownRemark:c},location:u}=e;const d=(null===(t=o.siteMetadata)||void 0===t?void 0:t.blogTitle)||"Title";return r.createElement(s.A,{location:u,title:d},r.createElement("article",{className:"blog-post",itemScope:!0,itemType:"http://schema.org/Article"},r.createElement("header",null,r.createElement("h1",{itemProp:"headline"},c.frontmatter.title),r.createElement("p",null,c.frontmatter.date)),r.createElement("section",{dangerouslySetInnerHTML:{__html:c.html},itemProp:"articleBody"}),r.createElement("hr",null),r.createElement("footer",null,r.createElement(l,null))),r.createElement("nav",{className:"blog-post-nav"},r.createElement("ul",{style:{display:"flex",flexWrap:"wrap",justifyContent:"space-between",listStyle:"none",padding:0}},r.createElement("li",null,a&&r.createElement(n.Link,{to:"/blog"+a.fields.slug,rel:"prev"},"← ",a.frontmatter.title)),r.createElement("li",null,i&&r.createElement(n.Link,{to:"/blog"+i.fields.slug,rel:"next"},i.frontmatter.title," →")))))}},2039:function(e){e.exports=JSON.parse('{"layout":"fixed","backgroundColor":"#080808","images":{"fallback":{"src":"/static/810b65fb63c0ef5bbfc11e7a9a3f1f8e/e5610/profile-pic.png","srcSet":"/static/810b65fb63c0ef5bbfc11e7a9a3f1f8e/e5610/profile-pic.png 50w,\\n/static/810b65fb63c0ef5bbfc11e7a9a3f1f8e/e9b55/profile-pic.png 100w","sizes":"50px"},"sources":[{"srcSet":"/static/810b65fb63c0ef5bbfc11e7a9a3f1f8e/d4bf4/profile-pic.avif 50w,\\n/static/810b65fb63c0ef5bbfc11e7a9a3f1f8e/ee81f/profile-pic.avif 100w","type":"image/avif","sizes":"50px"},{"srcSet":"/static/810b65fb63c0ef5bbfc11e7a9a3f1f8e/3faea/profile-pic.webp 50w,\\n/static/810b65fb63c0ef5bbfc11e7a9a3f1f8e/6a679/profile-pic.webp 100w","type":"image/webp","sizes":"50px"}]},"width":50,"height":50}')}}]);
//# sourceMappingURL=component---src-templates-blog-post-js-1a40883695f54eba5294.js.map