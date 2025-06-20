<template>
    <div class="activity-indicator-dots">
        <div class="activity-indicator-dots-bounce1" />
        <div class="activity-indicator-dots-bounce2" />
        <div class="activity-indicator-dots-bounce3" />
    </div>
</template>

<style>
.activity-indicator-dots {
    font-size: 1em;
    position: relative;
}

.activity-indicator-dots > div {
    width: 1em;
    height: 1em;
    background-color: currentColor;
    border-radius: 100%;
    display: inline-block;
    -webkit-animation: activity-indicator-dots 1.4s infinite ease-in-out both;
    animation: activity-indicator-dots 1.4s infinite ease-in-out both;
}

.activity-indicator-dots > div:not(:last-child) {
    margin-right: .2em;
}

.activity-indicator-dots .activity-indicator-dots-bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.activity-indicator-dots .activity-indicator-dots-bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes activity-indicator-dots {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes activity-indicator-dots {
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}
</style>
