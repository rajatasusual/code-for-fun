require('dotenv').config();
/**
 * Asynchronously fetches submissions from the specified URL using the fetch API.
 *
 * @return {Promise} A Promise that resolves to the response data.
 */
async function fetchSubmissions() {
    const response = await fetch("https://leetcode.com/graphql/", {
        "headers": {
            "content-type": "application/json"
        },
        "body": `{\"query\":\"\\n    query recentAcSubmissions($username: String!, $limit: Int!) {\\n  recentAcSubmissionList(username: $username, limit: $limit) {\\n    id\\n    title\\n    titleSlug\\n    timestamp\\n  }\\n}\\n    \",\"variables\":{\"username\":\"${process.env.LEETCODE_USERNAME}\",\"limit\":500},\"operationName\":\"recentAcSubmissions\"}`,
        "method": "POST"
    }).then(res => res.json());
    // waits until the request completes...
    return response;
}

/**
 * Asynchronously fetches the user's public profile from the specified GraphQL endpoint.
 *
 * @return {Promise} The response from the GraphQL endpoint
 */
async function fetchProfile() {
    const response = await fetch("https://leetcode.com/graphql/", {
        "headers": {
            "content-type": "application/json"
        },
        "body": `{\"query\":\"\\n    query userPublicProfile($username: String!) {\\n  matchedUser(username: $username) {\\n    contestBadge {\\n      name\\n      expired\\n      hoverText\\n      icon\\n    }\\n    username\\n    githubUrl\\n    twitterUrl\\n    linkedinUrl\\n    profile {\\n      ranking\\n      userAvatar\\n      realName\\n      aboutMe\\n      school\\n      websites\\n      countryName\\n      company\\n      jobTitle\\n      skillTags\\n      postViewCount\\n      postViewCountDiff\\n      reputation\\n      reputationDiff\\n      solutionCount\\n      solutionCountDiff\\n      categoryDiscussCount\\n      categoryDiscussCountDiff\\n    }\\n  }\\n}\\n    \",\"variables\":{\"username\":\"${process.env.LEETCODE_USERNAME}\"},\"operationName\":\"userPublicProfile\"}`,
        "method": "POST"
    }).then(res => res.json());

    return response;
}

/**
 * Fetches language statistics using GraphQL query and returns the response.
 *
 * @return {Promise} The response from the fetch request
 */
async function fetchLanguageStats() {
    const response = await fetch("https://leetcode.com/graphql/", {
        "headers": {
            "content-type": "application/json",
        },
        "body": `{\"query\":\"\\n    query languageStats($username: String!) {\\n  matchedUser(username: $username) {\\n    languageProblemCount {\\n      languageName\\n      problemsSolved\\n    }\\n  }\\n}\\n    \",\"variables\":{\"username\":\"${process.env.LEETCODE_USERNAME}\"},\"operationName\":\"languageStats\"}`,
        "method": "POST"
    }).then(res => res.json());

    return response;
}

/**
 * Asynchronously fetches the skills statistics.
 *
 * @return {Promise} The response from the fetch request
 */
async function fetchSkillsStats() {
    const response = await fetch("https://leetcode.com/graphql/", {
        "headers": {
            "content-type": "application/json"
        },
        "body": `{\"query\":\"\\n    query skillStats($username: String!) {\\n  matchedUser(username: $username) {\\n    tagProblemCounts {\\n      advanced {\\n        tagName\\n        tagSlug\\n        problemsSolved\\n      }\\n      intermediate {\\n        tagName\\n        tagSlug\\n        problemsSolved\\n      }\\n      fundamental {\\n        tagName\\n        tagSlug\\n        problemsSolved\\n      }\\n    }\\n  }\\n}\\n    \",\"variables\":{\"username\":\"${process.env.LEETCODE_USERNAME}\"},\"operationName\":\"skillStats\"}`,
        "method": "POST"
    }).then(res => res.json());

    return response;
}

/**
 * Asynchronously fetches the problems solved by the user from the specified API endpoint.
 *
 * @return {Promise} The response from the API containing the problems solved by the user.
 */
async function fetchProblemsSolved() {
    const response = await fetch("https://leetcode.com/graphql/", {
        "headers": {
            "content-type": "application/json"
        },
        "body": `{\"query\":\"\\n    query userProblemsSolved($username: String!) {\\n  allQuestionsCount {\\n    difficulty\\n    count\\n  }\\n  matchedUser(username: $username) {\\n    problemsSolvedBeatsStats {\\n      difficulty\\n      percentage\\n    }\\n    submitStatsGlobal {\\n      acSubmissionNum {\\n        difficulty\\n        count\\n      }\\n    }\\n  }\\n}\\n    \",\"variables\":{\"username\":\"${process.env.LEETCODE_USERNAME}\"},\"operationName\":\"userProblemsSolved\"}`,
        "method": "POST"
    }).then(res => res.json());

    return response;
}

/**
 * Asynchronously fetches the user badges from the specified URL using GraphQL.
 *
 * @return {Promise} The response from the fetch request
 */
async function fetchUserBadges() {
    const response = await fetch("https://leetcode.com/graphql/", {
        "headers": {
            "content-type": "application/json"
        },
        "body": `{\"query\":\"\\n    query userBadges($username: String!) {\\n  matchedUser(username: $username) {\\n    badges {\\n      id\\n      name\\n      shortName\\n      displayName\\n      icon\\n      hoverText\\n      medal {\\n        slug\\n        config {\\n          iconGif\\n          iconGifBackground\\n        }\\n      }\\n      creationDate\\n      category\\n    }\\n    upcomingBadges {\\n      name\\n      icon\\n      progress\\n    }\\n  }\\n}\\n    \",\"variables\":{\"username\":\"${process.env.LEETCODE_USERNAME}\"},\"operationName\":\"userBadges\"}`,
        "method": "POST"
    }).then(res => res.json());

    return response;
}

/**
 * Fetches the user's calendar data from the specified API endpoint.
 *
 * @return {Promise} The response from the API endpoint.
 */
async function fetchUserCalendar() {
    const response = await fetch("https://leetcode.com/graphql/", {
        "headers": {
            "content-type": "application/json"
        },
        "body": `{\"query\":\"\\n    query userProfileCalendar($username: String!, $year: Int) {\\n  matchedUser(username: $username) {\\n    userCalendar(year: $year) {\\n      activeYears\\n      streak\\n      totalActiveDays\\n      dccBadges {\\n        timestamp\\n        badge {\\n          name\\n          icon\\n        }\\n      }\\n      submissionCalendar\\n    }\\n  }\\n}\\n    \",\"variables\":{\"username\":\"${process.env.LEETCODE_USERNAME}\"},\"operationName\":\"userProfileCalendar\"}`,
        "method": "POST"
    }).then(res => res.json());

    return response;
}

/**
 * Asynchronously retrieves weather data from the OpenWeatherMap API.
 *
 * @return {Promise} The weather data response from the API.
 */
async function fetchWeather() {
    
    const response = await fetch(`https://history.openweathermap.org/data/2.5/history/city?lat=53.3498&lon=6.2603&type=hour&start=${new Date().getTime()}&end=${new Date().getTime()}&appid=${process.env.WEATHER_API}`, {
        method: 'GET',
    }).then(res => res.json());
    // waits until the request completes...
    return response;
}

module.exports = {
    fetchSubmissions,
    fetchProfile,
    fetchProblemsSolved,
    fetchUserBadges,
    fetchUserCalendar,
    fetchLanguageStats,
    fetchSkillsStats,
    fetchWeather
}