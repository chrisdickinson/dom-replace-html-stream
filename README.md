# dom-replace-html-stream

A streams2-compatible write stream for updating DOM content

```javascript
var events = require('dom-event-stream')
var values = require('dom-value-stream')
var replace = require('dom-replace-html-stream')

events(document.getElementById('source'), 'input')
  .pipe(values())
  .pipe(replace(document.getElementById('destination')))
```

## API

### replace(DOMElement, escaped=false) -> WritableStream

Creates a writable stream that, when written to, updates the content of
`DOMElement`. If `escaped` is provided and truthy, content is replaced via
`textContent`. Otherwise, content is set via `innerHTML`.

## License

MIT
