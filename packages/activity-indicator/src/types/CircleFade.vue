<template>
    <div class="activity-indicator-circle-fade">
        <div class="activity-indicator-circle1 activity-indicator-circle" />
        <div class="activity-indicator-circle2 activity-indicator-circle" />
        <div class="activity-indicator-circle3 activity-indicator-circle" />
        <div class="activity-indicator-circle4 activity-indicator-circle" />
        <div class="activity-indicator-circle5 activity-indicator-circle" />
        <div class="activity-indicator-circle6 activity-indicator-circle" />
        <div class="activity-indicator-circle7 activity-indicator-circle" />
        <div class="activity-indicator-circle8 activity-indicator-circle" />
        <div class="activity-indicator-circle9 activity-indicator-circle" />
        <div class="activity-indicator-circle10 activity-indicator-circle" />
        <div class="activity-indicator-circle11 activity-indicator-circle" />
        <div class="activity-indicator-circle12 activity-indicator-circle" />
    </div>
</template>

<style>
.activity-indicator-circle-fade {
  width: 2.5em;
  height: 2.5em;
  position: relative;
}

.activity-indicator-circle-fade .activity-indicator-circle {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}

.activity-indicator-circle-fade .activity-indicator-circle:before {
  content: '';
  display: block;
  margin: 0 auto;
  width: 15%;
  height: 15%;
  background-color: #333;
  border-radius: 100%;
  -webkit-animation: activity-indicator-circle-fade 1.2s infinite ease-in-out both;
          animation: activity-indicator-circle-fade 1.2s infinite ease-in-out both;
}
.activity-indicator-circle-fade .activity-indicator-circle2 {
  -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
          transform: rotate(30deg);
}
.activity-indicator-circle-fade .activity-indicator-circle3 {
  -webkit-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
          transform: rotate(60deg);
}
.activity-indicator-circle-fade .activity-indicator-circle4 {
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg);
}
.activity-indicator-circle-fade .activity-indicator-circle5 {
  -webkit-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
          transform: rotate(120deg);
}
.activity-indicator-circle-fade .activity-indicator-circle6 {
  -webkit-transform: rotate(150deg);
      -ms-transform: rotate(150deg);
          transform: rotate(150deg);
}
.activity-indicator-circle-fade .activity-indicator-circle7 {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg);
}
.activity-indicator-circle-fade .activity-indicator-circle8 {
  -webkit-transform: rotate(210deg);
      -ms-transform: rotate(210deg);
          transform: rotate(210deg);
}
.activity-indicator-circle-fade .activity-indicator-circle9 {
  -webkit-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
          transform: rotate(240deg);
}
.activity-indicator-circle-fade .activity-indicator-circle10 {
  -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
          transform: rotate(270deg);
}
.activity-indicator-circle-fade .activity-indicator-circle11 {
  -webkit-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
          transform: rotate(300deg); 
}
.activity-indicator-circle-fade .activity-indicator-circle12 {
  -webkit-transform: rotate(330deg);
      -ms-transform: rotate(330deg);
          transform: rotate(330deg); 
}
.activity-indicator-circle-fade .activity-indicator-circle2:before {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s; 
}
.activity-indicator-circle-fade .activity-indicator-circle3:before {
  -webkit-animation-delay: -1s;
          animation-delay: -1s; 
}
.activity-indicator-circle-fade .activity-indicator-circle4:before {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s; 
}
.activity-indicator-circle-fade .activity-indicator-circle5:before {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s; 
}
.activity-indicator-circle-fade .activity-indicator-circle6:before {
  -webkit-animation-delay: -0.7s;
          animation-delay: -0.7s; 
}
.activity-indicator-circle-fade .activity-indicator-circle7:before {
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s; 
}
.activity-indicator-circle-fade .activity-indicator-circle8:before {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s; 
}
.activity-indicator-circle-fade .activity-indicator-circle9:before {
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s;
}
.activity-indicator-circle-fade .activity-indicator-circle10:before {
  -webkit-animation-delay: -0.3s;
          animation-delay: -0.3s;
}
.activity-indicator-circle-fade .activity-indicator-circle11:before {
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s;
}
.activity-indicator-circle-fade .activity-indicator-circle12:before {
  -webkit-animation-delay: -0.1s;
          animation-delay: -0.1s;
}

@-webkit-keyframes activity-indicator-circle-fade {
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; }
}

@keyframes activity-indicator-circle-fade {
  0%, 39%, 100% { opacity: 0; }
  40% { opacity: 1; } 
}
</style>
