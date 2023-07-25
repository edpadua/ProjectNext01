import instance from "../common/config/api"

const flagsService = {
    find: async (name:string) => {

        
        const url = `https://restcountries.com/v3.1/name/${name}`
        console.log("url", url);
        const resp = await instance.get(url);
        console.log("data", resp.data[0])

        return resp.data;
    }
}

export default flagsService;
