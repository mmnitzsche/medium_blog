import axios from "axios";
import useSWR from "swr";
import { baseURL } from "../../utils/baseUrl";
import { fetcher } from "../../utils/fetcher";

// Defina a URL base da sua API
const apiBaseUrl = baseURL; // Exemplo: "http://localhost:3000/api"

// Hook para buscar os posts do Medium
export const UsePostApi = (username: string) => {
    // Monta a URL da API com o parâmetro "username"
    const apiUrl = `${apiBaseUrl}/posts/?username=${encodeURIComponent(username)}`;

    // Usa o useSWR para buscar os dados
    const { data, error } = useSWR(apiUrl, fetcher);

    // Função para fazer a requisição manualmente
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