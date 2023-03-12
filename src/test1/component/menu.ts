const Attributes = `
| Name                | Description                                                                                                                                                           | Type    | Accepted Values       | Default  |
| ------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------- | ------- | --------------------- | -------- |
| mode                | menu display mode                                                                                                                                                     | string  | horizontal / vertical | vertical |
| collapse            | whether the menu is collapsed (available only in vertical mode)                                                                                                       | boolean | —                     | false    |
| ellipsis            | whether the menu is ellipsis (available only in horizontal mode)                                                                                                      | boolean | —                     | true     |
| background-color    | background color of Menu (hex format) (deprecated, use \`--bg-color\` instead)                                                                                          | string  | —                     | #ffffff  |
| text-color          | text color of Menu (hex format) (deprecated, use \`--text-color\` instead)                                                                                              | string  | —                     | #303133  |
| active-text-color   | text color of currently active menu item (hex format) (deprecated, use \`--active-color\` instead)                                                                      | string  | —                     | #409EFF  |
| default-active      | index of active menu on page load                                                                                                                                     | string  | —                     | —        |
| default-openeds     | array that contains indexes of currently active sub-menus                                                                                                             | Array   | —                     | —        |
| unique-opened       | whether only one sub-menu can be active                                                                                                                               | boolean | —                     | false    |
| menu-trigger        | how sub-menus are triggered, only works when \`mode\` is 'horizontal'                                                                                                   | string  | hover / click         | hover    |
| router              | whether \`vue-router\` mode is activated. If true, index will be used as 'path' to activate the route action. Use with \`default-active\` to set the active item on load. | boolean | —                     | false    |
| collapse-transition | whether to enable the collapse transition                                                                                                                             | boolean | —                     | true     |
| popper-effect       | Tooltip theme, built-in theme: \`dark\` / \`light\` when menu is collapsed                                                                                                | string  | dark / light          | dark     |
`;
const Exposes = `
| Name | Description               | Parameters                            |
| ------------ | ------------------------- | ------------------------------------- |
| open         | open a specific sub-menu  | index: index of the sub-menu to open  |
| close        | close a specific sub-menu | index: index of the sub-menu to close |
`;
const Events = `
| Name   | Description                               | Parameters                                                                                                                                                                 |
| ------ | ----------------------------------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| select | callback function when menu is activated  | index: index of activated menu, indexPath: index path of activated menu, item: the selected menu item, routeResult: result returned by \`vue-router\` if \`router\` is enabled |
| open   | callback function when sub-menu expands   | index: index of expanded sub-menu, indexPath: index path of expanded sub-menu                                                                                              |
| close  | callback function when sub-menu collapses | index: index of collapsed sub-menu, indexPath: index path of collapsed sub-menu                                                                                            |
`;
const Slots = `
| Name | Description               | Subtags                               |
| ---- | ------------------------- | ------------------------------------- |
| —    | customize default content | SubMenu / Menu-Item / Menu-Item-Group |
`;

export default {
  attributes: Attributes,
  events: Events,
  exposes: Exposes,
  slots: Slots,
};
