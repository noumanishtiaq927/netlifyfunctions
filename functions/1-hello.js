// domain/.netlify/functions/1-hello
// exports
// const person = { name: 'john' }

exports.handler = async (event, context, cb) => {
  console.log(event)
  const method = event.httpMethod
  const id = event.queryStringParameters.id
  console.log(id)
  if(method === 'POST'){
    return {
      statusCode:404,
      body:`Hello ${id}`
    }
  }else if(method === 'GET')
  return {

    statusCode: 200,
    body: 'Yes ! you got it ',
  }
}
  