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

function updateSoftSkills(profileData){
  const softSkills = document.getElementById("profile-skils-softskills")
  softSkills.innerHTML = profileData.skills.softSkills.map( skill => `<li>${skill}</li>`).join("");
}

(async () => {
  const profileData = await fetchProfileData();
  updateProfileInfo(profileData);
  updateSoftSkills(profileData);
})()