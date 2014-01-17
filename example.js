var readable = require('readable-stream')

var events = require('dom-event-stream')
  , values = require('dom-value-stream')
  , write = require('./index.js')

var input = document.createElement('input')
  , keys = document.createElement('pre')
  , pos = document.createElement('pre')

document.body.appendChild(input)
document.body.appendChild(keys)
document.body.appendChild(pos)

events(document.body, 'keyup')
  .pipe(values())
  .pipe(write(keys))
