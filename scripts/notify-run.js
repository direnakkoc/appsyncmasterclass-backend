process.env.GRAPHQL_API_URL='https://iibjuum47bcpvd3yitrkuopbxq.appsync-api.eu-west-1.amazonaws.com/graphql'
process.env.USERS_TABLE='appsyncmasterclass-backend-dev-UsersTable-1MTN9LXP9PQ7F'
process.env.BUCKET_NAME='appsyncmasterclass-backend-dev-assetsbucket-g0yqktd71lgo'
process.env.TWEETS_TABLE='appsyncmasterclass-backend-dev-TweetsTable-1S4SSRWM47TFM'
process.env.AWS_REGION='eu-west-1'

const notify = require('../functions/notify')

const event = require('../test-events/tweet-ddb-insert.json')

async function doIt() {
  try {
    const result = await notify.handler(event)
    console.log('Result', result)
  } catch(err) {
    console.error(err)
  }
}

doIt()
