webpackJsonp([35783957827783],{111:function(e,t){"use strict";function n(e,t,d){if("string"!=typeof t){if(s){var f=c(t);f&&f!==s&&n(e,f,d)}var p=i(t);o&&(p=p.concat(o(t)));for(var m=0;m<p.length;++m){var h=p[m];if(!(r[h]||a[h]||d&&d[h])){var g=u(t,h);try{l(e,h,g)}catch(e){}}}return e}return e}var r={childContextTypes:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},a={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},l=Object.defineProperty,i=Object.getOwnPropertyNames,o=Object.getOwnPropertySymbols,u=Object.getOwnPropertyDescriptor,c=Object.getPrototypeOf,s=c&&c(Object);e.exports=n},69:function(e,t){function n(){throw new Error("setTimeout has not been defined")}function r(){throw new Error("clearTimeout has not been defined")}function a(e){if(s===setTimeout)return setTimeout(e,0);if((s===n||!s)&&setTimeout)return s=setTimeout,setTimeout(e,0);try{return s(e,0)}catch(t){try{return s.call(null,e,0)}catch(t){return s.call(this,e,0)}}}function l(e){if(d===clearTimeout)return clearTimeout(e);if((d===r||!d)&&clearTimeout)return d=clearTimeout,clearTimeout(e);try{return d(e)}catch(t){try{return d.call(null,e)}catch(t){return d.call(this,e)}}}function i(){h&&p&&(h=!1,p.length?m=p.concat(m):g=-1,m.length&&o())}function o(){if(!h){var e=a(i);h=!0;for(var t=m.length;t;){for(p=m,m=[];++g<t;)p&&p[g].run();g=-1,t=m.length}p=null,h=!1,l(e)}}function u(e,t){this.fun=e,this.array=t}function c(){}var s,d,f=e.exports={};!function(){try{s="function"==typeof setTimeout?setTimeout:n}catch(e){s=n}try{d="function"==typeof clearTimeout?clearTimeout:r}catch(e){d=r}}();var p,m=[],h=!1,g=-1;f.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];m.push(new u(e,t)),1!==m.length||h||a(o)},u.prototype.run=function(){this.fun.apply(null,this.array)},f.title="browser",f.browser=!0,f.env={},f.argv=[],f.version="",f.versions={},f.on=c,f.addListener=c,f.once=c,f.off=c,f.removeListener=c,f.removeAllListeners=c,f.emit=c,f.prependListener=c,f.prependOnceListener=c,f.listeners=function(e){return[]},f.binding=function(e){throw new Error("process.binding is not supported")},f.cwd=function(){return"/"},f.chdir=function(e){throw new Error("process.chdir is not supported")},f.umask=function(){return 0}},485:function(e,t,n){e.exports=n.p+"static/BG-700x400.8f2ffd6f.png"},486:function(e,t,n){e.exports=n.p+"static/BG-700x400.e8e3b5a5.jpg"},487:function(e,t,n){e.exports=n.p+"static/BG-700x400.e01ecdaa.png"},488:function(e,t,n){e.exports=n.p+"static/BG-700x400.5c45f26f.png"},489:function(e,t,n){e.exports=n.p+"static/BG-700x400.c062214e.png"},490:function(e,t,n){e.exports=n.p+"static/BG-700x400.d3b7b65f.png"},491:function(e,t,n){e.exports=n.p+"static/BG-700x400.2f85ea08.png"},492:function(e,t,n){e.exports=n.p+"static/BG-700x400.de246f52.png"},209:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),l=r(a),i=function(){return l.default.createElement("div",{className:"about"},l.default.createElement("h1",null,"About Me"),l.default.createElement("p",null,"Hi there, I'm Rick Boshae, a recent college grad living in Los Angeles, California. In a nutshell, you can say I am an aspiring Software Engineer with the spirit of an entrepreneur. I find everything about creating software amazing. The design, development, maintenance, and testing wrapped together to ship an awesome product. My favorite part of the entire process is exchanging ideas with other engineers. With each project I strive to explore new tech while creating something akin to magic."),l.default.createElement("h3",null,"Areas of Interest"),l.default.createElement("p",null,"I have a variety of interests but I tend to work on projects involving AI, Machine Learning, Graphics, VR, Networking, Databases, Android, and Web Applications."))};t.default=i,e.exports=t.default},210:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),l=r(a),i=function(){return l.default.createElement("section",{id:"contact"},l.default.createElement("h1",null,"Contact"),l.default.createElement("div",{id:"contactMessage"},l.default.createElement("p",null,"If you think I might be a good fit at your company or are interested in speaking with me feel free to send me an email."),l.default.createElement("h3",null,"Email"),l.default.createElement("p",null,"rwboshae (at) gmail (dot) com")))};t.default=i,e.exports=t.default},211:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),l=r(a),i=function(){return l.default.createElement("section",{id:"education"},l.default.createElement("h1",null,"Education"),l.default.createElement("div",null,l.default.createElement("h3",{style:{display:"inline-block",marginRight:"1rem"}},"University of California, Riverside"),l.default.createElement("div",{style:{float:"right"}},l.default.createElement("b",null,"2016-2018"))),l.default.createElement("div",{style:{marginBottom:"0"}},l.default.createElement("h4",null,"B.S. Computer Science, GPA 3.77")),l.default.createElement("div",null,l.default.createElement("h3",{style:{display:"inline-block",marginRight:"1rem"}},"Santa Monica College"),l.default.createElement("div",{style:{float:"right"}},l.default.createElement("b",null,"Transfer 2016"))),l.default.createElement("div",{style:{marginBottom:"0"}},l.default.createElement("h4",null,"Computer Science")),l.default.createElement("div",null,l.default.createElement("h3",{style:{display:"inline-block",marginRight:"1rem"}},"Moorpark College"),l.default.createElement("div",{style:{float:"right"}},l.default.createElement("b",null,"Transfer 2016"))),l.default.createElement("div",{style:{marginBottom:"0"}},l.default.createElement("h4",null,"Mathematics")))};t.default=i,e.exports=t.default},212:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),l=r(a),i=function(){return l.default.createElement("section",{id:"honors"},l.default.createElement("h1",null,"Honors & Awards"),l.default.createElement("div",null,l.default.createElement("h4",{style:{display:"inline-block",marginRight:"1rem"}},"Citrus Hacks 2nd Place Winner"),l.default.createElement("div",{style:{float:"right"}},l.default.createElement("b",null,"2018"))),l.default.createElement("div",null,l.default.createElement("h4",{style:{display:"inline-block",marginRight:"1rem"}},"Best Game Hack Sponsored by Gigabyte/AORUS"),l.default.createElement("div",{style:{float:"right"}},l.default.createElement("b",null,"2018"))),l.default.createElement("div",null,l.default.createElement("h4",{style:{display:"inline-block",marginRight:"1rem"}},"Equipvision's Choice"),l.default.createElement("div",{style:{float:"right"}},l.default.createElement("b",null,"2018"))),l.default.createElement("div",null,l.default.createElement("h4",{style:{display:"inline-block",marginRight:"1rem"}},"UCR Summer Bridge to Research Grant Recipient"),l.default.createElement("div",{style:{float:"right"}},l.default.createElement("b",null,"2016"))))};t.default=i,e.exports=t.default},214:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o=n(2),u=r(o),c=n(70),s=(r(c),n(34)),d=(r(s),n(215)),f=r(d),p=n(487),m=r(p),h=n(485),g=r(h),y=n(486),b=r(y),v=n(491),E=r(v),w=n(488),x=r(w),k=n(489),j=r(k),S=n(492),T=r(S),L=n(490),_=r(L),M=function(e){function t(){a(this,t);var n=l(this,e.call(this));return n.state={projects:[]},n}return i(t,e),t.prototype.getProjects=function(){this.setState({projects:[{title:"Huddle: Team Management",descirption:"A collaborative tool for managing projects.",languages:["React","HTML","CSS","JavaScript"],pictureLink:m.default,projectLink:"https://github.com/RBoshae/ReflexManagment",lastUpdate:"Nov 25, 2017"},{title:"Breakout",descirption:"The good ol' Atari game reinvented. Every bit was hand wired and programmed from scratch. The best part - reverse engineering the Nintendo controller.",languages:["C","Embedded Systems"],pictureLink:g.default,projectLink:"https://github.com/RBoshae/Breakout",lastUpdate:"June 2017"},{title:"Feature Optimizer",descirption:"A machine learning algorithm that optimizes the nearest neighbor classifier. I use forward and backward selection to drop irrelevant features from the data set.  ",languages:["C++"],tags:["Machine Learning"],pictureLink:b.default,projectLink:"https://github.com/RBoshae/feature-selection-with-nearest-neighbor",lastUpdate:"Nov 2016"},{title:"Sliding Puzzle Solver",descirption:"Artificially intelligent program, using A* search, that can solve 3x3 sliding tile puzzles.",languages:["C++"],tags:["AI"],pictureLink:_.default,projectLink:"https://github.com/RBoshae/Puzzle_Solver",lastUpdate:"Feb 21, 2016"},{title:"Simple Ray Tracer",descirption:"A basic ray tracer created with OpenGL.",languages:["C++"],tags:["Graphics"],pictureLink:j.default,projectLink:"https://github.com/RBoshae/BasicRayTracer",lastUpdate:"Dec 21, 2017"},{title:"MiniGL",descirption:"A simplified 3D rendering pipeline created with OpenGl.",languages:["C++"],tags:["Graphics"],pictureLink:E.default,projectLink:"https://github.com/RBoshae/miniGL",lastUpdate:"Nov 28, 2017"},{title:"rshell",descirption:"A custom shell terminal writtin in C++",languages:["C++"],tags:["OS"],pictureLink:T.default,projectLink:"https://github.com/RBoshae/rshell",lastUpdate:"Dec 2, 2017"},{title:"Personal Website 1.0",descirption:"My personal website written in HTML, CSS, JavaScript.",languages:["Bootstrap","HTML","CSS","JavaScript","jQuery"],tags:["WebDev"],pictureLink:x.default,projectLink:"https://github.com/RBoshae/Personal-Website-1",lastUpdate:"Jan 3, 2017"},{title:"Personal Website 2.0",descirption:"My personal website written revamped with Gatsby",languages:["HTML","CSS","JavaScript","Reactjs"],tags:["WebDev"],pictureLink:"",projectLink:"https://rboshae.github.io/",lastUpdate:"Jul 26, 2018"}]})},t.prototype.componentWillMount=function(){this.getProjects()},t.prototype.render=function(){var e=this,t=void 0;this.state.projects&&(t=this.state.projects.map(function(t){return u.default.createElement("td",{key:t.title,style:{paddingLeft:".25rem",paddingRight:".25rem"}},u.default.createElement(f.default,{onMouseEnter:e.fadeBackground,onMouseLeave:e.resetBackground,project:t}))}));var n=t.reduce(function(e,t,n){var r=Math.floor(n/3);return n%3==0?e[r]=[t]:e[r].push(t),e},[]),r=void 0;return n&&(r=n.map(function(e,t){return u.default.createElement("tr",{key:t},e)})),console.log("Table",r),console.log("After Map"),console.log(t),u.default.createElement("section",{id:"portfolio"},u.default.createElement("h1",null,"Portfolio"),u.default.createElement("table",{id:"projectTable"},u.default.createElement("thead",null),u.default.createElement("tbody",null,r)))},t}(u.default.Component);t.default=M,e.exports=t.default},215:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function a(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function i(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0;var o,u=n(2),c=r(u),s=n(70),d=(r(s),n(34)),f=(r(d),o={boxShadow:"0 4px 8px 0 regba(0, 0, 0, 0.2)",width:"16rem",height:"18rem",margin:"auto",textAlign:"left",boxSizing:"border-box",border:"solid 5px"},o.boxShadow="5px 10px #888888",o),p={fontSize:"15px",textAlign:"center",marginBottom:"0"},m=function(e){function t(){return a(this,t),l(this,e.apply(this,arguments))}return i(t,e),t.prototype.render=function(){return c.default.createElement("div",{className:"columns project-item"},c.default.createElement("div",{className:"item-wrap"},c.default.createElement("div",{style:f},c.default.createElement("a",{href:this.props.project.projectLink},c.default.createElement("div",{style:{position:"relative",zIndex:"1",margin:"auto",color:"white",fontSize:"1.75rem",paddingTop:"1rem",textAlign:"center",height:"45%",verticalAlign:"center"}},c.default.createElement("div",{className:"bg",style:{position:"absolute",zIndex:"-1",top:"0",bottom:"0",left:"0",right:"0",backgroundImage:"linear-gradient(\n                      rgba(0, 0, 0, 0.55),\n                      rgba(0, 0, 0, 0)\n                    ), url("+this.props.project.pictureLink+")",width:"100%",height:"100%",backgroundSize:"cover"}}),c.default.createElement("h3",null,this.props.project.title)),c.default.createElement("div",{style:{paddingTop:".11rem",paddingLeft:".5rem",paddingRight:".5rem",color:"black"}},c.default.createElement("p",{style:p},this.props.project.languages.join(", ")),c.default.createElement("p",null,this.props.project.descirption))))))},t}(c.default.Component);t.default=m,e.exports=t.default},216:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),l=r(a),i=function(){return l.default.createElement("div",null,l.default.createElement("section",{id:"tech"},l.default.createElement("h1",null,"Technical Skills"),l.default.createElement("h3",null,"Software"),l.default.createElement("p",null,"Android Studio, Git, GitHub, MATLAB, XCode"),l.default.createElement("h3",null,"Programming"),l.default.createElement("p",null,"C, C++, C#, CSS, HTML, Java, JavaScript, JSON, jQuery, PostgreSQL, Python, React, SQL")))};t.default=i,e.exports=t.default},220:function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var a=n(2),l=r(a),i=n(34),o=(r(i),n(209)),u=r(o),c=n(214),s=r(c),d=n(216),f=r(d),p=n(211),m=r(p),h=n(212),g=r(h),y=n(210),b=r(y),v=function(){return l.default.createElement("div",{className:"main"},l.default.createElement(u.default,null),l.default.createElement(s.default,null),l.default.createElement(f.default,null),l.default.createElement(m.default,null),l.default.createElement(g.default,null),l.default.createElement(b.default,null))};t.default=v,e.exports=t.default}});
//# sourceMappingURL=component---src-pages-index-js-7bbcc72f8fddc1d047b6.js.map