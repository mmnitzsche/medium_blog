import axios from "axios";
import useSWR from "swr";
import { baseURL } from "../../utils/baseUrl";
import { fetcher } from "../../utils/fetcher";

export const UsePostApi = () => {

    const apiUrl = baseURL + "posts"

    const { data, error, isLoading, mutate } = useSWR(apiUrl, fetcher);

    const GetRequest = async () => {
        try {
            const response = await axios.get(apiUrl)
            return response
        } catch (err) {
            return err
        }
    }

    return { GetRequest, data }

}

