<template>
    <!-- 准备一个容器用来存放音乐播放器 -->
    <div id="aplayer"></div>

</template>
  
<script >
import APlayer from "APlayer"; // 引入音乐插件
//import "APlayer/dist/APlayer.min.css"; // 引入音乐插件的样式
import axios from "axios";
import { getCurrentInstance } from "vue";
export default {
    name: "App",
    data() {
        return {
            audio: [ // 歌曲列表
                {
                    name: "萤火之森", // 歌曲名字
                    artist: "CMJ", // 歌曲演唱者
                    url: // 歌曲地址（这里用外链地址）
                        "https://m804.music.126.net/20221205003342/0d6e3fbcb369ba30474afa3f9a2acdf6/jdymusic/obj/w5zDlMODwrDDiGjCn8Ky/1779046019/07f7/04b6/af5d/56959d35aeef80f41b3b4d0f60f7d042.mp3",
                    cover: "https://s2.loli.net/2022/12/05/b2FdzLCPiOEv4Gh.jpg", // 歌曲头像
                    lrc: "", // 歌词
                },
                {
                    name: "夜に駆ける", // 歌曲名字
                    artist: "YOASOBI", // 歌曲演唱者
                    url: // 歌曲地址（这里用外链地址）
                        "https://tyst.migu.cn/public/product10th/productB35/2021/10/2514/2020年05月05日22点58分批量项目SonyOrchard20首-1/标清高清/MP3_128_16_Stero/6993873U79Y140025.mp3",
                    cover: "https://s2.loli.net/2022/12/05/6DMRgv8fhLutWFc.jpg", // 歌曲头像
                    lrc: "", // 歌词
                }
            ],
            info: {
                fixed: true, // 不开启吸底模式
                listFolded: true, // 折叠歌曲列表
                autoplay: true, // 开启自动播放
                preload: "auto", // 自动预加载歌曲
                loop: "all", // 播放循环模式、all全部循环 one单曲循环 none只播放一次
                order: "list", //  播放模式，list列表播放, random随机播放
            },
        };
    },
    mounted() {
        // 初始化播放器
        this.initAudio();
    },
    methods: {
        initAudio() {
            // 创建一个音乐播放器实例，并挂载到DOM上，同时进行相关配置
            const ap = new APlayer({
                container: document.getElementById("aplayer"),
                audio: this.audio, // 音乐信息
                ...this.info, // 其他配置信息
            });
        },
        searchMusic() {
            axios.get("https://autumnfish.cn/search?keywords=" + query.value).then(
                function (res) {
                    // Test
                    console.log(res.data.result.songs);
                    console.log("https://autumnfish.cn/search?keywords=" + query.value);

                    musicList.value = res.data.result.songs;
                }
            ).catch(function (err) { console.log(err); });
        }
    },
};
</script>
