## &lt;oe-ajax&gt;

The `oe-ajax` element exposes network request functionality.

> Forked from [iron-ajax](https://github.com/PolymerElements/iron-ajax) due to below [issue](https://github.com/PolymerElements/iron-ajax/issues/65) and it adds access token to the header when a request is made.

```html
<oe-ajax
    auto
    url="https://www.googleapis.com/youtube/v3/search"
    params='{"part":"snippet", "q":"polymer", "key": "YOUTUBE_API_KEY", "type": "video"}'
    handle-as="json"
    on-response="handleResponse"
    debounce-duration="300"></oe-ajax>
```

With `auto` set to `true`, the element performs a request whenoeer
its `url`, `params` or `body` properties are changed. Automatically generated
requests will be debounced in the case that multiple attributes are changed
sequentially.

Note: The `params` attribute must be double quoted JSON.

You can trigger a request explicitly by calling `generateRequest` on the
element.

## &lt;oe-request&gt;

oe-request can be used to perform XMLHttpRequests.

```html
<oe-request id="xhr"></oe-request>
...
this.$.xhr.send({url: url, body: params});
```
