# oe-ui-utils

Utility functions for various components in `oe-ui`.

* `oe-utils.js` - consists of some utility functions and some `Polyfills` for Internet Explorer.
* `date-utils.js` - provides date related utility functions.

### oe-utils
1. Polyfills for `Object.assign`, `Array.find`, `window.location.origin`, `String.startsWith` and `String.endsWith`.
1. `getResourceUrl` -  returns the endpoint of UIResources.
1. `geturl` - returns absolute URL of by prefixing with the base URL.
1. `extractErrorMessage` - extract and returns the error message from the error object.
1. `camelCaseToLabel` - returns camel cased string as space separated string.

### date-utils
1. `parse` - returns date object form date string
1. `format` - returns date string of provided format from date object
1. `setDate`  - returns date object from provided date string in `ddmmyyyy` format
1. `split` - returns an array of values which can be interpreted as values of day, month and year for a given date.