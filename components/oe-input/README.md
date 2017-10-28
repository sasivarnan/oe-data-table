# \<oe-input\>

`<oe-input>` is a control for text input based on Polymer's `paper-input` control with following additional features.

  1. control level validations
  2. model-level/cross-field validations. When any UI control is placed on the form, the control needs to be 'aware' of 'which property' on the model it is bound to. This is required specially since, many times two or more controls take part in deciding the model validity. (cross-field-validations)
  3. support internationalization of labels and error-messages out of box.
  4. `oe-input` adds a little red-asterisk if the field is 'required'.

```html
    <oe-input required field-id="accountName" label="Account Name"></oe-input>
```

This repo also consists of the following components
* oe-input
* oe-decimal
* oe-input-masked
* oe-json-input
* oe-textarea

### oe-decimal
`<oe-decimal>` is a control for capturing number inputs. In addition to `<oe-input>`, it supports handling of decimal display, parsing and formatting.

### oe-input-masked

`<oe-input-masked>` is a control for capturing text input based on `oe-input`control with following additional features.

  1. mask the each char with a specified char, based on a RegExp pattern
  2. mask the each matched pattern with a specified string, based on a RegExp pattern
  3. add specified number of mask char(s) at the end of the specified input.

### oe-json-input

`<oe-json-input>` is a control for multiline text input based on Polymer's `paper-textarea` control with following additional features.

  1. control level validations
  2. model-level/cross-field validations. When any UI control is placed on the form, the control needs to be 'aware' of 'which property' on the model it is bound to. This is required specially since, many times two or more controls take part in deciding the model validity. (cross-field-validations)
  3. support internationalization of labels and error-messages out of box.
  4. `oe-json-input` adds a little red-asterisk if the field is 'required'.


### oe-textarea

`<oe-textarea>` is a control for multiline text input based on Polymer's `paper-textarea` control with following additional features.

  1. control level validations
  2. model-level/cross-field validations. When any UI control is placed on the form, the control needs to be 'aware' of 'which property' on the model it is bound to. This is required specially since, many times two or more controls take part in deciding the model validity. (cross-field-validations)
  3. support internationalization of labels and error-messages out of box.
  4. `oe-textarea` adds a little red-asterisk if the field is 'required'.

```html
    <oe-textarea required field-id="accountName" label="Account Name"></oe-textarea>
```
