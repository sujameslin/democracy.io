/**
 * Error handler and notifier for gulp errors.
 * See github.com/greypants/gulp-starter/blob/master/gulp/util/handleErrors.js
 */

var notify = require('gulp-notify');

module.exports = function() {

  var args = Array.prototype.slice.call(arguments);

  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);

  // Keep gulp from hanging on this task
  this.emit('end');
};