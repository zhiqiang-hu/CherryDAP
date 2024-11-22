import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{c as i,a as l,o as s}from"./app-Cht6owOD.js";const a="/assets/2024-09-23-22-25-12-5VzxSykc.png",d="/assets/2024-09-23-23-02-55-P2Ab3AAM.png",c={};function r(o,t){return s(),i("div",null,t[0]||(t[0]=[l('<p>HSLink Pro 是一款使用 HPM5301 芯片的一个 CherryDAP 实现。其中主要代码参考了 <a href="./HPM5301EVKLite">hpm5301evklite</a> 工程。</p><figure><img src="'+a+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><h2 id="引脚定义" tabindex="-1"><a class="header-anchor" href="#引脚定义"><span>引脚定义</span></a></h2><p>HSLink Pro 的引脚定义满足 <a href="https://wiki.segger.com/20-pin_J-Link_Connector" target="_blank" rel="noopener noreferrer">20-pin J-Link Connector</a>定义。目前的引脚定义分配如下：</p><figure><img src="'+d+'" alt="" tabindex="0" loading="lazy"><figcaption></figcaption></figure><table><thead><tr><th>引脚</th><th>名称</th><th>描述</th></tr></thead><tbody><tr><td>1</td><td>Vref</td><td>参考电压输入</td></tr><tr><td>2</td><td>Tvcc</td><td>目标板供电可调电源输出</td></tr><tr><td>3</td><td>TRST</td><td>JTAG 复位信号，通常连接到目标 CPU 的 nTRST。该引脚通常在目标上被拉高，以避免在没有连接时意外复位</td></tr><tr><td>4</td><td>GND</td><td>地</td></tr><tr><td>5</td><td>TDI</td><td>JTAG TDI</td></tr><tr><td>6</td><td>GND</td><td>地</td></tr><tr><td>7</td><td>TMS/SWDIO</td><td>在JTAG模式为TMS，在SWD模式下则为SWDIO</td></tr><tr><td>8</td><td>GND</td><td>地</td></tr><tr><td>9</td><td>TCK/SWCLK</td><td>在JTAG模式为TCK，在SWD模式下则为SWCLK</td></tr><tr><td>10</td><td>GND</td><td>地</td></tr><tr><td>11</td><td>NC</td><td>未连接</td></tr><tr><td>12</td><td>GND</td><td>地</td></tr><tr><td>13</td><td>TDO</td><td>JTAG TDO</td></tr><tr><td>14</td><td>UART_DTR</td><td>CDC的DTR信号输出，可用于ESP32等MCU串口自动下载</td></tr><tr><td>15</td><td>SRST</td><td>目标板复位信号，低电平有效</td></tr><tr><td>16</td><td>UART_RTS</td><td>CDC的RTS信号输出，可用于ESP32等MCU串口自动下载</td></tr><tr><td>17</td><td>NC</td><td>未连接</td></tr><tr><td>18</td><td>UART_TX</td><td>串口TX信号</td></tr><tr><td>19</td><td>GND</td><td>地</td></tr><tr><td>20</td><td>UART_RX</td><td>串口RX信号</td></tr></tbody></table><h2 id="支持特性" tabindex="-1"><a class="header-anchor" href="#支持特性"><span>支持特性</span></a></h2><p>目前 HSLink Pro 支持的特性有：</p><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-0" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-0"> 提供最高80MHz的 SWD 和 JTAG 速率</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-1" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-1"> 电平转换功能，适配任意电平的目标板</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-2" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-2"> 同时支持 SWD 和 JTAG 协议</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-3" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-3"> 支持为目标板提供最高 1A 负载的供电能力</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-4" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-4"> 支持虚拟串口功能</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-5" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-5"> 支持串口的 DTR/RTS 控制，可为 ESP32 等MCU提供自动下载</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-6" checked="checked" disabled="disabled"><label class="task-list-item-label" for="task-item-6"> 支持SWD模式下对 Arm 芯片进行写<code>SYSRESETREQ</code> 和 <code>VECTRESET</code> 软复位</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-7" disabled="disabled"><label class="task-list-item-label" for="task-item-7"> 支持通过上位机进行持久化配置</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-8" disabled="disabled"><label class="task-list-item-label" for="task-item-8"> 支持通过上位机进行固件升级</label></li></ul><h2 id="未来特性-画饼" tabindex="-1"><a class="header-anchor" href="#未来特性-画饼"><span>未来特性（画饼）</span></a></h2><ul class="task-list-container"><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-9" disabled="disabled"><label class="task-list-item-label" for="task-item-9"> 可通过上位机设置是否开启速度Boost</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-10" disabled="disabled"><label class="task-list-item-label" for="task-item-10"> 可通过上位机设置是否开启电平转换</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-11" disabled="disabled"><label class="task-list-item-label" for="task-item-11"> 可通过上位机设置是否固定输出电源</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-12" disabled="disabled"><label class="task-list-item-label" for="task-item-12"> 可通过上位机设置是否开启软复位</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-13" disabled="disabled"><label class="task-list-item-label" for="task-item-13"> 支持更多复位方式，例如POR</label></li><li class="task-list-item"><input type="checkbox" class="task-list-item-checkbox" id="task-item-14" disabled="disabled"><label class="task-list-item-label" for="task-item-14"> 上位机支持特化芯片的选项字节配置</label></li></ul><h2 id="hslink-pro-升级流程" tabindex="-1"><a class="header-anchor" href="#hslink-pro-升级流程"><span>HSLink Pro 升级流程</span></a></h2><p>长按<code>BL</code>按钮5秒以上即可进入升级模式，此时电脑上会出现一个<code>CHERRYUF2</code>的移动存储设备，将升级的<code>.uf2</code>文件拖入其中即可。最新的固件可以在QQ交流群群文件或者<a href="https://github.com/cherry-embedded/CherryDAP/actions" target="_blank" rel="noopener noreferrer">GitHub Actions</a>的Artifacts中下载。</p><h2 id="faq" tabindex="-1"><a class="header-anchor" href="#faq"><span>FAQ</span></a></h2><h3 id="为什么-hslink-pro-没有电源输出" tabindex="-1"><a class="header-anchor" href="#为什么-hslink-pro-没有电源输出"><span>为什么 HSLink Pro 没有电源输出？</span></a></h3><p>当Vref引脚悬空的时候，默认<code>Tvcc</code>和<code>+5V</code>引脚均不会输出电源，并且所有端口的电平将默认为<code>3.3V</code>。只有当<code>Vref</code>引脚上施加<code>1.6V</code>以上的电压的时候，<code>Tvcc</code>才会输出一个与<code>Vref</code>相同的电压，<code>+5V</code>引脚才会输出<code>5V</code>电压。</p>',16)]))}const h=e(c,[["render",r],["__file","HSLink Pro.html.vue"]]),b=JSON.parse('{"path":"/projects/HSLink%20Pro.html","title":"HSLink Pro","lang":"zh-CN","frontmatter":{"title":"HSLink Pro","description":"HSLink Pro 是一款使用 HPM5301 芯片的一个 CherryDAP 实现。其中主要代码参考了 hpm5301evklite 工程。 引脚定义 HSLink Pro 的引脚定义满足 20-pin J-Link Connector定义。目前的引脚定义分配如下： 支持特性 目前 HSLink Pro 支持的特性有： 提供最高80MHz的 SWD...","head":[["meta",{"property":"og:url","content":"https://github.com/cherry-embedded/CherryDAP/projects/HSLink%20Pro.html"}],["meta",{"property":"og:site_name","content":"CherryDAP"}],["meta",{"property":"og:title","content":"HSLink Pro"}],["meta",{"property":"og:description","content":"HSLink Pro 是一款使用 HPM5301 芯片的一个 CherryDAP 实现。其中主要代码参考了 hpm5301evklite 工程。 引脚定义 HSLink Pro 的引脚定义满足 20-pin J-Link Connector定义。目前的引脚定义分配如下： 支持特性 目前 HSLink Pro 支持的特性有： 提供最高80MHz的 SWD..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-09-23T15:15:02.000Z"}],["meta",{"property":"article:modified_time","content":"2024-09-23T15:15:02.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"HSLink Pro\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-09-23T15:15:02.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"cherry-embedded\\",\\"url\\":\\"https://github.com/cherry-embedded\\"}]}"]]},"headers":[{"level":2,"title":"引脚定义","slug":"引脚定义","link":"#引脚定义","children":[]},{"level":2,"title":"支持特性","slug":"支持特性","link":"#支持特性","children":[]},{"level":2,"title":"未来特性（画饼）","slug":"未来特性-画饼","link":"#未来特性-画饼","children":[]},{"level":2,"title":"HSLink Pro 升级流程","slug":"hslink-pro-升级流程","link":"#hslink-pro-升级流程","children":[]},{"level":2,"title":"FAQ","slug":"faq","link":"#faq","children":[{"level":3,"title":"为什么 HSLink Pro 没有电源输出？","slug":"为什么-hslink-pro-没有电源输出","link":"#为什么-hslink-pro-没有电源输出","children":[]}]}],"git":{"createdTime":1727104502000,"updatedTime":1727104502000,"contributors":[{"name":"HalfSweet","email":"60973476+HalfSweet@users.noreply.github.com","commits":1}]},"readingTime":{"minutes":2.34,"words":701},"filePathRelative":"projects/HSLink Pro.md","localizedDate":"2024年9月23日","autoDesc":true}');export{h as comp,b as data};
