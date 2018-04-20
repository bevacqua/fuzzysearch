declare namespace fuzzysearch {

}

/**
 * The method will return true only if each character in the needle can be found in the haystack and occurs after the preceding matches.
 * @param needle {string} the search value you're looking for
 * @param haystack {string} find one or more occurrences of the "needle" within the "haystack"
 * @example fuzzysearch('twl', 'cartwheel') // <- true
 * @returns {boolean} `true` if needle matches haystack using a fuzzy-searching algorithm
 */
declare function fuzzysearch(needle: string, haystack: string): boolean;

export = fuzzysearch;
