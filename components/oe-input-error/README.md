# \<oe-input-error\>

`<oe-input-error>` is an error message for use with `<paper-input-container>`. The error is
displayed when the `<paper-input-container>` is `invalid`.

```html
    <paper-input-container>
      <input is="iron-input" pattern="[0-9]*">
      <oe-input-error> Only numbers are allowed! </oe-input-error>
    </paper-input-container>
```

It is a slight variant of `paper-input-error` in the sense that error-message being displayed is translated using `i18n-msg`.

### Styling

The following custom properties and mixins are available for styling:

Custom property | Description | Default
----------------|-------------|----------
`--paper-input-container-invalid-color` | The foreground color of the error | `--google-red-500`
`--paper-input-error`                   | Mixin applied to the error        | `{}`
