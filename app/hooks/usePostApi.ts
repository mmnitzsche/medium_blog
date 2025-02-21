import axios from "axios";
import useSWR from "swr";
import { baseURL } from "../../utils/baseUrl";
import { fetcher } from "../../utils/fetcher";
import { MediumBaseUrl } from "@/utils/MediumFeed";


export const UsePostApi = (feedUrl: string) => {
    const apiUrl = `${baseURL}posts/?feedUrl=${MediumBaseUrl}${encodeURIComponent(feedUrl)}`;

    const { data, error } = useSWR(apiUrl, fetcher);

    const GetRequest = async () => {
        try {
            const response = await axios.get(apiUrl);
            return response.data;
        } catch (err) {
            console.error("Erro na requisição:", err);
            return null;
        }
    };

    return { GetRequest, data, error };
};
