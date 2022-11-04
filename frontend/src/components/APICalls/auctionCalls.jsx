import axios from "axios"
import { useAxios } from "../../utils/Axios_hook"


// export const { response, loading, error } = useAxios({
//     method: 'GET',
//     url: '/auctions',
//     headers: {
//         accept: '*/*',
//     },
// }) 

export function GetAuctions() {
    return  useAxios({
        method: 'GET',
        url: '/auctions',
        headers: {
            accept: '*/*',
        },
    })

}




