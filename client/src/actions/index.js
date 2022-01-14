import axios from 'axios';


export function addComic(comic){
    const request = axios.post('/api/comic',comic)
    .then(response => response.data);

    return {
        type:"ADD_COMIC",
        payload:request
    }
}

export function getcomics(
    limit = 10,
    start = 0,
    order = 'asc',
    list = ''
){
    
    const request = axios.get(`/api/comics?limit=${limit}&skip=${start}&order=${order}`)
                    .then(response => {
                            if(list){
                                return [...list,...response.data]
                            } else {
                                return response.data
                            }
                        }
                    )

    return {
        type:'GET_COMICS',
        payload:request
    }

}


