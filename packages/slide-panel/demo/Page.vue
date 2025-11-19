<script setup lang="ts">
import SlidePanel from '../src/SlidePanel.vue';
import { useSlidePanels } from '../src/registry';

const { open, close } = useSlidePanels();

function onOpen() {
    console.log('opened');
}

function onClose() {
    console.log('closed');
}
</script>

<template>
    <div class="container mx-auto">
        <h1 class="text-5xl mb-5">
            SlidePanel
        </h1>

        <div class="flex gap-2">
            <button
                class="btn btn-primary"
                @click="open('panel-1')">
                Open Panel 1
            </button>
            <button
                class="btn btn-secondary"
                @click="open('panel-2')">
                Open Panel 2
            </button>
        </div>

        <SlidePanel
            name="panel-1"
            class="w-[25rem]"
            @open="onOpen"
            @close="onClose">
            <template #default="{ close: test }">
                <h1 class="text-2xl">
                    Slide Panel 1
                </h1>

                <button
                    class="btn btn-primary"
                    @click="test()">
                    Close Panel 1
                </button>

                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Curabitur in posuere elit, ut posuere quam. Sed tempor scelerisque tristique. Proin at lectus ut libero semper pulvinar eget sit amet libero. Morbi facilisis eget odio vitae bibendum. Vestibulum vel ligula facilisis, pretium nisl quis, sagittis elit. Praesent aliquam nisl vitae dolor fermentum, eu condimentum quam posuere. Curabitur nulla leo, posuere quis justo a, gravida volutpat lorem. Nulla facilisi. Curabitur semper tincidunt turpis. Cras varius dolor ac tristique pulvinar. Maecenas ante ipsum, interdum a lacus rutrum, accumsan laoreet lacus. Morbi sed fringilla leo, nec iaculis neque. Praesent in vehicula ligula. Praesent id malesuada nunc.</p>
            
                <p>Fusce egestas vestibulum nisl eu venenatis. Aenean rhoncus tristique ultricies. Etiam vel dictum nisi, quis ullamcorper nibh. Integer condimentum bibendum congue. Fusce tortor mauris, facilisis et imperdiet at, maximus eget nisi. Aenean vitae eleifend sapien. Sed laoreet leo sit amet porttitor congue. Sed at tellus euismod, dapibus magna id, ultrices turpis. Proin venenatis dui lacus, eu facilisis mi placerat non. Nulla ornare ultricies ullamcorper. Vestibulum et mauris bibendum, euismod sapien vitae, pharetra leo. Nunc aliquam purus non turpis elementum, in elementum eros lobortis. Donec luctus condimentum lorem, luctus aliquam nulla vestibulum id. Morbi ullamcorper nisl eget quam feugiat bibendum. Duis nec malesuada dolor. Sed quis facilisis nunc.</p>
    
                <p>Duis tincidunt venenatis augue vel luctus. Aenean pellentesque lacus libero, quis rutrum nibh euismod sed. Praesent posuere commodo malesuada. Integer gravida turpis arcu, ac ornare libero luctus ac. Aenean ac lorem neque. Quisque ullamcorper elit a ipsum malesuada, ut lacinia ex laoreet. Proin in turpis vitae nunc rutrum vehicula. Nam lobortis mauris vel dapibus malesuada.</p>
    
                <p>Proin eu tempor elit. Vestibulum hendrerit, lacus vitae vestibulum rutrum, massa nulla sagittis dolor, ac mollis lectus erat id turpis. Donec viverra accumsan leo, cursus tincidunt mi accumsan nec. Ut tempus facilisis efficitur. Curabitur egestas elementum magna, a luctus elit rhoncus fermentum. Vestibulum a porttitor urna. Aliquam posuere eros tortor. Quisque ornare maximus est ac congue. Maecenas ultrices tellus ac risus blandit, eu cursus neque aliquam. Praesent lobortis massa ut enim dignissim porta. Phasellus vel dolor tortor.</p>
            
                <p>Morbi nec purus eget erat lobortis laoreet. Sed id rutrum mi. Donec iaculis turpis vel nulla congue vulputate. Suspendisse ante purus, porta pharetra quam et, accumsan tempor nunc. Vestibulum et tincidunt tellus. Praesent pulvinar tortor eu turpis efficitur commodo. Donec id ante nulla. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae; Integer fringilla, risus eget posuere sagittis, odio ante efficitur dolor, at sagittis turpis magna sit amet elit. Ut congue augue vel purus tristique tristique. Cras dignissim laoreet nisi eu ultricies. Aenean tempus consectetur varius. Donec ex libero, laoreet ac diam at, feugiat porttitor mi. Suspendisse pretium purus id ligula consequat luctus. Maecenas tincidunt, tortor vel scelerisque interdum, nisi ligula interdum metus, ut rutrum eros elit vel leo. Aliquam id nulla nec felis placerat ultricies a at tellus.</p>
            </template>
        </SlidePanel>

        <SlidePanel
            name="panel-2"
            class="w-[20rem]">
            <h1 class="text-2xl">
                Slide Panel 2
            </h1>

            <button
                class="btn btn-secondary"
                @click="close('panel-2')">
                Close Panel 2
            </button>
        </SlidePanel>
    </div>
</template>