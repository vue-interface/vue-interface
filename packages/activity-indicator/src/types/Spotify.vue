<template>
    <div class="activity-indicator-spotify" />
</template>

<style>
    .activity-indicator-spotify {
        width: 2em;
        height: 2em;
        border-radius: 50%;
        background: conic-gradient(white, black);
        position: relative;
        animation: activity-indicator-spotify 1.4s linear infinite;
        transform: translateZ(0);
    }

    .activity-indicator-spotify::after {
        background: white;
        width: 75%;
        height: 75%;
        border-radius: 50%;
        content: "";
        margin: auto;
        position: absolute;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
    }

    @keyframes activity-indicator-spotify {
        from {
            transform: rotate(0deg);
        }

        to {
            transform: rotate(360deg);
        }
    }
        
</style>