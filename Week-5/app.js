"use strict";

// ============================================
// GLOBAL VARIABLES AND STATE
// ============================================
let studentData = {
    name: '',
    id: '',
    scores: [],
    numAssignments: 0
};

// ============================================
// STEP 1: GENERATE SCORE INPUT FIELDS
// Uses: Loops, DOM Manipulation, Decisions
// ============================================
function generateScoreInputs() {
    // Get student information
    const name = document.getElementById('studentName').value.trim();
    const id = document.getElementById('studentId').value.trim();
    const numAssignments = parseInt(document.getElementById('numAssignments').value);
    
    // DECISION: Validate inputs
    if (!name || !id) {
        alert('⚠️ Please enter both student name and ID!');
        return;
    }
    
    // DECISION: Validate number of assignments
    if (isNaN(numAssignments) || numAssignments < 1 || numAssignments > 10) {
        alert('⚠️ Please enter a valid number of assignments (1-10)!');
        return;
    }
    
    // Store student info
    studentData.name = name;
    studentData.id = id;
    studentData.numAssignments = numAssignments;
    
    // Clear previous inputs
    const container = document.getElementById('scoreInputsContainer');
    container.innerHTML = '';
    
    // LOOP: Create input fields for each assignment
    for (let i = 0; i < numAssignments; i++) {
        const scoreGroup = document.createElement('div');
        scoreGroup.className = 'score-input-group';
        
        scoreGroup.innerHTML = `
            <label for="score${i}">Assignment ${i + 1}:</label>
            <input type="number" 
                   id="score${i}" 
                   class="score-input" 
                   min="0" 
                   max="100" 
                   step="0.1"
                   placeholder="Enter score (0-100)">
            <span class="error-message" id="error${i}">Invalid score!</span>
        `;
        
        container.appendChild(scoreGroup);
    }
    
    // Show scores section
    document.getElementById('scoresSection').style.display = 'block';
    document.getElementById('scoresSection').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// STEP 2: VALIDATE AND COLLECT SCORES
// Uses: Loops, Arrays, Decisions
// ============================================
function validateAndCollectScores() {
    const scores = [];
    let allValid = true;
    
    // LOOP: Validate each score input
    for (let i = 0; i < studentData.numAssignments; i++) {
        const input = document.getElementById(`score${i}`);
        const errorMsg = document.getElementById(`error${i}`);
        const score = parseFloat(input.value);
        
        // DECISION: Check if score is valid
        if (isNaN(score) || score < 0 || score > 100) {
            input.classList.add('error');
            input.classList.add('shake');
            errorMsg.style.display = 'block';
            allValid = false;
            
            // Remove shake animation after it completes
            setTimeout(() => {
                input.classList.remove('shake');
            }, 500);
        } else {
            input.classList.remove('error');
            errorMsg.style.display = 'none';
            scores.push(score);
        }
    }
    
    // DECISION: Return scores only if all are valid
    if (allValid) {
        return scores;
    } else {
        alert('⚠️ Please fix the invalid scores marked in red!');
        return null;
    }
}

// ============================================
// STEP 3: CALCULATE AVERAGE
// Uses: Loops, Arrays, Functions
// ============================================
function calculateAverage(scores) {
    let total = 0;
    
    // LOOP: Sum all scores
    for (let i = 0; i < scores.length; i++) {
        total += scores[i];
    }
    
    const average = total / scores.length;
    return parseFloat(average.toFixed(2));
}

// ============================================
// STEP 4: DETERMINE LETTER GRADE
// Uses: Decisions (if-else chain)
// ============================================
function getLetterGrade(average) {
    // DECISION: Multiple conditions using if-else
    if (average >= 90) {
        return 'A+';
    } else if (average >= 85) {
        return 'A';
    } else if (average >= 80) {
        return 'A-';
    } else if (average >= 75) {
        return 'B+';
    } else if (average >= 70) {
        return 'B';
    } else if (average >= 65) {
        return 'C+';
    } else if (average >= 60) {
        return 'C';
    } else if (average >= 50) {
        return 'D';
    } else {
        return 'F';
    }
}

// ============================================
// STEP 5: DETERMINE PASS/FAIL STATUS
// Uses: Decisions, Conditional (ternary) operator
// ============================================
function getPassStatus(average) {
    // DECISION: Using ternary operator
    return average >= 50 ? 'PASS ✓' : 'FAIL ✗';
}

// ============================================
// STEP 6: GENERATE PERFORMANCE FEEDBACK
// Uses: Decisions (switch statement)
// ============================================
function getPerformanceFeedback(letterGrade) {
    let feedback;
    
    // DECISION: Using switch statement
    switch (letterGrade[0]) { // Get first character
        case 'A':
            feedback = '🌟 Excellent work! Outstanding performance. Keep it up!';
            break;
        case 'B':
            feedback = '👍 Good job! You\'re doing well. A bit more effort can get you to an A!';
            break;
        case 'C':
            feedback = '📚 Satisfactory performance. There\'s room for improvement.';
            break;
        case 'D':
            feedback = '⚠️ Needs improvement. Consider seeking additional help or tutoring.';
            break;
        case 'F':
            feedback = '❌ Unsatisfactory. Please meet with your instructor immediately.';
            break;
        default:
            feedback = 'No feedback available.';
    }
    
    return feedback;
}

// ============================================
// STEP 7: FIND HIGHEST AND LOWEST SCORES
// Uses: Loops, Decisions, Arrays
// ============================================
function findMinMax(scores) {
    let highest = scores[0];
    let lowest = scores[0];
    
    // LOOP: Iterate through scores to find min and max
    for (let i = 1; i < scores.length; i++) {
        // DECISION: Check for highest
        if (scores[i] > highest) {
            highest = scores[i];
        }
        // DECISION: Check for lowest
        if (scores[i] < lowest) {
            lowest = scores[i];
        }
    }
    
    return { highest, lowest };
}

// ============================================
// STEP 8: COUNT GRADES ABOVE/BELOW AVERAGE
// Uses: Loops, Decisions, Counters
// ============================================
function analyzeScores(scores, average) {
    let aboveAverage = 0;
    let belowAverage = 0;
    let atAverage = 0;
    
    // LOOP: Count scores in each category
    for (let i = 0; i < scores.length; i++) {
        // DECISION: Compare each score to average
        if (scores[i] > average) {
            aboveAverage++;
        } else if (scores[i] < average) {
            belowAverage++;
        } else {
            atAverage++;
        }
    }
    
    return { aboveAverage, belowAverage, atAverage };
}

// ============================================
// STEP 9: CALCULATE GRADES (MAIN FUNCTION)
// Uses: All concepts combined
// ============================================
function calculateGrades() {
    // Validate and collect all scores
    const scores = validateAndCollectScores();
    
    // DECISION: Only proceed if validation passed
    if (!scores) {
        return;
    }
    
    // Store scores in student data
    studentData.scores = scores;
    
    // Calculate all metrics
    const average = calculateAverage(scores);
    const letterGrade = getLetterGrade(average);
    const passStatus = getPassStatus(average);
    const feedback = getPerformanceFeedback(letterGrade);
    const { highest, lowest } = findMinMax(scores);
    const analysis = analyzeScores(scores, average);
    
    // Display the report
    displayReport(average, letterGrade, passStatus, feedback, highest, lowest, analysis);
}

// ============================================
// STEP 10: DISPLAY THE REPORT
// Uses: DOM Manipulation, Template Literals
// ============================================
function displayReport(average, letterGrade, passStatus, feedback, highest, lowest, analysis) {
    const reportContent = document.getElementById('reportContent');
    const isPassing = average >= 50;
    
    // Create report HTML using template literals
    reportContent.innerHTML = `
        <div class="report-header">
            <h3>${studentData.name}</h3>
            <p>Student ID: ${studentData.id}</p>
        </div>
        
        <div class="report-details">
            <div class="detail-item">
                <div class="label">Total Assignments</div>
                <div class="value">${studentData.scores.length}</div>
            </div>
            <div class="detail-item">
                <div class="label">Highest Score</div>
                <div class="value">${highest}%</div>
            </div>
            <div class="detail-item">
                <div class="label">Lowest Score</div>
                <div class="value">${lowest}%</div>
            </div>
            <div class="detail-item">
                <div class="label">Average Score</div>
                <div class="value">${average}%</div>
            </div>
        </div>
        
        <div class="grade-display ${isPassing ? '' : 'fail'}">
            <h3>${letterGrade}</h3>
            <p>${passStatus}</p>
        </div>
        
        <div class="feedback-box">
            <strong>Feedback:</strong> ${feedback}
        </div>
        
        <div class="detail-item" style="margin-top: 20px;">
            <div class="label">All Scores</div>
            <div class="scores-list">
                ${generateScoreBadges(studentData.scores)}
            </div>
        </div>
    `;
    
    // Display statistics
    displayStatistics(analysis);
    
    // Show report section
    document.getElementById('reportSection').style.display = 'block';
    document.getElementById('statsSection').style.display = 'block';
    document.getElementById('reportSection').scrollIntoView({ behavior: 'smooth' });
}

// ============================================
// HELPER: GENERATE SCORE BADGES
// Uses: Loops, Template Literals
// ============================================
function generateScoreBadges(scores) {
    let badges = '';
    
    // LOOP: Create a badge for each score
    for (let i = 0; i < scores.length; i++) {
        badges += `<span class="score-badge">${scores[i]}%</span>`;
    }
    
    return badges;
}

// ============================================
// DISPLAY STATISTICS
// Uses: DOM Manipulation
// ============================================
function displayStatistics(analysis) {
    const statsContent = document.getElementById('statsContent');
    
    statsContent.innerHTML = `
        <div class="stats-grid">
            <div class="stat-card">
                <div class="stat-value">${analysis.aboveAverage}</div>
                <div class="stat-label">Above Average</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${analysis.atAverage}</div>
                <div class="stat-label">At Average</div>
            </div>
            <div class="stat-card">
                <div class="stat-value">${analysis.belowAverage}</div>
                <div class="stat-label">Below Average</div>
            </div>
        </div>
    `;
}

// ============================================
// RESET FORM TO START OVER
// Uses: DOM Manipulation, Functions
// ============================================
function resetForm() {
    // Clear all inputs
    document.getElementById('studentName').value = '';
    document.getElementById('studentId').value = '';
    document.getElementById('numAssignments').value = '';
    document.getElementById('scoreInputsContainer').innerHTML = '';
    
    // Hide sections
    document.getElementById('scoresSection').style.display = 'none';
    document.getElementById('reportSection').style.display = 'none';
    document.getElementById('statsSection').style.display = 'none';
    
    // Reset student data
    studentData = {
        name: '',
        id: '',
        scores: [],
        numAssignments: 0
    };
    
    // Scroll to top
    window.scrollTo({ top: 0, behavior: 'smooth' });
}