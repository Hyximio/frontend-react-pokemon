import axios from "axios";

function apiRequest( _url, _setter) {
    const source = axios.CancelToken.source();

    async function fetchData() {
        try {
            const result = await axios.get(_url, {cancelToken: source.token})
            _setter( result.data );
        } catch (e) {
            console.error(e);
        }
    }

    fetchData();

    return source;
}

export default apiRequest;