'use strict';

/**
 * Keep track of seen characters with a Set data structure, fail when
 * a repeated character is found.
 *
 * Time: O(N)
 * Additional space: O(N)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
export function hasUniqueCharactersSet(str) {
    let chars = new Set();

    for (let i = 0; i < str.length; ++i) {
        if (chars.has(str[i])) {
            return false;
        }
        chars.add(str[i]);
    }
    return true;
}

/**
 * Sort the original string first then iterate through it. Repeat characters
 * will show up next to eachother so fail if any two characters in a row
 * are the same.
 *
 * Time: O(N lg N)
 * Additional space: O(1)
 *
 * @param  {string[]} str String to check, passed in as a character array
 * @return {boolean}      True if unique characters, otherwise false
 */
export function hasUniqueCharactersSort(str) {
    // sort string using quicksort
    str.sort();

    for (var i = 1; i < str.length; ++i) {
        if (str[i] === str[i - 1]) {
            return false;
        }
    }
    return true;
}

/**
 * Iterate through list keeping a Set of all the values seen. If a seen value is
 * seen again in the list then skip over it.
 *
 * N = |list|
 * Time: O(N) -> Assuming Set is a HashSet structure with O(1) access times
 * Additional space: O(N)
 */
export function removeDuplicatesSet(list) {
    if (!list) {
        return list;
    }

    let seen = new Set(),
        node = list;

    // add head
    seen.add(node.val);
    while (node.next) {
        if (seen.has(node.next.val)) {
            // skip next node
            node.next = node.next.next;
        }
        else {
            seen.add(node.next.val);
            node = node.next;
        }
    }

    return list; // return list, head will never change
}
