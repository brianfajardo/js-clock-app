# realistic-clock
I've got time for you! This little app that takes advantage of ES6's ability to create dynamic template literals and apply them to CSS styling, in this case `transform` to rotate the hands. I'm starting to really like template literals.

Some bugs I've noticed:
* When the second hand reaches `transform: rotate(360deg)` or at the 60th second, it rewinds itself to 0 degrees
  * Possible fix: if conditions or completely hiding it for a split second (css)
