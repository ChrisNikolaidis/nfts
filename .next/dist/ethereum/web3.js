'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});

var _web = require('web3');

var _web2 = _interopRequireDefault(_web);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var web3 = void 0; //Configure web3 with a provider from metamask


if (typeof window !== 'undefined' && typeof window.web3 !== 'undefined') {
    // metamask is running
    web3 = new _web2.default(window.web3.currentProvider);
} else {
    // not have metamask
    var provider = new _web2.default.providers.HttpProvider('https://rinkeby.infura.io/v3/402014c5be4e43cab02965ca953e90a3');
    web3 = new _web2.default(provider);
}

exports.default = web3;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImV0aGVyZXVtXFx3ZWIzLmpzIl0sIm5hbWVzIjpbIldlYjMiLCJ3ZWIzIiwid2luZG93IiwiY3VycmVudFByb3ZpZGVyIiwicHJvdmlkZXIiLCJwcm92aWRlcnMiLCJIdHRwUHJvdmlkZXIiXSwibWFwcGluZ3MiOiI7Ozs7OztBQUNBLEFBQU87Ozs7OztBQUVQLElBQUksWUFBSixHQUhBOzs7QUFLQSxJQUFJLE9BQUEsQUFBTyxXQUFQLEFBQWtCLGVBQWUsT0FBTyxPQUFQLEFBQWMsU0FBbkQsQUFBNEQsYUFBYSxBQUNyRTtBQUNBO1dBQU8sQUFBSSxrQkFBSyxPQUFBLEFBQU8sS0FBdkIsQUFBTyxBQUFxQixBQUMvQjtBQUhELE9BR08sQUFDSDtBQUNBO1FBQU0sV0FBVyxJQUFJLGNBQUEsQUFBSyxVQUFULEFBQW1CLGFBQXBDLEFBQWlCLEFBQWdDLEFBQ2pEO1dBQU8sQUFBSSxrQkFBWCxBQUFPLEFBQVMsQUFDbkI7QUFFRDs7a0JBQUEsQUFBZSIsImZpbGUiOiJ3ZWIzLmpzIiwic291cmNlUm9vdCI6IkU6L25mdHMifQ==