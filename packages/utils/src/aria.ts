/**
 * Accessibility helper functions.
 *
 * This module contains utilities that help generate unique IDs and build
 * ARIA attributes.  These helpers are framework-agnostic and can be
 * consumed in any project.  As your design system evolves, you can add
 * more helpers here to support ARIA roles, properties and other
 * accessibility patterns.
 */

import type React from 'react';

// Maintain an internal counter for generating unique IDs.  This is scoped
// to the module so values persist across calls during a single session.
let idCounter = 0;

/**
 * Generates a unique ID string with an optional prefix.
 *
 * Each invocation increments an internal counter to ensure uniqueness.
 * Use this function to associate labels with form elements or to
 * reference elements in ARIA attributes.  Avoid using in SSR contexts
 * where deterministic IDs are required; in those cases, pass a seed
 * based on your data.
 *
 * @param prefix A string to prefix the generated ID with. Defaults to
 *               `'id'` if omitted.
 * @returns A unique ID string in the format `<prefix>-<number>`.
 */
export function generateId(prefix: string = 'id'): string {
  idCounter += 1;
  return `${prefix}-${idCounter}`;
}

/**
 * Merges multiple React refs into a single callback ref.
 *
 * This helper allows a component to accept multiple refs (e.g. a
 * forwarded ref from a parent and an internal ref) and assign the same
 * DOM element to all of them.  It supports both callback refs and
 * ref objects.  If no refs are provided, it returns null.
 *
 * @param refs A list of React refs to merge. Each may be a function
 *             ref, an object with a `current` property, or null/undefined.
 * @returns A callback ref that assigns a value to all provided refs.
 */
export function mergeRefs<T>(
  ...refs: Array<React.Ref<T> | undefined>
): ((instance: T | null) => void) | null {
  return (instance: T | null) => {
    refs.forEach((ref) => {
      if (!ref) return;
      if (typeof ref === 'function') {
        ref(instance);
      } else {
        // @ts-ignore: We know this is a mutable ref object
        (ref as any).current = instance;
      }
    });
  };
}

// Future helpers may include functions such as `mergeRefs`, ARIA role
// builders or other accessibility utilities.  Export them here to make
// them available to consumers of the util package.