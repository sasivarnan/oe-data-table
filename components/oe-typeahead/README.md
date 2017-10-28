# \<oe-typeahead\>

An input control with dropdown for choosing possible valid values form a remote url.
The data can be be dynamically fetched by specifying `searchurl` property.

```html
<oe-typeahead label="Search..." displayproperty="description" valueproperty="code" searchurl="data/country/SEARCH_STRING.json" dataurl="data/country/VALUE_STRING.json" value="{{value}}" required></oe-typeahead>
```
