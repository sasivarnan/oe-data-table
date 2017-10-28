# \<oe-info\>

`<oe-info>` is used to display formatted values of numeric, string and date type.

### Styling

`<oe-info>` provides the following custom properties and mixins for styling:

Custom property | Description | Default
----------------|-------------|----------
`--oe-info-label` | Mixin applied to label section | {}
`--oe-info-value` | Mixin applied to value section | {}

```html
  <oe-info label="Balance" type="number" precision=2 value="3423434.34324"></oe-info>
```
