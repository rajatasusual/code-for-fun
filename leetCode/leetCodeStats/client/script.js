const BASE_DATE = new Date(2024, 0, 1);

/**
 * Fetches LeetCode data and updates the specified element with the result.
 *
 * @param {string} id - The id of the element to be updated
 * @return {void} 
 */
const fetchLeetCodeData = () => {

    fetch(`http://localhost:4000/graphql?query=query+%7B%0A++leetcode%0A%7D`, {
        method: 'GET',
    }).then(res => res.json()).then(res => {
        const leetcode = JSON.parse(res.data.leetcode);

        const recentAcceptedSubmissions = leetcode.submissions.data.recentAcSubmissionList;
        createTimelineChart(recentAcceptedSubmissions);

        const userCalendar = leetcode.userCalendar.data.matchedUser.userCalendar;
        const submissionCalendar = JSON.parse(userCalendar.submissionCalendar);
        const allSubmissions = createSubmissionsChart(submissionCalendar, submissions);

        const streak = userCalendar.streak;
        const totalActiveDays = userCalendar.totalActiveDays;
        createBadges(streak, totalActiveDays, allSubmissions);

        const tagProblemCounts = leetcode.skillsStats.data.matchedUser.tagProblemCounts;
        createTagProblemCounts(tagProblemCounts);
    });

}

/**
 * Creates a submissions chart using the provided submission calendar data array and ID.
 *
 * @param {Object} submissionCalendar - The submission calendar data array.
 * @param {string} id - The ID of the chart element.
 * @return {Chart} The created line chart.
 */
function createSubmissionsChart(submissionCalendar) {
    let i = 0;
    let totalSubmissions = 0;
    const submissionCalendarDataArray = Object.entries(submissionCalendar).map(key => {
        const date = new Date(Number(key[0]) * 1000).toDateString();
        const value = key[1];
        i++;
        totalSubmissions += value;

        return {
            date,
            value
        }
    });

    createChart(submissionCalendarDataArray, "submissions");

    return totalSubmissions;
}

/**
 * Create a line chart using the provided data and the specified ID for the chart container.
 *
 * @param {Array} data - The data to be used for the chart
 * @param {string} id - The ID of the chart container element
 */
function createChart(data, id) {
    const ctx = document.getElementById(id);

    new Chart(ctx, {
        type: 'line',
        data: {
            labels: data.map(key => key.date),
            datasets: [{
                label: '# of Submissions',
                data: data.map(key => key.value),
                borderWidth: 1,
                backgroundColor: '#0d6efd',
                borderColor: '#0d6efd20'
            }]
        },
        options: {
            scales: {
                y: {
                    beginAtZero: true
                }
            },
            responsive: true,
            animation: true,
            plugins: {
                legend: {
                    display: true
                },
                title: {
                    display: true,
                    text: 'LeetCode Submissions'
                },
                tooltip: {
                    enabled: true
                },
                zoom: {
                    enabled: true
                }
            }
        }
    });
}


function createTagProblemCounts(tagProblemCounts) {
    const tagProblemCountsDiv = document.getElementById("tagProblemCounts");
    tagProblemCountsDiv.innerHTML = "";

    Object.keys(tagProblemCounts).forEach(difficulty => {
        const card = document.createElement("div");
        card.classList.add("card");
        card.classList.add("col-md-3");
        const tagUl = document.createElement("ul");
        tagUl.innerText = difficulty;
        const tags = tagProblemCounts[difficulty];

        tags.sort((a, b) => b.problemsSolved - a.problemsSolved);

        let totalProblemsSolved = 0;

        tags.forEach(tag => {
            const tagLi = document.createElement("li");
            tagLi.innerText = tag.tagName + " : " + tag.problemsSolved + " problems solved";
            tagUl.appendChild(tagLi);

            totalProblemsSolved += tag.problemsSolved;
        })


        card.appendChild(tagUl);

        const totalProblemsSolvedLi = document.createElement("p");
        totalProblemsSolvedLi.innerText = "Total Problems Solved : " + totalProblemsSolved;
        card.appendChild(totalProblemsSolvedLi);

        tagProblemCountsDiv.appendChild(card);
    });

}

/**
 * Creates badges based on the provided streak, total active days, total submissions, and ID.
 *
 * @param {number} streak - the current streak value
 * @param {number} totalActiveDays - the total number of active days
 * @param {number} totalSubmissions - the total number of submissions
 * @param {string} id - the ID of the element to update
 */
function createBadges(streak, totalActiveDays, totalSubmissions) {
    const streaksDiv = document.getElementById('streaks');
    streaksDiv.innerHTML = `<i class="fa fa-fire" style="font-size:40px;color:#0d6efd"></i>   Streak : ${streak} days`;
    streaksDiv.innerHTML += `<br><br><i class="fa fa-clock-o" style="font-size:40px;color:#0d6efd"></i>    Active Days : ${totalActiveDays}`;
    streaksDiv.innerHTML += `<br><br><i class="fa fa-code" style="font-size:40px;color:#0d6efd"></i>    Total Submissions : ${totalSubmissions}`;
}

var BrowserText = (function () {
    var canvas = document.createElement('canvas'),
        context = canvas.getContext('2d');

    /**
     * Measures the rendered width of arbitrary text given the font size and font face
     * @param {string} text The text to measure
     * @param {number} fontSize The font size in pixels
     * @param {string} fontFace The font face ("Arial", "Helvetica", etc.)
     * @returns {number} The width of the text
     **/
    function getWidth(text, fontSize, fontFace) {
        context.font = fontSize + 'px ' + fontFace;
        return context.measureText(text).width;
    }

    return {
        getWidth: getWidth
    };
})();

function createTimelineChart(recentAcSubmissionList) {

    const mainDiv = document.getElementById('timelineChart');

    const container = document.createElement('div');
    container.classList.add('container');

    let left = false;

    recentAcSubmissionList.forEach(submission => {
        const card = document.createElement('div');
        card.classList.add('timeline-block');
        card.classList.add(left ? 'timeline-block-right' : 'timeline-block-left');

        const marker = document.createElement('div');
        marker.classList.add('marker');
        card.appendChild(marker);

        const content = document.createElement('div');
        content.classList.add('timeline-content');
        const title = document.createElement("h3");
        title.textContent = submission.title;
        const date = document.createElement("span");
        date.textContent = new Date(submission.timestamp * 1000).toDateString();

        content.appendChild(title);
        content.appendChild(date);

        card.appendChild(content);

        container.appendChild(card);

        left = !left;
    })

    mainDiv.appendChild(container)

}