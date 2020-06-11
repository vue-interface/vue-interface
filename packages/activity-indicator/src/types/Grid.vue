<template>
    <div class="activity-indicator-grid">
        <div class="activity-indicator-grid activity-indicator-grid1" />
        <div class="activity-indicator-grid activity-indicator-grid2" />
        <div class="activity-indicator-grid activity-indicator-grid3" />
        <div class="activity-indicator-grid activity-indicator-grid4" />
        <div class="activity-indicator-grid activity-indicator-grid5" />
        <div class="activity-indicator-grid activity-indicator-grid6" />
        <div class="activity-indicator-grid activity-indicator-grid7" />
        <div class="activity-indicator-grid activity-indicator-grid8" />
        <div class="activity-indicator-grid activity-indicator-grid9" />
    </div>
</template>

<style>
.activity-indicator-grid {
  width: 2.5em;
  height: 2.5em;
}

.activity-indicator-grid .activity-indicator-grid {
  width: 33%;
  height: 33%;
  background-color: currentColor;
  float: left;
  -webkit-animation: activity-indicator-grid 1.3s infinite ease-in-out;
          animation: activity-indicator-grid 1.3s infinite ease-in-out; 
}
.activity-indicator-grid .activity-indicator-grid1 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }
.activity-indicator-grid .activity-indicator-grid2 {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s; }
.activity-indicator-grid .activity-indicator-grid3 {
  -webkit-animation-delay: 0.4s;
          animation-delay: 0.4s; }
.activity-indicator-grid .activity-indicator-grid4 {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s; }
.activity-indicator-grid .activity-indicator-grid5 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }
.activity-indicator-grid .activity-indicator-grid6 {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s; }
.activity-indicator-grid .activity-indicator-grid7 {
  -webkit-animation-delay: 0s;
          animation-delay: 0s; }
.activity-indicator-grid .activity-indicator-grid8 {
  -webkit-animation-delay: 0.1s;
          animation-delay: 0.1s; }
.activity-indicator-grid .activity-indicator-grid9 {
  -webkit-animation-delay: 0.2s;
          animation-delay: 0.2s; }

@-webkit-keyframes activity-indicator-grid {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
  } 35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1); 
  }
}

@keyframes activity-indicator-grid {
  0%, 70%, 100% {
    -webkit-transform: scale3D(1, 1, 1);
            transform: scale3D(1, 1, 1);
  } 35% {
    -webkit-transform: scale3D(0, 0, 1);
            transform: scale3D(0, 0, 1);
  } 
}
</style>
