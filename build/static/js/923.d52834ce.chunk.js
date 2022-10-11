"use strict";(self.webpackChunkmy_colors=self.webpackChunkmy_colors||[]).push([[923],{2164:function(e,n,a){a.r(n),a.d(n,{default:function(){return R}});var o=a(2791),l=a(6871),r=a(2609),t=a(885),c="ColorContainer_color-container__k-uD3",s="ColorContainer_copy-btn__7DEcd",i="ColorContainer_picked__I12Fc",d="ColorContainer_color-name__ta8D5",u="ColorContainer_color-name--white__1EleE",m="ColorContainer_color-name--black__U8vCT",h=a(1501),x=a.n(h),C=a(8029),j=a(184),v=function(e){var n=e.colorName,a=e.colorCode,l=e.onSnackbarChange,r=(0,o.useState)(!1),h=(0,t.Z)(r,2),v=h[0],f=h[1],_=(0,o.useRef)(),p=x()(a).luminance()<=.1,g=x()(a).luminance()>=.8;return(0,j.jsx)(C.CopyToClipboard,{text:a,onCopy:function(){f(_.current.checked),l("\ud074\ub9bd\ubcf4\ub4dc\uc5d0 \ubcf5\uc0ac\ub428")},children:(0,j.jsx)("div",{style:{background:e.colorCode},className:"".concat(c),children:(0,j.jsxs)("div",{className:"".concat(v&&i),children:[(0,j.jsx)("div",{className:d,children:(0,j.jsx)("span",{className:p&&u||g&&m,children:n})}),(0,j.jsx)("input",{type:"radio",id:a,value:n,name:"main-colors",ref:_,onBlur:function(){f(!1)}}),(0,j.jsx)("label",{htmlFor:a,className:"".concat(s," ").concat(v&&i)})]})})})},f="Palette_palette__IXjvx",_="Palette_palette-colors__4B9Ky",p=a(9999),g=(a(5262),"PaletteControl_palette-control__SYJVb"),b="PaletteControl_control-container__vcLS0",Z="PaletteControl_palette-title__SnN1V",N="PaletteControl_slider__J7TBw",k=a(8096),y=a(4504),S=a(6747),F=a(9891),w=a(4925),P=function(e){var n=e.level,a=e.colorFormat,o=e.onChangeLevel,l=e.onChangeFormat,r=e.paletteName,t=e.emoji;return(0,j.jsxs)("div",{className:g,children:[(0,j.jsxs)("h1",{className:Z,children:[r,"  ",t]}),(0,j.jsxs)("div",{className:b,children:[(0,j.jsxs)("div",{className:N,children:[(0,j.jsxs)("span",{children:["\uceec\ub7ec \uc250\ub3c4\uc6b0 : ",n]}),(0,j.jsx)(p.Z,{defaultValue:n,min:100,max:900,step:100,onChange:function(e){return o(e)},trackStyle:{backgroundColor:"#90CAF9",height:8},railStyle:{height:8},handleStyle:{backgroundColor:"#90CAF9",marginTop:-4}})]}),(0,j.jsx)(S.Z,{sx:{minWidth:150,margin:"1rem"},children:(0,j.jsxs)(k.Z,{fullWidth:!0,size:"small",children:[(0,j.jsx)(w.Z,{id:"demo-simple-select-label",children:"\uc0c9\uc0c1 \ud3ec\ub9f7"}),(0,j.jsxs)(y.Z,{value:a,label:"Color Format",onChange:function(e){l(e.target.value)},children:[(0,j.jsx)(F.Z,{value:"hex",children:"HEX"}),(0,j.jsx)(F.Z,{value:"rgb",children:"RGB"}),(0,j.jsx)(F.Z,{value:"rgba",children:"RGBA"})]})]})})]})]})},B=a(5646),D=a(3400),E=a(9823),L=function(e){var n=e.open,a=e.setOpen,l=e.message,r=function(e,n){"clickaway"!==n&&a(!1)},t=(0,j.jsx)(o.Fragment,{children:(0,j.jsx)(D.Z,{size:"small","aria-label":"close",color:"inherit",onClick:r,children:(0,j.jsx)(E.Z,{fontSize:"small"})})});return(0,j.jsx)("div",{children:(0,j.jsx)(B.Z,{open:n,autoHideDuration:3e3,onClose:r,message:l,action:t})})},T=function(e){var n=(0,o.useState)(500),a=(0,t.Z)(n,2),l=a[0],r=a[1],c=(0,o.useState)("hex"),s=(0,t.Z)(c,2),i=s[0],d=s[1],u=(0,o.useState)(!1),m=(0,t.Z)(u,2),h=m[0],x=m[1],C=(0,o.useState)(""),p=(0,t.Z)(C,2),g=p[0],b=p[1],Z=e.palette,N=Z.colors,k=Z.emoji,y=(Z.id,Z.paletteName),S=function(e){x(!0),b(e)};return(0,j.jsxs)("div",{className:f,children:[(0,j.jsx)(L,{open:h,setOpen:x,message:g}),(0,j.jsx)(P,{level:l,colorFormat:i,onChangeLevel:function(e){r(e)},onChangeFormat:function(e){d(e),S("\uc0c9\uc0c1 \ud3ec\ub9f7 \ubcc0\uacbd\ub428")},paletteName:y,emoji:k}),(0,j.jsx)("div",{className:_,children:N[l].map((function(e,n){return(0,j.jsx)(v,{colorName:e.name,colorCode:e[i],onSnackbarChange:S},n)}))})]})},z=(a(9604),a(4755)),A=a(7762),I=[50,100,200,300,400,500,600,700,800,900];function O(e){var n,a={paletteName:e.paletteName,id:e.id,emoji:e.emoji,colors:{}},o=(0,A.Z)(I);try{for(o.s();!(n=o.n()).done;){var l=n.value;a.colors[l]=[]}}catch(m){o.e(m)}finally{o.f()}var r,t,c,s=(0,A.Z)(e.colors);try{for(s.s();!(r=s.n()).done;){var i=r.value,d=(t=i.color,c=10,x().scale(function(e){var n="#fff";return[x()(e).darken(1.4).hex(),e,n]}(t)).mode("lab").colors(c)).reverse();for(var u in d)a.colors[I[u]].push({name:"".concat(i.name," ").concat(I[u]),id:i.name.toLowerCase().replace(/ /g,"-"),hex:d[u],rgb:x()(d[u]).css(),rgba:x()(d[u]).css().replace("rgb","rgba").replace(")",",1.0)")})}}catch(m){s.e(m)}finally{s.f()}return a}var R=function(){var e=(0,l.UO)().paletteId,n=(0,o.useContext)(z.Z).colors.find((function(n){return n.id===e}));return(0,j.jsxs)("div",{children:[(0,j.jsx)(r.Z,{}),(0,j.jsx)(T,{palette:O(n)})]})}}}]);
//# sourceMappingURL=923.d52834ce.chunk.js.map