webpackJsonp([1],{"A5/N":function(t,a){t.exports={render:function(){var t=this.$createElement,a=this._self._c||t;return a("svg",{staticStyle:{isolation:"isolate"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 827.685 716.796"}},[a("path",{staticClass:"hexagon-path",attrs:{fill:"#EBEBEB","fill-opacity":".7",d:"M827.685 358.398L620.764 716.796H206.921L0 358.398 206.921 0h413.843z"}})])},toString:function(){return"/home/josedan/Documents/3Dmensional/3Dmensional-website/src/assets/hexagon.svg"}}},AhPL:function(t,a){},EvJR:function(t,a){t.exports={render:function(){var t=this.$createElement,a=this._self._c||t;return a("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 172.758 199.483"}},[a("path",{attrs:{d:"M172.757 199.483H57.586L0 99.742h115.171z",fill:"#6d6d6d"}}),a("path",{attrs:{d:"M172.758 0l-57.586 99.741H0L57.586 0z",fill:"#3b3b3b"}})])},toString:function(){return"/home/josedan/Documents/3Dmensional/3Dmensional-website/src/assets/chevron.svg"}}},GBGt:function(t,a){t.exports={render:function(){var t=this.$createElement,a=this._self._c||t;return a("svg",{staticClass:"down-arrow",staticStyle:{isolation:"isolate"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 38.638 46.129"}},[a("defs",[a("clipPath",{attrs:{id:"a"}},[a("path",{attrs:{d:"M0 0h38.638v46.129H0z"}})])]),a("g",{attrs:{"clip-path":"url(#a)"}},[a("path",{attrs:{d:"M6.746 21.183H0l9.66 12.473 9.659 12.473 9.66-12.473 9.659-12.473h-6.746l-2.913 3.762-9.66 12.473L9.66 24.945l-2.914-3.762z"}}),a("path",{attrs:{d:"M6.746 0H0l9.66 12.473 9.659 12.472 9.66-12.472L38.638 0h-6.746l-2.913 3.762-9.66 12.473L9.66 3.762 6.746 0z"}})])])},toString:function(){return"/home/josedan/Documents/3Dmensional/3Dmensional-website/src/assets/down-arrow.svg"}}},KoC9:function(t,a){t.exports={render:function(){var t=this.$createElement,a=this._self._c||t;return a("svg",{staticStyle:{isolation:"isolate"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 53.501 61.386"}},[a("defs",[a("clipPath",{attrs:{id:"a"}},[a("path",{attrs:{d:"M0 0h53.501v61.386H0z"}})])]),a("g",{attrs:{"clip-path":"url(#a)"}},[a("path",{attrs:{d:"M52.001 45.29l-12.625-7.299-12.625-7.298V1.5l12.625 7.298 12.625 7.299V45.29z",fill:"#201E20","vector-effect":"non-scaling-stroke",stroke:"#FFF","stroke-opacity":".05","stroke-linecap":"square","stroke-miterlimit":"3"}}),a("path",{attrs:{d:"M1.5 45.29l12.625-7.299 12.626-7.298 12.625 7.298 12.625 7.299-12.625 7.298-12.625 7.298-12.626-7.298L1.5 45.29z",fill:"#201E20","vector-effect":"non-scaling-stroke",stroke:"#FFF","stroke-opacity":".09","stroke-linecap":"square","stroke-miterlimit":"3"}}),a("path",{attrs:{fill:"none","vector-effect":"non-scaling-stroke",stroke:"#FFF","stroke-linecap":"square","stroke-miterlimit":"3",d:"M52.001 45.29l-25.25 14.596L1.5 45.29V16.097L26.751 1.5l25.25 14.597z"}}),a("path",{staticClass:"path1",attrs:{d:"M26.751 59.886l-12.626-7.298L1.5 45.29V16.097l12.625 7.298 12.626 7.298V59.886z",fill:"none","vector-effect":"non-scaling-stroke",stroke:"#FFF","stroke-linecap":"square","stroke-miterlimit":"3"}}),a("path",{staticClass:"path2",attrs:{d:"M26.751 59.886l12.625-7.298 12.625-7.298V16.097l-12.625 7.298-12.625 7.298V59.886z",fill:"none","vector-effect":"non-scaling-stroke",stroke:"#FFF","stroke-linecap":"square","stroke-miterlimit":"3"}})])])},toString:function(){return"/home/josedan/Documents/3Dmensional/3Dmensional-website/src/assets/cube.svg"}}},NHnr:function(t,a,e){"use strict";Object.defineProperty(a,"__esModule",{value:!0});var o=e("7+uW"),i={render:function(){var t=this.$createElement,a=this._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},staticRenderFns:[]};var n=e("VU/8")({name:"App"},i,!1,function(t){e("g8hB")},null,null).exports,s=e("/ocq"),v=e("yHgi"),r=e.n(v),l=e("BUuu"),u={name:"Nav",components:{Logo:r.a},methods:{scroll:function(t){t.preventDefault();var a=t.target.href.replace("#",""),e=(a=a.split("/"))[a.length-1],o=""===e?document.getElementById("Home"):document.getElementById(e);l(o,1e3);var i=document.getElementById("logo");setTimeout(function(){i.classList="About"===e||"Contact"===e?"positive":"negative"},1e3)}}},_={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("nav",{staticClass:"d-flex fixed"},[e("figure",[e("a",{attrs:{href:"#"}},[e("Logo",{staticClass:"negative",attrs:{id:"logo"}})],1)]),t._v(" "),e("div",{staticClass:"menu"},[e("i",{staticClass:"icon icon-menu"}),t._v(" "),e("ul",{staticClass:"d-flex"},[e("li",{staticClass:"d-flex"},[e("a",{staticClass:"nav-link",attrs:{href:"#"},on:{click:t.scroll}},[t._v("Home")])]),t._v(" "),e("li",{staticClass:"d-flex"},[e("a",{staticClass:"nav-link",attrs:{href:"#About"},on:{click:t.scroll}},[t._v("About Us")])]),t._v(" "),e("li",{staticClass:"d-flex"},[e("a",{staticClass:"nav-link",attrs:{href:"#Services"},on:{click:t.scroll}},[t._v("Services")])]),t._v(" "),e("li",{staticClass:"d-flex"},[e("a",{staticClass:"nav-link",attrs:{href:"#Contact"},on:{click:t.scroll}},[t._v("Contact")])])])])])},staticRenderFns:[]},c=e("VU/8")(u,_,!1,null,null,null).exports,p=e("GBGt"),d={name:"About",components:{ArrowDown:e.n(p).a}},m={render:function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"d-flex about-us",attrs:{id:"About"}},[this._m(0),this._v(" "),a("ArrowDown",{staticClass:"black"})],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",[a("h1",[this._v("About Us")]),this._v(" "),a("p",[this._v("Lorem ipsum dolor sit amet, consectetur adipiscing elit. In in pharetra justo. Nulla interdum venenatis est. Nunc leo nulla, tempus in leo in, posuere elementum nisi. Vivamus augue mauris, facilisis eu placerat non, gravida quis odio. Suspendisse id tempor risus. Proin felis justo, finibus id faucibus varius, bibendum a libero. Donec arcu augue, hendrerit at vestibulum at, interdum ut nisi. Pellentesque porta scelerisque arcu, et sagittis neque malesuada suscipit. Cras at nulla eleifend, convallis nisl id, feugiat urna. Nunc ornare quam nec accumsan sodales. Curabitur malesuada diam et quam blandit euismod. Sed malesuada ante eu ligula fermentum aliquam. Integer efficitur in elit varius aliquet. Maecenas laoreet lacinia purus, at condimentum lorem auctor eu.")]),this._v(" "),a("p",[this._v("Morbi enim mauris, eleifend a scelerisque et, euismod non turpis. Cras sit amet orci lobortis, sodales ligula at, dapibus purus. Aliquam ante erat, rhoncus at dolor et, pretium tempus ligula. Cras varius urna sed dui pharetra, in viverra turpis bibendum. Suspendisse non porta orci, ut suscipit magna. Nullam blandit placerat leo eget feugiat. Aliquam lobortis diam et diam volutpat convallis imperdiet in erat. Nullam viverra enim sem, a iaculis lectus tincidunt sed. Quisque orci purus, laoreet vitae ipsum dapibus, tincidunt scelerisque tellus. Sed dignissim varius consequat. Donec accumsan sapien ex, vitae convallis ipsum auctor ut. Aenean elementum sapien a sem aliquam, eget vestibulum neque laoreet. Sed faucibus leo ligula.\n    ")])])}]},h=e("VU/8")(d,m,!1,null,null,null).exports,f=e("EvJR"),g=e.n(f),C=e("KoC9"),S=e.n(C),b={name:"Services",components:{Chevron:g.a,Cube:S.a},data:function(){return{title:"Development",text:"Hello World",active:0}},methods:{setAppear:function(t){for(var a=document.getElementsByClassName("fade-element"),e=document.querySelector(".active.action-container"),o=document.getElementsByClassName("action-container"),i=a.length-1;i>=0;i--)a[i].classList.toggle("show");switch(setTimeout(function(){for(var t=a.length-1;t>=0;t--)a[t].classList.toggle("show")},100),e.classList.remove("active"),t){case"Development":o[0].classList.add("active");break;case"Design":o[1].classList.add("active");break;default:o[2].classList.add("active")}}}},M={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("section",{staticClass:"d-flex services"},[e("div",{staticClass:"chevron-container"},[e("div",{staticClass:"chevron-svg",staticStyle:{height:"100%"},attrs:{"data-aos":"fade-left","data-aos-duration":"500","data-aos-delay":"200"}},[e("Chevron",{staticClass:"chevron",attrs:{id:"Services"}})],1)]),t._v(" "),e("div",{staticClass:"d-grid"},[e("transition",{attrs:{name:"fade",appear:""}},[e("h1",{staticClass:"show fade-element d-flex"},[t._v(t._s(t.title))])]),t._v(" "),e("transition",{attrs:{name:"fade",appear:""}},[e("p",{staticClass:"show fade-element"},[t._v("\n        "+t._s(t.text)+"\n      ")])]),t._v(" "),t._m(0)],1),t._v(" "),e("div",{staticClass:"d-flex services-controller"},[e("div",{staticClass:"active action-container"},[e("a",{attrs:{href:"javascript:;"},on:{click:function(a){a.preventDefault(),t.title="Development",t.setAppear(t.title)}}}),t._v(" "),e("Cube")],1),t._v(" "),e("div",{staticClass:"action-container"},[e("a",{attrs:{href:"javascript:;"},on:{click:function(a){a.preventDefault(),t.title="Design",t.setAppear(t.title)}}}),t._v(" "),e("Cube")],1),t._v(" "),e("div",{staticClass:"action-container"},[e("a",{attrs:{href:"javascript:;"},on:{click:function(a){a.preventDefault(),t.title="Marketing",t.setAppear(t.title)}}}),t._v(" "),e("Cube")],1)])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"d-grid services-elements"},[a("span"),this._v(" "),a("span"),this._v(" "),a("span"),this._v(" "),a("span")])}]},A=e("VU/8")(b,M,!1,null,null,null).exports,B=e("A5/N"),w={name:"Contact",components:{Hexagon:e.n(B).a}},E={render:function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"d-flex contact",attrs:{id:"Contact"}},[a("div",{staticClass:"form-container d-flex"},[this._m(0),this._v(" "),a("Hexagon",{staticClass:"hexagon"})],1),this._v(" "),this._m(1)])},staticRenderFns:[function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("form",{staticClass:"d-flex",attrs:{action:"",method:"post"}},[e("div",{staticClass:"d-flex input-group"},[e("label",{attrs:{for:"name"}},[t._v("Name:")]),t._v(" "),e("input",{attrs:{type:"text",id:"name",name:"name"}})]),t._v(" "),e("div",{staticClass:"d-flex input-group"},[e("label",{attrs:{for:"email"}},[t._v("Email:")]),t._v(" "),e("input",{attrs:{type:"email",id:"email",name:"email"}})]),t._v(" "),e("div",{staticClass:"d-flex input-group"},[e("label",{attrs:{for:"phone"}},[t._v("Phone:")]),t._v(" "),e("input",{attrs:{type:"tel",id:"phone",name:"phone"}})]),t._v(" "),e("div",{staticClass:"d-flex input-group"},[e("label",{attrs:{for:"location"}},[t._v("Location:")]),t._v(" "),e("select",{attrs:{name:"location",id:"location"}},[e("option",{attrs:{value:"default"}},[t._v("Select a Country")]),t._v(" "),e("option",{attrs:{value:"AF"}},[t._v("Afghanistan")]),t._v(" "),e("option",{attrs:{value:"AX"}},[t._v("Åland Islands")]),t._v(" "),e("option",{attrs:{value:"AL"}},[t._v("Albania")]),t._v(" "),e("option",{attrs:{value:"DZ"}},[t._v("Algeria")]),t._v(" "),e("option",{attrs:{value:"AS"}},[t._v("American Samoa")]),t._v(" "),e("option",{attrs:{value:"AD"}},[t._v("Andorra")]),t._v(" "),e("option",{attrs:{value:"AO"}},[t._v("Angola")]),t._v(" "),e("option",{attrs:{value:"AI"}},[t._v("Anguilla")]),t._v(" "),e("option",{attrs:{value:"AQ"}},[t._v("Antarctica")]),t._v(" "),e("option",{attrs:{value:"AG"}},[t._v("Antigua and Barbuda")]),t._v(" "),e("option",{attrs:{value:"AR"}},[t._v("Argentina")]),t._v(" "),e("option",{attrs:{value:"AM"}},[t._v("Armenia")]),t._v(" "),e("option",{attrs:{value:"AW"}},[t._v("Aruba")]),t._v(" "),e("option",{attrs:{value:"AU"}},[t._v("Australia")]),t._v(" "),e("option",{attrs:{value:"AT"}},[t._v("Austria")]),t._v(" "),e("option",{attrs:{value:"AZ"}},[t._v("Azerbaijan")]),t._v(" "),e("option",{attrs:{value:"BS"}},[t._v("Bahamas")]),t._v(" "),e("option",{attrs:{value:"BH"}},[t._v("Bahrain")]),t._v(" "),e("option",{attrs:{value:"BD"}},[t._v("Bangladesh")]),t._v(" "),e("option",{attrs:{value:"BB"}},[t._v("Barbados")]),t._v(" "),e("option",{attrs:{value:"BY"}},[t._v("Belarus")]),t._v(" "),e("option",{attrs:{value:"BE"}},[t._v("Belgium")]),t._v(" "),e("option",{attrs:{value:"BZ"}},[t._v("Belize")]),t._v(" "),e("option",{attrs:{value:"BJ"}},[t._v("Benin")]),t._v(" "),e("option",{attrs:{value:"BM"}},[t._v("Bermuda")]),t._v(" "),e("option",{attrs:{value:"BT"}},[t._v("Bhutan")]),t._v(" "),e("option",{attrs:{value:"BO"}},[t._v("Bolivia, Plurinational State of")]),t._v(" "),e("option",{attrs:{value:"BQ"}},[t._v("Bonaire, Sint Eustatius and Saba")]),t._v(" "),e("option",{attrs:{value:"BA"}},[t._v("Bosnia and Herzegovina")]),t._v(" "),e("option",{attrs:{value:"BW"}},[t._v("Botswana")]),t._v(" "),e("option",{attrs:{value:"BV"}},[t._v("Bouvet Island")]),t._v(" "),e("option",{attrs:{value:"BR"}},[t._v("Brazil")]),t._v(" "),e("option",{attrs:{value:"IO"}},[t._v("British Indian Ocean Territory")]),t._v(" "),e("option",{attrs:{value:"BN"}},[t._v("Brunei Darussalam")]),t._v(" "),e("option",{attrs:{value:"BG"}},[t._v("Bulgaria")]),t._v(" "),e("option",{attrs:{value:"BF"}},[t._v("Burkina Faso")]),t._v(" "),e("option",{attrs:{value:"BI"}},[t._v("Burundi")]),t._v(" "),e("option",{attrs:{value:"KH"}},[t._v("Cambodia")]),t._v(" "),e("option",{attrs:{value:"CM"}},[t._v("Cameroon")]),t._v(" "),e("option",{attrs:{value:"CA"}},[t._v("Canada")]),t._v(" "),e("option",{attrs:{value:"CV"}},[t._v("Cape Verde")]),t._v(" "),e("option",{attrs:{value:"KY"}},[t._v("Cayman Islands")]),t._v(" "),e("option",{attrs:{value:"CF"}},[t._v("Central African Republic")]),t._v(" "),e("option",{attrs:{value:"TD"}},[t._v("Chad")]),t._v(" "),e("option",{attrs:{value:"CL"}},[t._v("Chile")]),t._v(" "),e("option",{attrs:{value:"CN"}},[t._v("China")]),t._v(" "),e("option",{attrs:{value:"CX"}},[t._v("Christmas Island")]),t._v(" "),e("option",{attrs:{value:"CC"}},[t._v("Cocos (Keeling) Islands")]),t._v(" "),e("option",{attrs:{value:"CO"}},[t._v("Colombia")]),t._v(" "),e("option",{attrs:{value:"KM"}},[t._v("Comoros")]),t._v(" "),e("option",{attrs:{value:"CG"}},[t._v("Congo")]),t._v(" "),e("option",{attrs:{value:"CD"}},[t._v("Congo, the Democratic Republic of the")]),t._v(" "),e("option",{attrs:{value:"CK"}},[t._v("Cook Islands")]),t._v(" "),e("option",{attrs:{value:"CR"}},[t._v("Costa Rica")]),t._v(" "),e("option",{attrs:{value:"CI"}},[t._v("Côte d'Ivoire")]),t._v(" "),e("option",{attrs:{value:"HR"}},[t._v("Croatia")]),t._v(" "),e("option",{attrs:{value:"CU"}},[t._v("Cuba")]),t._v(" "),e("option",{attrs:{value:"CW"}},[t._v("Curaçao")]),t._v(" "),e("option",{attrs:{value:"CY"}},[t._v("Cyprus")]),t._v(" "),e("option",{attrs:{value:"CZ"}},[t._v("Czech Republic")]),t._v(" "),e("option",{attrs:{value:"DK"}},[t._v("Denmark")]),t._v(" "),e("option",{attrs:{value:"DJ"}},[t._v("Djibouti")]),t._v(" "),e("option",{attrs:{value:"DM"}},[t._v("Dominica")]),t._v(" "),e("option",{attrs:{value:"DO"}},[t._v("Dominican Republic")]),t._v(" "),e("option",{attrs:{value:"EC"}},[t._v("Ecuador")]),t._v(" "),e("option",{attrs:{value:"EG"}},[t._v("Egypt")]),t._v(" "),e("option",{attrs:{value:"SV"}},[t._v("El Salvador")]),t._v(" "),e("option",{attrs:{value:"GQ"}},[t._v("Equatorial Guinea")]),t._v(" "),e("option",{attrs:{value:"ER"}},[t._v("Eritrea")]),t._v(" "),e("option",{attrs:{value:"EE"}},[t._v("Estonia")]),t._v(" "),e("option",{attrs:{value:"ET"}},[t._v("Ethiopia")]),t._v(" "),e("option",{attrs:{value:"FK"}},[t._v("Falkland Islands (Malvinas)")]),t._v(" "),e("option",{attrs:{value:"FO"}},[t._v("Faroe Islands")]),t._v(" "),e("option",{attrs:{value:"FJ"}},[t._v("Fiji")]),t._v(" "),e("option",{attrs:{value:"FI"}},[t._v("Finland")]),t._v(" "),e("option",{attrs:{value:"FR"}},[t._v("France")]),t._v(" "),e("option",{attrs:{value:"GF"}},[t._v("French Guiana")]),t._v(" "),e("option",{attrs:{value:"PF"}},[t._v("French Polynesia")]),t._v(" "),e("option",{attrs:{value:"TF"}},[t._v("French Southern Territories")]),t._v(" "),e("option",{attrs:{value:"GA"}},[t._v("Gabon")]),t._v(" "),e("option",{attrs:{value:"GM"}},[t._v("Gambia")]),t._v(" "),e("option",{attrs:{value:"GE"}},[t._v("Georgia")]),t._v(" "),e("option",{attrs:{value:"DE"}},[t._v("Germany")]),t._v(" "),e("option",{attrs:{value:"GH"}},[t._v("Ghana")]),t._v(" "),e("option",{attrs:{value:"GI"}},[t._v("Gibraltar")]),t._v(" "),e("option",{attrs:{value:"GR"}},[t._v("Greece")]),t._v(" "),e("option",{attrs:{value:"GL"}},[t._v("Greenland")]),t._v(" "),e("option",{attrs:{value:"GD"}},[t._v("Grenada")]),t._v(" "),e("option",{attrs:{value:"GP"}},[t._v("Guadeloupe")]),t._v(" "),e("option",{attrs:{value:"GU"}},[t._v("Guam")]),t._v(" "),e("option",{attrs:{value:"GT"}},[t._v("Guatemala")]),t._v(" "),e("option",{attrs:{value:"GG"}},[t._v("Guernsey")]),t._v(" "),e("option",{attrs:{value:"GN"}},[t._v("Guinea")]),t._v(" "),e("option",{attrs:{value:"GW"}},[t._v("Guinea-Bissau")]),t._v(" "),e("option",{attrs:{value:"GY"}},[t._v("Guyana")]),t._v(" "),e("option",{attrs:{value:"HT"}},[t._v("Haiti")]),t._v(" "),e("option",{attrs:{value:"HM"}},[t._v("Heard Island and McDonald Islands")]),t._v(" "),e("option",{attrs:{value:"VA"}},[t._v("Holy See (Vatican City State)")]),t._v(" "),e("option",{attrs:{value:"HN"}},[t._v("Honduras")]),t._v(" "),e("option",{attrs:{value:"HK"}},[t._v("Hong Kong")]),t._v(" "),e("option",{attrs:{value:"HU"}},[t._v("Hungary")]),t._v(" "),e("option",{attrs:{value:"IS"}},[t._v("Iceland")]),t._v(" "),e("option",{attrs:{value:"IN"}},[t._v("India")]),t._v(" "),e("option",{attrs:{value:"ID"}},[t._v("Indonesia")]),t._v(" "),e("option",{attrs:{value:"IR"}},[t._v("Iran, Islamic Republic of")]),t._v(" "),e("option",{attrs:{value:"IQ"}},[t._v("Iraq")]),t._v(" "),e("option",{attrs:{value:"IE"}},[t._v("Ireland")]),t._v(" "),e("option",{attrs:{value:"IM"}},[t._v("Isle of Man")]),t._v(" "),e("option",{attrs:{value:"IL"}},[t._v("Israel")]),t._v(" "),e("option",{attrs:{value:"IT"}},[t._v("Italy")]),t._v(" "),e("option",{attrs:{value:"JM"}},[t._v("Jamaica")]),t._v(" "),e("option",{attrs:{value:"JP"}},[t._v("Japan")]),t._v(" "),e("option",{attrs:{value:"JE"}},[t._v("Jersey")]),t._v(" "),e("option",{attrs:{value:"JO"}},[t._v("Jordan")]),t._v(" "),e("option",{attrs:{value:"KZ"}},[t._v("Kazakhstan")]),t._v(" "),e("option",{attrs:{value:"KE"}},[t._v("Kenya")]),t._v(" "),e("option",{attrs:{value:"KI"}},[t._v("Kiribati")]),t._v(" "),e("option",{attrs:{value:"KP"}},[t._v("Korea, Democratic People's Republic of")]),t._v(" "),e("option",{attrs:{value:"KR"}},[t._v("Korea, Republic of")]),t._v(" "),e("option",{attrs:{value:"KW"}},[t._v("Kuwait")]),t._v(" "),e("option",{attrs:{value:"KG"}},[t._v("Kyrgyzstan")]),t._v(" "),e("option",{attrs:{value:"LA"}},[t._v("Lao People's Democratic Republic")]),t._v(" "),e("option",{attrs:{value:"LV"}},[t._v("Latvia")]),t._v(" "),e("option",{attrs:{value:"LB"}},[t._v("Lebanon")]),t._v(" "),e("option",{attrs:{value:"LS"}},[t._v("Lesotho")]),t._v(" "),e("option",{attrs:{value:"LR"}},[t._v("Liberia")]),t._v(" "),e("option",{attrs:{value:"LY"}},[t._v("Libya")]),t._v(" "),e("option",{attrs:{value:"LI"}},[t._v("Liechtenstein")]),t._v(" "),e("option",{attrs:{value:"LT"}},[t._v("Lithuania")]),t._v(" "),e("option",{attrs:{value:"LU"}},[t._v("Luxembourg")]),t._v(" "),e("option",{attrs:{value:"MO"}},[t._v("Macao")]),t._v(" "),e("option",{attrs:{value:"MK"}},[t._v("Macedonia, the former Yugoslav Republic of")]),t._v(" "),e("option",{attrs:{value:"MG"}},[t._v("Madagascar")]),t._v(" "),e("option",{attrs:{value:"MW"}},[t._v("Malawi")]),t._v(" "),e("option",{attrs:{value:"MY"}},[t._v("Malaysia")]),t._v(" "),e("option",{attrs:{value:"MV"}},[t._v("Maldives")]),t._v(" "),e("option",{attrs:{value:"ML"}},[t._v("Mali")]),t._v(" "),e("option",{attrs:{value:"MT"}},[t._v("Malta")]),t._v(" "),e("option",{attrs:{value:"MH"}},[t._v("Marshall Islands")]),t._v(" "),e("option",{attrs:{value:"MQ"}},[t._v("Martinique")]),t._v(" "),e("option",{attrs:{value:"MR"}},[t._v("Mauritania")]),t._v(" "),e("option",{attrs:{value:"MU"}},[t._v("Mauritius")]),t._v(" "),e("option",{attrs:{value:"YT"}},[t._v("Mayotte")]),t._v(" "),e("option",{attrs:{value:"MX"}},[t._v("Mexico")]),t._v(" "),e("option",{attrs:{value:"FM"}},[t._v("Micronesia, Federated States of")]),t._v(" "),e("option",{attrs:{value:"MD"}},[t._v("Moldova, Republic of")]),t._v(" "),e("option",{attrs:{value:"MC"}},[t._v("Monaco")]),t._v(" "),e("option",{attrs:{value:"MN"}},[t._v("Mongolia")]),t._v(" "),e("option",{attrs:{value:"ME"}},[t._v("Montenegro")]),t._v(" "),e("option",{attrs:{value:"MS"}},[t._v("Montserrat")]),t._v(" "),e("option",{attrs:{value:"MA"}},[t._v("Morocco")]),t._v(" "),e("option",{attrs:{value:"MZ"}},[t._v("Mozambique")]),t._v(" "),e("option",{attrs:{value:"MM"}},[t._v("Myanmar")]),t._v(" "),e("option",{attrs:{value:"NA"}},[t._v("Namibia")]),t._v(" "),e("option",{attrs:{value:"NR"}},[t._v("Nauru")]),t._v(" "),e("option",{attrs:{value:"NP"}},[t._v("Nepal")]),t._v(" "),e("option",{attrs:{value:"NL"}},[t._v("Netherlands")]),t._v(" "),e("option",{attrs:{value:"NC"}},[t._v("New Caledonia")]),t._v(" "),e("option",{attrs:{value:"NZ"}},[t._v("New Zealand")]),t._v(" "),e("option",{attrs:{value:"NI"}},[t._v("Nicaragua")]),t._v(" "),e("option",{attrs:{value:"NE"}},[t._v("Niger")]),t._v(" "),e("option",{attrs:{value:"NG"}},[t._v("Nigeria")]),t._v(" "),e("option",{attrs:{value:"NU"}},[t._v("Niue")]),t._v(" "),e("option",{attrs:{value:"NF"}},[t._v("Norfolk Island")]),t._v(" "),e("option",{attrs:{value:"MP"}},[t._v("Northern Mariana Islands")]),t._v(" "),e("option",{attrs:{value:"NO"}},[t._v("Norway")]),t._v(" "),e("option",{attrs:{value:"OM"}},[t._v("Oman")]),t._v(" "),e("option",{attrs:{value:"PK"}},[t._v("Pakistan")]),t._v(" "),e("option",{attrs:{value:"PW"}},[t._v("Palau")]),t._v(" "),e("option",{attrs:{value:"PS"}},[t._v("Palestinian Territory, Occupied")]),t._v(" "),e("option",{attrs:{value:"PA"}},[t._v("Panama")]),t._v(" "),e("option",{attrs:{value:"PG"}},[t._v("Papua New Guinea")]),t._v(" "),e("option",{attrs:{value:"PY"}},[t._v("Paraguay")]),t._v(" "),e("option",{attrs:{value:"PE"}},[t._v("Peru")]),t._v(" "),e("option",{attrs:{value:"PH"}},[t._v("Philippines")]),t._v(" "),e("option",{attrs:{value:"PN"}},[t._v("Pitcairn")]),t._v(" "),e("option",{attrs:{value:"PL"}},[t._v("Poland")]),t._v(" "),e("option",{attrs:{value:"PT"}},[t._v("Portugal")]),t._v(" "),e("option",{attrs:{value:"PR"}},[t._v("Puerto Rico")]),t._v(" "),e("option",{attrs:{value:"QA"}},[t._v("Qatar")]),t._v(" "),e("option",{attrs:{value:"RE"}},[t._v("Réunion")]),t._v(" "),e("option",{attrs:{value:"RO"}},[t._v("Romania")]),t._v(" "),e("option",{attrs:{value:"RU"}},[t._v("Russian Federation")]),t._v(" "),e("option",{attrs:{value:"RW"}},[t._v("Rwanda")]),t._v(" "),e("option",{attrs:{value:"BL"}},[t._v("Saint Barthélemy")]),t._v(" "),e("option",{attrs:{value:"SH"}},[t._v("Saint Helena, Ascension and Tristan da Cunha")]),t._v(" "),e("option",{attrs:{value:"KN"}},[t._v("Saint Kitts and Nevis")]),t._v(" "),e("option",{attrs:{value:"LC"}},[t._v("Saint Lucia")]),t._v(" "),e("option",{attrs:{value:"MF"}},[t._v("Saint Martin (French part)")]),t._v(" "),e("option",{attrs:{value:"PM"}},[t._v("Saint Pierre and Miquelon")]),t._v(" "),e("option",{attrs:{value:"VC"}},[t._v("Saint Vincent and the Grenadines")]),t._v(" "),e("option",{attrs:{value:"WS"}},[t._v("Samoa")]),t._v(" "),e("option",{attrs:{value:"SM"}},[t._v("San Marino")]),t._v(" "),e("option",{attrs:{value:"ST"}},[t._v("Sao Tome and Principe")]),t._v(" "),e("option",{attrs:{value:"SA"}},[t._v("Saudi Arabia")]),t._v(" "),e("option",{attrs:{value:"SN"}},[t._v("Senegal")]),t._v(" "),e("option",{attrs:{value:"RS"}},[t._v("Serbia")]),t._v(" "),e("option",{attrs:{value:"SC"}},[t._v("Seychelles")]),t._v(" "),e("option",{attrs:{value:"SL"}},[t._v("Sierra Leone")]),t._v(" "),e("option",{attrs:{value:"SG"}},[t._v("Singapore")]),t._v(" "),e("option",{attrs:{value:"SX"}},[t._v("Sint Maarten (Dutch part)")]),t._v(" "),e("option",{attrs:{value:"SK"}},[t._v("Slovakia")]),t._v(" "),e("option",{attrs:{value:"SI"}},[t._v("Slovenia")]),t._v(" "),e("option",{attrs:{value:"SB"}},[t._v("Solomon Islands")]),t._v(" "),e("option",{attrs:{value:"SO"}},[t._v("Somalia")]),t._v(" "),e("option",{attrs:{value:"ZA"}},[t._v("South Africa")]),t._v(" "),e("option",{attrs:{value:"GS"}},[t._v("South Georgia and the South Sandwich Islands")]),t._v(" "),e("option",{attrs:{value:"SS"}},[t._v("South Sudan")]),t._v(" "),e("option",{attrs:{value:"ES"}},[t._v("Spain")]),t._v(" "),e("option",{attrs:{value:"LK"}},[t._v("Sri Lanka")]),t._v(" "),e("option",{attrs:{value:"SD"}},[t._v("Sudan")]),t._v(" "),e("option",{attrs:{value:"SR"}},[t._v("Suriname")]),t._v(" "),e("option",{attrs:{value:"SJ"}},[t._v("Svalbard and Jan Mayen")]),t._v(" "),e("option",{attrs:{value:"SZ"}},[t._v("Swaziland")]),t._v(" "),e("option",{attrs:{value:"SE"}},[t._v("Sweden")]),t._v(" "),e("option",{attrs:{value:"CH"}},[t._v("Switzerland")]),t._v(" "),e("option",{attrs:{value:"SY"}},[t._v("Syrian Arab Republic")]),t._v(" "),e("option",{attrs:{value:"TW"}},[t._v("Taiwan, Province of China")]),t._v(" "),e("option",{attrs:{value:"TJ"}},[t._v("Tajikistan")]),t._v(" "),e("option",{attrs:{value:"TZ"}},[t._v("Tanzania, United Republic of")]),t._v(" "),e("option",{attrs:{value:"TH"}},[t._v("Thailand")]),t._v(" "),e("option",{attrs:{value:"TL"}},[t._v("Timor-Leste")]),t._v(" "),e("option",{attrs:{value:"TG"}},[t._v("Togo")]),t._v(" "),e("option",{attrs:{value:"TK"}},[t._v("Tokelau")]),t._v(" "),e("option",{attrs:{value:"TO"}},[t._v("Tonga")]),t._v(" "),e("option",{attrs:{value:"TT"}},[t._v("Trinidad and Tobago")]),t._v(" "),e("option",{attrs:{value:"TN"}},[t._v("Tunisia")]),t._v(" "),e("option",{attrs:{value:"TR"}},[t._v("Turkey")]),t._v(" "),e("option",{attrs:{value:"TM"}},[t._v("Turkmenistan")]),t._v(" "),e("option",{attrs:{value:"TC"}},[t._v("Turks and Caicos Islands")]),t._v(" "),e("option",{attrs:{value:"TV"}},[t._v("Tuvalu")]),t._v(" "),e("option",{attrs:{value:"UG"}},[t._v("Uganda")]),t._v(" "),e("option",{attrs:{value:"UA"}},[t._v("Ukraine")]),t._v(" "),e("option",{attrs:{value:"AE"}},[t._v("United Arab Emirates")]),t._v(" "),e("option",{attrs:{value:"GB"}},[t._v("United Kingdom")]),t._v(" "),e("option",{attrs:{value:"US"}},[t._v("United States")]),t._v(" "),e("option",{attrs:{value:"UM"}},[t._v("United States Minor Outlying Islands")]),t._v(" "),e("option",{attrs:{value:"UY"}},[t._v("Uruguay")]),t._v(" "),e("option",{attrs:{value:"UZ"}},[t._v("Uzbekistan")]),t._v(" "),e("option",{attrs:{value:"VU"}},[t._v("Vanuatu")]),t._v(" "),e("option",{attrs:{value:"VE"}},[t._v("Venezuela, Bolivarian Republic of")]),t._v(" "),e("option",{attrs:{value:"VN"}},[t._v("Viet Nam")]),t._v(" "),e("option",{attrs:{value:"VG"}},[t._v("Virgin Islands, British")]),t._v(" "),e("option",{attrs:{value:"VI"}},[t._v("Virgin Islands, U.S.")]),t._v(" "),e("option",{attrs:{value:"WF"}},[t._v("Wallis and Futuna")]),t._v(" "),e("option",{attrs:{value:"EH"}},[t._v("Western Sahara")]),t._v(" "),e("option",{attrs:{value:"YE"}},[t._v("Yemen")]),t._v(" "),e("option",{attrs:{value:"ZM"}},[t._v("Zambia")]),t._v(" "),e("option",{attrs:{value:"ZW"}},[t._v("Zimbabwe")])])]),t._v(" "),e("div",{staticClass:"input-group"},[e("label",{attrs:{for:"msg"}},[t._v("Message")]),t._v(" "),e("textarea",{attrs:{name:"msg",id:"msg",rows:"5"}})]),t._v(" "),e("input",{staticClass:"btn",attrs:{type:"submit",value:"SEND"}})])},function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"contact-content"},[a("h1",[this._v("Contact")]),this._v(" "),a("h2",[this._v("Send us a message explaining your ideas and needs. We will respond as soon as possible.")])])}]},L=e("VU/8")(w,E,!1,null,null,null).exports,I=e("BUuu"),x={name:"Footer",methods:{scroll:function(t){t.preventDefault();var a=t.target.href.replace("#",""),e=(a=a.split("/"))[a.length-1],o=""===e?document.getElementById("Home"):document.getElementById(e);I(o,1e3);var i=document.getElementById("logo");setTimeout(function(){i.classList="About"===e||"Contact"===e?"positive":"negative"},1e3)}}},y={render:function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("footer",{staticClass:"d-flex"},[e("div",{staticClass:"container d-grid"},[t._m(0),t._v(" "),e("div",{staticClass:"nav"},[e("ul",[e("li",[e("a",{attrs:{href:"#"},on:{click:function(a){return a.preventDefault(),t.scroll(a)}}},[t._v("Home")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#About"},on:{click:function(a){return a.preventDefault(),t.scroll(a)}}},[t._v("About Us")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Services"},on:{click:function(a){return a.preventDefault(),t.scroll(a)}}},[t._v("Services")])]),t._v(" "),e("li",[e("a",{attrs:{href:"#Contact"},on:{click:function(a){return a.preventDefault(),t.scroll(a)}}},[t._v("Contact")])])])]),t._v(" "),e("div",{staticClass:"social"},[e("div",{staticClass:"icons"},[e("a",{attrs:{href:""}},[e("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"facebook-f"}}})],1),t._v(" "),e("a",{attrs:{href:""}},[e("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"twitter"}}})],1),t._v(" "),e("a",{attrs:{href:""}},[e("font-awesome-icon",{attrs:{icon:{prefix:"fab",iconName:"instagram"}}})],1)]),t._v(" "),t._m(1)])])])},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("div",{staticClass:"d-flex logo"},[a("figure"),this._v(" "),a("span",{staticClass:"slogan"},[this._v("Slogan here!")]),this._v(" "),a("span",{staticClass:"copyright"},[this._v("\n        Copyright © 2018. All rights reserved.\n      ")])])},function(){var t=this.$createElement,a=this._self._c||t;return a("span",[this._v("\n        Síguenos en nuestras redes sociales como "),a("b",[this._v("3DmensionalG")])])}]},D={name:"Main",components:{Nav:c,About:h,Services:A,Contact:L,Footer:e("VU/8")(x,y,!1,null,null,null).exports}},k={render:function(){var t=this.$createElement,a=this._self._c||t;return a("main",[a("Nav"),this._v(" "),a("div",{staticClass:"content"},[this._m(0),this._v(" "),a("About"),this._v(" "),a("Services"),this._v(" "),a("Contact")],1),this._v(" "),a("Footer")],1)},staticRenderFns:[function(){var t=this.$createElement,a=this._self._c||t;return a("section",{staticClass:"d-flex banner",attrs:{id:"Home"}},[a("h1",[this._v("Here the amazing title")]),this._v(" "),a("span",{staticClass:"icon icon-next"},[this._v("down")])])}]},F=e("VU/8")(D,k,!1,null,null,null).exports;o.a.use(s.a);var G=new s.a({routes:[{path:"/",name:"Main",component:F}]}),N=e("RInU"),T=e.n(N),R=(e("AhPL"),e("C/JF")),P=e("DfMW"),H=e("U0v6");R.library.add(P.d,P.a,P.b,P.c),o.a.component("font-awesome-icon",H.FontAwesomeIcon),o.a.config.productionTip=!1,T.a.init(),o.a.config.productionTip=!1,new o.a({el:"#app",router:G,components:{App:n},template:"<App/>"})},g8hB:function(t,a){},yHgi:function(t,a){t.exports={render:function(){var t=this.$createElement,a=this._self._c||t;return a("svg",{staticStyle:{isolation:"isolate"},attrs:{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 600 600"}},[a("defs",[a("clipPath",{attrs:{id:"a"}},[a("path",{attrs:{d:"M0 0h600v600H0z"}})])]),a("g",{attrs:{"clip-path":"url(#a)"}},[a("path",{staticClass:"container",attrs:{fill:"transparent",d:"M0 0h600v600H0z"}}),a("g",{attrs:{fill:"#FEFEFE"}},[a("path",{attrs:{d:"M300 27.333L120 131.201v69.282L300 96.615l102.676 59.233c9.561 5.516 17.431 18.956 17.563 29.993l2.022 169.292c.132 11.038-7.524 15.521-17.085 10.005L300 304.461 120 408.33v69.282l180-103.869 162.554 91.113c9.629 5.397 17.446.817 17.446-10.221v-306.41c0-11.039-7.817-24.382-17.446-29.779L300 27.333z"}}),a("path",{attrs:{d:"M120 272.445v69.282l180-103.869 42.679 24.641c9.56 5.52 17.321 1.039 17.321-10v-29.282c0-11.038-7.761-24.48-17.321-30L300 168.576 120 272.445z"}}),a("path",{attrs:{d:"M195 500.76l-10 5.774-50-28.868 10-5.773 29.129 3.522L165 460.346l10-5.774 50 28.868-10 5.773-32.5-18.764 7.5 15.877-25-2.886 30 17.32zm95-54.848l-40 23.094-50-28.868 40-23.094 10 5.774-30 17.32 10 5.774 20-11.809 10 5.774-20 11.808 10 5.774 30-17.321 10 5.774zm30-17.321l-10 5.774-50-28.868 10-5.773 50 5.773-30-17.32 10-5.774 50 28.868-10 5.773-50-5.773 30 17.32z","fill-rule":"evenodd"}}),a("path",{attrs:{d:"M310 566.894l-10 5.773-50-28.867 10-5.774 50 5.774-30-17.321 10-5.773 50 28.867-10 5.774-50-5.774 30 17.321z"}}),a("path",{attrs:{d:"M332.269 487.48l-10 5.774-50-28.868 10-5.773 50 28.867zm39.33-34.254l11.34-6.547c2.39-1.38 2.406-3.648.037-5.063l-21.414-12.783c-2.369-1.414-6.209-1.401-8.568.031l-11.451 6.948c-2.359 1.432-2.334 3.714.056 5.094l21.34 12.32c2.39 1.38 6.27 1.38 8.66 0zm-50-17.32l31.34-18.094c2.39-1.38 6.27-1.38 8.66 0l41.34 23.867c2.39 1.38 2.39 3.62 0 5l-31.34 18.094c-2.39 1.38-6.27 1.38-8.66 0l-41.34-23.867c-2.39-1.38-2.39-3.62 0-5zM362.5 522.149l10-5.773-20-8.661 10 14.434zm7.5 10.104l-10 5.773-25-43.301 65 20.207-10 5.774-7.5-1.444-15 8.661 2.5 4.33z","fill-rule":"evenodd"}}),a("path",{attrs:{d:"M241.17 492.544l6.405 3.81-10 5.773-.669-.386c-2.39-1.38-6.271-1.38-8.661 0l-11.339 6.547c-2.39 1.38-2.837 3.362-.997 4.424 3.679 2.125 10.532 1.584 15.294-1.207l12.745-7.47c4.762-2.79 12.508-2.816 17.288-.056l12.679 7.321c4.78 2.759 4.78 7.24 0 10l-22.679 13.094c-4.78 2.759-12.57 2.81-17.386.114l-6.275-3.513 10-5.773.67.386c2.39 1.38 6.271 1.38 8.661 0l11.339-6.547c2.39-1.38 2.39-3.62 0-5l-1.339-.773c-2.39-1.38-6.278-1.393-8.677-.029l-16.961 9.645c-4.797 2.728-12.573 2.702-17.353-.057l-12.679-7.321c-4.78-2.76-4.78-7.24 0-10l22.679-13.094c4.78-2.76 12.512-2.709 17.255.112zM375 471.631l50 28.867 40-23.094-10-5.773-25.67 14.82c-2.39 1.38-6.27 1.38-8.66 0L385 465.857l-10 5.774z"}})])])])},toString:function(){return"/home/josedan/Documents/3Dmensional/3Dmensional-website/src/assets/logo-neg.svg"}}}},["NHnr"]);
//# sourceMappingURL=app.69a66d6676bc476df782.js.map