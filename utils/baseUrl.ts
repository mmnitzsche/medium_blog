function DevelopmentState() {
    const runType = process.env.NODE_ENV;
    let baseURL = '';

    if (runType === "development") {
        baseURL = 'http://localhost:3000/api/';
    } else {
        baseURL = `${window.location.origin}/api/`;
    }

    return baseURL;
}

export const baseURL = DevelopmentState();
