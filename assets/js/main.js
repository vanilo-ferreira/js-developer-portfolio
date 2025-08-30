function updateProfileInfo(profileData) {
  const photo = document.getSelection("profile-photo");
  photo.src = profileData.photo;
  photo.alt = profileData.name;


  const name = document.getElementById("profile-name");
  name.innerText = profileData.nome;

  const job = document.getElementById("profile-job");
  job.innerText = profileData.titulo;

  const location = document.getElementById("profile-location");
  location.innerText = profileData.localidade;

  const phone = document.getElementById("profile-phone");
  phone.innerText = profileData.telefone;
  phone.href = `tel: %${profileData.telefone}`

  const email = document.getElementById("profile-email");
  email.innerText = profileData.email;
  email.href = `mailto:${profileData.email}`
}

function updateSoftSkills(profileData) {
  const softSkills = document.getElementById("profile-skills-softskills")
  softSkills.innerHTML = profileData.skills.softSkills.map(skill => `<li>${skill}</li>`).join("");
}

function updateHardSkills(profileData) {
  const hardSkills = document.getElementById("profile-skills-hardSkills")
  hardSkills.innerHTML = profileData.skills.hardSkills.map(skill => `<li><img src=${skill.logo} alt=${skill.name} title=${skill.name}</li>`).join("");
}

function updateLanguages(profileData) {
  const languages = document.getElementById("languages")
  languages.innerHTML = profileData.language.map(language => `<li>${language}</li>`).join("");
}

function updatePortfolio(profileData) {
  const portfolio = document.getElementById("portfolio")
  portfolio.innerHTML = profileData.portfolio.map(project => {
    return`
    <li>
        <h3 ${project.github ? 'class="github"' : ""}>${project.name}</h3>
        <a href=${project.url} target="_blank">${project.url}</a>
    </li>`
  }).join("")
}

function uptdateProfessionalExperience(profileData){
  const professionalExperience = document.getElementById("profile.professionalExperience")
  professionalExperience.innerHTML = profileData.professionalExperience.map(experience => {
    return `
    <li>
      <h3 class="title">${experience.name}</h3>
        <p class="period">${experience.period}</p>
        <p>${experience.description}</p>
    </li>
    `
  }).join("")
}


(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
  updateHardSkills(profileData);
  updateLanguages(profileData);
  updatePortfolio(profileData);
  uptdateProfessionalExperience(profileData);
})()