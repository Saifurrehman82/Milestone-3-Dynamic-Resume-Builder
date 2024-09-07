interface ResumeData {
    fathername: any;
    name: string;
    jobTitle: string;
    email: string;
    skills: string[];
    education: string;
    experience: string;
}

function generateResume(data: ResumeData) {
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

document.getElementById('resumeForm')?.addEventListener('submit', function (event) {
    event.preventDefault();

    const name = (document.getElementById('name') as HTMLInputElement).value;
    const fathername = (document.getElementById('fathername') as HTMLInputElement).value;
    const jobTitle = (document.getElementById('jobTitle') as HTMLInputElement).value;
    const email = (document.getElementById('email') as HTMLInputElement).value;
    const skills = (document.getElementById('skills') as HTMLInputElement).value.split(',');
    const education = (document.getElementById('education') as HTMLInputElement).value;
    const experience = (document.getElementById('experience') as HTMLInputElement).value;

    const resumeData: ResumeData = { name, fathername, jobTitle, email, skills, education, experience };

    document.getElementById('generatedResume')!.innerHTML = generateResume(resumeData);
    document.getElementById('generatedResume')!.style.display = 'block';
});
