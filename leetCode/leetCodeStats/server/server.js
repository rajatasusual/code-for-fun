import { createServer } from 'node:http'
import { createSchema, createYoga } from 'graphql-yoga'
import pkg from './api.cjs';
const { fetchSubmissions, fetchWeather, fetchProfile, fetchLanguageStats, fetchProblemsSolved, fetchSkillsStats, fetchUserBadges, fetchUserCalendar } = pkg;

const yoga = createYoga({
  schema: createSchema({
    typeDefs: /* GraphQL */ `
      type Query {
        hello: String
      },
      type Query {
        submissions: String
      },
      type Query {
        profile: String
      },
      type Query {
        languageStats: String
      },
      type Query {
        problemsSolved: String
      },
      type Query {
        skillsStats: String
      },
      type Query {
        userBadges: String
      },
      type Query {
        userCalendar: String
      }, 
      type Query {
        weather: String
      },
      type Query {
        leetcode: String
      }
    `,
    resolvers: {
      Query: {
        hello: () => {
          return "Hello my friend! How are you doing? The day is " + new Date().toDateString()
        },
        weather: async () => {
          return JSON.stringify(await fetchWeather())
        },
        submissions: async () => {
          return JSON.stringify(await fetchSubmissions())
        },
        profile: async () => {
          return JSON.stringify(await fetchProfile())
        },
        languageStats: async () => {
          return JSON.stringify(await fetchLanguageStats())
        },
        problemsSolved: async () => {
          return JSON.stringify(await fetchProblemsSolved())
        },
        skillsStats: async () => {
          return JSON.stringify(await fetchSkillsStats())
        },
        userBadges: async () => {
          return JSON.stringify(await fetchUserBadges())
        },
        userCalendar: async () => {
          return JSON.stringify(await fetchUserCalendar())
        },
        leetcode: async () => {
          return JSON.stringify({
            "submissions": await fetchSubmissions(),
            "profile": await fetchProfile(),
            "languageStats": await fetchLanguageStats(),
            "problemsSolved": await fetchProblemsSolved(),
            "skillsStats": await fetchSkillsStats(),
            "userBadges": await fetchUserBadges(),
            "userCalendar": await fetchUserCalendar()
          })
        }
      }
    }
  })
})

const server = createServer(yoga)

server.listen(4000, () => {
  console.info('Server is running on http://localhost:4000/graphql')
})