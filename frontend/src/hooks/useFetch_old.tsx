interface Options {
    method: string,
    headers: {},
    body: any
}

const useFetch = () => {
    const url = "https://www.angelinvestmentnetwork.co.uk/rest/mobile/api/brokingsubmission/broking_step_submission"
    const stub = `${url}`

    const defaultHeader = {
        Accept: "application/json",
        "Content-Type": "application/json"
    };

    const customFetch = (url, method, body, headers) => {
        const options: Options = {
            method,
            headers,
            body
        };

        console.log(body)

        if (body) {
            options.body = JSON.stringify(body)
            console.log(options.body)
        }

        return fetch(url, options)
            .then(response => {
                console.log(response)
                // response.json()
            }).catch(err => {
                throw new Error(err);
            });
    };

    const get = id => {
        // console.log(`useFetch get: ${id}`)
        const url = `${stub}${id ? `/${id}` : ""}`;
        return customFetch(url, "GET", null, defaultHeader);
    };

    const post = (body) => {
        if (!body) throw new Error("to make a post you must provide a body");
        console.log(body)
        return customFetch(stub, "POST", body, defaultHeader);
    };

    const put = (id, body) => {
        if (!id || !body)
            throw new Error("to make a put you must provide the id and the   body");
        const url = `${stub}/${id}`;
        return customFetch(url, "PUT", body, defaultHeader);
    };

    const del = (id = false) => {
        if (!id)
            throw new Error("to make a delete you must provide the id and the body");
        const url = `${stub}/${id}`;
        return customFetch(url, "DELETE", null, defaultHeader);
    };

    return {
        get,
        post,
        put,
        del
    };
};
export default useFetch;