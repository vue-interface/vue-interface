<template>
    <div class="activity-indicator-square-orbit">
        <div class="activity-indicator-square-orbit-cube1" />
        <div class="activity-indicator-square-orbit-cube2" />
    </div>
</template>

<style>
.activity-indicator-square-orbit {
  margin: .5em;
  width: 3em;
  height: 3em;
  position: relative;
}

.activity-indicator-square-orbit-cube1, .activity-indicator-square-orbit-cube2 {
  background-color: #333;
  width: 1em;
  height: 1em;
  position: absolute;
  top: 0;
  left: 0;
  
  -webkit-animation: activity-indicator-square-orbit 1.8s infinite ease-in-out;
  animation: activity-indicator-square-orbit 1.8s infinite ease-in-out;
}

.activity-indicator-square-orbit-cube2 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

@-webkit-keyframes activity-indicator-square-orbit {
  25% { -webkit-transform: translateX(2em) rotate(-90deg) scale(0.5) }
  50% { -webkit-transform: translateX(2em) translateY(2em) rotate(-180deg) }
  75% { -webkit-transform: translateX(0px) translateY(2em) rotate(-270deg) scale(0.5) }
  100% { -webkit-transform: rotate(-360deg) }
}

@keyframes activity-indicator-square-orbit {
  25% { 
    transform: translateX(2em) rotate(-90deg) scale(0.5);
    -webkit-transform: translateX(2em) rotate(-90deg) scale(0.5);
  } 50% { 
    transform: translateX(2em) translateY(2em) rotate(-179deg);
    -webkit-transform: translateX(2em) translateY(2em) rotate(-179deg);
  } 50.1% { 
    transform: translateX(2em) translateY(2em) rotate(-180deg);
    -webkit-transform: translateX(2em) translateY(2em) rotate(-180deg);
  } 75% { 
    transform: translateX(0px) translateY(2em) rotate(-270deg) scale(0.5);
    -webkit-transform: translateX(0px) translateY(2em) rotate(-270deg) scale(0.5);
  } 100% { 
    transform: rotate(-360deg);
    -webkit-transform: rotate(-360deg);
  }
}
</style>
