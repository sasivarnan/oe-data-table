# \<meta-polymer\>

`<meta-polymer>` is wrapper around `Polymer` which allows the user to inject new components into the template or modify the existing components in the template using a `UIComponent` service endpoint provided by `oe.io` based on user requirements.

`<meta-polymer>` supports generation, enrichment and personalization of polymer component using meta data definition. Metadata enablement is done using models

* UIComponent
* UIElement
* TypeMapping

# \<oe-validators\>

`<oe-validators>` provides a collection of elements for validation of forms.

This repo consists of the following validator elements

* oe-async-validator
* oe-block-validator
* oe-combination-validator
* oe-eq-validator
* oe-expression-validator
* oe-le-validator
* oe-lt-validator
* oe-ne-validator

### oe-block-validator
`oe-block-validator` provides a validation section to validate a subset of fields on form.

```html
<oe-block-validator>
    <oe-vbox>
        <paper-input label="First Name"></paper-input>
        <paper-input label="Last Name"></paper-input>
        <paper-input label="City"></paper-input>
        <paper-input label="Zip Code"></paper-input>
    </oe-vbox>
<oe-block-validator>
```

### oe-combination-validator
`oe-combination-validator` evaluates fields on the bound `model` and ensures the combination is one of the defined `combinations`.

### oe-eq-validator
`oe-eq-validator` evaluates values of two fields on the bound `model` to make sure they are equal/same.

### oe-expression-validator
`oe-expression-validator` evaluates an `expression` on the bound `model` to decide the model validity.

### oe-le-validator
`oe-le-validator` evaluates values of two fields on the bound `model` to make sure value of first field (fields[0]) is less-than-or-equal-to the second field (fields[1]).

### oe-lt-validator
`oe-lt-validator` evaluates values of two fields on the bound `model` to make sure value of first field (fields[0]) is less-than second field (fields[1]).

### oe-ne-validator
`oe-ne-validator` evaluates values of two fields on the bound `model` to make sure they are *not* same.

