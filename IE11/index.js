'use strict';Object.defineProperty(exports,'__esModule',{value:!0});var _noty=require('noty'),_noty2=_interopRequireDefault(_noty);require('./styles.less');function _interopRequireDefault(a){return a&&a.__esModule?a:{default:a}}var defaults={layout:'topRight',theme:'mint',timeout:5e3,progressBar:!0,closeWith:['click']},VueNoty={options:{},setOptions:function setOptions(a){return this.options=Object.assign({},defaults,a),this.prototype.closeAll=_noty2.default.closeAll,this.prototype.setMaxVisible=_noty2.default.setMaxVisible,this},show:function show(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:'alert',c=2<arguments.length&&arguments[2]!==void 0?arguments[2]:{},d=Object.assign({},this.options,c,{type:b,text:a});return new _noty2.default(d).show()},success:function success(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return this.show(a,'success',b)},error:function error(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return this.show(a,'error',b)},warning:function warning(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return this.show(a,'warning',b)},info:function info(a){var b=1<arguments.length&&arguments[1]!==void 0?arguments[1]:{};return this.show(a,'info',b)}};exports.default={install:function install(a,b){var c=VueNoty.setOptions(b);a.prototype.$noty=c,a.noty=c}};