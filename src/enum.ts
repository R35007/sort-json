export enum Commands {
  ascendingSort = 'sort-json.ascendingSort',
  descendingSort = 'sort-json.descendingSort',
  customSort = 'sort-json.customSort',
  setObjectSortType = 'sort-json.setObjectSortType',
  setListSortType = 'sort-json.setListSortType',
  setSortLevel = 'sort-json.setSortLevel',
  toggleCaseSensitive = 'sort-json.toggleCaseSensitive',
  setCaseSensitive = 'sort-json.setCaseSensitive',
  setCaseInSensitive = 'sort-json.setCaseInSensitive',
};

export enum SortModes {
  both = "Both",
  listsOnly = "Lists Only",
  objectsOnly = "Objects Only",
};

export enum ObjectsSortTypes {
  key = "Key",
  keyLength = "Key Length",
  value = "Value",
  valueLength = "Value Length",
  valueType = "Value Type",
}

export enum ListsSortTypes {
  value = "Value",
  valueLength = "Value Length",
  valueType = "Value Type",
}

export enum ValueTypeOrder {
  boolean = "Boolean",
  null = "Null",
  number = "Number",
  string = "String",
  array = "Array",
  plainObject = "PlainObject",
}


