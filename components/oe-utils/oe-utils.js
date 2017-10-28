/*
©2016-2017 EdgeVerve Systems Limited (a fully owned Infosys subsidiary), Bangalore, India. All Rights Reserved.
*/

var OEUtils = OEUtils || {};
OEUtils.getResourceUrl = function () {
  return 'api/UIResources';
};

//IE polyfills

/**
 * Polyfill for Object.assign, that to be used in IE
 * This polyfill doesn't support symbol properties
 */

if (typeof Object.assign !== 'function') {
  Object.assign = function (target) {
    'use strict';
    if (target === null) {
      throw new TypeError('Cannot convert undefined or null to object');
    }

    target = Object(target);
    for (var index = 1; index < arguments.length; index++) {
      var source = arguments[index];
      if (source !== null) {
        for (var key in source) {
          if (Object.prototype.hasOwnProperty.call(source, key)) {
            target[key] = source[key];
          }
        }
      }
    }
    return target;
  };
}


if (!Array.prototype.find) {
  Object.defineProperty(Array.prototype, 'find', {
    value: function (predicate) {
      'use strict';
      if (this === null) {
        throw new TypeError('Array.prototype.find called on null or undefined');
      }
      if (typeof predicate !== 'function') {
        throw new TypeError('predicate must be a function');
      }
      var list = Object(this);
      var length = list.length >>> 0;
      var thisArg = arguments[1];
      var value;

      for (var i = 0; i < length; i++) {
        value = list[i];
        if (predicate.call(thisArg, value, i, list)) {
          return value;
        }
      }
      return undefined;
    }
  });
}

/**
 * Polyfill for location.origin to make it available in browsers older than IE 11
 */
if (!window.location.origin) {
  window.location.origin = window.location.protocol + '//' + window.location.hostname + (window.location.port ? ':' + window.location.port : '');
}

if (!String.prototype.startsWith) {
  String.prototype.startsWith = function (searchString, position) {
    position = position || 0;
    return this.substr(position, searchString.length) === searchString;
  };
}

if (!String.prototype.endsWith) {
  String.prototype.endsWith = function (searchString, position) {
    var subjectString = this.toString();
    if (typeof position !== 'number' || !isFinite(position) || Math.floor(position) !== position || position > subjectString.length) {
      position = subjectString.length;
    }
    position -= searchString.length;
    var lastIndex = subjectString.indexOf(searchString, position);
    return lastIndex !== -1 && lastIndex === position;
  };
}

OEUtils.geturl = OEUtils.geturl || function (url) {

  if (url.startsWith('http') ||
    url.startsWith('file')) {
    return url;
  }

  function stripQueryStringAndHashFromPath(url) {
    return url.split('?')[0].split('#')[0];
  }
  if (!OEUtils.baseurl) {
    var baseUrl;
    if (document.baseURI) {
      baseUrl = stripQueryStringAndHashFromPath(document.baseURI);
    } else {
      baseUrl = (window.location.origin + window.location.pathname);
    }
    if (baseUrl.endsWith('/')) {
      baseUrl = baseUrl.slice(0, -1);
    }
    OEUtils.baseurl = baseUrl;
  }

  if (!OEUtils.uibaseroute) {
    OEUtils.uibaseroute = OEUtils.baseurl;
  }
  if (!OEUtils.apibaseroute) {
    OEUtils.apibaseroute = OEUtils.baseurl;
  }

  var ret = url;
  if (url.startsWith('api')) {
    ret = OEUtils.apibaseroute + '/' + url;
  } else if (url.startsWith('/api') || url.startsWith('/auth')) {
    ret = OEUtils.apibaseroute + url;
  } else if (url.startsWith('/')) {
    ret = OEUtils.uibaseroute + url;
  } else {
    ret = OEUtils.uibaseroute + '/' + url;
  }
  return ret;
};

OEUtils.extractErrorMessage = function (err) {
  var retErrorMsg;
  if (err && err.detail && err.detail.request && err.detail.request.response) {
    var errorObj = err.detail.request.response.error;

    if (!errorObj) {
      retErrorMsg = {
        code: 'UNKNOWN_SERVER_ERROR',
        message: 'Unknown server error'
      };
    } else if (errorObj.details && errorObj.details.messages && errorObj.details.messages.errs && errorObj.details.messages.errs.length > 0) {
      retErrorMsg = errorObj.details.messages.errs[0];
    } else if (errorObj.errors && errorObj.errors.length > 0) {
      retErrorMsg = errorObj.errors[0];
    } else if (errorObj.message) {
      retErrorMsg = {
        code: errorObj.code || errorObj.message,
        message: errorObj.message
      };
    } else if (errorObj.errmsg) {
      retErrorMsg = {
        code: errorObj.errmsg,
        message: errorObj.errmsg
      };
    } else {
      retErrorMsg = {
        code: 'UNKNOWN_SERVER_ERROR',
        message: 'Unknown server error'
      };
    }
  } else {
    retErrorMsg = {
      code: 'NO_RESPONSE_FROM_SERVER',
      message: 'No response from server'
    };
  }
  if (!retErrorMsg.code && retErrorMsg.errCode) {
    retErrorMsg.code = retErrorMsg.errCode;
  }
  if (!retErrorMsg.message && retErrorMsg.errMessage) {
    retErrorMsg.message = retErrorMsg.errMessage;
  }

  return retErrorMsg;
};

OEUtils.camelCaseToLabel = function (s) {
  // Make the first character uppercase before split/join.
  return (s.charAt(0).toUpperCase() + s.slice(1)).split(/(?=[A-Z])/).join(' ');
};

if (undefined === document.createElement('style').scoped) {
  OEUtils.scopeStyles = function (node) {
    var scoper = function (css, prefix) {
      var re = new RegExp('([^\r\n,{}]+)(,(?=[^}]*{)|\s*{)', 'g'); // eslint-disable-line no-control-regex
      css = css.replace(re, function (g0, g1, g2) {

        if (g1.match(/^\s*(@media|@keyframes|to|from|@font-face)/)) {
          return g1 + g2;
        }

        if (g1.match(/:scope/)) {
          g1 = g1.replace(/([^\s]*):scope/, function (h0, h1) {
            if (h1 === '') {
              return '> *';
            } else {
              return '> ' + h1;
            }
          });
        }

        g1 = g1.replace(/^(\s*)/, '$1' + prefix + ' ');

        return g1 + g2;
      });

      return css;
    };
    var guid = node.id || OEUtils.generateGuid();
    node.setAttribute('id', guid);
    [].forEach.call(node.querySelectorAll('style[scoped]'), function (style) {
      style.innerHTML = scoper(style.innerHTML, '#' + guid);
    });
  };
} else {
  OEUtils.scopeStyles = function () {};
}

OEUtils.generateGuid = function () {
  var randoms = (window.crypto || window.msCrypto).getRandomValues(new Uint32Array(2)); // eslint-disable-line no-undef
  return randoms[0].toString(36).substring(2, 15) +
    randoms[1].toString(36).substring(2, 15);
};

OEUtils.UUID = (function () {
  var self = {};
  var lut = [];
  for (var i = 0; i < 256; i++) {
    lut[i] = (i < 16 ? '0' : '') + (i).toString(16);
  }

  function rand() {
    var num = (window.crypto.getRandomValues(new Uint8Array(1))[0]); // eslint-disable-line no-undef
    return num / (Math.pow(10, ('' + num).length));
  }
  self.generate = function () {
    var d0 = rand() * 0xffffffff | 0;
    var d1 = rand() * 0xffffffff | 0;
    var d2 = rand() * 0xffffffff | 0;
    var d3 = rand() * 0xffffffff | 0;
    return lut[d0 & 0xff] + lut[d0 >> 8 & 0xff] + lut[d0 >> 16 & 0xff] + lut[d0 >> 24 & 0xff] + '-' +
      lut[d1 & 0xff] + lut[d1 >> 8 & 0xff] + '-' + lut[d1 >> 16 & 0x0f | 0x40] + lut[d1 >> 24 & 0xff] + '-' +
      lut[d2 & 0x3f | 0x80] + lut[d2 >> 8 & 0xff] + '-' + lut[d2 >> 16 & 0xff] + lut[d2 >> 24 & 0xff] +
      lut[d3 & 0xff] + lut[d3 >> 8 & 0xff] + lut[d3 >> 16 & 0xff] + lut[d3 >> 24 & 0xff];
  }
  return self;
})();
