// Filter Category based on the Topics the Orgs work on.
export const Topics = {
  id: "topics", title: "Work Topics", selected: [], values: [ {
    value: "Coal", label: "Coal",
  }, {
    value: "Culturally and diverse community rights", label: "Culturally and diverse community rights",
  }, {
    value: "Energy", label: "Energy",
  }, {
    value: "Faith", label: "Faith",
  }, {
    value: "First Nations", label: "First Nations",
  }, {
    value: "Gas", label: "Gas",
  }, {
    value: "Health", label: "Health",
  }, {
    value: "Human Rights", label: "Human Rights",
  }, {
    value: "Health", label: "Health",
  }, {
    value: "Legal", label: "Legal",
  }, {
    value: "Protecting nature", label: "Protecting nature",
  }, {
    value: "Transport", label: "Transport",
  }, {
    value: "Union", label: "Union",
  }, {
    value: "Youth", label: "Youth",
  }, {
    value: "Other", label: "Other",
  } ]
}

// Filter Category based on the Work Approach of the Orgs.
export const Approach = {
  id: "approach", title: "Work Approach", selected: [], values: [ {
    value: "Build international pressure", label: "Build international pressure",
  }, {
    value: "Build people power", label: "Build people power",
  }, {
    value: "Change the story", label: "Change the story",
  }, {
    value: "Deliver climate justice", label: "Deliver climate justice",
  }, {
    value: "Legal", label: "Legal",
  }, {
    value: "Move the money", label: "Move the money",
  }, {
    value: "Philanthropy", label: "Philanthropy",
  }, {
    value: "Research", label: "Research",
  }, {
    value: "Shift politics", label: "Shift politics",
  }, {
    value: "Other", label: "Other",
  } ]
}

// Filter Category based on the Diversity of an Orgs Leadership.
export const Diversity = {
  id: "diversity", title: "Org Diversity", selected: [], values: [ {
    value: "Aboriginal and Torres Strait Islander led", label: "Aboriginal and Torres Strait Islander led",
  }, {
    value: "Led by people from CALD communities", label: "Led by people from CALD communities",
  }, {
    value: "Led by people of color", label: "Led by people of color",
  }, {
    value: "Led by people with disabilities", label: "Led by people with disabilities",
  }, {
    value: "Youth led (under 35)", label: "Youth led (under 35)",
  } ]
}

// Combine all Categories and export them.
const Categories = [ Topics, Approach, Diversity ];
export default Categories;
