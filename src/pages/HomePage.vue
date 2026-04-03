<template>
  <div class="page">
    <div class = "intro">
      <div class="header-container">
        <img class="profile-pic" src="../assets/images/self.jpeg" alt="Profile Picture" />
        <div class = "greeting">
            <p class = "n"> Mathew Raju</p>
        </div>
      </div>
      <div class = "socials">
          <a
          class="g"
          href="https://github.com/wanderman12345"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          title="GitHub"
        >
          <i class="pi pi-github" aria-hidden="true"></i>
        </a>
        <a
          class="l"
          href="https://www.linkedin.com/in/mathew-raju-6b4517171/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Linkedin"
          title="Linkedin"
        >
          <i class="pi pi-linkedin" aria-hidden="true"></i>
        </a>
        <a href="mailto:[mathew2002raj@gmail.com]?subject=Hello from your Portfolio!">
        <i class="pi pi-envelope"></i>
      </a>
      </div>
    </div>
    <div class = "body">
      <div class = "curr">
       Graduate Researcher at the <span class="highlight">University Of California San Diego</span>
       <img class ="triton" src = "../assets/images/triton.png"></img>
      </div>
      <div class = "prev">
        Obtained my B.S in <span class="highlight-bold">Computer Engineering</span> at <span class="highlight">University Of California Santa Cruz</span>
       <img class ="sammy" src = "../assets/images/sammy.png"></img>
      </div>
        <div class = "about-me">
        Wrapped my work as a researcher in the <span class="highlight">Contextual Robotics Insitute</span> with the goal of how we can use <span class="highlight">Vision Language models</span> to further improve <span class="highlight">Task and motion planning</span> for multi agent systems.
        </div>
        <div class = "interests">
         I'm deeply interested in <span class="highlight-bold">embodied AI</span> and building scalable machine learning systems. Currently, I'm expanding my expertise by diving into <span class="highlight-bold">ML compilers</span> and <span class="highlight-bold">on-device AI deployment</span>.
        </div>
    </div>
  </div>
</template>

<script setup>
import Card from 'primevue/card';
</script>

<style scoped>
  .interests {
    margin-top: 4em;
  }
  .socials {

    display: flex;
    flex-direction: row;
    margin-top: 3em;
    justify-content: space-between;
    margin-left: 3em;
    width: 10em;
  }
  .socials .pi {
    font-size: 25px;
  }
  .triton {
    margin-left: 0.5em;
    width: 25px;
    height: auto;
    background: transparent;
  }
  .sammy {
    margin-left: 0.3em;
    width: 35px;
    height: auto;
  }
  .about-me {
    margin-top: 4em;
  }
  .body {
    padding: 1.5em;
    flex-grow: 1;
    font-size: 19px;
    font-weight: 400;
    display: flex;
    flex-direction: column;
  }
  .about-card {
    background-color: transparent;
  }
  .page {
    display: flex;
    flex-direction: row;
    padding: 8em;
    gap: 4rem;
  }
  .intro {
    display: flex;
    flex-direction: column;
    flex: 0 0 420px;

    .greeting {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    /* flex-wrap: wrap; */
    }

    .title{
      font-size: 1.3em;
      font-weight: 400;
    }

    .intro-greeting {
      font-size: 2.5em;
    }
    .n {
      font-size: 3.0em;
      font-weight: 600;
    }
  }

  .highlight {
    color: #c4a471; /* Mid-tone golden-beige that contrasts against both white and black */
    font-weight: 600;
  }

  .highlight-bold {
    font-weight: 800; /* Emphasize strictly via font-weight */
  }

  .profile-pic {
    width: 220px;
    height: 220px;
    border-radius: 50%;
    object-fit: cover;
    margin-bottom: 2.5rem;
    box-shadow: 0 4px 10px rgba(0, 0, 0, 0.15);
  }

  .header-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: max-content;
  }

  /* Tablet */
  @media (max-width: 1024px) {
    .page {
      padding: 4em;
      gap: 2rem;
    }
    .intro {
      flex: 0 0 350px;
    }
    .profile-pic {
      width: 180px;
      height: 180px;
    }
  }

  /* Mobile */
  @media (max-width: 768px) {
    .page {
      flex-direction: column;
      padding: 2em 1em;
      gap: 2rem;
    }
    .intro {
      flex: 1;
      align-items: center;
      text-align: center;
    }
    .intro .greeting {
      justify-content: center;
    }
    .header-container {
      width: 100%;
    }
    .profile-pic {
      width: 160px;
      height: 160px;
      margin-bottom: 1.5rem;
    }
    .socials {
      margin-left: 0;
      margin-top: 1.5em;
      width: 12em;
      justify-content: space-around;
    }
    .body {
      padding: 1em 0;
      text-align: center;
    }
    .interests, .about-me {
      margin-top: 2em;
    }
    .n {
      font-size: 2.2em !important;
    }
  }
</style>

