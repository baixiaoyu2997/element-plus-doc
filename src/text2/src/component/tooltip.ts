const Attributes = `
| Name                      | Description                                                                                                                                             | Type                                                                                                                                                                        | Default           |
| ------------------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| append-to                 | which element the tooltip CONTENT appends to                                                                                                            | ^[CSSSelector] / ^[HTMLElement]                                                                                                                                             | —                 |
| effect                    | Tooltip theme, built-in theme: \`dark\` / \`light\`                                                                                                         | ^[enum]\`'dark' | 'light'\`                                                                                                                                                  | dark              |
| content                   | display content, can be overridden by \`slot#content\`                                                                                                    | ^[string]                                                                                                                                                                   | ''                |
| raw-content               | whether \`content\` is treated as HTML string                                                                                                             | ^[boolean]                                                                                                                                                                  | false             |
| placement                 | position of Tooltip                                                                                                                                     | ^[enum]\`'top' | 'top-start' | 'top-end' | 'bottom' | 'bottom-start' | 'bottom-end' | 'left' | 'left-start' | 'left-end' | 'right' | 'right-start' | 'right-end'\` | bottom            |
| visible / v-model:visible | visibility of Tooltip                                                                                                                                   | ^[boolean]                                                                                                                                                                  | —                 |
| disabled                  | whether Tooltip is disabled                                                                                                                             | ^[boolean]                                                                                                                                                                  | —                 |
| offset                    | offset of the Tooltip                                                                                                                                   | ^[number]                                                                                                                                                                   | 12                |
| transition                | animation name                                                                                                                                          | ^[string]                                                                                                                                                                   | —                 |
| popper-options            | [popper.js](https://popper.js.org/docs/v2/) parameters                                                                                                  | ^[object]refer to [popper.js](https://popper.js.org/docs/v2/) doc                                                                                                           | {}                |
| show-after                | delay of appearance, in millisecond                                                                                                                     | ^[number]                                                                                                                                                                   | 0                 |
| show-arrow                | whether the tooltip content has an arrow                                                                                                                | ^[boolean]                                                                                                                                                                  | true              |
| hide-after                | delay of disappear, in millisecond                                                                                                                      | ^[number]                                                                                                                                                                   | 200               |
| auto-close                | timeout in milliseconds to hide tooltip                                                                                                                 | ^[number]                                                                                                                                                                   | 0                 |
| popper-class              | custom class name for Tooltip's popper                                                                                                                  | ^[string]                                                                                                                                                                   | —                 |
| enterable                 | whether the mouse can enter the tooltip                                                                                                                 | ^[boolean]                                                                                                                                                                  | true              |
| teleported                | whether tooltip content is teleported, if \`true\` it will be teleported to where \`append-to\` sets                                                        | ^[boolean]                                                                                                                                                                  | true              |
| trigger                   | How should the tooltip be triggered (to show)                                                                                                           | ^[enum]\`'hover' | 'click' | 'focus' | 'contextmenu'\`                                                                                                                     | hover             |
| virtual-triggering        | Indicates whether virtual triggering is enabled                                                                                                         | ^[boolean]                                                                                                                                                                  | —                 |
| virtual-ref               | Indicates the reference element to which the tooltip is attached                                                                                        | ^[HTMLElement]                                                                                                                                                              | —                 |
| trigger-keys              | When you click the mouse to focus on the trigger element, you can define a set of keyboard codes to control the display of tooltip through the keyboard | ^[Array]                                                                                                                                                                    | ['Enter','Space'] |
| persistent                | when tooltip inactive and \`persistent\` is \`false\` , popconfirm will be destroyed                                                                        | ^[boolean]                                                                                                                                                                  | —                 |
| aria-label^[a11y]         | same as \`aria-label\`                                                                                                                                    | ^[string]                                                                                                                                                                   | —                 |
`;
const Slots = `
| Name    | Description                            |
| ------- | -------------------------------------- |
| default | Tooltip triggering & reference element |
| content | customize content                      |
`;
const Exposes = `
| Name                 | Description                                                       | Type                                              |
| -------------------- | ----------------------------------------------------------------- | ------------------------------------------------- |
| popperRef            | el-popper component instance                                      | ^[objcet]\`Ref<PopperInstance | null>\`            |
| contentRef           | el-tooltip-content component instance                             | ^[objcet]\`Ref<TooltipContentInstance | null>\`    |
| isFocusInsideContent | validate current focus event is trigger inside el-tooltip-content | ^[Function]\`() => boolean | undefined\`           |
| updatePopper         | update el-popper component instance                               | ^[Function]\`() => void\`                           |
| onOpen               | expose onOpen function to mange el-tooltip open state             | ^[Function]\`(event?: Event | undefined) => void\` |
| onClose              | expose onOpen function to mange el-tooltip open state             | ^[Function]\`(event?: Event | undefined) => void\` |
| hide                 | expose hide function                                              | ^[Function]\`(event?: Event | undefined) => void\` |
`;
export default {
  attributes: Attributes,
  exposes: Exposes,
  slots: Slots,
};