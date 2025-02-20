import axios from "axios";

// Fetcher para uso com SWR
export const fetcher = (url: string) => axios.get(url).then((res) => res.data);
