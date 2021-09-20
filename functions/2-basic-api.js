const axios = require ('axios')

const items = require('../assets/data')
 const Features = `https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=7ecd0b11bc4cd387a22b43cb37086584`
 const SEARCH = `https://api.themoviedb.org/3/search/movie?&api_key=7ecd0b11bc4cd387a22b43cb37086584&query=`

exports.handler = async (event, context, cb) => {
  const method = event.httpMethod
  if(method === 'GET') {
  try {
    console.log(event)
    const {data} = await axios.get(Features)
    return {
      statusCode:200,
      body: JSON.stringify(data.results)
    }
  } catch (error) {
    return {
      statusCode: 404,
      body: 'Nothing Found'
    }
  }

}
else if(method === 'POST'){

  const {search} = JSON.parse(event.body)
  console.log(search)
  try {
    const {data} = await axios.get(`${SEARCH}${search}`)
    return {
      statusCode: 200,
      body: JSON.stringify(data)
    }
  } catch (error) {
    return {
      statusCode: 400,
      body:'Cannot find anyhtnh'
    }
  }
 
}
}
