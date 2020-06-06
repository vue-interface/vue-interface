<template>
    <div class="activity-indicator-dots">
        <div class="bounce1" />
        <div class="bounce2" />
        <div class="bounce3" />
    </div>
</template>

<style lang="postcss">
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
    -webkit-animation: sk-bouncedelay 1.4s infinite ease-in-out both;
    animation: sk-bouncedelay 1.4s infinite ease-in-out both;
}

.activity-indicator-dots > div:not(:last-child) {
    margin-right: .2em;
}

.activity-indicator-dots .bounce1 {
  -webkit-animation-delay: -0.32s;
  animation-delay: -0.32s;
}

.activity-indicator-dots .bounce2 {
  -webkit-animation-delay: -0.16s;
  animation-delay: -0.16s;
}

@-webkit-keyframes sk-bouncedelay {
  0%, 80%, 100% { -webkit-transform: scale(0) }
  40% { -webkit-transform: scale(1.0) }
}

@keyframes sk-bouncedelay {
  0%, 80%, 100% { 
    -webkit-transform: scale(0);
    transform: scale(0);
  } 40% { 
    -webkit-transform: scale(1.0);
    transform: scale(1.0);
  }
}

/*
$activity-indicator-dot-size: .6rem;

.activity-indicator-dots {

    & > div {
        border-radius: 100%;
        display: inline-block;
        width: $activity-indicator-dot-size;
        height: $activity-indicator-dot-size;
        animation: activity-indicator-dots 1.4s infinite ease-in-out both;
    }

    & > div:not(:last-child) {
        margin-right: $activity-indicator-dot-size * .33;
    }

    &.activity-indicator-xs > div {
        width: $activity-indicator-dot-size * .5;
        height: $activity-indicator-dot-size * .5;
    }

    &.activity-indicator-sm > div {
        width: $activity-indicator-dot-size * .75;
        height: $activity-indicator-dot-size * .75;
    }

    &.activity-indicator-md > div {
        width: $activity-indicator-dot-size * 1;
        height: $activity-indicator-dot-size * 1;
    }

    &.activity-indicator-lg > div {
        width: $activity-indicator-dot-size * 1.5;
        height: $activity-indicator-dot-size * 1.5;
    }

    &.activity-indicator-xl > div {
        width: $activity-indicator-dot-size * 2;
        height: $activity-indicator-dot-size * 2;
    }

    @for $i from 0 through 12 {
        & > div:nth-child(#{$i + 1}) {
            animation-delay: $i * .16s;
        }
    }

    @keyframes activity-indicator-dots {
        0%, 80%, 100% {
            transform: scale(0);
        } 40% {
            transform: scale(1.0);
        }
    }
}

.btn-activity-indicator-dots {
    &:not(.btn-warning) .activity-indicator-dots > div {
        background: white;
    }
}
*/
</style>
