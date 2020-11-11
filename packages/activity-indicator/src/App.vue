<template>
    <div>
        <activity-indicator type="dots" size="xs" color="primary" />
    </div>
</template>

<script>
import { register, ActivityIndicator, Dots } from '..';

register({
    dots: Dots
});

export default {
    components: {
        ActivityIndicator
    }    
};
</script>