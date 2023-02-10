<template>
    <div class="activity-indicator-spinner">
        <div class="activity-indicator-spinner1 activity-indicator-spinner" />
        <div class="activity-indicator-spinner2 activity-indicator-spinner" />
        <div class="activity-indicator-spinner3 activity-indicator-spinner" />
        <div class="activity-indicator-spinner4 activity-indicator-spinner" />
        <div class="activity-indicator-spinner5 activity-indicator-spinner" />
        <div class="activity-indicator-spinner6 activity-indicator-spinner" />
        <div class="activity-indicator-spinner7 activity-indicator-spinner" />
        <div class="activity-indicator-spinner8 activity-indicator-spinner" />
        <div class="activity-indicator-spinner9 activity-indicator-spinner" />
        <div class="activity-indicator-spinner10 activity-indicator-spinner" />
        <div class="activity-indicator-spinner11 activity-indicator-spinner" />
        <div class="activity-indicator-spinner12 activity-indicator-spinner" />
    </div>
</template>

<style>
.activity-indicator-spinner {
  width: 2.5em;
  height: 2.5em;
  position: relative;
}

.activity-indicator-spinner .activity-indicator-spinner {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.activity-indicator-spinner .activity-indicator-spinner:before {
  content: '';
  display: block;
  margin: 0 auto;
  width: 10%;
  height: 33.333%;
  background-color: currentColor;
  -webkit-animation: activity-indicator-spinner 1.2s infinite ease-in-out both;
          animation: activity-indicator-spinner 1.2s infinite ease-in-out both;
}
.activity-indicator-spinner .activity-indicator-spinner2 {
  -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
          transform: rotate(30deg);
}
.activity-indicator-spinner .activity-indicator-spinner3 {
  -webkit-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
          transform: rotate(60deg);
}
.activity-indicator-spinner .activity-indicator-spinner4 {
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg);
}
.activity-indicator-spinner .activity-indicator-spinner5 {
  -webkit-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
          transform: rotate(120deg);
}
.activity-indicator-spinner .activity-indicator-spinner6 {
  -webkit-transform: rotate(150deg);
      -ms-transform: rotate(150deg);
          transform: rotate(150deg);
}
.activity-indicator-spinner .activity-indicator-spinner7 {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}
.activity-indicator-spinner .activity-indicator-spinner8 {
  -webkit-transform: rotate(210deg);
      -ms-transform: rotate(210deg);
          transform: rotate(210deg);
}
.activity-indicator-spinner .activity-indicator-spinner9 {
  -webkit-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
          transform: rotate(240deg);
}
.activity-indicator-spinner .activity-indicator-spinner10 {
  -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
          transform: rotate(270deg);
}
.activity-indicator-spinner .activity-indicator-spinner11 {
  -webkit-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
          transform: rotate(300deg); 
}
.activity-indicator-spinner .activity-indicator-spinner12 {
  -webkit-transform: rotate(330deg);
      -ms-transform: rotate(330deg);
          transform: rotate(330deg); 
}
.activity-indicator-spinner .activity-indicator-spinner2:before {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s; 
}
.activity-indicator-spinner .activity-indicator-spinner3:before {
  -webkit-animation-delay: -1s;
          animation-delay: -1s; 
}
.activity-indicator-spinner .activity-indicator-spinner4:before {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s; 
}
.activity-indicator-spinner .activity-indicator-spinner5:before {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s; 
}
.activity-indicator-spinner .activity-indicator-spinner6:before {
  -webkit-animation-delay: -0.7s;
          animation-delay: -0.7s; 
}
.activity-indicator-spinner .activity-indicator-spinner7:before {
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s; 
}
.activity-indicator-spinner .activity-indicator-spinner8:before {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s; 
}
.activity-indicator-spinner .activity-indicator-spinner9:before {
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s;
}
.activity-indicator-spinner .activity-indicator-spinner10:before {
  -webkit-animation-delay: -0.3s;
          animation-delay: -0.3s;
}
.activity-indicator-spinner .activity-indicator-spinner11:before {
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s;
}
.activity-indicator-spinner .activity-indicator-spinner12:before {
  -webkit-animation-delay: -0.1s;
          animation-delay: -0.1s;
}

@-webkit-keyframes activity-indicator-spinner {
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; }
}

@keyframes activity-indicator-spinner {
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; } 
}
</style>
