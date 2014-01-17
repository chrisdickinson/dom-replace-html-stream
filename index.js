var readable = require('readable-stream')

module.exports = writeToElement

function writeToElement(el, escaped) {
  var writable = readable.Writable({
      objectMode: true
    , highWaterMark: Infinity
  })

  writable._write = escaped ? onescapedwrite : onwrite

  return writable

  function onwrite(chunk, encoding, ready) {
    el.innerHTML = chunk
    ready()
  }

  function onescapedwrite(chunk, encoding, ready) {
    el.textContent = chunk
    ready()
  }
}
