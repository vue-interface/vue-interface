<template>
    <div class="activity-indicator-pulse" />
</template>

<style>
.activity-indicator-pulse {
  width: 2.5em;
  height: 2.5em;
  background-color: currentColor;
  border-radius: 100%;  
  -webkit-animation: activity-indicator-pulse 1.0s infinite ease-in-out;
  animation: activity-indicator-pulse 1.0s infinite ease-in-out;
}

@-webkit-keyframes activity-indicator-pulse {
  0% { -webkit-transform: scale(0) }
  100% {
    -webkit-transform: scale(1.0);
    opacity: 0;
  }
}

@keyframes activity-indicator-pulse {
  0% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 100% {
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
    opacity: 0;
  }
}
</style>