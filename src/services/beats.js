import { http } from './config'

export default { 
    list:() => {
        return http.get('beats')
    },
    // delete:(id) => {
    //     return http.delete(`beats${id}`)
    // }
}