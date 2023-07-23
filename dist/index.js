!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.form=t(require("react")):e.form=t(e.react)}(this,(function(e){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)r.d(n,o,function(t){return e[t]}.bind(null,o));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=2)}([function(t,r){t.exports=e},function(e,t,r){"use strict";var n;Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var o=((n=r(0))&&n.__esModule?n:{default:n}).default.createContext("form");t.default=o},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"Form",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"Field",{enumerable:!0,get:function(){return o.default}});var n=i(r(3)),o=i(r(5));function i(e){return e&&e.__esModule?e:{default:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),i=r(4),u=(n=r(1))&&n.__esModule?n:{default:n};function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{},n=Object.keys(r);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(r).filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable})))),n.forEach((function(t){c(e,t,r[t])}))}return e}function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==a.return||a.return()}finally{if(o)throw i}}return r}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance")}()}function s(e){return function(e){if(Array.isArray(e)){for(var t=0,r=new Array(e.length);t<e.length;t++)r[t]=e[t];return r}}(e)||function(e){if(Symbol.iterator in Object(e)||"[object Arguments]"===Object.prototype.toString.call(e))return Array.from(e)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}()}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}var b=function(e){function t(e){var r;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t),r=function(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?p(e):t}(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e)),Object.defineProperty(p(r),"values",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(p(r),"fields",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(p(r),"errors",{configurable:!0,enumerable:!0,writable:!0,value:{}}),Object.defineProperty(p(r),"hidden",{configurable:!0,enumerable:!0,writable:!0,value:[]}),Object.defineProperty(p(r),"disabled",{configurable:!0,enumerable:!0,writable:!0,value:[]}),Object.defineProperty(p(r),"touched",{configurable:!0,enumerable:!0,writable:!0,value:new Set}),Object.defineProperty(p(r),"storeComponent",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;return r.fields[e]=t}}),Object.defineProperty(p(r),"updateComponent",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";r.fields[e]?r.fields[e].forceUpdate():Object.keys(r.fields).forEach((function(t){t.includes(e)&&r.fields[t].forceUpdate()}))}}),Object.defineProperty(p(r),"updateAllComponents",{configurable:!0,enumerable:!0,writable:!0,value:function(){Object.keys(r.fields).map((function(e){return r.updateComponent(e)}))}}),Object.defineProperty(p(r),"getField",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return(0,i.getPath)(r.values,e)}}),Object.defineProperty(p(r),"getFields",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return e.length>0?e.reduce((function(e,n){var o=t?"".concat(t,".").concat(n):n;return(0,i.setPath)(e,o,r.getField(o)),e}),{}):r.values}}),Object.defineProperty(p(r),"resolveConditions",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];0===e.length&&r.props.conditions&&(e=r.props.conditions),e.forEach((function(e){var t=e.name,n=e.target,o=e.action,i=e.compare,u=r.values[t];n=Array.isArray(n)?n:[n],"hide"===o?(i(u,r.values)?r.hidden=s(r.hidden).concat(s(n)):r.hidden=r.hidden.filter((function(e){return!n.includes(e)})),n.forEach((function(e){return r.updateComponent(e)}))):"disable"===o&&(i(u,r.values)?r.disabled=s(r.disabled).concat(s(n)):r.disabled=r.disabled.filter((function(e){return!n.includes(e)})),n.forEach((function(e){return r.updateComponent(e)})))}))}}),Object.defineProperty(p(r),"setField",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",n=r.props,o=n.onFormChange,u=n.conditions,a=void 0===u?[]:u,l=a.filter((function(t){return e===t.name})),c=(0,i.clone)(r.values),f=(0,i.getPath)(c,e);f!==t&&((0,i.setPath)(c,e,t),r.touched.add(e),r.values=c,r.updateComponent(e),r.resolveConditions(l),o&&o(e,t))}}),Object.defineProperty(p(r),"setFields",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};for(var t in e)r.setField(t,e[t])}}),Object.defineProperty(p(r),"resetField",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";r.setField(e,(0,i.getPath)(r.initialValues,e)),delete r.errors[e],r.touched.delete(e),r.updateComponent(e)}}),Object.defineProperty(p(r),"resetFields",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.values=r.initialValues,r.errors={},s(r.touched).forEach((function(e){return r.updateComponent(e)})),r.touched.clear(),r.resolveConditions()}}),Object.defineProperty(p(r),"clearFields",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.values={},s(r.touched).forEach((function(e){return r.updateComponent(e)})),r.touched.clear(),r.resolveConditions()}}),Object.defineProperty(p(r),"validate",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.props.schema,t=r.getFields(),n=!1;try{e.validateSync(t,{abortEarly:!1}),n=!0,r.errors={}}catch(e){r.errors=e.inner.reduce((function(e,t){var r=t.message,n=t.path,o=r,i=n;if(n.split(".").length>1){var u=f(n.match(/(\w+)\[(\d+)\]\.(\w+)/),4),a=(u[0],u[1]),s=u[2];i=a,o={key:u[3],index:parseInt(s),message:r}}return l({},e,c({},i,o))}),{})}return Object.keys(r.errors).map((function(e){return r.touched.add(e)})),r.updateAllComponents(),!!n}}),Object.defineProperty(p(r),"validateField",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=r.props.schema,n=!1;try{t.validateSyncAt(e,r.getFields()),n=!0,r.errors[e]=""}catch(t){var o=t.message,i=t.path;if(i.split(".").length>1){var u=i.match(/\w+\[(\d+)\]\.(\w+)/),a=f(u,3),l=(a[0],a[1]),c=a[2];r.errors[e]={key:c,index:parseInt(l),message:o}}else r.errors[e]=o}return r.updateComponent(e),n}}),Object.defineProperty(p(r),"validateListOfFields",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[];return e.every((function(e){return r.validateField(e)}))}}),Object.defineProperty(p(r),"getError",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return r.errors[e]||""}}),Object.defineProperty(p(r),"getErrors",{configurable:!0,enumerable:!0,writable:!0,value:function(){return r.errors}}),Object.defineProperty(p(r),"setCustomFieldError",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";r.errors[e]=t,r.updateComponent(e)}}),Object.defineProperty(p(r),"resetErrors",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.errors={}}}),Object.defineProperty(p(r),"resetTouched",{configurable:!0,enumerable:!0,writable:!0,value:function(){r.touched.clear()}}),Object.defineProperty(p(r),"getTouchedValues",{configurable:!0,enumerable:!0,writable:!0,value:function(){var e=r.getFields();return s(r.touched).reduce((function(t,r){return l({},t,c({},r,e[r]))}),{})}}),Object.defineProperty(p(r),"isFieldVisible",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return!r.hidden.includes(e)}}),Object.defineProperty(p(r),"isFieldDisabled",{configurable:!0,enumerable:!0,writable:!0,value:function(e){return r.disabled.includes(e)}}),Object.defineProperty(p(r),"API",{configurable:!0,enumerable:!0,writable:!0,value:{_internal:{storeComponent:r.storeComponent,updateComponent:r.updateComponent,schema:r.props.schema,isFieldVisible:r.isFieldVisible,isFieldDisabled:r.isFieldDisabled},values:function(){return r.getFields()},touched:function(){return s(r.touched)},isTouched:function(e){return r.touched.has(e)},getField:r.getField,getFields:r.getFields,setField:r.setField,setFields:r.setFields,resetField:r.resetField,resetFields:r.resetFields,validate:r.validate,validateField:r.validateField,validateListOfFields:r.validateListOfFields,getError:r.getError,getErrors:r.getErrors,resetTouched:r.resetTouched,clearFields:r.clearFields,getTouchedValues:r.getTouchedValues,setCustomFieldError:r.setCustomFieldError,resetErrors:r.resetErrors}});var n=r.props.initialValues,o=void 0===n?{}:n;return r.values=o,r.initialValues=o,r.resolveConditions(),r}var r,n,b;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r=t,(n=[{key:"componentDidMount",value:function(){var e=this.props.formApi,t=this.API,r=(t._internal,function(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}(t,["_internal"]));e&&e(r)}},{key:"render",value:function(){return o.default.createElement(u.default.Provider,{value:this.API},this.props.children)}}])&&d(r.prototype,n),b&&d(r,b),t}(o.Component);t.default=b},function(e,t,r){var n;"undefined"!=typeof self&&self,n=function(){return function(e){var t={};function r(n){if(t[n])return t[n].exports;var o=t[n]={i:n,l:!1,exports:{}};return e[n].call(o.exports,o,o.exports,r),o.l=!0,o.exports}return r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:n})},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=3)}([function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isObj=function(e){return!!e&&e instanceof Object},t.isPlainObj=function(e){return!!e&&e.constructor===Object},t.isUndefined=function(e){return void 0===e},t.isArray=function(e){return Array.isArray(e)},t.isString=function(e){return"string"==typeof e},t.isNumber=function(e){return"number"==typeof e}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.objToSnakeCase=t.objToCamelCase=t.camelToSnakeCase=t.snakeToCamelCase=t.changeRoute=t.getQs=t.decodeQs=t.typeCheck=t.range=t.compose=t.genId=t.clone=void 0;var n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},u=r(0),a=r(2),l=r(5);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}var s=function(e){return e?"?"+Object.entries(e).map((function(e){var t=i(e,2),r=t[0],o=t[1],u="object"===(void 0===o?"undefined":n(o))?btoa(JSON.stringify(o)):o;return r+"="+encodeURIComponent(u)})).join("&"):""},d=function(e){return e.toLowerCase().replace(/\B_(\w)/g,(function(e,t){return t.toUpperCase()}))},p=function(e){return e.replace(/\B([A-Z])/g,(function(e,t){return"_"+t.toLowerCase()}))};t.clone=function(e){return JSON.parse(JSON.stringify(e))},t.genId=function(){return Date.now().toString(36)+Math.random().toString(36).substr(2,5)},t.compose=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];return function(e){return t.reduce((function(e,t){return t(e)}),e)}},t.range=function(){for(var e=arguments.length,t=Array(e),r=0;r<e;r++)t[r]=arguments[r];var n=t,o=i(n,2),u=o[0],a=o[1];return a?(t=u>a?[a,u]:[u,a],l._range.apply(void 0,f(t))):(0,l._range)(0,u)},t.typeCheck=function(e,t){return function(){for(var r=arguments.length,n=Array(r),o=0;o<r;o++)n[o]=arguments[o];return t.forEach((function(e,t){var r=e.split("|")[0]||"any";if(!(e.match("optional")&&(0,u.isUndefined)(n[t])||"any"===r||(0,l._getType)(n[t])===r))throw new Error("Type error: param "+t+" must be of type "+r)})),e.apply(void 0,n)}},t.decodeQs=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"";return e.slice(1).split("&").reduce((function(e,t){var r=t.split("="),n=i(r,2),u=n[0],a=n[1];return o({},e,c({},u,decodeURIComponent(a)))}),{})},t.getQs=s,t.changeRoute=function(e){if("undefined"!=typeof window){var t=window.location,r=""+t.origin+t.pathname+s(e);window.history.pushState({path:r},"",r)}},t.snakeToCamelCase=d,t.camelToSnakeCase=p,t.objToCamelCase=function(e){return(0,a.deepMapKeys)(e,(function(e){return d(e)}))},t.objToSnakeCase=function(e){return(0,a.deepMapKeys)(e,(function(e){return p(e)}))}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.stripNullObj=t.deepMapKeys=t.mapValues=t.mapKeys=t.getPath=t.setPath=t.deepFindKey=void 0;var n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=function(e,t){if(Array.isArray(e))return e;if(Symbol.iterator in Object(e))return function(e,t){var r=[],n=!0,o=!1,i=void 0;try{for(var u,a=e[Symbol.iterator]();!(n=(u=a.next()).done)&&(r.push(u.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{!n&&a.return&&a.return()}finally{if(o)throw i}}return r}(e,t);throw new TypeError("Invalid attempt to destructure non-iterable instance")},i="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},u=r(0),a=r(1),l=r(4);function c(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}t.deepFindKey=function e(t,r){if(t&&t.hasOwnProperty(r))return t[r];for(var n in t){var o=t[n];if("object"===(void 0===o?"undefined":i(o))){var u=e(o,r);if(u)return u}}},t.setPath=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"",r=arguments[2];if(!(0,u.isUndefined)(r))for(var n=(0,l.formattedPath)(t).split(".").filter((function(e){return""!==e}));n.length>0;){var o=(0,l.matchedKey)(n.shift()).value;0===n.length?e[o]=r:(e[o]||(e[o]=(0,l.matchedKey)(n[0]).match?[]:{}),e=e[o])}},t.getPath=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"";return(0,l.formattedPath)(t).replace(/\[(\d+)\]/g,"$1").split(".").reduce((function(e,t){return e?e[t]:void 0}),e)},t.mapKeys=function(e,t){return Object.entries(e).reduce((function(e,r){var i=o(r,2),u=i[0],a=i[1];return n({},e,c({},t(u,a),a))}),{})},t.mapValues=function(e,t){return Object.entries(e).reduce((function(e,r){var i=o(r,2),u=i[0],a=i[1];return n({},e,c({},u,t(u,a)))}),{})},t.deepMapKeys=function e(t,r){return(0,u.isPlainObj)(t)?Object.entries(t).reduce((function(t,i){var a=o(i,2),l=a[0],f=a[1];return(0,u.isPlainObj)(f)?f=e(f,r):(0,u.isArray)(f)&&(f=f.map((function(t){return e(t,r)}))),n({},t,c({},r(l,f),f))}),{}):t},t.stripNullObj=function e(t){var r=(0,a.clone)(t);return Object.keys(t).forEach((function(t){var n=r[t];null===n?delete r[t]:"object"!==(void 0===n?"undefined":i(n))||Array.isArray(n)||(r[t]=e(n))})),r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(1);Object.keys(n).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return n[e]}})}));var o=r(6);Object.keys(o).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return o[e]}})}));var i=r(2);Object.keys(i).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return i[e]}})}));var u=r(7);Object.keys(u).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return u[e]}})}));var a=r(0);Object.keys(a).forEach((function(e){"default"!==e&&"__esModule"!==e&&Object.defineProperty(t,e,{enumerable:!0,get:function(){return a[e]}})}))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.formattedPath=function(e){return e.replace(/\[["'`]([\w\d]+)["'`]\]/g,"$1").split(/(\[\d+\])/).join(".").replace(/\.+/g,".")},t.matchedKey=function(e){var t=e.match(/\[(\d+)\]/);return t&&(e=parseInt(t[1])),{match:t,value:e}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t._range=function(e,t){return[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(Array(t-e).keys())).map((function(t){return t+e}))},t._getType=function(e){return{}.toString.call(e).match(/\s(\w+)/)[1].toLowerCase()}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.chunk=t.uniq=void 0;var n=r(0);t.uniq=function(e,t){return(0,n.isUndefined)(t)?Array.from(new Set(e)):e.reduce((function(e,r){return e.find((function(e){return e[t]===r[t]}))?e:[].concat(function(e){if(Array.isArray(e)){for(var t=0,r=Array(e.length);t<e.length;t++)r[t]=e[t];return r}return Array.from(e)}(e),[r])}),[])},t.chunk=function(e,t){for(var r=[],n=0;n<e.length;n+=t)r.push(e.slice(n,n+t));return r}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.capitalize=function(e){return e.charAt(0).toUpperCase()+e.slice(1)}}])},e.exports=n()},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var n,o=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)if(Object.prototype.hasOwnProperty.call(e,r)){var n=Object.defineProperty&&Object.getOwnPropertyDescriptor?Object.getOwnPropertyDescriptor(e,r):{};n.get||n.set?Object.defineProperty(t,r,n):t[r]=e[r]}return t.default=e,t}(r(0)),i=(n=r(1))&&n.__esModule?n:{default:n};function u(e){return(u="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(){return(a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e}).apply(this,arguments)}function l(e,t){if(null==e)return{};var r,n,o={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(o[r]=e[r]);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(n=0;n<u.length;n++)r=u[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function f(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function s(e,t){return!t||"object"!==u(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}var d=function(e){function t(){return c(this,t),s(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}var r,n,u;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),r=t,(n=[{key:"handleChange",value:function(e,t){var r=this.props,n=r.name,o=r.normalize,i=r.onChange,u=r.validate,a=void 0===u||u,c=r.update,f=void 0===c?[]:c,s=t._internal,d=l(t,["_internal"]);o&&(e=o(e)),d.setField(n,e),a&&d.validateField(n),s.updateComponent(n),f.map((function(e){return s.updateComponent(e)})),i&&i(e,d)}},{key:"render",value:function(){var e=this,t=this.props,r=t.name,n=t.render,u=(t.normalize,t.onChange,t.validate,t.disabled),c=void 0!==u&&u,f=l(t,["name","render","normalize","onChange","validate","disabled"]),s=n;return o.default.createElement(i.default.Consumer,null,(function(t){var n=t.getField,i=t.getError,u=t.isTouched,l=t._internal,d=l.storeComponent,p=l.isFieldVisible,b=l.isFieldDisabled;return d(r,e),p(r)?o.default.createElement(s,a({},f,{error:i(r),name:r,value:n(r),touched:u(r),onChange:function(r){return e.handleChange(r,t)},disabled:b(r)||c})):null}))}}])&&f(r.prototype,n),u&&f(r,u),t}(o.Component);t.default=d}])}));