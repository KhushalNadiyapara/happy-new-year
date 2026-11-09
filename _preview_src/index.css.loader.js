// Imports
import ___CSS_LOADER_API_SOURCEMAP_IMPORT___ from "../node_modules/css-loader/dist/runtime/sourceMaps.js";
import ___CSS_LOADER_API_IMPORT___ from "../node_modules/css-loader/dist/runtime/api.js";
import ___CSS_LOADER_GET_URL_IMPORT___ from "../node_modules/css-loader/dist/runtime/getUrl.js";
var ___CSS_LOADER_URL_IMPORT_0___ = new URL("data:image/svg+xml,%3Csvg xmlns=%27http://www.w3.org/2000/svg%27 width=%27160%27 height=%27160%27%3E%3Cfilter id=%27n%27%3E%3CfeTurbulence type=%27fractalNoise%27 baseFrequency=%270.9%27 numOctaves=%272%27/%3E%3C/filter%3E%3Crect width=%27160%27 height=%27160%27 filter=%27url%28%23n%29%27 opacity=%270.6%27/%3E%3C/svg%3E", import.meta.url);
var ___CSS_LOADER_EXPORT___ = ___CSS_LOADER_API_IMPORT___(___CSS_LOADER_API_SOURCEMAP_IMPORT___);
var ___CSS_LOADER_URL_REPLACEMENT_0___ = ___CSS_LOADER_GET_URL_IMPORT___(___CSS_LOADER_URL_IMPORT_0___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, `*, ::before, ::after {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}

::backdrop {
  --tw-border-spacing-x: 0;
  --tw-border-spacing-y: 0;
  --tw-translate-x: 0;
  --tw-translate-y: 0;
  --tw-rotate: 0;
  --tw-skew-x: 0;
  --tw-skew-y: 0;
  --tw-scale-x: 1;
  --tw-scale-y: 1;
  --tw-pan-x:  ;
  --tw-pan-y:  ;
  --tw-pinch-zoom:  ;
  --tw-scroll-snap-strictness: proximity;
  --tw-gradient-from-position:  ;
  --tw-gradient-via-position:  ;
  --tw-gradient-to-position:  ;
  --tw-ordinal:  ;
  --tw-slashed-zero:  ;
  --tw-numeric-figure:  ;
  --tw-numeric-spacing:  ;
  --tw-numeric-fraction:  ;
  --tw-ring-inset:  ;
  --tw-ring-offset-width: 0px;
  --tw-ring-offset-color: #fff;
  --tw-ring-color: rgb(59 130 246 / 0.5);
  --tw-ring-offset-shadow: 0 0 #0000;
  --tw-ring-shadow: 0 0 #0000;
  --tw-shadow: 0 0 #0000;
  --tw-shadow-colored: 0 0 #0000;
  --tw-blur:  ;
  --tw-brightness:  ;
  --tw-contrast:  ;
  --tw-grayscale:  ;
  --tw-hue-rotate:  ;
  --tw-invert:  ;
  --tw-saturate:  ;
  --tw-sepia:  ;
  --tw-drop-shadow:  ;
  --tw-backdrop-blur:  ;
  --tw-backdrop-brightness:  ;
  --tw-backdrop-contrast:  ;
  --tw-backdrop-grayscale:  ;
  --tw-backdrop-hue-rotate:  ;
  --tw-backdrop-invert:  ;
  --tw-backdrop-opacity:  ;
  --tw-backdrop-saturate:  ;
  --tw-backdrop-sepia:  ;
  --tw-contain-size:  ;
  --tw-contain-layout:  ;
  --tw-contain-paint:  ;
  --tw-contain-style:  ;
}/*
! tailwindcss v3.4.17 | MIT License | https://tailwindcss.com
*//*
1. Prevent padding and border from affecting element width. (https://github.com/mozdevs/cssremedy/issues/4)
2. Allow adding a border to an element by just adding a border-width. (https://github.com/tailwindcss/tailwindcss/pull/116)
*/

*,
::before,
::after {
  box-sizing: border-box; /* 1 */
  border-width: 0; /* 2 */
  border-style: solid; /* 2 */
  border-color: #e5e7eb; /* 2 */
}

::before,
::after {
  --tw-content: '';
}

/*
1. Use a consistent sensible line-height in all browsers.
2. Prevent adjustments of font size after orientation changes in iOS.
3. Use a more readable tab size.
4. Use the user's configured \`sans\` font-family by default.
5. Use the user's configured \`sans\` font-feature-settings by default.
6. Use the user's configured \`sans\` font-variation-settings by default.
7. Disable tap highlights on iOS
*/

html,
:host {
  line-height: 1.5; /* 1 */
  -webkit-text-size-adjust: 100%; /* 2 */ /* 3 */
  tab-size: 4; /* 3 */
  font-family: ui-sans-serif, system-ui, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"; /* 4 */
  font-feature-settings: normal; /* 5 */
  font-variation-settings: normal; /* 6 */
  -webkit-tap-highlight-color: transparent; /* 7 */
}

/*
1. Remove the margin in all browsers.
2. Inherit line-height from \`html\` so users can set them as a class directly on the \`html\` element.
*/

body {
  margin: 0; /* 1 */
  line-height: inherit; /* 2 */
}

/*
1. Add the correct height in Firefox.
2. Correct the inheritance of border color in Firefox. (https://bugzilla.mozilla.org/show_bug.cgi?id=190655)
3. Ensure horizontal rules are visible by default.
*/

hr {
  height: 0; /* 1 */
  color: inherit; /* 2 */
  border-top-width: 1px; /* 3 */
}

/*
Add the correct text decoration in Chrome, Edge, and Safari.
*/

abbr:where([title]) {
  text-decoration: underline dotted;
}

/*
Remove the default font size and weight for headings.
*/

h1,
h2,
h3,
h4,
h5,
h6 {
  font-size: inherit;
  font-weight: inherit;
}

/*
Reset links to optimize for opt-in styling instead of opt-out.
*/

a {
  color: inherit;
  text-decoration: inherit;
}

/*
Add the correct font weight in Edge and Safari.
*/

b,
strong {
  font-weight: bolder;
}

/*
1. Use the user's configured \`mono\` font-family by default.
2. Use the user's configured \`mono\` font-feature-settings by default.
3. Use the user's configured \`mono\` font-variation-settings by default.
4. Correct the odd \`em\` font sizing in all browsers.
*/

code,
kbd,
samp,
pre {
  font-family: ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace; /* 1 */
  font-feature-settings: normal; /* 2 */
  font-variation-settings: normal; /* 3 */
  font-size: 1em; /* 4 */
}

/*
Add the correct font size in all browsers.
*/

small {
  font-size: 80%;
}

/*
Prevent \`sub\` and \`sup\` elements from affecting the line height in all browsers.
*/

sub,
sup {
  font-size: 75%;
  line-height: 0;
  position: relative;
  vertical-align: baseline;
}

sub {
  bottom: -0.25em;
}

sup {
  top: -0.5em;
}

/*
1. Remove text indentation from table contents in Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=999088, https://bugs.webkit.org/show_bug.cgi?id=201297)
2. Correct table border color inheritance in all Chrome and Safari. (https://bugs.chromium.org/p/chromium/issues/detail?id=935729, https://bugs.webkit.org/show_bug.cgi?id=195016)
3. Remove gaps between table borders by default.
*/

table {
  text-indent: 0; /* 1 */
  border-color: inherit; /* 2 */
  border-collapse: collapse; /* 3 */
}

/*
1. Change the font styles in all browsers.
2. Remove the margin in Firefox and Safari.
3. Remove default padding in all browsers.
*/

button,
input,
optgroup,
select,
textarea {
  font-family: inherit; /* 1 */
  font-feature-settings: inherit; /* 1 */
  font-variation-settings: inherit; /* 1 */
  font-size: 100%; /* 1 */
  font-weight: inherit; /* 1 */
  line-height: inherit; /* 1 */
  letter-spacing: inherit; /* 1 */
  color: inherit; /* 1 */
  margin: 0; /* 2 */
  padding: 0; /* 3 */
}

/*
Remove the inheritance of text transform in Edge and Firefox.
*/

button,
select {
  text-transform: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Remove default button styles.
*/

button,
input:where([type='button']),
input:where([type='reset']),
input:where([type='submit']) {
  -webkit-appearance: button; /* 1 */
  background-color: transparent; /* 2 */
  background-image: none; /* 2 */
}

/*
Use the modern Firefox focus style for all focusable elements.
*/

:-moz-focusring {
  outline: auto;
}

/*
Remove the additional \`:invalid\` styles in Firefox. (https://github.com/mozilla/gecko-dev/blob/2f9eacd9d3d995c937b4251a5557d95d494c9be1/layout/style/res/forms.css#L728-L737)
*/

:-moz-ui-invalid {
  box-shadow: none;
}

/*
Add the correct vertical alignment in Chrome and Firefox.
*/

progress {
  vertical-align: baseline;
}

/*
Correct the cursor style of increment and decrement buttons in Safari.
*/

::-webkit-inner-spin-button,
::-webkit-outer-spin-button {
  height: auto;
}

/*
1. Correct the odd appearance in Chrome and Safari.
2. Correct the outline style in Safari.
*/

[type='search'] {
  -webkit-appearance: textfield; /* 1 */
  outline-offset: -2px; /* 2 */
}

/*
Remove the inner padding in Chrome and Safari on macOS.
*/

::-webkit-search-decoration {
  -webkit-appearance: none;
}

/*
1. Correct the inability to style clickable types in iOS and Safari.
2. Change font properties to \`inherit\` in Safari.
*/

::-webkit-file-upload-button {
  -webkit-appearance: button; /* 1 */
  font: inherit; /* 2 */
}

/*
Add the correct display in Chrome and Safari.
*/

summary {
  display: list-item;
}

/*
Removes the default spacing and border for appropriate elements.
*/

blockquote,
dl,
dd,
h1,
h2,
h3,
h4,
h5,
h6,
hr,
figure,
p,
pre {
  margin: 0;
}

fieldset {
  margin: 0;
  padding: 0;
}

legend {
  padding: 0;
}

ol,
ul,
menu {
  list-style: none;
  margin: 0;
  padding: 0;
}

/*
Reset default styling for dialogs.
*/
dialog {
  padding: 0;
}

/*
Prevent resizing textareas horizontally by default.
*/

textarea {
  resize: vertical;
}

/*
1. Reset the default placeholder opacity in Firefox. (https://github.com/tailwindlabs/tailwindcss/issues/3300)
2. Set the default placeholder color to the user's configured gray 400 color.
*/

input::placeholder,
textarea::placeholder {
  opacity: 1; /* 1 */
  color: #9ca3af; /* 2 */
}

/*
Set the default cursor for buttons.
*/

button,
[role="button"] {
  cursor: pointer;
}

/*
Make sure disabled buttons don't get the pointer cursor.
*/
:disabled {
  cursor: default;
}

/*
1. Make replaced elements \`display: block\` by default. (https://github.com/mozdevs/cssremedy/issues/14)
2. Add \`vertical-align: middle\` to align replaced elements more sensibly by default. (https://github.com/jensimmons/cssremedy/issues/14#issuecomment-634934210)
   This can trigger a poorly considered lint error in some tools but is included by design.
*/

img,
svg,
video,
canvas,
audio,
iframe,
embed,
object {
  display: block; /* 1 */
  vertical-align: middle; /* 2 */
}

/*
Constrain images and videos to the parent width and preserve their intrinsic aspect ratio. (https://github.com/mozdevs/cssremedy/issues/14)
*/

img,
video {
  max-width: 100%;
  height: auto;
}

/* Make elements with the HTML hidden attribute stay hidden by default */
[hidden]:where(:not([hidden="until-found"])) {
  display: none;
}
.sr-only {
  position: absolute;
  width: 1px;
  height: 1px;
  padding: 0;
  margin: -1px;
  overflow: hidden;
  clip: rect(0, 0, 0, 0);
  white-space: nowrap;
  border-width: 0;
}
.pointer-events-none {
  pointer-events: none;
}
.pointer-events-auto {
  pointer-events: auto;
}
.visible {
  visibility: visible;
}
.invisible {
  visibility: hidden;
}
.static {
  position: static;
}
.fixed {
  position: fixed;
}
.absolute {
  position: absolute;
}
.relative {
  position: relative;
}
.inset-0 {
  inset: 0px;
}
.inset-3 {
  inset: 0.75rem;
}
.inset-6 {
  inset: 1.5rem;
}
.inset-x-0 {
  left: 0px;
  right: 0px;
}
.inset-y-0 {
  top: 0px;
  bottom: 0px;
}
.-bottom-12 {
  bottom: -3rem;
}
.-left-12 {
  left: -3rem;
}
.-right-12 {
  right: -3rem;
}
.-top-12 {
  top: -3rem;
}
.bottom-0 {
  bottom: 0px;
}
.bottom-2 {
  bottom: 0.5rem;
}
.bottom-5 {
  bottom: 1.25rem;
}
.bottom-7 {
  bottom: 1.75rem;
}
.bottom-\\[-70vmax\\] {
  bottom: -70vmax;
}
.bottom-\\[3vh\\] {
  bottom: 3vh;
}
.left-0 {
  left: 0px;
}
.left-1 {
  left: 0.25rem;
}
.left-1\\/2 {
  left: 50%;
}
.left-2 {
  left: 0.5rem;
}
.left-\\[50\\%\\] {
  left: 50%;
}
.right-0 {
  right: 0px;
}
.right-1 {
  right: 0.25rem;
}
.right-2 {
  right: 0.5rem;
}
.right-4 {
  right: 1rem;
}
.right-5 {
  right: 1.25rem;
}
.top-0 {
  top: 0px;
}
.top-1 {
  top: 0.25rem;
}
.top-1\\/2 {
  top: 50%;
}
.top-2 {
  top: 0.5rem;
}
.top-4 {
  top: 1rem;
}
.top-\\[1px\\] {
  top: 1px;
}
.top-\\[50\\%\\] {
  top: 50%;
}
.top-\\[60\\%\\] {
  top: 60%;
}
.top-full {
  top: 100%;
}
.z-10 {
  z-index: 10;
}
.z-20 {
  z-index: 20;
}
.z-30 {
  z-index: 30;
}
.z-40 {
  z-index: 40;
}
.z-50 {
  z-index: 50;
}
.z-\\[100\\] {
  z-index: 100;
}
.z-\\[1\\] {
  z-index: 1;
}
.z-\\[5\\] {
  z-index: 5;
}
.z-\\[80\\] {
  z-index: 80;
}
.-mx-1 {
  margin-left: -0.25rem;
  margin-right: -0.25rem;
}
.mx-auto {
  margin-left: auto;
  margin-right: auto;
}
.my-1 {
  margin-top: 0.25rem;
  margin-bottom: 0.25rem;
}
.-ml-4 {
  margin-left: -1rem;
}
.-mt-4 {
  margin-top: -1rem;
}
.mb-1 {
  margin-bottom: 0.25rem;
}
.mb-10 {
  margin-bottom: 2.5rem;
}
.mb-5 {
  margin-bottom: 1.25rem;
}
.mb-6 {
  margin-bottom: 1.5rem;
}
.ml-1 {
  margin-left: 0.25rem;
}
.ml-auto {
  margin-left: auto;
}
.mr-2 {
  margin-right: 0.5rem;
}
.mt-1 {
  margin-top: 0.25rem;
}
.mt-1\\.5 {
  margin-top: 0.375rem;
}
.mt-10 {
  margin-top: 2.5rem;
}
.mt-12 {
  margin-top: 3rem;
}
.mt-2 {
  margin-top: 0.5rem;
}
.mt-24 {
  margin-top: 6rem;
}
.mt-4 {
  margin-top: 1rem;
}
.mt-5 {
  margin-top: 1.25rem;
}
.mt-6 {
  margin-top: 1.5rem;
}
.mt-8 {
  margin-top: 2rem;
}
.mt-9 {
  margin-top: 2.25rem;
}
.mt-auto {
  margin-top: auto;
}
.mb-4 {
  margin-bottom: 1rem;
}
.mt-3 {
  margin-top: 0.75rem;
}
.block {
  display: block;
}
.flex {
  display: flex;
}
.inline-flex {
  display: inline-flex;
}
.table {
  display: table;
}
.grid {
  display: grid;
}
.hidden {
  display: none;
}
.aspect-square {
  aspect-ratio: 1 / 1;
}
.h-1\\.5 {
  height: 0.375rem;
}
.h-10 {
  height: 2.5rem;
}
.h-12 {
  height: 3rem;
}
.h-14 {
  height: 3.5rem;
}
.h-16 {
  height: 4rem;
}
.h-2 {
  height: 0.5rem;
}
.h-2\\.5 {
  height: 0.625rem;
}
.h-20 {
  height: 5rem;
}
.h-3 {
  height: 0.75rem;
}
.h-3\\.5 {
  height: 0.875rem;
}
.h-36 {
  height: 9rem;
}
.h-4 {
  height: 1rem;
}
.h-5 {
  height: 1.25rem;
}
.h-6 {
  height: 1.5rem;
}
.h-7 {
  height: 1.75rem;
}
.h-8 {
  height: 2rem;
}
.h-9 {
  height: 2.25rem;
}
.h-\\[170vmax\\] {
  height: 170vmax;
}
.h-\\[1px\\] {
  height: 1px;
}
.h-\\[30vmax\\] {
  height: 30vmax;
}
.h-\\[46vmax\\] {
  height: 46vmax;
}
.h-\\[60vh\\] {
  height: 60vh;
}
.h-\\[60vmax\\] {
  height: 60vmax;
}
.h-\\[70vh\\] {
  height: 70vh;
}
.h-\\[var\\(--radix-navigation-menu-viewport-height\\)\\] {
  height: var(--radix-navigation-menu-viewport-height);
}
.h-\\[var\\(--radix-select-trigger-height\\)\\] {
  height: var(--radix-select-trigger-height);
}
.h-auto {
  height: auto;
}
.h-full {
  height: 100%;
}
.h-px {
  height: 1px;
}
.max-h-\\[--radix-context-menu-content-available-height\\] {
  max-height: var(--radix-context-menu-content-available-height);
}
.max-h-\\[--radix-select-content-available-height\\] {
  max-height: var(--radix-select-content-available-height);
}
.max-h-\\[300px\\] {
  max-height: 300px;
}
.max-h-\\[var\\(--radix-dropdown-menu-content-available-height\\)\\] {
  max-height: var(--radix-dropdown-menu-content-available-height);
}
.max-h-screen {
  max-height: 100vh;
}
.min-h-\\[60px\\] {
  min-height: 60px;
}
.min-h-screen {
  min-height: 100vh;
}
.w-10 {
  width: 2.5rem;
}
.w-12 {
  width: 3rem;
}
.w-14 {
  width: 3.5rem;
}
.w-16 {
  width: 4rem;
}
.w-2 {
  width: 0.5rem;
}
.w-2\\.5 {
  width: 0.625rem;
}
.w-20 {
  width: 5rem;
}
.w-24 {
  width: 6rem;
}
.w-3 {
  width: 0.75rem;
}
.w-3\\.5 {
  width: 0.875rem;
}
.w-3\\/4 {
  width: 75%;
}
.w-36 {
  width: 9rem;
}
.w-4 {
  width: 1rem;
}
.w-5 {
  width: 1.25rem;
}
.w-6 {
  width: 1.5rem;
}
.w-64 {
  width: 16rem;
}
.w-7 {
  width: 1.75rem;
}
.w-72 {
  width: 18rem;
}
.w-8 {
  width: 2rem;
}
.w-9 {
  width: 2.25rem;
}
.w-\\[100px\\] {
  width: 100px;
}
.w-\\[1300px\\] {
  width: 1300px;
}
.w-\\[150vw\\] {
  width: 150vw;
}
.w-\\[170vmax\\] {
  width: 170vmax;
}
.w-\\[1px\\] {
  width: 1px;
}
.w-\\[30vmax\\] {
  width: 30vmax;
}
.w-\\[3px\\] {
  width: 3px;
}
.w-\\[46vmax\\] {
  width: 46vmax;
}
.w-\\[50\\.4\\%\\] {
  width: 50.4%;
}
.w-\\[5px\\] {
  width: 5px;
}
.w-\\[60vmax\\] {
  width: 60vmax;
}
.w-full {
  width: 100%;
}
.w-max {
  width: max-content;
}
.w-px {
  width: 1px;
}
.min-w-0 {
  min-width: 0px;
}
.min-w-10 {
  min-width: 2.5rem;
}
.min-w-8 {
  min-width: 2rem;
}
.min-w-9 {
  min-width: 2.25rem;
}
.min-w-\\[12rem\\] {
  min-width: 12rem;
}
.min-w-\\[8rem\\] {
  min-width: 8rem;
}
.min-w-\\[var\\(--radix-select-trigger-width\\)\\] {
  min-width: var(--radix-select-trigger-width);
}
.max-w-2xl {
  max-width: 42rem;
}
.max-w-3xl {
  max-width: 48rem;
}
.max-w-4xl {
  max-width: 56rem;
}
.max-w-5xl {
  max-width: 64rem;
}
.max-w-6xl {
  max-width: 72rem;
}
.max-w-lg {
  max-width: 32rem;
}
.max-w-max {
  max-width: max-content;
}
.max-w-none {
  max-width: none;
}
.flex-1 {
  flex: 1 1;
}
.shrink-0 {
  flex-shrink: 0;
}
.grow {
  flex-grow: 1;
}
.grow-0 {
  flex-grow: 0;
}
.basis-full {
  flex-basis: 100%;
}
.caption-bottom {
  caption-side: bottom;
}
.border-collapse {
  border-collapse: collapse;
}
.origin-\\[--radix-context-menu-content-transform-origin\\] {
  transform-origin: var(--radix-context-menu-content-transform-origin);
}
.origin-\\[--radix-dropdown-menu-content-transform-origin\\] {
  transform-origin: var(--radix-dropdown-menu-content-transform-origin);
}
.origin-\\[--radix-hover-card-content-transform-origin\\] {
  transform-origin: var(--radix-hover-card-content-transform-origin);
}
.origin-\\[--radix-menubar-content-transform-origin\\] {
  transform-origin: var(--radix-menubar-content-transform-origin);
}
.origin-\\[--radix-popover-content-transform-origin\\] {
  transform-origin: var(--radix-popover-content-transform-origin);
}
.origin-\\[--radix-select-content-transform-origin\\] {
  transform-origin: var(--radix-select-content-transform-origin);
}
.origin-\\[--radix-tooltip-content-transform-origin\\] {
  transform-origin: var(--radix-tooltip-content-transform-origin);
}
.-translate-x-1\\/2 {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.-translate-y-1\\/2 {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-x-\\[-50\\%\\] {
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-\\[-50\\%\\] {
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.translate-y-full {
  --tw-translate-y: 100%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-45 {
  --tw-rotate: 45deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.rotate-90 {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
.transform {
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}
@keyframes pulse {

  50% {
    opacity: .5;
  }
}
.animate-pulse {
  animation: pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
}
.cursor-default {
  cursor: default;
}
.cursor-pointer {
  cursor: pointer;
}
.touch-none {
  touch-action: none;
}
.select-none {
  -webkit-user-select: none;
          user-select: none;
}
.list-none {
  list-style-type: none;
}
.flex-row {
  flex-direction: row;
}
.flex-col {
  flex-direction: column;
}
.flex-col-reverse {
  flex-direction: column-reverse;
}
.flex-wrap {
  flex-wrap: wrap;
}
.items-end {
  align-items: flex-end;
}
.items-center {
  align-items: center;
}
.justify-center {
  justify-content: center;
}
.justify-between {
  justify-content: space-between;
}
.gap-1 {
  gap: 0.25rem;
}
.gap-1\\.5 {
  gap: 0.375rem;
}
.gap-10 {
  gap: 2.5rem;
}
.gap-2 {
  gap: 0.5rem;
}
.gap-3 {
  gap: 0.75rem;
}
.gap-4 {
  gap: 1rem;
}
.gap-5 {
  gap: 1.25rem;
}
.gap-6 {
  gap: 1.5rem;
}
.gap-\\[3px\\] {
  gap: 3px;
}
.space-x-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.25rem * var(--tw-space-x-reverse));
  margin-left: calc(0.25rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-x-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-x-reverse: 0;
  margin-right: calc(0.5rem * var(--tw-space-x-reverse));
  margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
}
.space-y-1 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.25rem * var(--tw-space-y-reverse));
}
.space-y-1\\.5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.375rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.375rem * var(--tw-space-y-reverse));
}
.space-y-2 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(0.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(0.5rem * var(--tw-space-y-reverse));
}
.space-y-4 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1rem * var(--tw-space-y-reverse));
}
.space-y-5 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.25rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.25rem * var(--tw-space-y-reverse));
}
.space-y-6 > :not([hidden]) ~ :not([hidden]) {
  --tw-space-y-reverse: 0;
  margin-top: calc(1.5rem * calc(1 - var(--tw-space-y-reverse)));
  margin-bottom: calc(1.5rem * var(--tw-space-y-reverse));
}
.overflow-auto {
  overflow: auto;
}
.overflow-hidden {
  overflow: hidden;
}
.overflow-y-auto {
  overflow-y: auto;
}
.overflow-x-hidden {
  overflow-x: hidden;
}
.whitespace-nowrap {
  white-space: nowrap;
}
.break-words {
  overflow-wrap: break-word;
}
.rounded-\\[4px\\] {
  border-radius: 4px;
}
.rounded-\\[inherit\\] {
  border-radius: inherit;
}
.rounded-full {
  border-radius: 9999px;
}
.rounded-lg {
  border-radius: 0.5rem;
}
.rounded-md {
  border-radius: 0.375rem;
}
.rounded-sm {
  border-radius: 0.125rem;
}
.rounded-xl {
  border-radius: 0.75rem;
}
.rounded-t-\\[10px\\] {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
}
.rounded-tl-sm {
  border-top-left-radius: 0.125rem;
}
.border {
  border-width: 1px;
}
.border-2 {
  border-width: 2px;
}
.border-y {
  border-top-width: 1px;
  border-bottom-width: 1px;
}
.border-b {
  border-bottom-width: 1px;
}
.border-l {
  border-left-width: 1px;
}
.border-r {
  border-right-width: 1px;
}
.border-t {
  border-top-width: 1px;
}
.border-\\[\\#C99A45\\]\\/15 {
  border-color: rgb(201 154 69 / 0.15);
}
.border-\\[\\#C99A45\\]\\/20 {
  border-color: rgb(201 154 69 / 0.2);
}
.border-\\[\\#C99A45\\]\\/35 {
  border-color: rgb(201 154 69 / 0.35);
}
.border-\\[\\#C99A45\\]\\/50 {
  border-color: rgb(201 154 69 / 0.5);
}
.border-\\[\\#C99A45\\]\\/60 {
  border-color: rgb(201 154 69 / 0.6);
}
.border-\\[\\#C99A45\\]\\/70 {
  border-color: rgb(201 154 69 / 0.7);
}
.border-transparent {
  border-color: transparent;
}
.border-l-transparent {
  border-left-color: transparent;
}
.border-t-transparent {
  border-top-color: transparent;
}
.bg-\\[\\#060402\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(6 4 2 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#100D0A\\]\\/70 {
  background-color: rgb(16 13 10 / 0.7);
}
.bg-\\[\\#140f09\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(20 15 9 / var(--tw-bg-opacity, 1));
}
.bg-\\[\\#181008\\]\\/70 {
  background-color: rgb(24 16 8 / 0.7);
}
.bg-\\[\\#181008\\]\\/80 {
  background-color: rgb(24 16 8 / 0.8);
}
.bg-\\[\\#D9A441\\] {
  --tw-bg-opacity: 1;
  background-color: rgb(217 164 65 / var(--tw-bg-opacity, 1));
}
.bg-black\\/80 {
  background-color: rgb(0 0 0 / 0.8);
}
.bg-ink {
  --tw-bg-opacity: 1;
  background-color: rgb(16 13 10 / var(--tw-bg-opacity, 1));
}
.bg-transparent {
  background-color: transparent;
}
.bg-gradient-to-b {
  background-image: linear-gradient(to bottom, var(--tw-gradient-stops));
}
.bg-gradient-to-l {
  background-image: linear-gradient(to left, var(--tw-gradient-stops));
}
.bg-gradient-to-r {
  background-image: linear-gradient(to right, var(--tw-gradient-stops));
}
.from-\\[\\#C99A45\\] {
  --tw-gradient-from: #C99A45 var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(201 154 69 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-\\[\\#C99A45\\]\\/70 {
  --tw-gradient-from: rgb(201 154 69 / 0.7) var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(201 154 69 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.from-transparent {
  --tw-gradient-from: transparent var(--tw-gradient-from-position);
  --tw-gradient-to: rgb(0 0 0 / 0) var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), var(--tw-gradient-to);
}
.via-\\[\\#C99A45\\]\\/25 {
  --tw-gradient-to: rgb(201 154 69 / 0)  var(--tw-gradient-to-position);
  --tw-gradient-stops: var(--tw-gradient-from), rgb(201 154 69 / 0.25) var(--tw-gradient-via-position), var(--tw-gradient-to);
}
.to-\\[\\#C99A45\\]\\/70 {
  --tw-gradient-to: rgb(201 154 69 / 0.7) var(--tw-gradient-to-position);
}
.to-\\[\\#D9A441\\] {
  --tw-gradient-to: #D9A441 var(--tw-gradient-to-position);
}
.fill-current {
  fill: currentColor;
}
.p-0 {
  padding: 0px;
}
.p-1 {
  padding: 0.25rem;
}
.p-2 {
  padding: 0.5rem;
}
.p-3 {
  padding: 0.75rem;
}
.p-4 {
  padding: 1rem;
}
.p-6 {
  padding: 1.5rem;
}
.p-8 {
  padding: 2rem;
}
.p-\\[1px\\] {
  padding: 1px;
}
.px-1\\.5 {
  padding-left: 0.375rem;
  padding-right: 0.375rem;
}
.px-10 {
  padding-left: 2.5rem;
  padding-right: 2.5rem;
}
.px-2 {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}
.px-2\\.5 {
  padding-left: 0.625rem;
  padding-right: 0.625rem;
}
.px-3 {
  padding-left: 0.75rem;
  padding-right: 0.75rem;
}
.px-4 {
  padding-left: 1rem;
  padding-right: 1rem;
}
.px-6 {
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}
.px-7 {
  padding-left: 1.75rem;
  padding-right: 1.75rem;
}
.px-8 {
  padding-left: 2rem;
  padding-right: 2rem;
}
.py-0\\.5 {
  padding-top: 0.125rem;
  padding-bottom: 0.125rem;
}
.py-1 {
  padding-top: 0.25rem;
  padding-bottom: 0.25rem;
}
.py-1\\.5 {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}
.py-10 {
  padding-top: 2.5rem;
  padding-bottom: 2.5rem;
}
.py-16 {
  padding-top: 4rem;
  padding-bottom: 4rem;
}
.py-2 {
  padding-top: 0.5rem;
  padding-bottom: 0.5rem;
}
.py-20 {
  padding-top: 5rem;
  padding-bottom: 5rem;
}
.py-3 {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}
.py-4 {
  padding-top: 1rem;
  padding-bottom: 1rem;
}
.py-5 {
  padding-top: 1.25rem;
  padding-bottom: 1.25rem;
}
.py-6 {
  padding-top: 1.5rem;
  padding-bottom: 1.5rem;
}
.pb-24 {
  padding-bottom: 6rem;
}
.pb-4 {
  padding-bottom: 1rem;
}
.pl-2 {
  padding-left: 0.5rem;
}
.pl-2\\.5 {
  padding-left: 0.625rem;
}
.pl-4 {
  padding-left: 1rem;
}
.pl-8 {
  padding-left: 2rem;
}
.pr-2 {
  padding-right: 0.5rem;
}
.pr-2\\.5 {
  padding-right: 0.625rem;
}
.pr-6 {
  padding-right: 1.5rem;
}
.pr-8 {
  padding-right: 2rem;
}
.pt-0 {
  padding-top: 0px;
}
.pt-1 {
  padding-top: 0.25rem;
}
.pt-16 {
  padding-top: 4rem;
}
.pt-4 {
  padding-top: 1rem;
}
.pb-14 {
  padding-bottom: 3.5rem;
}
.pt-10 {
  padding-top: 2.5rem;
}
.text-left {
  text-align: left;
}
.text-center {
  text-align: center;
}
.align-middle {
  vertical-align: middle;
}
.font-display {
  font-family: "Cormorant Garamond", "Noto Serif Gujarati", serif;
}
.text-2xl {
  font-size: 1.5rem;
  line-height: 2rem;
}
.text-3xl {
  font-size: 1.875rem;
  line-height: 2.25rem;
}
.text-4xl {
  font-size: 2.25rem;
  line-height: 2.5rem;
}
.text-\\[0\\.8rem\\] {
  font-size: 0.8rem;
}
.text-\\[10px\\] {
  font-size: 10px;
}
.text-\\[11px\\] {
  font-size: 11px;
}
.text-base {
  font-size: 1rem;
  line-height: 1.5rem;
}
.text-lg {
  font-size: 1.125rem;
  line-height: 1.75rem;
}
.text-sm {
  font-size: 0.875rem;
  line-height: 1.25rem;
}
.text-xl {
  font-size: 1.25rem;
  line-height: 1.75rem;
}
.text-xs {
  font-size: 0.75rem;
  line-height: 1rem;
}
.font-medium {
  font-weight: 500;
}
.font-normal {
  font-weight: 400;
}
.font-semibold {
  font-weight: 600;
}
.uppercase {
  text-transform: uppercase;
}
.italic {
  font-style: italic;
}
.leading-\\[1\\.12\\] {
  line-height: 1.12;
}
.leading-\\[1\\.25\\] {
  line-height: 1.25;
}
.leading-\\[1\\.2\\] {
  line-height: 1.2;
}
.leading-\\[1\\.75\\] {
  line-height: 1.75;
}
.leading-\\[1\\.9\\] {
  line-height: 1.9;
}
.leading-none {
  line-height: 1;
}
.leading-relaxed {
  line-height: 1.625;
}
.tracking-\\[0\\.35em\\] {
  letter-spacing: 0.35em;
}
.tracking-\\[0\\.3em\\] {
  letter-spacing: 0.3em;
}
.tracking-\\[0\\.45em\\] {
  letter-spacing: 0.45em;
}
.tracking-\\[0\\.4em\\] {
  letter-spacing: 0.4em;
}
.tracking-\\[0\\.55em\\] {
  letter-spacing: 0.55em;
}
.tracking-\\[0\\.5em\\] {
  letter-spacing: 0.5em;
}
.tracking-tight {
  letter-spacing: -0.025em;
}
.tracking-widest {
  letter-spacing: 0.1em;
}
.text-\\[\\#C99A45\\] {
  --tw-text-opacity: 1;
  color: rgb(201 154 69 / var(--tw-text-opacity, 1));
}
.text-\\[\\#C99A45\\]\\/50 {
  color: rgb(201 154 69 / 0.5);
}
.text-\\[\\#C99A45\\]\\/60 {
  color: rgb(201 154 69 / 0.6);
}
.text-\\[\\#C99A45\\]\\/70 {
  color: rgb(201 154 69 / 0.7);
}
.text-\\[\\#C99A45\\]\\/80 {
  color: rgb(201 154 69 / 0.8);
}
.text-\\[\\#C99A45\\]\\/85 {
  color: rgb(201 154 69 / 0.85);
}
.text-\\[\\#C99A45\\]\\/90 {
  color: rgb(201 154 69 / 0.9);
}
.text-\\[\\#D9A441\\] {
  --tw-text-opacity: 1;
  color: rgb(217 164 65 / var(--tw-text-opacity, 1));
}
.text-\\[\\#D9A441\\]\\/70 {
  color: rgb(217 164 65 / 0.7);
}
.text-\\[\\#D9A441\\]\\/90 {
  color: rgb(217 164 65 / 0.9);
}
.text-\\[\\#F5E6C8\\] {
  --tw-text-opacity: 1;
  color: rgb(245 230 200 / var(--tw-text-opacity, 1));
}
.text-\\[\\#F5E6C8\\]\\/50 {
  color: rgb(245 230 200 / 0.5);
}
.text-\\[\\#F5E6C8\\]\\/55 {
  color: rgb(245 230 200 / 0.55);
}
.text-\\[\\#F5E6C8\\]\\/65 {
  color: rgb(245 230 200 / 0.65);
}
.text-\\[\\#F5E6C8\\]\\/70 {
  color: rgb(245 230 200 / 0.7);
}
.text-\\[\\#F5E6C8\\]\\/75 {
  color: rgb(245 230 200 / 0.75);
}
.text-\\[\\#F5E6C8\\]\\/90 {
  color: rgb(245 230 200 / 0.9);
}
.text-current {
  color: currentColor;
}
.text-gold {
  --tw-text-opacity: 1;
  color: rgb(201 154 69 / var(--tw-text-opacity, 1));
}
.text-ivory {
  --tw-text-opacity: 1;
  color: rgb(245 230 200 / var(--tw-text-opacity, 1));
}
.text-\\[\\#C99A45\\]\\/75 {
  color: rgb(201 154 69 / 0.75);
}
.underline-offset-4 {
  text-underline-offset: 4px;
}
.opacity-0 {
  opacity: 0;
}
.opacity-50 {
  opacity: 0.5;
}
.opacity-60 {
  opacity: 0.6;
}
.opacity-70 {
  opacity: 0.7;
}
.opacity-80 {
  opacity: 0.8;
}
.opacity-90 {
  opacity: 0.9;
}
.shadow {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-md {
  --tw-shadow: 0 4px 6px -1px rgb(0 0 0 / 0.1), 0 2px 4px -2px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 4px 6px -1px var(--tw-shadow-color), 0 2px 4px -2px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.shadow-sm {
  --tw-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);
  --tw-shadow-colored: 0 1px 2px 0 var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}
.outline-none {
  outline: 2px solid transparent;
  outline-offset: 2px;
}
.outline {
  outline-style: solid;
}
.ring {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(3px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-0 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(0px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.ring-1 {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}
.blur-\\[3px\\] {
  --tw-blur: blur(3px);
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.drop-shadow-\\[0_0_10px_rgba\\(217\\2c 164\\2c 65\\2c 0\\.5\\)\\] {
  --tw-drop-shadow: drop-shadow(0 0 10px rgba(217,164,65,0.5));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.drop-shadow-\\[0_0_18px_rgba\\(217\\2c 164\\2c 65\\2c 0\\.55\\)\\] {
  --tw-drop-shadow: drop-shadow(0 0 18px rgba(217,164,65,0.55));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.drop-shadow-\\[0_0_24px_rgba\\(217\\2c 164\\2c 65\\2c 0\\.6\\)\\] {
  --tw-drop-shadow: drop-shadow(0 0 24px rgba(217,164,65,0.6));
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.filter {
  filter: var(--tw-blur) var(--tw-brightness) var(--tw-contrast) var(--tw-grayscale) var(--tw-hue-rotate) var(--tw-invert) var(--tw-saturate) var(--tw-sepia) var(--tw-drop-shadow);
}
.backdrop-blur-md {
  --tw-backdrop-blur: blur(12px);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.backdrop-blur-sm {
  --tw-backdrop-blur: blur(4px);
  backdrop-filter: var(--tw-backdrop-blur) var(--tw-backdrop-brightness) var(--tw-backdrop-contrast) var(--tw-backdrop-grayscale) var(--tw-backdrop-hue-rotate) var(--tw-backdrop-invert) var(--tw-backdrop-opacity) var(--tw-backdrop-saturate) var(--tw-backdrop-sepia);
}
.transition {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke, opacity, box-shadow, transform, filter, backdrop-filter;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-all {
  transition-property: all;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-colors {
  transition-property: color, background-color, border-color, text-decoration-color, fill, stroke;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-opacity {
  transition-property: opacity;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-shadow {
  transition-property: box-shadow;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.transition-transform {
  transition-property: transform;
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
  transition-duration: 150ms;
}
.duration-1000 {
  transition-duration: 1000ms;
}
.duration-200 {
  transition-duration: 200ms;
}
.duration-300 {
  transition-duration: 300ms;
}
.duration-500 {
  transition-duration: 500ms;
}
.ease-in-out {
  transition-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}
.will-change-transform {
  will-change: transform;
}
@keyframes enter {

  from {
    opacity: var(--tw-enter-opacity, 1);
    transform: translate3d(var(--tw-enter-translate-x, 0), var(--tw-enter-translate-y, 0), 0) scale3d(var(--tw-enter-scale, 1), var(--tw-enter-scale, 1), var(--tw-enter-scale, 1)) rotate(var(--tw-enter-rotate, 0));
  }
}
@keyframes exit {

  to {
    opacity: var(--tw-exit-opacity, 1);
    transform: translate3d(var(--tw-exit-translate-x, 0), var(--tw-exit-translate-y, 0), 0) scale3d(var(--tw-exit-scale, 1), var(--tw-exit-scale, 1), var(--tw-exit-scale, 1)) rotate(var(--tw-exit-rotate, 0));
  }
}
.animate-in {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}
.fade-in-0 {
  --tw-enter-opacity: 0;
}
.zoom-in-95 {
  --tw-enter-scale: .95;
}
.duration-1000 {
  animation-duration: 1000ms;
}
.duration-200 {
  animation-duration: 200ms;
}
.duration-300 {
  animation-duration: 300ms;
}
.duration-500 {
  animation-duration: 500ms;
}
.ease-in-out {
  animation-timing-function: cubic-bezier(0.4, 0, 0.2, 1);
}

:root {
    color-scheme: dark;
}

html {
    background: #100d0a;
}

body {
    margin: 0;
    background: #100d0a;
    color: #f5e6c8;
    font-family: "Cormorant Garamond", "Noto Serif Gujarati", "Noto Sans Gujarati", serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    overflow-x: clip;
}

::selection {
    background: #c99a45;
    color: #100d0a;
}

::-webkit-scrollbar {
    width: 10px;
}
::-webkit-scrollbar-track {
    background: #100d0a;
}
::-webkit-scrollbar-thumb {
    background: #3a2c17;
    border-radius: 8px;
    border: 2px solid #100d0a;
}
::-webkit-scrollbar-thumb:hover {
    background: #c99a45;
}

body::after {
    content: "";
    position: fixed;
    inset: 0;
    z-index: 70;
    pointer-events: none;
    opacity: 0.045;
    background-image: url(${___CSS_LOADER_URL_REPLACEMENT_0___});
}

/* Metallic gold type */
.text-gold {
    background: linear-gradient(
        100deg,
        #7a5a26 0%,
        #c99a45 22%,
        #f7eacb 50%,
        #c99a45 78%,
        #7a5a26 100%
    );
    background-size: 220% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    animation: gold-shine 9s linear infinite;
}
@keyframes gold-shine {
    to {
        background-position: 220% center;
    }
}

.text-gold-static {
    background: linear-gradient(
        100deg,
        #a87b2f 0%,
        #d9ab52 25%,
        #f7eacb 50%,
        #d9ab52 75%,
        #a87b2f 100%
    );
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
}

.gold-hairline {
    border: 1px solid rgba(201, 154, 69, 0.32);
}
.gold-glow {
    box-shadow:
        0 0 46px -10px rgba(201, 154, 69, 0.45),
        inset 0 0 26px -14px rgba(201, 154, 69, 0.4);
}

.vignette {
    background: radial-gradient(
        ellipse at center,
        transparent 52%,
        rgba(16, 13, 10, 0.88) 100%
    );
}

.wood-door {
    background:
        repeating-linear-gradient(
            90deg,
            rgba(0, 0, 0, 0.22) 0 2px,
            transparent 2px 88px
        ),
        linear-gradient(100deg, #2b1d10 0%, #1c1209 55%, #251a11 100%);
}

.petal {
    position: absolute;
    top: -6vh;
    border-radius: 70% 70% 70% 70% / 85% 85% 60% 60%;
    background: linear-gradient(160deg, #e8891c, #c99a45);
    will-change: transform;
}

@keyframes flicker {
    0%,
    100% {
        transform: scaleY(1);
    }
    25% {
        transform: scaleY(1.14) translateY(-1px);
    }
    50% {
        transform: scaleY(0.92);
    }
    75% {
        transform: scaleY(1.07);
    }
}
.flame-anim {
    animation: flicker 1.5s ease-in-out infinite;
    transform-origin: bottom center;
}

@keyframes marquee {
    from {
        transform: translateX(0);
    }
    to {
        transform: translateX(-50%);
    }
}
.animate-marquee {
    animation: marquee 48s linear infinite;
}

@keyframes eq {
    0%,
    100% {
        transform: scaleY(0.3);
    }
    50% {
        transform: scaleY(1);
    }
}
.eq-bar {
    transform-origin: bottom;
    animation: eq 0.9s ease-in-out infinite;
}

@keyframes spin-slow {
    to {
        transform: rotate(360deg);
    }
}
.rays-spin {
    animation: spin-slow 90s linear infinite;
}

.rays {
    background: repeating-conic-gradient(
        from 0deg at 50% 50%,
        rgba(217, 164, 65, 0.12) 0deg 3deg,
        transparent 3deg 16deg
    );
    mask-image: radial-gradient(
        ellipse at 50% 100%,
        black 0%,
        transparent 62%
    );
}

@media (prefers-reduced-motion: reduce) {
    .flame-anim,
    .animate-marquee,
    .text-gold,
    .eq-bar,
    .rays-spin {
        animation: none !important;
    }
}

.file\\:border-0::file-selector-button {
  border-width: 0px;
}

.file\\:bg-transparent::file-selector-button {
  background-color: transparent;
}

.file\\:text-sm::file-selector-button {
  font-size: 0.875rem;
  line-height: 1.25rem;
}

.file\\:font-medium::file-selector-button {
  font-weight: 500;
}

.after\\:absolute::after {
  content: var(--tw-content);
  position: absolute;
}

.after\\:inset-y-0::after {
  content: var(--tw-content);
  top: 0px;
  bottom: 0px;
}

.after\\:left-1\\/2::after {
  content: var(--tw-content);
  left: 50%;
}

.after\\:w-1::after {
  content: var(--tw-content);
  width: 0.25rem;
}

.after\\:-translate-x-1\\/2::after {
  content: var(--tw-content);
  --tw-translate-x: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.first\\:rounded-l-md:first-child {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}

.first\\:border-l:first-child {
  border-left-width: 1px;
}

.last\\:rounded-r-md:last-child {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}

.focus-within\\:relative:focus-within {
  position: relative;
}

.focus-within\\:z-20:focus-within {
  z-index: 20;
}

.hover\\:border-\\[\\#D9A441\\]:hover {
  --tw-border-opacity: 1;
  border-color: rgb(217 164 65 / var(--tw-border-opacity, 1));
}

.hover\\:text-\\[\\#100D0A\\]:hover {
  --tw-text-opacity: 1;
  color: rgb(16 13 10 / var(--tw-text-opacity, 1));
}

.hover\\:underline:hover {
  text-decoration-line: underline;
}

.hover\\:opacity-100:hover {
  opacity: 1;
}

.focus\\:opacity-100:focus {
  opacity: 1;
}

.focus\\:outline-none:focus {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus\\:ring-1:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-2:focus {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus\\:ring-offset-2:focus {
  --tw-ring-offset-width: 2px;
}

.focus-visible\\:outline-none:focus-visible {
  outline: 2px solid transparent;
  outline-offset: 2px;
}

.focus-visible\\:ring-1:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(1px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-visible\\:ring-2:focus-visible {
  --tw-ring-offset-shadow: var(--tw-ring-inset) 0 0 0 var(--tw-ring-offset-width) var(--tw-ring-offset-color);
  --tw-ring-shadow: var(--tw-ring-inset) 0 0 0 calc(2px + var(--tw-ring-offset-width)) var(--tw-ring-color);
  box-shadow: var(--tw-ring-offset-shadow), var(--tw-ring-shadow), var(--tw-shadow, 0 0 #0000);
}

.focus-visible\\:ring-offset-1:focus-visible {
  --tw-ring-offset-width: 1px;
}

.focus-visible\\:ring-offset-2:focus-visible {
  --tw-ring-offset-width: 2px;
}

.disabled\\:pointer-events-none:disabled {
  pointer-events: none;
}

.disabled\\:cursor-not-allowed:disabled {
  cursor: not-allowed;
}

.disabled\\:opacity-50:disabled {
  opacity: 0.5;
}

.group:hover .group-hover\\:translate-y-0 {
  --tw-translate-y: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\\:scale-110 {
  --tw-scale-x: 1.1;
  --tw-scale-y: 1.1;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group:hover .group-hover\\:border-\\[\\#D9A441\\] {
  --tw-border-opacity: 1;
  border-color: rgb(217 164 65 / var(--tw-border-opacity, 1));
}

.group:hover .group-hover\\:opacity-100 {
  opacity: 1;
}

.group.destructive .group-\\[\\.destructive\\]\\:text-red-300 {
  --tw-text-opacity: 1;
  color: rgb(252 165 165 / var(--tw-text-opacity, 1));
}

.group.toaster .group-\\[\\.toaster\\]\\:shadow-lg {
  --tw-shadow: 0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 10px 15px -3px var(--tw-shadow-color), 0 4px 6px -4px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.group.destructive .group-\\[\\.destructive\\]\\:hover\\:text-red-50:hover {
  --tw-text-opacity: 1;
  color: rgb(254 242 242 / var(--tw-text-opacity, 1));
}

.group.destructive .group-\\[\\.destructive\\]\\:focus\\:ring-red-400:focus {
  --tw-ring-opacity: 1;
  --tw-ring-color: rgb(248 113 113 / var(--tw-ring-opacity, 1));
}

.group.destructive .group-\\[\\.destructive\\]\\:focus\\:ring-offset-red-600:focus {
  --tw-ring-offset-color: #dc2626;
}

.peer:disabled ~ .peer-disabled\\:cursor-not-allowed {
  cursor: not-allowed;
}

.peer:disabled ~ .peer-disabled\\:opacity-70 {
  opacity: 0.7;
}

.has-\\[\\:disabled\\]\\:opacity-50:has(:disabled) {
  opacity: 0.5;
}

.aria-selected\\:opacity-100[aria-selected="true"] {
  opacity: 1;
}

.data-\\[disabled\\=true\\]\\:pointer-events-none[data-disabled="true"] {
  pointer-events: none;
}

.data-\\[disabled\\]\\:pointer-events-none[data-disabled] {
  pointer-events: none;
}

.data-\\[panel-group-direction\\=vertical\\]\\:h-px[data-panel-group-direction="vertical"] {
  height: 1px;
}

.data-\\[panel-group-direction\\=vertical\\]\\:w-full[data-panel-group-direction="vertical"] {
  width: 100%;
}

.data-\\[side\\=bottom\\]\\:translate-y-1[data-side="bottom"] {
  --tw-translate-y: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[side\\=left\\]\\:-translate-x-1[data-side="left"] {
  --tw-translate-x: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[side\\=right\\]\\:translate-x-1[data-side="right"] {
  --tw-translate-x: 0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[side\\=top\\]\\:-translate-y-1[data-side="top"] {
  --tw-translate-y: -0.25rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[state\\=checked\\]\\:translate-x-4[data-state="checked"] {
  --tw-translate-x: 1rem;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[state\\=unchecked\\]\\:translate-x-0[data-state="unchecked"] {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[swipe\\=cancel\\]\\:translate-x-0[data-swipe="cancel"] {
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[swipe\\=end\\]\\:translate-x-\\[var\\(--radix-toast-swipe-end-x\\)\\][data-swipe="end"] {
  --tw-translate-x: var(--radix-toast-swipe-end-x);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[swipe\\=move\\]\\:translate-x-\\[var\\(--radix-toast-swipe-move-x\\)\\][data-swipe="move"] {
  --tw-translate-x: var(--radix-toast-swipe-move-x);
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@keyframes accordion-up {

  from {
    height: var(--radix-accordion-content-height);
  }

  to {
    height: 0;
  }
}

.data-\\[state\\=closed\\]\\:animate-accordion-up[data-state="closed"] {
  animation: accordion-up 0.2s ease-out;
}

@keyframes accordion-down {

  from {
    height: 0;
  }

  to {
    height: var(--radix-accordion-content-height);
  }
}

.data-\\[state\\=open\\]\\:animate-accordion-down[data-state="open"] {
  animation: accordion-down 0.2s ease-out;
}

.data-\\[panel-group-direction\\=vertical\\]\\:flex-col[data-panel-group-direction="vertical"] {
  flex-direction: column;
}

.data-\\[disabled\\=true\\]\\:opacity-50[data-disabled="true"] {
  opacity: 0.5;
}

.data-\\[disabled\\]\\:opacity-50[data-disabled] {
  opacity: 0.5;
}

.data-\\[state\\=active\\]\\:shadow[data-state="active"] {
  --tw-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.1), 0 1px 2px -1px rgb(0 0 0 / 0.1);
  --tw-shadow-colored: 0 1px 3px 0 var(--tw-shadow-color), 0 1px 2px -1px var(--tw-shadow-color);
  box-shadow: var(--tw-ring-offset-shadow, 0 0 #0000), var(--tw-ring-shadow, 0 0 #0000), var(--tw-shadow);
}

.data-\\[swipe\\=move\\]\\:transition-none[data-swipe="move"] {
  transition-property: none;
}

.data-\\[state\\=closed\\]\\:duration-300[data-state="closed"] {
  transition-duration: 300ms;
}

.data-\\[state\\=open\\]\\:duration-500[data-state="open"] {
  transition-duration: 500ms;
}

.data-\\[motion\\^\\=from-\\]\\:animate-in[data-motion^="from-"] {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}

.data-\\[state\\=open\\]\\:animate-in[data-state="open"] {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}

.data-\\[state\\=visible\\]\\:animate-in[data-state="visible"] {
  animation-name: enter;
  animation-duration: 150ms;
  --tw-enter-opacity: initial;
  --tw-enter-scale: initial;
  --tw-enter-rotate: initial;
  --tw-enter-translate-x: initial;
  --tw-enter-translate-y: initial;
}

.data-\\[motion\\^\\=to-\\]\\:animate-out[data-motion^="to-"] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}

.data-\\[state\\=closed\\]\\:animate-out[data-state="closed"] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}

.data-\\[state\\=hidden\\]\\:animate-out[data-state="hidden"] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}

.data-\\[swipe\\=end\\]\\:animate-out[data-swipe="end"] {
  animation-name: exit;
  animation-duration: 150ms;
  --tw-exit-opacity: initial;
  --tw-exit-scale: initial;
  --tw-exit-rotate: initial;
  --tw-exit-translate-x: initial;
  --tw-exit-translate-y: initial;
}

.data-\\[motion\\^\\=from-\\]\\:fade-in[data-motion^="from-"] {
  --tw-enter-opacity: 0;
}

.data-\\[motion\\^\\=to-\\]\\:fade-out[data-motion^="to-"] {
  --tw-exit-opacity: 0;
}

.data-\\[state\\=closed\\]\\:fade-out-0[data-state="closed"] {
  --tw-exit-opacity: 0;
}

.data-\\[state\\=closed\\]\\:fade-out-80[data-state="closed"] {
  --tw-exit-opacity: 0.8;
}

.data-\\[state\\=hidden\\]\\:fade-out[data-state="hidden"] {
  --tw-exit-opacity: 0;
}

.data-\\[state\\=open\\]\\:fade-in-0[data-state="open"] {
  --tw-enter-opacity: 0;
}

.data-\\[state\\=visible\\]\\:fade-in[data-state="visible"] {
  --tw-enter-opacity: 0;
}

.data-\\[state\\=closed\\]\\:zoom-out-95[data-state="closed"] {
  --tw-exit-scale: .95;
}

.data-\\[state\\=open\\]\\:zoom-in-90[data-state="open"] {
  --tw-enter-scale: .9;
}

.data-\\[state\\=open\\]\\:zoom-in-95[data-state="open"] {
  --tw-enter-scale: .95;
}

.data-\\[motion\\=from-end\\]\\:slide-in-from-right-52[data-motion="from-end"] {
  --tw-enter-translate-x: 13rem;
}

.data-\\[motion\\=from-start\\]\\:slide-in-from-left-52[data-motion="from-start"] {
  --tw-enter-translate-x: -13rem;
}

.data-\\[motion\\=to-end\\]\\:slide-out-to-right-52[data-motion="to-end"] {
  --tw-exit-translate-x: 13rem;
}

.data-\\[motion\\=to-start\\]\\:slide-out-to-left-52[data-motion="to-start"] {
  --tw-exit-translate-x: -13rem;
}

.data-\\[side\\=bottom\\]\\:slide-in-from-top-2[data-side="bottom"] {
  --tw-enter-translate-y: -0.5rem;
}

.data-\\[side\\=left\\]\\:slide-in-from-right-2[data-side="left"] {
  --tw-enter-translate-x: 0.5rem;
}

.data-\\[side\\=right\\]\\:slide-in-from-left-2[data-side="right"] {
  --tw-enter-translate-x: -0.5rem;
}

.data-\\[side\\=top\\]\\:slide-in-from-bottom-2[data-side="top"] {
  --tw-enter-translate-y: 0.5rem;
}

.data-\\[state\\=closed\\]\\:slide-out-to-bottom[data-state="closed"] {
  --tw-exit-translate-y: 100%;
}

.data-\\[state\\=closed\\]\\:slide-out-to-left[data-state="closed"] {
  --tw-exit-translate-x: -100%;
}

.data-\\[state\\=closed\\]\\:slide-out-to-left-1\\/2[data-state="closed"] {
  --tw-exit-translate-x: -50%;
}

.data-\\[state\\=closed\\]\\:slide-out-to-right[data-state="closed"] {
  --tw-exit-translate-x: 100%;
}

.data-\\[state\\=closed\\]\\:slide-out-to-right-full[data-state="closed"] {
  --tw-exit-translate-x: 100%;
}

.data-\\[state\\=closed\\]\\:slide-out-to-top[data-state="closed"] {
  --tw-exit-translate-y: -100%;
}

.data-\\[state\\=closed\\]\\:slide-out-to-top-\\[48\\%\\][data-state="closed"] {
  --tw-exit-translate-y: -48%;
}

.data-\\[state\\=open\\]\\:slide-in-from-bottom[data-state="open"] {
  --tw-enter-translate-y: 100%;
}

.data-\\[state\\=open\\]\\:slide-in-from-left[data-state="open"] {
  --tw-enter-translate-x: -100%;
}

.data-\\[state\\=open\\]\\:slide-in-from-left-1\\/2[data-state="open"] {
  --tw-enter-translate-x: -50%;
}

.data-\\[state\\=open\\]\\:slide-in-from-right[data-state="open"] {
  --tw-enter-translate-x: 100%;
}

.data-\\[state\\=open\\]\\:slide-in-from-top[data-state="open"] {
  --tw-enter-translate-y: -100%;
}

.data-\\[state\\=open\\]\\:slide-in-from-top-\\[48\\%\\][data-state="open"] {
  --tw-enter-translate-y: -48%;
}

.data-\\[state\\=open\\]\\:slide-in-from-top-full[data-state="open"] {
  --tw-enter-translate-y: -100%;
}

.data-\\[state\\=closed\\]\\:duration-300[data-state="closed"] {
  animation-duration: 300ms;
}

.data-\\[state\\=open\\]\\:duration-500[data-state="open"] {
  animation-duration: 500ms;
}

.data-\\[panel-group-direction\\=vertical\\]\\:after\\:left-0[data-panel-group-direction="vertical"]::after {
  content: var(--tw-content);
  left: 0px;
}

.data-\\[panel-group-direction\\=vertical\\]\\:after\\:h-1[data-panel-group-direction="vertical"]::after {
  content: var(--tw-content);
  height: 0.25rem;
}

.data-\\[panel-group-direction\\=vertical\\]\\:after\\:w-full[data-panel-group-direction="vertical"]::after {
  content: var(--tw-content);
  width: 100%;
}

.data-\\[panel-group-direction\\=vertical\\]\\:after\\:-translate-y-1\\/2[data-panel-group-direction="vertical"]::after {
  content: var(--tw-content);
  --tw-translate-y: -50%;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.data-\\[panel-group-direction\\=vertical\\]\\:after\\:translate-x-0[data-panel-group-direction="vertical"]::after {
  content: var(--tw-content);
  --tw-translate-x: 0px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.group[data-state="open"] .group-data-\\[state\\=open\\]\\:rotate-180 {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

@media (min-width: 640px) {

  .sm\\:inset-5 {
    inset: 1.25rem;
  }

  .sm\\:inset-8 {
    inset: 2rem;
  }

  .sm\\:bottom-0 {
    bottom: 0px;
  }

  .sm\\:right-0 {
    right: 0px;
  }

  .sm\\:top-auto {
    top: auto;
  }

  .sm\\:mt-0 {
    margin-top: 0px;
  }

  .sm\\:max-w-sm {
    max-width: 24rem;
  }

  .sm\\:grid-cols-2 {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }

  .sm\\:flex-row {
    flex-direction: row;
  }

  .sm\\:flex-col {
    flex-direction: column;
  }

  .sm\\:justify-end {
    justify-content: flex-end;
  }

  .sm\\:gap-2\\.5 {
    gap: 0.625rem;
  }

  .sm\\:space-x-2 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(0.5rem * var(--tw-space-x-reverse));
    margin-left: calc(0.5rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\\:space-x-4 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-x-reverse: 0;
    margin-right: calc(1rem * var(--tw-space-x-reverse));
    margin-left: calc(1rem * calc(1 - var(--tw-space-x-reverse)));
  }

  .sm\\:space-y-0 > :not([hidden]) ~ :not([hidden]) {
    --tw-space-y-reverse: 0;
    margin-top: calc(0px * calc(1 - var(--tw-space-y-reverse)));
    margin-bottom: calc(0px * var(--tw-space-y-reverse));
  }

  .sm\\:rounded-lg {
    border-radius: 0.5rem;
  }

  .sm\\:text-left {
    text-align: left;
  }

  .sm\\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .sm\\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .sm\\:text-5xl {
    font-size: 3rem;
    line-height: 1;
  }

  .data-\\[state\\=open\\]\\:sm\\:slide-in-from-bottom-full[data-state="open"] {
    --tw-enter-translate-y: 100%;
  }
}

@media (min-width: 768px) {

  .md\\:absolute {
    position: absolute;
  }

  .md\\:mt-12 {
    margin-top: 3rem;
  }

  .md\\:h-48 {
    height: 12rem;
  }

  .md\\:w-24 {
    width: 6rem;
  }

  .md\\:w-48 {
    width: 12rem;
  }

  .md\\:w-\\[var\\(--radix-navigation-menu-viewport-width\\)\\] {
    width: var(--radix-navigation-menu-viewport-width);
  }

  .md\\:w-auto {
    width: auto;
  }

  .md\\:max-w-\\[420px\\] {
    max-width: 420px;
  }

  .md\\:gap-8 {
    gap: 2rem;
  }

  .md\\:p-10 {
    padding: 2.5rem;
  }

  .md\\:px-14 {
    padding-left: 3.5rem;
    padding-right: 3.5rem;
  }

  .md\\:py-14 {
    padding-top: 3.5rem;
    padding-bottom: 3.5rem;
  }

  .md\\:py-24 {
    padding-top: 6rem;
    padding-bottom: 6rem;
  }

  .md\\:py-28 {
    padding-top: 7rem;
    padding-bottom: 7rem;
  }

  .md\\:text-2xl {
    font-size: 1.5rem;
    line-height: 2rem;
  }

  .md\\:text-3xl {
    font-size: 1.875rem;
    line-height: 2.25rem;
  }

  .md\\:text-4xl {
    font-size: 2.25rem;
    line-height: 2.5rem;
  }

  .md\\:text-5xl {
    font-size: 3rem;
    line-height: 1;
  }

  .md\\:text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }

  .md\\:text-\\[1\\.05rem\\] {
    font-size: 1.05rem;
  }

  .md\\:text-\\[1\\.7rem\\] {
    font-size: 1.7rem;
  }

  .md\\:text-base {
    font-size: 1rem;
    line-height: 1.5rem;
  }

  .md\\:text-lg {
    font-size: 1.125rem;
    line-height: 1.75rem;
  }

  .md\\:text-sm {
    font-size: 0.875rem;
    line-height: 1.25rem;
  }

  .md\\:text-xl {
    font-size: 1.25rem;
    line-height: 1.75rem;
  }

  .md\\:text-xs {
    font-size: 0.75rem;
    line-height: 1rem;
  }
}

@media (min-width: 1024px) {

  .lg\\:col-start-2 {
    grid-column-start: 2;
  }

  .lg\\:grid-cols-3 {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }

  .lg\\:text-6xl {
    font-size: 3.75rem;
    line-height: 1;
  }

  .lg\\:text-\\[2\\.6rem\\] {
    font-size: 2.6rem;
  }
}

.\\[\\&\\+div\\]\\:text-xs+div {
  font-size: 0.75rem;
  line-height: 1rem;
}

.\\[\\&\\:has\\(\\>\\.day-range-end\\)\\]\\:rounded-r-md:has(>.day-range-end) {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}

.\\[\\&\\:has\\(\\>\\.day-range-start\\)\\]\\:rounded-l-md:has(>.day-range-start) {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}

.\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:rounded-md:has([aria-selected]) {
  border-radius: 0.375rem;
}

.first\\:\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:rounded-l-md:has([aria-selected]):first-child {
  border-top-left-radius: 0.375rem;
  border-bottom-left-radius: 0.375rem;
}

.last\\:\\[\\&\\:has\\(\\[aria-selected\\]\\)\\]\\:rounded-r-md:has([aria-selected]):last-child {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}

.\\[\\&\\:has\\(\\[aria-selected\\]\\.day-range-end\\)\\]\\:rounded-r-md:has([aria-selected].day-range-end) {
  border-top-right-radius: 0.375rem;
  border-bottom-right-radius: 0.375rem;
}

.\\[\\&\\:has\\(\\[role\\=checkbox\\]\\)\\]\\:pr-0:has([role=checkbox]) {
  padding-right: 0px;
}

.\\[\\&\\>\\[role\\=checkbox\\]\\]\\:translate-y-\\[2px\\]>[role=checkbox] {
  --tw-translate-y: 2px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.\\[\\&\\>span\\]\\:line-clamp-1>span {
  overflow: hidden;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 1;
}

.\\[\\&\\>svg\\+div\\]\\:translate-y-\\[-3px\\]>svg+div {
  --tw-translate-y: -3px;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.\\[\\&\\>svg\\]\\:absolute>svg {
  position: absolute;
}

.\\[\\&\\>svg\\]\\:left-4>svg {
  left: 1rem;
}

.\\[\\&\\>svg\\]\\:top-4>svg {
  top: 1rem;
}

.\\[\\&\\>svg\\]\\:size-4>svg {
  width: 1rem;
  height: 1rem;
}

.\\[\\&\\>svg\\]\\:h-3\\.5>svg {
  height: 0.875rem;
}

.\\[\\&\\>svg\\]\\:w-3\\.5>svg {
  width: 0.875rem;
}

.\\[\\&\\>svg\\]\\:shrink-0>svg {
  flex-shrink: 0;
}

.\\[\\&\\>svg\\~\\*\\]\\:pl-7>svg~* {
  padding-left: 1.75rem;
}

.\\[\\&\\>tr\\]\\:last\\:border-b-0:last-child>tr {
  border-bottom-width: 0px;
}

.\\[\\&\\[data-panel-group-direction\\=vertical\\]\\>div\\]\\:rotate-90[data-panel-group-direction=vertical]>div {
  --tw-rotate: 90deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.\\[\\&\\[data-state\\=open\\]\\>svg\\]\\:rotate-180[data-state=open]>svg {
  --tw-rotate: 180deg;
  transform: translate(var(--tw-translate-x), var(--tw-translate-y)) rotate(var(--tw-rotate)) skewX(var(--tw-skew-x)) skewY(var(--tw-skew-y)) scaleX(var(--tw-scale-x)) scaleY(var(--tw-scale-y));
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:px-2 [cmdk-group-heading] {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:py-1\\.5 [cmdk-group-heading] {
  padding-top: 0.375rem;
  padding-bottom: 0.375rem;
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:text-xs [cmdk-group-heading] {
  font-size: 0.75rem;
  line-height: 1rem;
}

.\\[\\&_\\[cmdk-group-heading\\]\\]\\:font-medium [cmdk-group-heading] {
  font-weight: 500;
}

.\\[\\&_\\[cmdk-group\\]\\:not\\(\\[hidden\\]\\)_\\~\\[cmdk-group\\]\\]\\:pt-0 [cmdk-group]:not([hidden]) ~[cmdk-group] {
  padding-top: 0px;
}

.\\[\\&_\\[cmdk-group\\]\\]\\:px-2 [cmdk-group] {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:h-5 [cmdk-input-wrapper] svg {
  height: 1.25rem;
}

.\\[\\&_\\[cmdk-input-wrapper\\]_svg\\]\\:w-5 [cmdk-input-wrapper] svg {
  width: 1.25rem;
}

.\\[\\&_\\[cmdk-input\\]\\]\\:h-12 [cmdk-input] {
  height: 3rem;
}

.\\[\\&_\\[cmdk-item\\]\\]\\:px-2 [cmdk-item] {
  padding-left: 0.5rem;
  padding-right: 0.5rem;
}

.\\[\\&_\\[cmdk-item\\]\\]\\:py-3 [cmdk-item] {
  padding-top: 0.75rem;
  padding-bottom: 0.75rem;
}

.\\[\\&_\\[cmdk-item\\]_svg\\]\\:h-5 [cmdk-item] svg {
  height: 1.25rem;
}

.\\[\\&_\\[cmdk-item\\]_svg\\]\\:w-5 [cmdk-item] svg {
  width: 1.25rem;
}

.\\[\\&_p\\]\\:leading-relaxed p {
  line-height: 1.625;
}

.\\[\\&_svg\\]\\:pointer-events-none svg {
  pointer-events: none;
}

.\\[\\&_svg\\]\\:size-4 svg {
  width: 1rem;
  height: 1rem;
}

.\\[\\&_svg\\]\\:shrink-0 svg {
  flex-shrink: 0;
}

.\\[\\&_tr\\:last-child\\]\\:border-0 tr:last-child {
  border-width: 0px;
}

.\\[\\&_tr\\]\\:border-b tr {
  border-bottom-width: 1px;
}
`, "",{"version":3,"sources":["webpack://./src/index.css"],"names":[],"mappings":"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AmB;AAAnB;EAAA,QAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,qBAAmB;EAAnB;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB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AA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,iBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,eAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,mBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA,kBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA,oBAAmB;EAAnB;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAAnB;EAAA;AAAmB;AAA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","sourcesContent":["@tailwind base;\n@tailwind components;\n@tailwind utilities;\n\n:root {\n    color-scheme: dark;\n}\n\nhtml {\n    background: #100d0a;\n}\n\nbody {\n    margin: 0;\n    background: #100d0a;\n    color: #f5e6c8;\n    font-family: \"Cormorant Garamond\", \"Noto Serif Gujarati\", \"Noto Sans Gujarati\", serif;\n    -webkit-font-smoothing: antialiased;\n    -moz-osx-font-smoothing: grayscale;\n    overflow-x: clip;\n}\n\n::selection {\n    background: #c99a45;\n    color: #100d0a;\n}\n\n::-webkit-scrollbar {\n    width: 10px;\n}\n::-webkit-scrollbar-track {\n    background: #100d0a;\n}\n::-webkit-scrollbar-thumb {\n    background: #3a2c17;\n    border-radius: 8px;\n    border: 2px solid #100d0a;\n}\n::-webkit-scrollbar-thumb:hover {\n    background: #c99a45;\n}\n\nbody::after {\n    content: \"\";\n    position: fixed;\n    inset: 0;\n    z-index: 70;\n    pointer-events: none;\n    opacity: 0.045;\n    background-image: url(\"data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='160' height='160'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='2'/%3E%3C/filter%3E%3Crect width='160' height='160' filter='url(%23n)' opacity='0.6'/%3E%3C/svg%3E\");\n}\n\n/* Metallic gold type */\n.text-gold {\n    background: linear-gradient(\n        100deg,\n        #7a5a26 0%,\n        #c99a45 22%,\n        #f7eacb 50%,\n        #c99a45 78%,\n        #7a5a26 100%\n    );\n    background-size: 220% auto;\n    -webkit-background-clip: text;\n    background-clip: text;\n    color: transparent;\n    animation: gold-shine 9s linear infinite;\n}\n@keyframes gold-shine {\n    to {\n        background-position: 220% center;\n    }\n}\n\n.text-gold-static {\n    background: linear-gradient(\n        100deg,\n        #a87b2f 0%,\n        #d9ab52 25%,\n        #f7eacb 50%,\n        #d9ab52 75%,\n        #a87b2f 100%\n    );\n    -webkit-background-clip: text;\n    background-clip: text;\n    color: transparent;\n}\n\n.gold-hairline {\n    border: 1px solid rgba(201, 154, 69, 0.32);\n}\n.gold-glow {\n    box-shadow:\n        0 0 46px -10px rgba(201, 154, 69, 0.45),\n        inset 0 0 26px -14px rgba(201, 154, 69, 0.4);\n}\n\n.vignette {\n    background: radial-gradient(\n        ellipse at center,\n        transparent 52%,\n        rgba(16, 13, 10, 0.88) 100%\n    );\n}\n\n.wood-door {\n    background:\n        repeating-linear-gradient(\n            90deg,\n            rgba(0, 0, 0, 0.22) 0 2px,\n            transparent 2px 88px\n        ),\n        linear-gradient(100deg, #2b1d10 0%, #1c1209 55%, #251a11 100%);\n}\n\n.petal {\n    position: absolute;\n    top: -6vh;\n    border-radius: 70% 70% 70% 70% / 85% 85% 60% 60%;\n    background: linear-gradient(160deg, #e8891c, #c99a45);\n    will-change: transform;\n}\n\n@keyframes flicker {\n    0%,\n    100% {\n        transform: scaleY(1);\n    }\n    25% {\n        transform: scaleY(1.14) translateY(-1px);\n    }\n    50% {\n        transform: scaleY(0.92);\n    }\n    75% {\n        transform: scaleY(1.07);\n    }\n}\n.flame-anim {\n    animation: flicker 1.5s ease-in-out infinite;\n    transform-origin: bottom center;\n}\n\n@keyframes marquee {\n    from {\n        transform: translateX(0);\n    }\n    to {\n        transform: translateX(-50%);\n    }\n}\n.animate-marquee {\n    animation: marquee 48s linear infinite;\n}\n\n@keyframes eq {\n    0%,\n    100% {\n        transform: scaleY(0.3);\n    }\n    50% {\n        transform: scaleY(1);\n    }\n}\n.eq-bar {\n    transform-origin: bottom;\n    animation: eq 0.9s ease-in-out infinite;\n}\n\n@keyframes spin-slow {\n    to {\n        transform: rotate(360deg);\n    }\n}\n.rays-spin {\n    animation: spin-slow 90s linear infinite;\n}\n\n.rays {\n    background: repeating-conic-gradient(\n        from 0deg at 50% 50%,\n        rgba(217, 164, 65, 0.12) 0deg 3deg,\n        transparent 3deg 16deg\n    );\n    -webkit-mask-image: radial-gradient(\n        ellipse at 50% 100%,\n        black 0%,\n        transparent 62%\n    );\n    mask-image: radial-gradient(\n        ellipse at 50% 100%,\n        black 0%,\n        transparent 62%\n    );\n}\n\n@media (prefers-reduced-motion: reduce) {\n    .flame-anim,\n    .animate-marquee,\n    .text-gold,\n    .eq-bar,\n    .rays-spin {\n        animation: none !important;\n    }\n}\n"],"sourceRoot":""}]);
// Exports
___CSS_LOADER_EXPORT___.locals = {};
export default ___CSS_LOADER_EXPORT___;
