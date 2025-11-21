// Import the compiled CSS variables from the design tokens package. This file
// ensures that the token definitions are available in any module that
// depends on the design system. Import this module once near the root of
// your application to load the token variables.

import '@lyfeguard/tokens/dist/css/tokens.css';

// There are no exports from this file. The side effect of importing the
// CSS file registers the custom properties on the :root element.