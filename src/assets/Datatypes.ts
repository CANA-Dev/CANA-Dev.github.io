// eslint-disable-next-line
type Organisation = {
    name: string,
    website: string,
    logo: string,
    catOne: string[],
    catTwo: string[],
    catThree: string[]
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

