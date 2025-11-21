// Re-export the accessibility helpers from the utils package.  This local
// wrapper makes it easier to import ARIA helpers from the design system
// component library without referencing the underlying utils package.

export { generateId, mergeRefs } from '@lyfeguard/utils';