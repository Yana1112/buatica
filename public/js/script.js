function initMobile(){console.log("is-mobile")}function initTablet(){console.log("is-tablet")}function initDesktop(){console.log("is-desktop")}!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):e.ssm=t()}(this,(function(){"use strict";function e(e,t){e.forEach((function(e){return e(t)}))}var t=function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")},n=function(){function e(e,t){for(var n=0;n<t.length;n++){var i=t[n];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}return function(t,n,i){return n&&e(t.prototype,n),i&&e(t,i),t}}(),i=[],s=function(){},o=function(){function o(e){if(t(this,o),this.id=e.id||Math.random().toString(36).substr(2,9),this.query=e.query||"all",this.options=Object.assign({},{onEnter:[],onLeave:[],onResize:[],onFirstRun:[]},e),"function"==typeof this.options.onEnter&&(this.options.onEnter=[this.options.onEnter]),"function"==typeof this.options.onLeave&&(this.options.onLeave=[this.options.onLeave]),"function"==typeof this.options.onResize&&(this.options.onResize=[this.options.onResize]),"function"==typeof this.options.onFirstRun&&(this.options.onFirstRun=[this.options.onFirstRun]),!1===this.testConfigOptions("once"))return this.valid=!1,!1;this.valid=!0,this.active=!1,this.init()}return n(o,[{key:"init",value:function(){var e=this;this.test=window.matchMedia(this.query),this.test.matches&&this.testConfigOptions("match")&&this.enterState(),this.listener=function(t){var n=!1;t.matches?e.testConfigOptions("match")&&(e.enterState(),n=!0):(e.leaveState(),n=!0),n&&s()},this.test.addListener(this.listener)}},{key:"enterState",value:function(){e(this.options.onFirstRun,this.eventData("firstRun")),e(this.options.onEnter,this.eventData("enter")),this.options.onFirstRun=[],this.active=!0}},{key:"leaveState",value:function(){e(this.options.onLeave,this.eventData("leave")),this.active=!1}},{key:"resizeState",value:function(){this.testConfigOptions("resize")&&e(this.options.onResize,this.eventData("resize"))}},{key:"destroy",value:function(){this.test.removeListener(this.listener)}},{key:"attachCallback",value:function(e,t,n){switch(e){case"enter":this.options.onEnter.push(t);break;case"leave":this.options.onLeave.push(t);break;case"resize":this.options.onResize.push(t)}"enter"===e&&n&&this.active&&t(this.eventData(e))}},{key:"testConfigOptions",value:function(e){var t=this,n=!0;return i.forEach((function(i){void 0!==t.options[i.name]&&i.when===e&&!1===i.test.bind(t)()&&(n=!1)})),n}},{key:"eventData",value:function(e){return{eventType:e,state:this}}}],[{key:"addConfigOption",value:function(e){i.push(e)}},{key:"getConfigOptions",value:function(){return i}},{key:"removeConfigOption",value:function(e){i.forEach((function(t,n){t.name===e&&i.splice(n,1)}))}},{key:"setStateChangeMethod",value:function(e){if("function"!=typeof e)throw new Error("Not a function");s=e}}]),o}();return new(function(){function e(){t(this,e),this.states=[],this.resizeTimer=null,this.configOptions=[],window.addEventListener("resize",function(e){var t=this,n=void 0;return function(){for(var i=arguments.length,s=Array(i),o=0;o<i;o++)s[o]=arguments[o];n&&window.cancelAnimationFrame(n),n=window.requestAnimationFrame((function(){n=null,e.apply(t,s)}))}}(this.resizeBrowser.bind(this)),!0)}return n(e,[{key:"addState",value:function(e){var t=new o(e);return t.valid&&this.states.push(t),t}},{key:"addStates",value:function(e){var t=this;e.forEach((function(e){return t.addState(e)}))}},{key:"getState",value:function(e){return this.states.filter((function(t){return t.id===e}))[0]||!1}},{key:"isActive",value:function(e){return(this.getState(e)||{}).active||!1}},{key:"getStates",value:function(e){var t=this;return void 0===e?this.states:e.map((function(e){return t.getState(e)}))}},{key:"removeState",value:function(e){var t=this;this.states.forEach((function(n,i){n.id===e&&(n.destroy(),t.states.splice(i,1))}))}},{key:"removeStates",value:function(e){var t=this;e.forEach((function(e){return t.removeState(e)}))}},{key:"removeAllStates",value:function(){this.states.forEach((function(e){return e.destroy()})),this.states=[]}},{key:"addConfigOption",value:function(e){var t=e.name,n=void 0===t?"":t,i=e.test,s=void 0===i?null:i,a=e.when,r=void 0===a?"resize":a;""!==n&&null!==s&&o.addConfigOption({name:n,test:s,when:r})}},{key:"removeConfigOption",value:function(e){o.removeConfigOption(e)}},{key:"getConfigOptions",value:function(e){var t=o.getConfigOptions();return"string"==typeof e?t.filter((function(t){return t.name===e})):t}},{key:"resizeBrowser",value:function(){var e,t;(e=this.states,t="active",e.filter((function(e){return e[t]&&!0===e[t]}))).forEach((function(e){e.resizeState()}))}},{key:"stateChange",value:function(e){o.setStateChangeMethod(e)}}]),e}())})),ssm.addStates([{id:"mobile",query:"(max-width: 640px)",onEnter:function(){initMobile()}},{id:"tablet",query:"(min-width: 641px) and (max-width: 992px)",onEnter:function(){initTablet()}},{id:"desktop",query:"(min-width: 993px)",onEnter:function(){initDesktop()}}]),$(".block_5-slider").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,arrows:!0,responsive:[{breakpoint:769,settings:{slidesToShow:3}},{breakpoint:321,settings:{slidesToShow:1}}],prevArrow:'<button class="slider__prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',nextArrow:'<button class="slider__next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'}),$(".block-4__slider").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,centerMode:!0,variableWidth:!0,arrows:!0,responsive:[{breakpoint:769,settings:{slidesToShow:3}},{breakpoint:321,settings:{slidesToShow:1}}],prevArrow:'<button class="slider__prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',nextArrow:'<button class="slider__next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'}),$(".header-slider").slick({infinite:!0,slidesToShow:1,slidesToScroll:1,arrows:!0,adaptiveHeight:!0,responsive:[{breakpoint:1200,settings:{dots:!0,arrows:!1}},{breakpoint:768,settings:{dots:!0,arrows:!1}}],prevArrow:'<button class="header-slider__prev header-slider__btn"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',nextArrow:'<button class="header-slider__next header-slider__btn"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'}),$(".slider__slider").slick({infinite:!0,slidesToShow:4,slidesToScroll:1,arrows:!0,responsive:[{breakpoint:1200,settings:{slidesToShow:3}},{breakpoint:768,settings:{slidesToShow:2}},{breakpoint:520,settings:{slidesToShow:1}}],prevArrow:'<button class="slider__prev"><i class="fa fa-angle-left" aria-hidden="true"></i></button>',nextArrow:'<button class="slider__next"><i class="fa fa-angle-right" aria-hidden="true"></i></button>'});const darkOverlay=$(".dark-overlay"),mobileMenu=$(".mobile-menu");function handleMenu(e){e.preventDefault(),darkOverlay.toggleClass("visible"),mobileMenu.toggleClass("visible")}function handleToggleMenu(e){e.preventDefault();const t=$(this);t.parent(".has-submenu").toggleClass("opened"),t.next("ul").slideToggle(500,(function(){console.log(this),$(this).find(".has-submenu").removeClass("opened").children("ul").hide()})),t.parent(".has-submenu").toggleClass("opened").siblings("li").removeClass("opened").find("ul").slideUp()}function resetMobileMemu(){darkOverlay.removeClass("visible"),mobileMenu.removeClass("visible"),$(".mobile-navigation  .has-submenu").removeClass("opener").find("ul").hide()}function initMobile(){}function initDesktop(){resetMobileMemu()}$(document).on("click",".mobile-menu__btn",handleMenu),$(document).on("click",".is-submenu",handleToggleMenu),ssm.addState({id:"tablet",query:"(max-width: 1200px)",onEnter:function(){initMobile()}}),ssm.addState({id:"desktop",query:"(min-width: 1200px)",onEnter:function(){initDesktop()}});