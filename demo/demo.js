const ap1 = new APlayer({
    element: document.getElementById('player1'),
    loop: 'none',
    lrcType: 3,
    audio: {
        name: '《夏天的风》',
        url: 'https://cnbj1.fds.api.xiaomi.com/song-set/xiatiandefeng-mitang.mp3',
        // lrc: data.content,
        lrc: 'https://cdn.cnbj1.fds.api.mi-img.com/aife/om-mood-blindbox/resource/xiatiandefeng.lrc',
    },
});
