declare namespace Common {
  /**
   * ISO 8601 时间戳
   *
   * @example
   * '2001-01-01T16:00:00Z'
   * '2001-01-01T16:00:00.000Z'
   */
  export type ISO8601Timestamp = string;

  /**
   * 分页公共属性
   */
  export interface Pager {
    /**
     * 当前页码，自然数
     * @default 1
     */
    page: number;
    /**
     * 单页数量
     */
    perPage: number;
  }

  /**
   * 实体操作时间
   */
  export interface OperateTime {
    /**
     * 创建时间
     * {@link ISO8601Timestamp}
     */
    createdTime: ISO8601Timestamp;
    /**
     * 最后更新时间
     * {@link ISO8601Timestamp}
     */
    updatedTime: ISO8601Timestamp;
  }
}
