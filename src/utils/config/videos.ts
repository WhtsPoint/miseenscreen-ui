const videos = {
    lightScene: 'https://www.dropbox.com/scl/fi/jwl3ei6oijjt1at32b6qk/1.mp4?rlkey=lne1ngxhczo8koz5s1b5y619r&raw=1',
    stack: [
        'https://www.dropbox.com/scl/fi/ss5lri6tgcx54gsoczj1j/1_1.mp4?rlkey=ihewaepb7hx7hlryt7sjhmnb0&raw=1',
        'https://www.dropbox.com/scl/fi/y87kbumi78s8p9kuw3g6w/2_2.mp4?rlkey=nyr0mdcori31j1ritwolegtxb&raw=1',
        'https://www.dropbox.com/scl/fi/635jy9n6vityctrtvrn1x/3_1.mp4?rlkey=ynnbfmql5ni81e3msh654xnc3&raw=1',
        'https://www.dropbox.com/scl/fi/f59oconqyteil0ftqetbj/4.mp4?rlkey=4zf5s1uhk9x1ez9heqmpzth4e&raw=1',
        'https://www.dropbox.com/scl/fi/wsszeim1e435wdxpedjqs/5_1.mp4?rlkey=kadu13ba8c0330vj7lrwhycie&raw=1'
    ],
    cooperation: process.env.NEXT_PUBLIC_HOST_URL + '/video/coop.mp4',
    philosophy: 'https://www.dropbox.com/scl/fi/pvh9b2m7rsd90dxgx3nfk/philosophy.mp4?rlkey=5uildojhi8hnsud8ihvcxaxzk&raw=1',
    steps: process.env.NEXT_PUBLIC_HOST_URL + '/video/steps.mp4',
    cases: 'https://www.dropbox.com/scl/fi/fiyq3kekq5zxjvcjb4heh/cases.mp4?rlkey=94b16l6jscsizo64vbkxgwim5&raw=1',
    aboutUs: 'https://www.dropbox.com/scl/fi/mhfdarhglee2ccipobirr/1.mp4?rlkey=hp2mzmsdesi3d0cn9x7lutxnx&raw=1',
    footer: 'https://www.dropbox.com/scl/fi/yybb5ook2gi6ny66gvflt/1_1.mp4?rlkey=n5cks8egmnf3ldjxklvzarq4l&raw=1',
    services: 'https://www.dropbox.com/scl/fi/k39e1ccvxlwjvy32k169j/1.mp4?rlkey=3mo8jaxpizz8ndyroo2oxop89&raw=1',
    welcomeBackground: 'https://www.dropbox.com/scl/fi/1oo85otwhsijoh7493jnk/init-background.webm?rlkey=ah2ry92jo7ie3155mdjfgacdb&st=u206doky&raw=1',
    rotatingBook: 'https://www.dropbox.com/scl/fi/k939yq4ltfjw733irfgyq/book.mp4?rlkey=gl1ssg9r9qwf39idaur3saw4x&raw=1',
    light: 'https://www.dropbox.com/scl/fi/z5zsw6xh0lg7jz07o6l3h/light.mp4?rlkey=vwnl9kscnuj9w7g8edq0dkxbb&raw=1',
    projector: 'https://www.dropbox.com/scl/fi/8h4bjzauuun5pa2t297y8/projector.mp4?rlkey=n3a081ks91s822kx8mb4edepy&raw=1',
    whoWeAre: {
        mns: [
            process.env.NEXT_PUBLIC_HOST_URL + "/video/mns-1.mp4",
            process.env.NEXT_PUBLIC_HOST_URL + "/video/mns-2.mp4"
        ],
        web: [
            process.env.NEXT_PUBLIC_HOST_URL + "/video/mns-3.mp4",
            process.env.NEXT_PUBLIC_HOST_URL + "/video/mns-4.mp4"
        ]
    }
} as const

export default videos