const Attributes = `
| Name                                | Description                                                                                                                              | Type                               | Accepted Values                                                                                           | Default       |
| ----------------------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | ---------------------------------- | --------------------------------------------------------------------------------------------------------- | ------------- |
| model-value / v-model               | biding value                                                                                                                             | string / number / boolean / object | —                                                                                                         | —             |
| multiple                            | is multiple                                                                                                                              | boolean                            | —                                                                                                         | false         |
| disabled                            | is disabled                                                                                                                              | boolean                            | —                                                                                                         | false         |
| value-key                           | unique identity key name for value, required when value is an object                                                                     | string                             | —                                                                                                         | value         |
| size                                | input box size                                                                                                                           | string                             | large/default/small                                                                                       | default       |
| clearable                           | whether select can be cleared                                                                                                            | boolean                            | —                                                                                                         | false         |
| clear-icon                          | custom clear icon                                                                                                                        | \`string | Component\`              | —                                                                                                         | CircleClose   |
| collapse-tags                       | whether to collapse tags to a text when multiple selecting                                                                               | boolean                            | —                                                                                                         | false         |
| multiple-limit                      | maximum number of options user can select when multiple is true. No limit when set to 0                                                  | number                             | —                                                                                                         | 0             |
| name                                | the name attribute of select input                                                                                                       | string                             | —                                                                                                         | —             |
| effect                              | Tooltip theme, built-in theme: \`dark\` / \`light\`                                                                                          | string                             | string                                                                                                    | light         |
| autocomplete                        | autocomplete of select input                                                                                                             | string                             | —                                                                                                         | off           |
| placeholder                         | the autocomplete attribute of select input                                                                                               | string                             | —                                                                                                         | Please select |
| filterable                          | is filterable                                                                                                                            | boolean                            | —                                                                                                         | false         |
| allow-create                        | whether creating new items is allowed. To use this, \`filterable\` must be true                                                            | boolean                            | —                                                                                                         | false         |
| reserve-keyword                     | whether reserve the keyword after select filtered option.                                                                                | boolean                            | —                                                                                                         | true          |
| no-data-text                        | displayed text when there is no options, you can also use slot empty                                                                     | string                             | —                                                                                                         | No Data       |
| popper-class                        | custom class name for Select's dropdown                                                                                                  | string                             | —                                                                                                         | —             |
| popper-append-to-body ^(deprecated) | whether to append the popper menu to body. If the positioning of the popper is wrong, you can try to set this prop to false              | boolean                            | -                                                                                                         | false         |
| teleported                          | whether select dropdown is teleported to the body                                                                                        | boolean                            | true / false                                                                                              | true          |
| persistent                          | when select dropdown is inactive and \`persistent\` is \`false\`, select dropdown will be destroyed                                          | boolean                            | true / false                                                                                              | true          |
| popper-options                      | Customized popper option see more at [popper.js](https://popper.js.org/docs/v2/)                                                         | object                             | -                                                                                                         | -             |
| automatic-dropdown                  | for non-filterable Select, this prop decides if the option menu pops up when the input is focused                                        | boolean                            | -                                                                                                         | false         |
| height                              | The height of the dropdown panel, 34px for each item                                                                                     | number                             | -                                                                                                         | 170           |
| scrollbar-always-on                 | Controls whether the scrollbar is always displayed                                                                                       | boolean                            | -                                                                                                         | false         |
| remote                              | whether search data from server                                                                                                          | boolean                            | —                                                                                                         | false         |
| remote-method                       | function that gets called when the input value changes. Its parameter is the current input value. To use this, \`filterable\` must be true | function(keyword: string)          | —                                                                                                         | —             |
| validate-event                      | whether to trigger form validation                                                                                                       | boolean                            | -                                                                                                         | true          |
| placement                           | position of dropdown                                                                                                                     | string                             | top/top-start/top-end/bottom/bottom-start/bottom-end/left/left-start/left-end/right/right-start/right-end | bottom-start  |
| collapse-tags-tooltip ^(2.3.0)      | whether show all selected tags when mouse hover text of collapse-tags. To use this, \`collapse-tags\` must be true                         | boolean                            | true / false                                                                                              | false         |
 `;

const Events = `
| Name           | Description                                                   | Params                                    |
| -------------- | ------------------------------------------------------------- | ----------------------------------------- |
| change         | triggers when the selected value changes                      | current selected value                    |
| visible-change | triggers when the dropdown appears/disappears                 | true when it appears, and false otherwise |
| remove-tag     | triggers when a tag is removed in multiple mode               | removed tag value                         |
| clear          | triggers when the clear icon is clicked in a clearable Select | —                                         |
| blur           | triggers when Input blurs                                     | (event: FocusEvent)                       |
| focus          | triggers when Input focuses                                   | (event: FocusEvent)                       |
`;

const Slots = `
| Name    | Description                   |
| ------- | ----------------------------- |
| default | Option renderer               |
| empty   | content when options is empty |
| prefix  | prefix content of input       |
`;
export default {
  attributes: Attributes,
  events: Events,
  slots: Slots,
};