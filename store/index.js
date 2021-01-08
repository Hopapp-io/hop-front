export const state = () => ({
    fsUrl: process.env.FS_URL,
    appId: process.env.APP_ID,
    appKey: process.env.APP_KEY,
})

export const getters = {
    getFsUrl: (state) => {
        return state.fsUrl;
    },
    getAppId: (state) => {
        return state.appId;
    },
    getAppKey: (state) => {
        return state.appKey;
    }
}