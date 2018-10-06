(function(e){function t(t){for(var i,s,a=t[0],l=t[1],u=t[2],_=0,d=[];_<a.length;_++)s=a[_],r[s]&&d.push(r[s][0]),r[s]=0;for(i in l)Object.prototype.hasOwnProperty.call(l,i)&&(e[i]=l[i]);m&&m(t);while(d.length)d.shift()();return o.push.apply(o,u||[]),n()}function n(){for(var e,t=0;t<o.length;t++){for(var n=o[t],i=!0,a=1;a<n.length;a++){var l=n[a];0!==r[l]&&(i=!1)}i&&(o.splice(t--,1),e=s(s.s=n[0]))}return e}var i={},r={app:0},o=[];function s(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,s),n.l=!0,n.exports}s.m=e,s.c=i,s.d=function(e,t,n){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(s.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)s.d(n,i,function(t){return e[t]}.bind(null,i));return n},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var a=window["webpackJsonp"]=window["webpackJsonp"]||[],l=a.push.bind(a);a.push=t,a=a.slice();for(var u=0;u<a.length;u++)t(a[u]);var m=l;o.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"01ec":function(e,t,n){"use strict";var i=n("92c7"),r=n.n(i);r.a},"034f":function(e,t,n){"use strict";var i=n("c21b"),r=n.n(i);r.a},"2c6f":function(e,t,n){"use strict";var i=n("2efc"),r=n.n(i);r.a},"2efc":function(e,t,n){},4487:function(e,t,n){"use strict";var i=n("c143"),r=n.n(i);r.a},5038:function(e,t,n){},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),r=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"subscription-app"}},[e.loading?n("Loading"):e._e(),e._v("\n  "+e._s(e.message)+"\n  "),n("BookSpecs",{ref:"bookspecs",attrs:{maximum_price:e.subscription[0].maximum_price,minimum_goodreads_rating:e.subscription[0].minimum_goodreads_rating,worst_allowable_condition:e.subscription[0].worst_allowable_condition,minimum_page_length:e.subscription[0].minimum_page_length,maximum_page_length:e.subscription[0].maximum_page_length,series_handler:e.subscription[0].series_handler,decision_method:e.subscription[0].decision_method,genres:e.subscription[0].genres,frequency:e.subscription[0].frequency,minimum_number_goodreads_r:e.subscription[0].minimum_number_goodreads_r,genre_lookup:e.genres[0]}}),n("Billing",{ref:"billing",attrs:{last4:e.subscription[0].stripe_customer.last4,zip:e.subscription[0].stripe_customer.zip},on:{"send-token":e.setToken}}),n("Shipping",{ref:"shipping",attrs:{full_name:e.subscription[0].full_name,address_line_1:e.subscription[0].address_line_1,address_line_2:e.subscription[0].address_line_2,city:e.subscription[0].city,state_province_region:e.subscription[0].state_province_region,zip:e.subscription[0].zip,country_region:e.subscription[0].country_region}}),n("button",{on:{click:e.submitAll}},[e._v("Submit")])],1)},o=[],s=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("h2",[e._v("Book Specs")]),n("div",[n("label",{attrs:{for:"minimum_goodreads_rating"}},[e._v("Minimum goodreads rating:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mutable_minimum_goodreads_rating,expression:"mutable_minimum_goodreads_rating"}],attrs:{id:"minimum_goodreads_rating",type:"number",min:"0",max:"5"},domProps:{value:e.mutable_minimum_goodreads_rating},on:{input:function(t){t.target.composing||(e.mutable_minimum_goodreads_rating=t.target.value)}}}),e._v(" stars\n    ")]),n("div",[n("label",{attrs:{for:"minimum_number_goodreads_r"}},[e._v("Minimum number of Goodreads ratings:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mutable_minimum_number_goodreads_r,expression:"mutable_minimum_number_goodreads_r"}],attrs:{id:"minimum_number_goodreads_r",type:"number"},domProps:{value:e.mutable_minimum_number_goodreads_r},on:{input:function(t){t.target.composing||(e.mutable_minimum_number_goodreads_r=t.target.value)}}}),e._v(" ratings\n    ")]),n("div",[n("label",{attrs:{for:"maximum_price"}},[e._v("Maximum price:")]),e._v("\n        $"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mutable_maximum_price,expression:"mutable_maximum_price"}],attrs:{id:"maximum_price",type:"number",step:"0.01"},domProps:{value:e.mutable_maximum_price},on:{input:function(t){t.target.composing||(e.mutable_maximum_price=t.target.value)}}})]),n("div",[n("label",{attrs:{for:"minimum_page_length"}},[e._v("Page length range:")]),n("div",{staticStyle:{display:"inline-block"}},[e._v("\n            Between "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mutable_minimum_page_length,expression:"mutable_minimum_page_length"}],attrs:{id:"minimum_page_length",type:"number"},domProps:{value:e.mutable_minimum_page_length},on:{input:function(t){t.target.composing||(e.mutable_minimum_page_length=t.target.value)}}}),e._v(" and\n            "),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mutable_maximum_page_length,expression:"mutable_maximum_page_length"}],attrs:{id:"maximum_page_length",type:"number"},domProps:{value:e.mutable_maximum_page_length},on:{input:function(t){t.target.composing||(e.mutable_maximum_page_length=t.target.value)}}}),e._v(" pages\n        ")])]),n("div",[n("label",{attrs:{for:"worst_allowable_condition"}},[e._v("Worst allowable condition:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.mutable_worst_allowable_condition,expression:"mutable_worst_allowable_condition"}],attrs:{id:"worst_allowable_condition"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.mutable_worst_allowable_condition=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"acceptable"}},[e._v("Used - Acceptable")]),n("option",{attrs:{value:"good"}},[e._v("Used - Good")]),n("option",{attrs:{value:"very_good"}},[e._v("Used - Very Good")]),n("option",{attrs:{value:"like_new"}},[e._v("Used - Like New")]),n("option",{attrs:{value:"new"}},[e._v("New")])])]),n("div",[n("label",{attrs:{for:"series_handler"}},[e._v("How to handle books part of a series:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.mutable_series_handler,expression:"mutable_series_handler"}],attrs:{id:"series_handler"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.mutable_series_handler=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"if_read"}},[e._v('Only allow a sequel if the previous one is in my "read" list')]),n("option",{attrs:{value:"no_series"}},[e._v("Don't allow any books that are part of a series")]),n("option",{attrs:{value:"any"}},[e._v("Allow any book, regardless of series")])])]),n("div",[n("label",[e._v("Decision method:")]),n("div",{attrs:{id:"decision_method"}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.mutable_decision_method,expression:"mutable_decision_method"}],attrs:{type:"checkbox",id:"newly_released",value:"newly_released"},domProps:{checked:Array.isArray(e.mutable_decision_method)?e._i(e.mutable_decision_method,"newly_released")>-1:e.mutable_decision_method},on:{change:function(t){var n=e.mutable_decision_method,i=t.target,r=!!i.checked;if(Array.isArray(n)){var o="newly_released",s=e._i(n,o);i.checked?s<0&&(e.mutable_decision_method=n.concat([o])):s>-1&&(e.mutable_decision_method=n.slice(0,s).concat(n.slice(s+1)))}else e.mutable_decision_method=r}}}),n("label",{attrs:{for:"newly_released"}},[e._v("Choose newly released books")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mutable_decision_method,expression:"mutable_decision_method"}],attrs:{type:"checkbox",id:"popular_this_week",value:"popular_this_week"},domProps:{checked:Array.isArray(e.mutable_decision_method)?e._i(e.mutable_decision_method,"popular_this_week")>-1:e.mutable_decision_method},on:{change:function(t){var n=e.mutable_decision_method,i=t.target,r=!!i.checked;if(Array.isArray(n)){var o="popular_this_week",s=e._i(n,o);i.checked?s<0&&(e.mutable_decision_method=n.concat([o])):s>-1&&(e.mutable_decision_method=n.slice(0,s).concat(n.slice(s+1)))}else e.mutable_decision_method=r}}}),n("label",{attrs:{for:"popular_this_week"}},[e._v("Popular this week")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.mutable_decision_method,expression:"mutable_decision_method"}],attrs:{type:"checkbox",id:"popular",value:"popular"},domProps:{checked:Array.isArray(e.mutable_decision_method)?e._i(e.mutable_decision_method,"popular")>-1:e.mutable_decision_method},on:{change:function(t){var n=e.mutable_decision_method,i=t.target,r=!!i.checked;if(Array.isArray(n)){var o="popular",s=e._i(n,o);i.checked?s<0&&(e.mutable_decision_method=n.concat([o])):s>-1&&(e.mutable_decision_method=n.slice(0,s).concat(n.slice(s+1)))}else e.mutable_decision_method=r}}}),n("label",{attrs:{for:"popular"}},[e._v("Popular all time")]),n("br"),n("input",{directives:[{name:"model",rawName:"v-model",value:e.decision_method,expression:"decision_method"}],attrs:{type:"checkbox",id:"random",value:"random"},domProps:{checked:Array.isArray(e.decision_method)?e._i(e.decision_method,"random")>-1:e.decision_method},on:{change:function(t){var n=e.decision_method,i=t.target,r=!!i.checked;if(Array.isArray(n)){var o="random",s=e._i(n,o);i.checked?s<0&&(e.decision_method=n.concat([o])):s>-1&&(e.decision_method=n.slice(0,s).concat(n.slice(s+1)))}else e.decision_method=r}}}),n("label",{attrs:{for:"random"}},[e._v("Completely random")])])]),n("div",[n("label",{attrs:{for:"frequency"}},[e._v("Frequency of order:")]),n("select",{directives:[{name:"model",rawName:"v-model",value:e.mutable_frequency,expression:"mutable_frequency"}],attrs:{id:"frequency"},on:{change:function(t){var n=Array.prototype.filter.call(t.target.options,function(e){return e.selected}).map(function(e){var t="_value"in e?e._value:e.value;return t});e.mutable_frequency=t.target.multiple?n:n[0]}}},[n("option",{attrs:{value:"weekly"}},[e._v("Weekly")]),n("option",{attrs:{value:"biweekly"}},[e._v("Biweekly")]),n("option",{attrs:{value:"monthly"}},[e._v("Monthly")]),n("option",{attrs:{value:"bimonthly"}},[e._v("Bimonthly")])])]),n("div",{attrs:{id:"genre-block"}},[n("h3",[e._v("Genres")]),n("div",{attrs:{id:"genre-list"}},[n("ul",e._l(e.mutable_genres,function(t,i){return n("li",{key:i},[e._v("\n                    "+e._s(e.genre_lookup[t])+" "),n("img",{staticClass:"remove-genre",attrs:{src:"http://www.inextenso-avocats.fr/wp-content/uploads/2017/06/false-2061131_960_720.png"},on:{click:function(t){e.mutable_genres.splice(i,1)}}})])}))]),n("AutocompleteInput",{attrs:{placeholder:"Add a genre",items:Object.values(e.genre_lookup)},on:{change:function(t){e.new_genre=t},enter:e.addGenre}})],1)])},a=[],l=(n("ac6a"),n("456d"),n("7514"),function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"autocomplete"},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.search,expression:"search"}],attrs:{type:"text",placeholder:e.placeholder},domProps:{value:e.search},on:{input:[function(t){t.target.composing||(e.search=t.target.value)},e.onChange],keyup:[function(t){return"button"in t||!e._k(t.keyCode,"enter",13,t.key,"Enter")?e.onEnter(t):null},function(t){return"button"in t||!e._k(t.keyCode,"down",40,t.key,["Down","ArrowDown"])?e.onArrowDown(t):null},function(t){return"button"in t||!e._k(t.keyCode,"up",38,t.key,["Up","ArrowUp"])?e.onArrowUp(t):null}]}}),n("ul",{directives:[{name:"show",rawName:"v-show",value:e.isOpen,expression:"isOpen"}],staticClass:"autocomplete-results"},e._l(e.results,function(t,i){return n("li",{key:i,staticClass:"autocomplete-result",class:{"is-active":i===e.arrowCounter},on:{click:function(n){e.setResult(t)}}},[e._v("\n            "+e._s(t)+"\n        ")])}))])}),u=[],m=(n("386d"),{name:"AutocompleteInput",props:{items:{type:Array,required:!1,default:function(){return[]}},placeholder:{type:String}},data:function(){return{search:"",results:[],isOpen:!1,arrowCounter:-1}},mounted:function(){document.addEventListener("click",this.handleClickOutside)},destroyed:function(){document.removeEventListener("click",this.handleClickOutside)},methods:{handleClickOutside:function(e){this.$el.contains(e.target)||(this.isOpen=!1,this.arrowCounter=-1)},onArrowDown:function(){this.arrowCounter<this.results.length&&(this.arrowCounter=this.arrowCounter+1)},onArrowUp:function(){this.arrowCounter>0&&(this.arrowCounter=this.arrowCounter-1)},onEnter:function(){this.isOpen&&this.results.length&&(-1==this.arrowCounter?this.setResult(this.results[0]):(this.setResult(this.results[this.arrowCounter]),this.arrowCounter=-1))},onChange:function(){this.search?(this.isOpen=!0,this.filterResults()):this.isOpen=!1,this.$emit("change",this.search)},filterResults:function(){var e=this;this.results=this.items.filter(function(t){return t.toLowerCase().indexOf(e.search.toLowerCase())>-1})},setResult:function(e){this.isOpen=!1,this.search="",this.$emit("change",e),this.$emit("enter")}}}),_=m,d=(n("2c6f"),n("2877")),c=Object(d["a"])(_,l,u,!1,null,null,null);c.options.__file="AutocompleteInput.vue";var p=c.exports,g={name:"BookSpecs",components:{AutocompleteInput:p},props:["maximum_price","minimum_goodreads_rating","worst_allowable_condition","minimum_page_length","maximum_page_length","series_handler","decision_method","genres","frequency","minimum_number_goodreads_r","binding","genre_lookup"],data:function(){return{new_genre:"",mutable_genres:this.genres,mutable_maximum_price:this.maximum_price,mutable_minimum_goodreads_rating:this.minimum_goodreads_rating,mutable_worst_allowable_condition:this.worst_allowable_condition,mutable_minimum_page_length:this.minimum_page_length,mutable_maximum_page_length:this.maximum_page_lengthh,mutable_series_handler:this.series_handler,mutable_decision_method:this.decision_method,mutable_frequency:this.frequency,mutable_minimum_number_goodreads_r:this.minimum_number_goodreads_r,mutable_binding:this.binding}},methods:{addGenre:function(){var e=this,t=Object.keys(this.genre_lookup).find(function(t){return e.genre_lookup[t]===e.new_genre});this.mutable_genres.push(t),this.new_genre=""},sendData:function(){var e={};return e["maximum_price"]=this.mutable_maximum_price,e["minimum_goodreads_rating"]=this.mutable_minimum_goodreads_rating,e["worst_allowable_condition"]=this.mutable_worst_allowable_condition,e["minimum_page_length"]=this.mutable_minimum_page_length,e["maximum_page_length"]=this.mutable_maximum_page_length,e["series_handler"]=this.mutable_series_handler,e["decision_method"]=this.mutable_decision_method,e["genres"]=this.mutable_genres,e["frequency"]=this.mutable_frequency,e["minimum_number_goodreads_r"]=this.mutable_minimum_number_goodreads_r,e["binding"]=this.mutable_binding,e}}},h=g,v=(n("9ba8"),Object(d["a"])(h,s,a,!1,null,"b7d9d4de",null));v.options.__file="BookSpecs.vue";var b,f,y=v.exports,w=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("h2",[e._v("Billing")]),n("div",{directives:[{name:"show",rawName:"v-show",value:e.last4,expression:"last4"}],staticStyle:{position:"relative"}},[e._v("\n        Card: **** **** **** "+e._s(e.last4)),n("br"),e._v("\n        ZIP: "+e._s(e.zip)),n("br"),n("button",{staticStyle:{position:"absolute",top:"0",right:"0"},on:{click:e.edit}},[e._v("Change")])]),n("div",{directives:[{name:"show",rawName:"v-show",value:!e.last4,expression:"!last4"}],staticClass:"form-row"},[n("label",{attrs:{for:"card-element"}},[e._v("Credit or debit card")]),n("div",{attrs:{id:"card-element"}}),n("div",{attrs:{id:"card-errors",role:"alert"}})])])},k=[],x={name:"Billing",props:["last4","zip"],data:function(){return{editing:!1}},mounted:function(){this.mountStripe(),this.last4||this.edit()},methods:{edit:function(){this.editing=!0,this.last4=""},mountStripe:function(){b=Stripe("pk_test_9lVYqtKN2QjWHJv0zxbKYUR4");var e=b.elements(),t={base:{fontSize:"16px",color:"#32325d"}};f=e.create("card",{style:t}),f.mount("#card-element"),f.addEventListener("change",function(e){var t=document.getElementById("card-errors");e.error?t.textContent=e.error.message:t.textContent=""})},createCardToken:function(){if(this.last4)this.stripeTokenHandler(" ");else{var e=this;b.createToken(f).then(function(t){if(t.error){var n=document.getElementById("card-errors");n.textContent=t.error.message,e.stripeTokenHandler("")}else e.stripeTokenHandler(t.token)})}},stripeTokenHandler:function(e){this.$emit("send-token",e)}}},q=x,C=(n("01ec"),Object(d["a"])(q,w,k,!1,null,null,null));C.options.__file="Billing.vue";var A=C.exports,O=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"section"},[n("h2",[e._v("Shipping")]),n("label",{attrs:{for:"full_name"}},[e._v("Full name:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.full_name,expression:"full_name"}],attrs:{id:"full_name"},domProps:{value:e.full_name},on:{input:function(t){t.target.composing||(e.full_name=t.target.value)}}}),n("br"),n("label",{attrs:{for:"address_line_1"}},[e._v("Address line 1:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.address_line_1,expression:"address_line_1"}],attrs:{id:"address_line_1"},domProps:{value:e.address_line_1},on:{input:function(t){t.target.composing||(e.address_line_1=t.target.value)}}}),n("br"),n("label",{attrs:{for:"address_line_2"}},[e._v("Address line 2:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.address_line_2,expression:"address_line_2"}],attrs:{id:"address_line_2"},domProps:{value:e.address_line_2},on:{input:function(t){t.target.composing||(e.address_line_2=t.target.value)}}}),n("br"),n("label",{attrs:{for:"city"}},[e._v("City:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.city,expression:"city"}],attrs:{id:"city"},domProps:{value:e.city},on:{input:function(t){t.target.composing||(e.city=t.target.value)}}}),n("br"),n("label",{attrs:{for:"state_province_region"}},[e._v("State/Provice/Region:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.state_province_region,expression:"state_province_region"}],attrs:{id:"state_province_region"},domProps:{value:e.state_province_region},on:{input:function(t){t.target.composing||(e.state_province_region=t.target.value)}}}),n("br"),n("label",{attrs:{for:"zip"}},[e._v("ZIP:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.zip,expression:"zip"}],attrs:{id:"zip"},domProps:{value:e.zip},on:{input:function(t){t.target.composing||(e.zip=t.target.value)}}}),n("br"),n("label",{attrs:{for:"country_region"}},[e._v("Country/Region:")]),n("input",{directives:[{name:"model",rawName:"v-model",value:e.country_region,expression:"country_region"}],attrs:{id:"country_region"},domProps:{value:e.country_region},on:{input:function(t){t.target.composing||(e.country_region=t.target.value)}}}),n("br")])},P=[],S={name:"Shipping",props:["full_name","address_line_1","address_line_2","city","state_province_region","zip","country_region"],methods:{sendData:function(){var e={};return e["full_name"]=this.full_name,e["address_line_1"]=this.address_line_1,e["address_line_2"]=this.address_line_2,e["city"]=this.city,e["state_province_region"]=this.state_province_region,e["zip"]=this.zip,e["country_region"]=this.country_region,e}}},N=S,z=(n("4487"),Object(d["a"])(N,O,P,!1,null,null,null));z.options.__file="Shipping.vue";var $=z.exports,j=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"lds-dual-ring"})},B=[],E={name:"Loading"},T=E,D=(n("5c6e"),Object(d["a"])(T,j,B,!1,null,"266cdb38",null));D.options.__file="Loading.vue";var L=D.exports;if(!I){var I={settings:{}};I.settings.obsequens={maximum_price:15,minimum_goodreads_rating:"",worst_allowable_condition:"acceptable",minimum_page_length:"",maximum_page_length:"",series_handler:"any",decision_method:[],genres:[],frequency:"monthly",minimum_number_goodreads_r:0,stripe_token:"",stripe_customer:{last4:"",zip:""},full_name:"",address_line_1:"",address_line_2:"",city:"",state_province_region:"",zip:"",country_region:""}}var M="https://obsequens.org/contentasjson/node/",R={name:"subscription_app",components:{BookSpecs:y,Billing:A,Shipping:$,Loading:L},data:function(){return{subscription:[{maximum_price:I.settings.obsequens.maximum_price,minimum_goodreads_rating:I.settings.obsequens.minimum_goodreads_rating,worst_allowable_condition:I.settings.obsequens.worst_allowable_condition,minimum_page_length:I.settings.obsequens.minimum_page_length,maximum_page_length:I.settings.obsequens.maximum_page_length,series_handler:I.settings.obsequens.series_handler,decision_method:I.settings.obsequens.decision_method,genres:I.settings.obsequens.genres,frequency:I.settings.obsequens.frequency,minimum_number_goodreads_r:I.settings.obsequens.minimum_number_goodreads_r,stripe_token:"",stripe_customer:I.settings.obsequens.stripe_customer,full_name:I.settings.obsequens.full_name,address_line_1:I.settings.obsequens.address_line_1,address_line_2:I.settings.obsequens.address_line_2,city:I.settings.obsequens.city,state_province_region:I.settings.obsequens.state_province_region,zip:I.settings.obsequens.zip,country_region:I.settings.obsequens.country_region}],loading:!1,genres:{},message:"",sub_id:"",new_sub:!1}},mounted:function(){this.getGenres()},methods:{getGenres:function(){this.$http.get("https://obsequens.org/api/genres.json").then(function(e){this.$set(this.genres,0,e.body)})},getSubscription:function(e){this.loading=!0,this.sub_id=e,this.$http.get(M+e).then(function(e){this.loading=!1,this.$set(this.subscription,0,e.body)})},submitAll:function(){this.message="",this.$refs.billing.createCardToken()},setToken:function(e){if(e){" "!=e&&(this.stripe_token=e.id);var t=this.$refs.bookspecs.sendData();if(console.log(t),t.maximum_price)if(t.decision_method.length){var n=this.$refs.shipping.sendData();console.log(n);var i={bookSpecs:t,stripe_token:this.stripe_token,shippingInfo:n};this.$http.post("https://obsequens.org/api/create_subscription",{data:i}).then(function(e){console.log(e)})}else this.message="Decision method is required";else this.message="Maximum price is required"}else this.message="There were problems with your card"}}},U=R,G=(n("034f"),Object(d["a"])(U,r,o,!1,null,null,null));G.options.__file="App.vue";var H=G.exports,J=n("28dd");i["a"].config.productionTip=!1,i["a"].use(J["a"]),new i["a"]({render:function(e){return e(H)}}).$mount("#app")},"5c6e":function(e,t,n){"use strict";var i=n("5038"),r=n.n(i);r.a},7:function(e,t){},"92c7":function(e,t,n){},"9ba8":function(e,t,n){"use strict";var i=n("aa00"),r=n.n(i);r.a},aa00:function(e,t,n){},c143:function(e,t,n){},c21b:function(e,t,n){}});
//# sourceMappingURL=app.c546a47d.js.map