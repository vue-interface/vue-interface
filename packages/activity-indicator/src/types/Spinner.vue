<template>
    <div class="activity-indicator-spinner">
        <div class="sk-spinner1 sk-spinner" />
        <div class="sk-spinner2 sk-spinner" />
        <div class="sk-spinner3 sk-spinner" />
        <div class="sk-spinner4 sk-spinner" />
        <div class="sk-spinner5 sk-spinner" />
        <div class="sk-spinner6 sk-spinner" />
        <div class="sk-spinner7 sk-spinner" />
        <div class="sk-spinner8 sk-spinner" />
        <div class="sk-spinner9 sk-spinner" />
        <div class="sk-spinner10 sk-spinner" />
        <div class="sk-spinner11 sk-spinner" />
        <div class="sk-spinner12 sk-spinner" />
    </div>
</template>

<style lang="postcss">
.activity-indicator-spinner {
  width: 2.5em;
  height: 2.5em;
  position: relative;
}

.activity-indicator-spinner .sk-spinner {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.activity-indicator-spinner .sk-spinner:before {
  content: '';
  display: block;
  margin: 0 auto;
  width: 10%;
  height: 33.333%;
  background-color: currentColor;
  -webkit-animation: sk-spinnerFadeDelay 1.2s infinite ease-in-out both;
          animation: sk-spinnerFadeDelay 1.2s infinite ease-in-out both;
}
.activity-indicator-spinner .sk-spinner2 {
  -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
          transform: rotate(30deg);
}
.activity-indicator-spinner .sk-spinner3 {
  -webkit-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
          transform: rotate(60deg);
}
.activity-indicator-spinner .sk-spinner4 {
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg);
}
.activity-indicator-spinner .sk-spinner5 {
  -webkit-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
          transform: rotate(120deg);
}
.activity-indicator-spinner .sk-spinner6 {
  -webkit-transform: rotate(150deg);
      -ms-transform: rotate(150deg);
          transform: rotate(150deg);
}
.activity-indicator-spinner .sk-spinner7 {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}
.activity-indicator-spinner .sk-spinner8 {
  -webkit-transform: rotate(210deg);
      -ms-transform: rotate(210deg);
          transform: rotate(210deg);
}
.activity-indicator-spinner .sk-spinner9 {
  -webkit-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
          transform: rotate(240deg);
}
.activity-indicator-spinner .sk-spinner10 {
  -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
          transform: rotate(270deg);
}
.activity-indicator-spinner .sk-spinner11 {
  -webkit-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
          transform: rotate(300deg); 
}
.activity-indicator-spinner .sk-spinner12 {
  -webkit-transform: rotate(330deg);
      -ms-transform: rotate(330deg);
          transform: rotate(330deg); 
}
.activity-indicator-spinner .sk-spinner2:before {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s; 
}
.activity-indicator-spinner .sk-spinner3:before {
  -webkit-animation-delay: -1s;
          animation-delay: -1s; 
}
.activity-indicator-spinner .sk-spinner4:before {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s; 
}
.activity-indicator-spinner .sk-spinner5:before {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s; 
}
.activity-indicator-spinner .sk-spinner6:before {
  -webkit-animation-delay: -0.7s;
          animation-delay: -0.7s; 
}
.activity-indicator-spinner .sk-spinner7:before {
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s; 
}
.activity-indicator-spinner .sk-spinner8:before {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s; 
}
.activity-indicator-spinner .sk-spinner9:before {
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s;
}
.activity-indicator-spinner .sk-spinner10:before {
  -webkit-animation-delay: -0.3s;
          animation-delay: -0.3s;
}
.activity-indicator-spinner .sk-spinner11:before {
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s;
}
.activity-indicator-spinner .sk-spinner12:before {
  -webkit-animation-delay: -0.1s;
          animation-delay: -0.1s;
}

@-webkit-keyframes sk-spinnerFadeDelay {
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; }
}

@keyframes sk-spinnerFadeDelay {
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; } 
}
</style>
