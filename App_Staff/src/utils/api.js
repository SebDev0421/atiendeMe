const URL = 'http://181.54.182.7:5000/api/temporal/hospital/user'


class API{
    async getData(){
        const query = await fetch(URL)
        const data = query.json()
        return data
    }
}
export default new API