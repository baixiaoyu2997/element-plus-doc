/** 文档 */
export declare namespace Document {
  /**
   * #属性文档类型
   */
  interface Attribute {
    /** #参数名称 */
    name: string;
    /** #说明 */
    description: string;
    /** #类型 */
    type: string;
    /** #默认值 */
    default: unknown;
  }

  /**
   * 事件文档类型
   */
  interface Event {
    /** #事件名称 */
    name: string;
    /** #说明 */
    description: string;
    /** #类型 */
    type: string;
  }

  /**
   * 组件的插槽文档
   */
  interface Slot {
    /** #插槽名称 */
    name: string;
    /** #说明 */
    description: string;
  }

  /** 暴露出来的接口或方法文档类型 */
  interface Expose {
    /** #插槽名称 */
    name: string;
    /** #说明 */
    description: string;
    /** #类型 */
    type: string;
  }

  interface DocumentInstance {
    attributes?: Attribute[];
    events?: Event[];
    slots?: Slot[];
    exposes?: Expose[];
  }
}