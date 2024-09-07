"use strict";
var _a;
function generateResume(data) {
    return `
        <h1>${data.name}</h1>
        <h2>${data.jobTitle}</h2>
        <h3>${data.fathername}</h3>
        <p><strong>Email:</strong> ${data.email}</p>
        <h3>Skills</h3>
        <ul>${data.skills.map(skill => `<li>${skill.trim()}</li>`).join('')}</ul>
        <h3>Education</h3>
        <p>${data.education}</p>
        <h3>Work Experience</h3>
        <p>${data.experience}</p>
    `;
}
(_a = document.getElementById('resumeForm')) === null || _a === void 0 ? void 0 : _a.addEventListener('submit', function (event) {
    event.preventDefault();
    const name = document.getElementById('name').value;
    const fathername = document.getElementById('fathername').value;
    const jobTitle = document.getElementById('jobTitle').value;
    const email = document.getElementById('email').value;
    const skills = document.getElementById('skills').value.split(',');
    const education = document.getElementById('education').value;
    const experience = document.getElementById('experience').value;
    const resumeData = { name, fathername, jobTitle, email, skills, education, experience };
    document.getElementById('generatedResume').innerHTML = generateResume(resumeData);
    document.getElementById('generatedResume').style.display = 'block';
});
