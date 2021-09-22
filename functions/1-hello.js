// domain/.netlify/functions/1-hello
// exports
// const person = { name: 'john' }

exports.handler = async (event, context, cb) => {
  console.log(context)
  const method = event.httpMethod
  if(method !== 'GET'){
    return {
      statusCode:400,
      body:'Not Supoorted Method'
    }
  }
  return {

    statusCode: 200,
    body: 'API Task With Netlify Lambda function ',
  }
}
