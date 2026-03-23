<template>
  <div class="page">
    <div class = "intro">
      <div class = "greeting">
          <p class = "n"> Mathew Raju</p>
      </div>
      <p class = "title">Backend Engineer</p>
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
        <a
          class="e"
          href="https://github.com/wanderman12345"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          title="Email"
        >
          <i class="pi pi-envelope" aria-hidden="true"></i>
        </a>
      </div>
    </div>
    <div class = "body">
      <div class = "curr">
       Graduate Researcher at the University Of California San Diego
       <img class ="triton" src = "../assets/images/triton.png"></img>
      </div>
      <div class = "prev">
        Obtained my B.S in Computer Engineering at University Of California Santa Cruz
       <img class ="sammy" src = "../assets/images/sammy.png"></img>
      </div>
        <div class = "about-me">
        Currently working as a researcher in the Contextual Robotics Insitute with the goal of how we can use Vision Language models to further improve Task and motion planning for multi agent systems.
      </div>
    </div>
  </div>
</template>

<script setup>
import Card from 'primevue/card';
</script>

<style scoped>
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
    font-size: 16px;
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
</style>

