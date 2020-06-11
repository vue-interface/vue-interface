<template>
    <div class="activity-indicator-double-pulse">
        <div class="activity-indicator-double-pulse-bounce1" />
        <div class="activity-indicator-double-pulse-bounce2" />
    </div>
</template>

<style>
.activity-indicator-double-pulse {
  width: 2.5em;
  height: 2.5em;
  position: relative;
}

.activity-indicator-double-pulse-bounce1, .activity-indicator-double-pulse-bounce2 {
  width: 100%;
  height: 100%;
  border-radius: 50%;
  background-color: currentColor;
  opacity: 0.66;
  position: absolute;
  top: 0;
  left: 0;
  
  -webkit-animation: activity-indicator-double-pulse 2.0s infinite ease-in-out;
  animation: activity-indicator-double-pulse 2.0s infinite ease-in-out;
}

.activity-indicator-double-pulse-bounce2 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes activity-indicator-double-pulse {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes activity-indicator-double-pulse {
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>