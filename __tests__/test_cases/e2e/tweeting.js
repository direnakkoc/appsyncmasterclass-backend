require('dotenv').config()
const given = require('../../steps/given')
const then = require('../../steps/then')
const when = require('../../steps/when')
const chance = require('chance').Chance()

describe('Given an authenticated user', () =>{
  let user
  beforeAll(async () => {
    user = await given.an_authenticated_user()
  })

  describe('When she sends a tweet', () => {
    let tweet
    const text = chance.string({ lenght: 16 })
    beforeAll(async () => {
      tweet = await when.a_user_calls_tweet(user, text)
    })
    
    it('Should return the new tweet', () => {
      expect(tweet).toMatchObject({
        text,
        replies: 0,
        likes: 0,
        retweets: 0
      })
    })
  })
})