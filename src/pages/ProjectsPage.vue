<template>
  <div class="page">
    <div class = "title">
      Projects
    </div>
    <div class = "content">
      <card>
      <template #title></template>
      <template #content>
      <div class = "FinRAG_content">
        <img class ="finRAG" src = "../assets/images/finRAG.png"></img>
        <div class = "FINrag-stuff">
            <div class = "finRAG_title">
             FinRag- A Financial Document Retrieval Pipeline
            </div>
            <div class = "finRAG_info">
              Financial documents are complex to read, and require
              prior knowledge on finances and company performance
              to best understand trends and features. Due to these
              complexities, we developed a specialized RAG system

              for financial documents, defining FinRAG as an efficient means for obtaining financial information.
            </div>
            </div>
      </div>
      </template>
      </card>
            <card>
      <template #title></template>
      <template #content>
      <div class = "Argo_content">
        <img class ="Argo" src = "../assets/images/argoVerse.png"></img>
        <div class = "Argo-stuff">
            <div class = "Argo_title">
             Argoverse - Trajectory Prediction and Motion Forecasting
            </div>
            <div class = "Argo_info">
              The deep learning task focuses on predicting the future path of a self-driving car using past movement
              data from itself and nearby vehicles. Using the Argoverse 2 dataset, which includes thousands of
              driving scenes with multiple agents, our goal is to forecast the ego car’s trajectory 60 time-steps into
              the future based on the first 50 time-steps of input and agent interactions.
            </div>
          </div>
      </div>
      </template>
      </card>
    </div>
  </div>
</template>

<script setup>
import Card from 'primevue/card';
</script>

<style scoped>
.finRAG_title {
  font-size: 21px;
  margin-left: 20%;
  font-weight: 500;
}

.finRAG_info{
    margin-top: 3em;
}

.Argo_title {
   font-size: 21px;
  margin-left: 20%;
  font-weight: 500;
}
.Argo-stuff {
  display: flex;
  flex-direction: column;
  margin-left: 4em;
}

.FINrag-stuff {
  display: flex;
  flex-direction: column;
  margin-left: 4em;
}

.Argo_info{
    margin-top: 3em;
}

.FinRAG_content {
  display: flex;
  flex-direction: row;
}

.Argo_content {
  display: flex;
  flex-direction: row;
}
.Argo_content {
  display: flex;
  flex-direction: row;
}
.content {
  display: flex;
  flex-direction: column;
}
.finRAG {
  width: 27em;
  height: auto;
  border: 2px solid var(--color-border-hover);
  border-radius: 8px;
}
.Argo {
  width: 27em;
  height: 17em;
  border: 2px solid var(--color-border-hover);
  border-radius: 8px;

}
.page {
  padding: 3em;
}
.title {
  margin-top: -3%;
  font-size: 39px;
  font-weight: 500;
}

/* Tablet */
@media (max-width: 1024px) {
  .page {
    padding: 2em;
  }
  .finRAG, .Argo {
    width: 20em;
  }
}

/* Mobile */
@media (max-width: 768px) {
  .page {
    padding: 1.5em;
  }
  .title {
    margin-top: 0;
    text-align: center;
    font-size: 32px;
  }
  .FinRAG_content, .Argo_content {
    flex-direction: column;
    align-items: center;
  }
  .finRAG, .Argo {
    width: 100%;
    max-width: 400px;
    height: auto;
  }
  .FINrag-stuff, .Argo-stuff {
    margin-left: 0;
    margin-top: 2em;
    text-align: center;
  }
  .finRAG_title, .Argo_title {
    margin-left: 0;
    font-size: 1.2em;
  }
  .finRAG_info, .Argo_info {
    margin-top: 1em;
  }
}
</style>
