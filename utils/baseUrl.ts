
function DevelopmentState() {
    const runType = process.env.NODE_ENV
    if (runType === "development") {
        let baseURL = 'http://localhost:3000/api/'
        return baseURL
    }
    else {
        let baseURL = 'https://blog-phi-swart-79.vercel.app/api/'
        return baseURL
    }
}

export const baseURL = DevelopmentState()

