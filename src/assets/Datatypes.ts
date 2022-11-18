// eslint-disable-next-line
type Organisation = {
    name: string,
    website: string,
    logo: string,
    topics: string[],
    approach: string[],
    diversity: string[]
}

// eslint-disable-next-line
type Category = {
    id: string,
    title: string,
    selected: string[],
    values: SelectOption[]
}

// eslint-disable-next-line
type SelectOption = {
    label: string,
    value: string
}

// eslint-disable-next-line
type Filter = {
    topics: string[],
    approach: string[],
    diversity: string[]
}

