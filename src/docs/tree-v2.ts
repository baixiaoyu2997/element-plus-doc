import type { TagDoc } from '@/types/tag-doc'
    const doc: TagDoc.TagDocInstance = {"url":"","attributes":[{"name":"data","description":{"cn":"tree data","en":"tree data"},"type":"array","default":"—","value":[]},{"name":"empty-text","description":{"cn":"text displayed when data is void","en":"text displayed when data is void"},"type":"string","default":"—","value":[]},{"name":"props","description":{"cn":"configuration options, see the following table","en":"configuration options, see the following table"},"type":"object","default":"—","value":[]},{"name":"highlight-current","description":{"cn":"whether current node is highlighted","en":"whether current node is highlighted"},"type":"boolean","default":"false","value":[]},{"name":"expand-on-click-node","description":{"cn":"whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon.","en":"whether to expand or collapse node when clicking on the node, if false, then expand or collapse node only when clicking on the arrow icon."},"type":"boolean","default":"true","value":[]},{"name":"check-on-click-node","description":{"cn":"whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox.","en":"whether to check or uncheck node when clicking on the node, if false, the node can only be checked or unchecked by clicking on the checkbox."},"type":"boolean","default":"false","value":[]},{"name":"default-expanded-keys","description":{"cn":"array of keys of initially expanded nodes","en":"array of keys of initially expanded nodes"},"type":"array","default":"—","value":[]},{"name":"show-checkbox","description":{"cn":"whether node is selectable","en":"whether node is selectable"},"type":"boolean","default":"false","value":[]},{"name":"check-strictly","description":{"cn":"whether checked state of a node not affects its father and child nodes when <code>show-checkbox</code> is <code>true</code>","en":"whether checked state of a node not affects its father and child nodes when <code>show-checkbox</code> is <code>true</code>"},"type":"boolean","default":"false","value":[]},{"name":"default-checked-keys","description":{"cn":"array of keys of initially checked nodes","en":"array of keys of initially checked nodes"},"type":"array","default":"—","value":[]},{"name":"current-node-key","description":{"cn":"key of initially selected node","en":"key of initially selected node"},"type":"string / number","default":"—","value":[]},{"name":"filter-method","description":{"cn":"this function will be executed on each node when use filter method. if return <code>false</code>, tree node will be hidden.","en":"this function will be executed on each node when use filter method. if return <code>false</code>, tree node will be hidden."},"type":"function(value, data)","default":"—","value":[]},{"name":"indent","description":{"cn":"horizontal indentation of nodes in adjacent levels in pixels","en":"horizontal indentation of nodes in adjacent levels in pixels"},"type":"number","default":"16","value":[]},{"name":"icon","description":{"cn":"custom tree node icon","en":"custom tree node icon"},"type":"`string","default":"Component`","value":[]},{"name":"item-size","description":{"cn":"custom tree node height","en":"custom tree node height"},"type":"number","default":"26","value":[]}],"events":[{"name":"node-click","description":{"cn":"triggers when a node is clicked","en":"triggers when a node is clicked"},"type":"","tsType":""},{"name":"node-contextmenu","description":{"cn":"triggers when a node is clicked by right button","en":"triggers when a node is clicked by right button"},"type":"","tsType":""},{"name":"check-change","description":{"cn":"triggers when the selected state of the node changes","en":"triggers when the selected state of the node changes"},"type":"","tsType":""},{"name":"check","description":{"cn":"triggers after clicking the checkbox of a node","en":"triggers after clicking the checkbox of a node"},"type":"","tsType":""},{"name":"current-change","description":{"cn":"triggers when current node changes","en":"triggers when current node changes"},"type":"","tsType":""},{"name":"node-expand","description":{"cn":"triggers when current node open","en":"triggers when current node open"},"type":"","tsType":""},{"name":"node-collapse","description":{"cn":"triggers when current node close","en":"triggers when current node close"},"type":"","tsType":""}],"exposes":[{"name":"filter","description":{"cn":"filter all tree nodes, filtered nodes will be hidden","en":"filter all tree nodes, filtered nodes will be hidden"},"type":"","tsType":""},{"name":"getCheckedNodes","description":{"cn":"If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently selected array of nodes","en":"If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently selected array of nodes"},"type":"","tsType":""},{"name":"getCheckedKeys","description":{"cn":"If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently selected array of node's keys","en":"If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently selected array of node's keys"},"type":"","tsType":""},{"name":"setCheckedKeys","description":{"cn":"set certain nodes to be checked","en":"set certain nodes to be checked"},"type":"","tsType":""},{"name":"setChecked","description":{"cn":"set node to be checked or not","en":"set node to be checked or not"},"type":"","tsType":""},{"name":"setExpandedKeys","description":{"cn":"set certain nodes to be expanded","en":"set certain nodes to be expanded"},"type":"","tsType":""},{"name":"getHalfCheckedNodes","description":{"cn":"If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently half selected array of nodes","en":"If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently half selected array of nodes"},"type":"","tsType":""},{"name":"getHalfCheckedKeys","description":{"cn":"If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently half selected array of node's keys","en":"If the node can be selected (<code>show-checkbox</code> is <code>true</code>), it returns the currently half selected array of node's keys"},"type":"","tsType":""},{"name":"getCurrentKey","description":{"cn":"return the highlight node's key (undefined if no node is highlighted)","en":"return the highlight node's key (undefined if no node is highlighted)"},"type":"","tsType":""},{"name":"getCurrentNode","description":{"cn":"return the highlight node's data (undefined if no node is highlighted)","en":"return the highlight node's data (undefined if no node is highlighted)"},"type":"","tsType":""},{"name":"setCurrentKey","description":{"cn":"set highlighted node by key","en":"set highlighted node by key"},"type":"","tsType":""},{"name":"getNode","description":{"cn":"get node by key or data","en":"get node by key or data"},"type":"","tsType":""},{"name":"expandNode","description":{"cn":"expand specified node","en":"expand specified node"},"type":"","tsType":""},{"name":"collapseNode","description":{"cn":"collapse specified node","en":"collapse specified node"},"type":"","tsType":""},{"name":"setData","description":{"cn":"When the data is very large, using reactive data will cause the poor performance, so we provide a way to avoid this situation","en":"When the data is very large, using reactive data will cause the poor performance, so we provide a way to avoid this situation"},"type":"","tsType":""}],"slots":[{"name":"-","description":{"cn":"Custom content for tree nodes. The scope parameter is <code>{ node: TreeNode, data: TreeNodeData }</code>","en":"Custom content for tree nodes. The scope parameter is <code>{ node: TreeNode, data: TreeNodeData }</code>"}}]};
    export default doc;
    