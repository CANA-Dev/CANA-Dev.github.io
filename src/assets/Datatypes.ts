/**
 * This is merely a Helper Class to allow people to more easily understand the Structure of some of the Objects used
 * in the Codebase, it isn't actually used, as the code is in JavaScript, not TypeScript, but might be useful if you
 * want to better understand things.
 */

// Structure of an Organisation Object _(deviating from this will break the code)_.
// eslint-disable-next-line
type Organisation = {
    name: string,
    website: string,
    logo: string,
    topics: string[],
    approach: string[],
    diversity: string[]
}

// Structure of a Filter Category Object _(deviating from this will break the code)_.
// eslint-disable-next-line
type Category = {
    id: string,
    title: string,
    selected: string[],
    values: SelectOption[]
}

// Structure of a Category Option Object _(deviating from this will break the code)_.
// eslint-disable-next-line
type SelectOption = {
    label: string,
    value: string
}

// Structure of a complete Search Filter Object _(deviating from this will break the code)_.
// eslint-disable-next-line
type Filter = {
    topics: string[],
    approach: string[],
    diversity: string[]
}
