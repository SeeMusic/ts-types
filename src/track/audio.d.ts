export = AudioFile;

declare namespace AudioFile {
  /**
   * 音质检测结果
   * @description 原始数据库中，存储的是 freq_cut，根据此值推断出音质
   */
  export enum Quality {
    // 未检测
    NotChecked,
    // 无损
    Lossless,
    // 有损
    Lossy,
    // 无法处理(原始音频不存在、文件异常等)
    Unprocessable,
  }

  /**
   * 有无人声（AI 识别）
   * @description
   */
  export enum Voice {
    /**
     * 无人声
     **/
    No,
    /**
     * 有人声
     **/
    Yes,
    /**
     * 未知
     **/
    Unknown,
  }

  /**
   * 音频文件属性
   * @see {@link https://f2e.seemusic.xyz/knowledge-base/metadata/audio.html}
   */
  export interface MetaInfo {
    /**
     * 位深
     * @description 单位：bit。当前输出为完整的字符串
     * @example "16.00 bit"
     * @see {@link https://zh.wikipedia.org/wiki/位元深度_(音訊)}
     */
    bitDepth: string;

    /**
     * 比特率 / 码率
     * @description 单位：kbps。当前输出为完整的字符串
     * @example "1411.20 kbps"
     * @see {@link https://zh.wikipedia.org/wiki/比特率#多媒体的比特率}
     */
    bitRate: string;

    /**
     * 音频节拍速度
     */
    bpm: number;

    /**
     * 时长
     * @description 单位：秒
     */
    duration: number;

    /**
     * 音质
     */
    lossless: Quality;

    /**
     * 采样率
     * @description 单位：kHz。当前输出为完整字符串
     * @example "44.00 kHz"
     */
    sampleRate: string;

    /**
     * 声道数
     * @todo 当前输出为数字，2.1 之类的不知道数据源会是什么
     * @example 一般情况下，音乐为双声道：2
     */
    soundChannel: number;

    /**
     * 有无人声
     */
    voice: Voice;
  }
}
