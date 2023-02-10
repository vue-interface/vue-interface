<template>
    <div class="activity-indicator-circle-trail">
        <div class="activity-indicator-circle-trail1 activity-indicator-child" />
        <div class="activity-indicator-circle-trail2 activity-indicator-child" />
        <div class="activity-indicator-circle-trail3 activity-indicator-child" />
        <div class="activity-indicator-circle-trail4 activity-indicator-child" />
        <div class="activity-indicator-circle-trail5 activity-indicator-child" />
        <div class="activity-indicator-circle-trail6 activity-indicator-child" />
        <div class="activity-indicator-circle-trail7 activity-indicator-child" />
        <div class="activity-indicator-circle-trail8 activity-indicator-child" />
        <div class="activity-indicator-circle-trail9 activity-indicator-child" />
        <div class="activity-indicator-circle-trail10 activity-indicator-child" />
        <div class="activity-indicator-circle-trail11 activity-indicator-child" />
        <div class="activity-indicator-circle-trail12 activity-indicator-child" />
    </div>
</template>

<style>
.activity-indicator-circle-trail {
  width: 2.5em;
  height: 2.5em;
  position: relative;
}
.activity-indicator-circle-trail .activity-indicator-child {
  width: 100%;
  height: 100%;
  position: absolute;
  left: 0;
  top: 0;
}
.activity-indicator-circle-trail .activity-indicator-child:before {
  content: '';
  display: block;
  margin: 0 auto;
  width: .4em;
  height: .4em;
  background-color: currentColor;
  border-radius: 100%;
  -webkit-animation: activity-indicator-circle-trail 1.2s infinite ease-in-out both;
          animation: activity-indicator-circle-trail 1.2s infinite ease-in-out both;
}
.activity-indicator-circle-trail .activity-indicator-circle-trail2 {
  -webkit-transform: rotate(30deg);
      -ms-transform: rotate(30deg);
          transform: rotate(30deg); }
.activity-indicator-circle-trail .activity-indicator-circle-trail3 {
  -webkit-transform: rotate(60deg);
      -ms-transform: rotate(60deg);
          transform: rotate(60deg); }
.activity-indicator-circle-trail .activity-indicator-circle-trail4 {
  -webkit-transform: rotate(90deg);
      -ms-transform: rotate(90deg);
          transform: rotate(90deg); }
.activity-indicator-circle-trail .activity-indicator-circle-trail5 {
  -webkit-transform: rotate(120deg);
      -ms-transform: rotate(120deg);
          transform: rotate(120deg); }
.activity-indicator-circle-trail .activity-indicator-circle-trail6 {
  -webkit-transform: rotate(150deg);
      -ms-transform: rotate(150deg);
          transform: rotate(150deg); }
.activity-indicator-circle-trail .activity-indicator-circle-trail7 {
  -webkit-transform: rotate(180deg);
      -ms-transform: rotate(180deg);
          transform: rotate(180deg); }
.activity-indicator-circle-trail .activity-indicator-circle-trail8 {
  -webkit-transform: rotate(210deg);
      -ms-transform: rotate(210deg);
          transform: rotate(210deg); }
.activity-indicator-circle-trail .activity-indicator-circle-trail9 {
  -webkit-transform: rotate(240deg);
      -ms-transform: rotate(240deg);
          transform: rotate(240deg); }
.activity-indicator-circle-trail .activity-indicator-circle-trail10 {
  -webkit-transform: rotate(270deg);
      -ms-transform: rotate(270deg);
          transform: rotate(270deg); }
.activity-indicator-circle-trail .activity-indicator-circle-trail11 {
  -webkit-transform: rotate(300deg);
      -ms-transform: rotate(300deg);
          transform: rotate(300deg); }
.activity-indicator-circle-trail .activity-indicator-circle-trail12 {
  -webkit-transform: rotate(330deg);
      -ms-transform: rotate(330deg);
          transform: rotate(330deg); }
.activity-indicator-circle-trail .activity-indicator-circle-trail2:before {
  -webkit-animation-delay: -1.1s;
          animation-delay: -1.1s; }
.activity-indicator-circle-trail .activity-indicator-circle-trail3:before {
  -webkit-animation-delay: -1s;
          animation-delay: -1s; }
.activity-indicator-circle-trail .activity-indicator-circle-trail4:before {
  -webkit-animation-delay: -0.9s;
          animation-delay: -0.9s; }
.activity-indicator-circle-trail .activity-indicator-circle-trail5:before {
  -webkit-animation-delay: -0.8s;
          animation-delay: -0.8s; }
.activity-indicator-circle-trail .activity-indicator-circle-trail6:before {
  -webkit-animation-delay: -0.7s;
          animation-delay: -0.7s; }
.activity-indicator-circle-trail .activity-indicator-circle-trail7:before {
  -webkit-animation-delay: -0.6s;
          animation-delay: -0.6s; }
.activity-indicator-circle-trail .activity-indicator-circle-trail8:before {
  -webkit-animation-delay: -0.5s;
          animation-delay: -0.5s; }
.activity-indicator-circle-trail .activity-indicator-circle-trail9:before {
  -webkit-animation-delay: -0.4s;
          animation-delay: -0.4s; }
.activity-indicator-circle-trail .activity-indicator-circle-trail10:before {
  -webkit-animation-delay: -0.3s;
          animation-delay: -0.3s; }
.activity-indicator-circle-trail .activity-indicator-circle-trail11:before {
  -webkit-animation-delay: -0.2s;
          animation-delay: -0.2s; }
.activity-indicator-circle-trail .activity-indicator-circle-trail12:before {
  -webkit-animation-delay: -0.1s;
          animation-delay: -0.1s; }

@-webkit-keyframes activity-indicator-circle-trail {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0);
  } 40% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}

@keyframes activity-indicator-circle-trail {
  0%, 80%, 100% {
    -webkit-transform: scale(0);
            transform: scale(0);
  } 40% {
    -webkit-transform: scale(1);
            transform: scale(1);
  }
}
</style>
