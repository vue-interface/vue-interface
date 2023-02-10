<template>
    <div class="activity-indicator-square" />
</template>

<style>
.activity-indicator-square {
  width: 2.5em;
  height: 2.5em;
  background-color: currentColor;
  -webkit-animation: activity-indicator-square 1.2s infinite ease-in-out;
  animation: activity-indicator-square 1.2s infinite ease-in-out;
}

@-webkit-keyframes activity-indicator-square {
  0% { -webkit-transform: perspective(120px) }
  50% { -webkit-transform: perspective(120px) rotateY(180deg) }
  100% { -webkit-transform: perspective(120px) rotateY(180deg)  rotateX(180deg) }
}

@keyframes activity-indicator-square {
  0% { 
    transform: perspective(120px) rotateX(0deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(0deg) rotateY(0deg) 
  } 50% { 
    transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg);
    -webkit-transform: perspective(120px) rotateX(-180.1deg) rotateY(0deg) 
  } 100% { 
    transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
    -webkit-transform: perspective(120px) rotateX(-180deg) rotateY(-179.9deg);
  }
}
</style>
