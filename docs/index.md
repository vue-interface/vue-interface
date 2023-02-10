<script setup>
import { ActivityIndicator, Pulse } from '@vue-interface/activity-indicator'
import '@vue-interface/activity-indicator/dist/style.css'
import { InputField } from '@vue-interface/input-field'
</script>

# Hello VitePress

<ActivityIndicator :type="Pulse" min-height="150px" center/>

<InputField label="test" />