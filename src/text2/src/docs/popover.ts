import type { TagDoc } from '@/types/tag-doc'
    const doc: TagDoc.TagDocInstance = {"url":"","attributes":[{"name":"trigger","description":{"cn":"how the popover is triggered","en":"how the popover is triggered"},"type":"string","default":"click","value":[]},{"name":"title","description":{"cn":"popover title","en":"popover title"},"type":"string","default":"—","value":[]},{"name":"effect","description":{"cn":"Tooltip theme, built-in theme: <code>dark</code> / <code>light</code>","en":"Tooltip theme, built-in theme: <code>dark</code> / <code>light</code>"},"type":"string","default":"light","value":[]},{"name":"content","description":{"cn":"popover content, can be replaced with a default <code>slot</code>","en":"popover content, can be replaced with a default <code>slot</code>"},"type":"string","default":"—","value":[]},{"name":"width","description":{"cn":"popover width","en":"popover width"},"type":"string / number","default":"Min width 150px","value":[]},{"name":"placement","description":{"cn":"popover placement","en":"popover placement"},"type":"string","default":"bottom","value":[]},{"name":"disabled","description":{"cn":"whether Popover is disabled","en":"whether Popover is disabled"},"type":"boolean","default":"false","value":[]},{"name":"visible / v-model:visible","description":{"cn":"whether popover is visible","en":"whether popover is visible"},"type":"boolean","default":"false","value":[]},{"name":"offset","description":{"cn":"popover offset","en":"popover offset"},"type":"number","default":"0","value":[]},{"name":"transition","description":{"cn":"popover transition animation","en":"popover transition animation"},"type":"string","default":"el-fade-in-linear","value":[]},{"name":"show-arrow","description":{"cn":"whether a tooltip arrow is displayed or not. For more info, please refer to <a href=\"https://github.com/element-plus/element-plus/tree/dev/packages/components/popper\">ElPopper</a>","en":"whether a tooltip arrow is displayed or not. For more info, please refer to <a href=\"https://github.com/element-plus/element-plus/tree/dev/packages/components/popper\">ElPopper</a>"},"type":"boolean","default":"true","value":[]},{"name":"popper-options","description":{"cn":"parameters for <a href=\"https://popper.js.org/docs/v2/\">popper.js</a>","en":"parameters for <a href=\"https://popper.js.org/docs/v2/\">popper.js</a>"},"type":"object","default":"<code>{modifiers: [{name: 'computeStyles',options: {gpuAcceleration: false}}]}</code>","value":[]},{"name":"popper-class","description":{"cn":"custom class name for popover","en":"custom class name for popover"},"type":"string","default":"—","value":[]},{"name":"popper-style","description":{"cn":"custom style for popover","en":"custom style for popover"},"type":"string / object","default":"—","value":[]},{"name":"show-after","description":{"cn":"delay of appearance, in millisecond","en":"delay of appearance, in millisecond"},"type":"number","default":"0","value":[]},{"name":"hide-after","description":{"cn":"delay of disappear, in millisecond","en":"delay of disappear, in millisecond"},"type":"number","default":"200","value":[]},{"name":"auto-close","description":{"cn":"timeout in milliseconds to hide tooltip","en":"timeout in milliseconds to hide tooltip"},"type":"number","default":"0","value":[]},{"name":"tabindex","description":{"cn":"<a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\">tabindex</a> of Popover","en":"<a href=\"https://developer.mozilla.org/en-US/docs/Web/HTML/Global_attributes/tabindex\">tabindex</a> of Popover"},"type":"number","default":"—","value":[]},{"name":"teleported","description":{"cn":"whether popover dropdown is teleported to the body","en":"whether popover dropdown is teleported to the body"},"type":"boolean","default":"true","value":[]},{"name":"persistent","description":{"cn":"when popover inactive and <code>persistent</code> is <code>false</code> , popover will be destroyed","en":"when popover inactive and <code>persistent</code> is <code>false</code> , popover will be destroyed"},"type":"boolean","default":"true","value":[]}],"events":[{"name":"show","description":{"cn":"triggers when popover shows","en":"triggers when popover shows"},"type":"","tsType":""},{"name":"before-enter","description":{"cn":"triggers when the entering transition before","en":"triggers when the entering transition before"},"type":"","tsType":""},{"name":"after-enter","description":{"cn":"triggers when the entering transition ends","en":"triggers when the entering transition ends"},"type":"","tsType":""},{"name":"hide","description":{"cn":"triggers when popover hides","en":"triggers when popover hides"},"type":"","tsType":""},{"name":"before-leave","description":{"cn":"triggers when the leaving transition before","en":"triggers when the leaving transition before"},"type":"","tsType":""},{"name":"after-leave","description":{"cn":"triggers when the leaving transition ends","en":"triggers when the leaving transition ends"},"type":"","tsType":""}],"slots":[{"name":"—","description":{"cn":"text content of popover","en":"text content of popover"}},{"name":"reference","description":{"cn":"HTML element that triggers popover","en":"HTML element that triggers popover"}}]};
    export default doc;
    