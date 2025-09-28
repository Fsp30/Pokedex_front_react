import axios from 'axios'

export async function getUser() {
        try{
                const response = await axios.get("https://dummyjson.com/user/2")
                return {data: response.data, error: null}
        }catch(err){
                return {data: null, error: err}
        }
        
}

// const fakeData = axios.create({
//         baseURL: 
// })

// export default fakeData