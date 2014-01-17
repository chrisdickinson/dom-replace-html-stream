var through = require('through')
  , test = require('tape')

var write = require('./index.js')

test('will replace the innerHTML of the element', function(assert) {
  var output = through()
    , el

  el = document.createElement('div')
  output.pipe(write(el))

  output.write('<a href="#">hello</a>')

  assert.equal(el.innerHTML, '<a href="#">hello</a>')
  assert.end()
})

test('will replace the textContent of the element', function(assert) {
  var output = through()
    , el

  el = document.createElement('div')
  output.pipe(write(el, true))

  output.write('<a href="#">hello</a>')

  assert.equal(el.innerHTML, '&lt;a href="#"&gt;hello&lt;/a&gt;')
  assert.end()
})
