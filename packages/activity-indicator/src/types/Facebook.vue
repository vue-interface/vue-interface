<template>
    <div class="activity-indicator-facebook">
        <div class="activity-indicator-facebook-rect1" />
        <div class="activity-indicator-facebook-rect2" />
        <div class="activity-indicator-facebook-rect3" />
        <div class="activity-indicator-facebook-rect4" />
        <div class="activity-indicator-facebook-rect5" />
    </div>
</template>

<style>
.activity-indicator-facebook {
  height: 4em;
}

.activity-indicator-facebook > div {
  background-color: #333;
  height: 100%;
  width: 6px;
  margin-right: 2px;
  display: inline-block;
  
  -webkit-animation: activity-indicator-facebook 1.2s infinite ease-in-out;
  animation: activity-indicator-facebook 1.2s infinite ease-in-out;
}

.activity-indicator-facebook .activity-indicator-facebook-rect2 {
  -webkit-animation-delay: -1.1s;
  animation-delay: -1.1s;
}

.activity-indicator-facebook .activity-indicator-facebook-rect3 {
  -webkit-animation-delay: -1.0s;
  animation-delay: -1.0s;
}

.activity-indicator-facebook .activity-indicator-facebook-rect4 {
  -webkit-animation-delay: -0.9s;
  animation-delay: -0.9s;
}

.activity-indicator-facebook .activity-indicator-facebook-rect5 {
  -webkit-animation-delay: -0.8s;
  animation-delay: -0.8s;
}

@-webkit-keyframes activity-indicator-facebook {
  0%, 40%, 100% { -webkit-transform: scaleY(0.4) }  
  20% { -webkit-transform: scaleY(1.0) }
}

@keyframes activity-indicator-facebook {
  0%, 40%, 100% { 
    transform: scaleY(0.4);
    -webkit-transform: scaleY(0.4);
  }  20% { 
    transform: scaleY(1.0);
    -webkit-transform: scaleY(1.0);
  }
}
</style>
