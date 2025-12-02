<template>
    <div class="activity-indicator-square-fold">
        <div class="activity-indicator-square-fold-square1 activity-indicator-square-fold-square" />
        <div class="activity-indicator-square-fold-square2 activity-indicator-square-fold-square" />
        <div class="activity-indicator-square-fold-square4 activity-indicator-square-fold-square" />
        <div class="activity-indicator-square-fold-square3 activity-indicator-square-fold-square" />
    </div>
</template>
<!-- <style>
.activity-indicator-square-fold {
  margin: 1em;
  width: 2.5em;
  height: 2.5em;
  position: relative;
  -webkit-transform: rotateZ(45deg);
          transform: rotateZ(45deg);
}

.activity-indicator-square-fold .activity-indicator-square-fold-square {
  float: left;
  width: 50%;
  height: 50%;
  position: relative;
  -webkit-transform: scale(1.1);
      -ms-transform: scale(1.1);
          transform: scale(1.1); 
}
.activity-indicator-square-fold .activity-indicator-square-fold-square:before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: #333;
  -webkit-animation: activity-indicator-square-fold 2.4s infinite linear both;
          animation: activity-indicator-square-fold 2.4s infinite linear both;
  -webkit-transform-origin: 100% 100%;
      -ms-transform-origin: 100% 100%;
          transform-origin: 100% 100%;
}
.activity-indicator-square-fold .activity-indicator-square-fold-square2 {
  -webkit-transform: scale(1.1) rotateZ(90deg);
          transform: scale(1.1) rotateZ(90deg);
}
.activity-indicator-square-fold .activity-indicator-square-fold-square3 {
  -webkit-transform: scale(1.1) rotateZ(180deg);
          transform: scale(1.1) rotateZ(180deg);
}
.activity-indicator-square-fold .activity-indicator-square-fold-square4 {
  -webkit-transform: scale(1.1) rotateZ(270deg);
          transform: scale(1.1) rotateZ(270deg);
}
.activity-indicator-square-fold .activity-indicator-square-fold-square2:before {
  -webkit-animation-delay: 0.3s;
          animation-delay: 0.3s;
}
.activity-indicator-square-fold .activity-indicator-square-fold-square3:before {
  -webkit-animation-delay: 0.6s;
          animation-delay: 0.6s; 
}
.activity-indicator-square-fold .activity-indicator-square-fold-square4:before {
  -webkit-animation-delay: 0.9s;
          animation-delay: 0.9s;
}
@-webkit-keyframes activity-indicator-square-fold {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  } 
}

@keyframes activity-indicator-square-fold {
  0%, 10% {
    -webkit-transform: perspective(140px) rotateX(-180deg);
            transform: perspective(140px) rotateX(-180deg);
    opacity: 0; 
  } 25%, 75% {
    -webkit-transform: perspective(140px) rotateX(0deg);
            transform: perspective(140px) rotateX(0deg);
    opacity: 1; 
  } 90%, 100% {
    -webkit-transform: perspective(140px) rotateY(180deg);
            transform: perspective(140px) rotateY(180deg);
    opacity: 0; 
  }
}
</style> -->