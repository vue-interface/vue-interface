<template>
    <div class="activity-indicator-circle-orbit">
        <div class="activity-indicator-circle-orbit-dot1" />
        <div class="activity-indicator-circle-orbit-dot2" />
    </div>
</template>

<style>
.activity-indicator-circle-orbit {
  width: 2.5em;
  height: 2.5em;
  position: relative;
  text-align: center;
  
  -webkit-animation: activity-indicator-circle-orbit-rotate 2.0s infinite linear;
  animation: activity-indicator-circle-orbit-rotate 2.0s infinite linear;
}

.activity-indicator-circle-orbit-dot1, .activity-indicator-circle-orbit-dot2 {
  width: 60%;
  height: 60%;
  display: inline-block;
  position: absolute;
  top: 0;
  background-color: currentColor;
  border-radius: 100%;
  
  -webkit-animation: activity-indicator-circle-orbit-bounce 2.0s infinite ease-in-out;
  animation: activity-indicator-circle-orbit-bounce 2.0s infinite ease-in-out;
}

.activity-indicator-circle-orbit-dot2 {
  top: auto;
  bottom: 0;
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

@-webkit-keyframes activity-indicator-circle-orbit-rotate { 100% { -webkit-transform: rotate(360deg) }}
@keyframes activity-indicator-circle-orbit-rotate { 100% { transform: rotate(360deg); -webkit-transform: rotate(360deg) }}

@-webkit-keyframes activity-indicator-circle-orbit-bounce {
  0%, 100% { -webkit-transform: scale(0.0) }
  50% { -webkit-transform: scale(1.0) }
}

@keyframes activity-indicator-circle-orbit-bounce {
  0%, 100% { 
    transform: scale(0.0);
    -webkit-transform: scale(0.0);
  } 50% { 
    transform: scale(1.0);
    -webkit-transform: scale(1.0);
  }
}
</style>