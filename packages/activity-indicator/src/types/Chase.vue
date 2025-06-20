<template>
    <div class="activity-indicator-chase">
        <div class="activity-indicator-chase-dot" />
        <div class="activity-indicator-chase-dot" />
        <div class="activity-indicator-chase-dot" />
        <div class="activity-indicator-chase-dot" />
        <div class="activity-indicator-chase-dot" />
        <div class="activity-indicator-chase-dot" />
    </div>
</template>

<style>
.activity-indicator-chase {
  width: 2.5em;
  height: 2.5em;
  position: relative;
  animation: activity-indicator-chase 2.5s infinite linear both;
}

.activity-indicator-chase-dot {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0; 
  animation: activity-indicator-chase-dot 2.0s infinite ease-in-out both; 
}

.activity-indicator-chase-dot:before {
  content: '';
  display: block;
  width: 25%;
  height: 25%;
  background-color: currentColor;
  border-radius: 100%;
  animation: activity-indicator-chase-dot-before 2.0s infinite ease-in-out both; 
}

.activity-indicator-chase-dot:nth-child(1) { animation-delay: -1.1s; }
.activity-indicator-chase-dot:nth-child(2) { animation-delay: -1.0s; }
.activity-indicator-chase-dot:nth-child(3) { animation-delay: -0.9s; }
.activity-indicator-chase-dot:nth-child(4) { animation-delay: -0.8s; }
.activity-indicator-chase-dot:nth-child(5) { animation-delay: -0.7s; }
.activity-indicator-chase-dot:nth-child(6) { animation-delay: -0.6s; }
.activity-indicator-chase-dot:nth-child(1):before { animation-delay: -1.1s; }
.activity-indicator-chase-dot:nth-child(2):before { animation-delay: -1.0s; }
.activity-indicator-chase-dot:nth-child(3):before { animation-delay: -0.9s; }
.activity-indicator-chase-dot:nth-child(4):before { animation-delay: -0.8s; }
.activity-indicator-chase-dot:nth-child(5):before { animation-delay: -0.7s; }
.activity-indicator-chase-dot:nth-child(6):before { animation-delay: -0.6s; }

@keyframes activity-indicator-chase {
  100% { transform: rotate(360deg); } 
}

@keyframes activity-indicator-chase-dot {
  80%, 100% { transform: rotate(360deg); } 
}

@keyframes activity-indicator-chase-dot-before {
  50% {
    transform: scale(0.4); 
  } 100%, 0% {
    transform: scale(1.0); 
  } 
}
</style>