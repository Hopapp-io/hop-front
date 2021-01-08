export default {
    ssr: false,
    head: {
        titleTemplate: '%s',
        title: 'Hop',
        meta: [
            { charset: 'utf-8' },
            { name: 'viewport', content: 'width=device-width, initial-scale=1' },
            { hid: 'description', name: 'description', content: '' }
        ],
        link: [
            { rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }
        ],
        script: [
            {
                id: "hs-script-loader",
                src: "//js.hs-scripts.com/8965853.js",
                async: true,
                defer: true,
                body: true,
            },
        ]
    },
    router: {
        scrollBehavior: async (to, from, savedPosition) => {
            if (savedPosition) {
                return savedPosition
            }
            const findEl = async (hash, x) => {
                return document.querySelector(hash) ||
                    new Promise((resolve, reject) => {
                        if (x > 50) {
                            return resolve()
                        }
                        setTimeout(() => { resolve(findEl(hash, ++x || 1)) }, 100)
                    })
            }
            if (to.hash) {
                let el = await findEl(to.hash)
                if ('scrollBehavior' in document.documentElement.style) {
                    return window.scrollTo({ top: el.offsetTop, behavior: 'smooth' })
                } else {
                    return window.scrollTo(0, el.offsetTop)
                }
            }
            return { x: 0, y: 0 }
        }
    },
    modules: [
        'nuxt-buefy',
    ],
    buildModules: [
        '@nuxtjs/dotenv'
    ],
}