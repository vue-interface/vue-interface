import type { Meta, StoryObj } from '@storybook/vue3';
import './index.css';
import Modal from './src/Modal.vue';
import Confirm from './src/Confirm.vue';
import Alert from './src/Alert.vue';
 
const meta = {
    title: 'Example/Modal',
    tags: ['autodocs']
} satisfies Meta;

export default meta;

type Story = StoryObj<typeof meta>

export const ModalVariants = {
    name: 'Modal',
    render: () => (
        <div class="flex gap-2 mb-3">
            <button id="modal" class="btn btn-primary">Modal</button>
            <button id="confirm" class="btn btn-primary">Confirm</button>
            <button id="alert" class="btn btn-primary">Alert</button>

            <Modal
                trigger="#modal"
                close-button
                buttonOrientation="vertical"
                title="Some Title"
                content="Some content"
                buttons={(context) => (
                    <button class="btn" onClick={() => context.close()}>Close</button>
                )}
            />

            <Confirm
                trigger="#confirm"
                close-button
                button-orientation="vertical"
                title="Some Title"
                content="Confirm"
            />

            <Alert
                trigger="#alert"
                close-button
                button-orientation="vertical"
                title="Some Title"
                content="Alert"
            />
        </div>
    ),
} satisfies Story;

export const ModalTypes = {
    name: 'Types',
    render: () => (
        <div class="flex gap-2 mb-3">
            <button id="info" class="btn btn-primary">Info</button>
            <button id="warning" class="btn btn-warning">Warning</button>
            <button id="critical" class="btn btn-danger">Critical</button>
            <button id="success" class="btn btn-success">Success</button>

            <Modal
                trigger="#info"
                close-button
                type="info"
                button-orientation="vertical"
                title="Info"
                content="Some content"
                buttons={(context) => (
                    <button class="btn" onClick={() => context.close()}>Close</button>
                )}
            />

            <Confirm
                trigger="#warning"
                close-button
                type="warning"
                button-orientation="vertical"
                title="Warning"
                content="Some content"
            />

            <Alert
                trigger="#critical"
                close-button
                type="critical"
                button-orientation="vertical"
                title="Critical">
                Some Content
            </Alert>

            <Modal
                trigger="#success"
                close-button
                type="success"
                button-orientation="vertical"
                title="Success"
                content="Some content"
                buttons={(context) => (
                    <button class="btn" onClick={() => context.close()}>Close</button>
                )}
            />
        </div>
    ),
} satisfies Story;

export const ModalCentered = {
    name: 'Centered',
    render: () => (
        <div class="flex gap-2 mb-3">
            <button id="centeredSingle" class="btn btn-primary">Centered Single Action</button>
            <button id="centeredDouble" class="btn btn-primary">Centered Double Action</button>

            <Modal
                trigger="#centeredSingle"
                close-button
                class="modal-center"
                button-orientation="vertical"
                title="Centered Single Action"
                buttons={(context) => (
                    <button class="btn" onClick={() => context.close()}>Close</button>
                )}
            >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Modal>

            <Confirm
                trigger="#centeredDouble"
                close-button
                class="modal-center"
                button-orientation="vertical"
                title="Some Title"
            >
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            </Confirm>
        </div>
    ),
} satisfies Story;

export const ModalSizes = {
    name: 'Sizes',
    render: () => (
        <div>
            <h3 class="text-lg mb-3">Predetermined Sizes</h3>

            <div class="flex gap-2 mb-3">
                <button id="modal-2xs" class="btn btn-primary">modal-2xs</button>
                <button id="modal-xs" class="btn btn-primary">modal-xs</button>
                <button id="modal-sm" class="btn btn-primary">modal-sm</button>
                <button id="modal-md" class="btn btn-primary">modal-md</button>
                <button id="modal-lg" class="btn btn-primary">modal-lg</button>
                <button id="modal-xl" class="btn btn-primary">modal-xl</button>
                <button id="modal-2xl" class="btn btn-primary">modal-2xl</button>
                <button id="modal-3xl" class="btn btn-primary">modal-3xl</button>
                <button id="modal-4xl" class="btn btn-primary">modal-4xl</button>
                <button id="modal-5xl" class="btn btn-primary">modal-5xl</button>
                <button id="modal-screen" class="btn btn-primary">Fullscreen</button>

                <Modal
                    trigger="#modal-2xs"
                    close-button
                    size="2xs"
                    button-orientation="vertical"
                    title="modal-2xs"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-xs"
                    close-button
                    size="xs"
                    button-orientation="vertical"
                    title="modal-xs"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-sm"
                    close-button
                    size="sm"
                    button-orientation="vertical"
                    title="modal-sm"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-md"
                    close-button
                    size="md"
                    button-orientation="vertical"
                    title="modal-md"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-lg"
                    close-button
                    size="lg"
                    button-orientation="vertical"
                    title="modal-lg"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-xl"
                    close-button
                    size="xl"
                    button-orientation="vertical"
                    title="modal-xl"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-2xl"
                    close-button
                    size="2xl"
                    button-orientation="vertical"
                    title="modal-2xl"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-3xl"
                    close-button
                    size="3xl"
                    button-orientation="vertical"
                    title="modal-3xl"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-4xl"
                    close-button
                    size="4xl"
                    button-orientation="vertical"
                    title="modal-4xl"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-5xl"
                    close-button
                    size="5xl"
                    button-orientation="vertical"
                    title="modal-5xl"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-screen"
                    close-button
                    size="screen"
                    button-orientation="vertical"
                    title="Fullscreen"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />
            </div>

            <h3 class="text-lg mb-3">Tailwind Sizes</h3>

            <div class="flex gap-2 mb-3">
                <button id="modal-125" class="btn btn-primary">modal-125</button>
                <button id="modal-150" class="btn btn-primary">modal-150</button>
                <button id="modal-175" class="btn btn-primary">modal-175</button>
                <button id="modal-200" class="btn btn-primary">modal-200</button>

                <Modal
                    trigger="#modal-125"
                    close-button
                    class="modal-125"
                    button-orientation="vertical"
                    title="modal-125"
                    content="500px"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-150"
                    close-button
                    class="modal-150"
                    button-orientation="vertical"
                    title="modal-150"
                    content="600px"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-175"
                    close-button
                    class="modal-175"
                    button-orientation="vertical"
                    title="modal-175"
                    content="700px"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-200"
                    close-button
                    class="modal-200"
                    button-orientation="vertical"
                    title="modal-200"
                    content="800px"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />
            </div>

            <h3 class="text-lg mb-3">Arbitrary Sizes</h3>

            <div class="flex gap-2 mb-3">
                <button id="modal-400px" class="btn btn-primary">modal-[400px]</button>
                <button id="modal-700px" class="btn btn-primary">modal-[700px]</button>
                <button id="modal-100" class="btn btn-primary">modal-[100%]</button>
                <button id="modal-w-h" class="btn btn-primary">modal-w-[30vw] modal-h-[100vh]</button>

                <Modal
                    trigger="#modal-400px"
                    close-button
                    class="modal-[400px]"
                    button-orientation="vertical"
                    title="modal-[400px]"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-700px"
                    close-button
                    class="modal-[700px]"
                    button-orientation="vertical"
                    title="modal-[700px]"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-100"
                    close-button
                    class="modal-[100%]"
                    button-orientation="vertical"
                    title="modal-[100%]"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-w-h"
                    close-button
                    class="modal-w-[30vw] modal-h-[100vh]"
                    button-orientation="vertical"
                    title="modal-w-[30vw] modal-h-[100vh]"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />
            </div>
        </div>
    ),
} satisfies Story;

export const ModalColors = {
    name: 'Colors',
    render: () => (
        <div>
            <h3 class="text-lg mb-3">Predetermined Colors</h3>

            <div class="flex gap-2 mb-3">
                <button id="modal-primary" class="btn btn-primary">Primary</button>
                <button id="modal-secondary" class="btn btn-secondary">Secondary</button>
                <button id="modal-success" class="btn btn-success">Success</button>
                <button id="modal-danger" class="btn btn-danger">Danger</button>
                <button id="modal-warning" class="btn btn-warning">Warning</button>
                <button id="modal-info" class="btn btn-info">Info</button>
                <button id="modal-light" class="btn btn-light">Light</button>
                <button id="modal-dark" class="btn btn-dark">Dark</button>

                <Modal
                    trigger="#modal-primary"
                    close-button
                    class="modal-primary"
                    button-orientation="vertical"
                    title="modal-primary"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-secondary"
                    close-button
                    class="modal-secondary"
                    button-orientation="vertical"
                    title="modal-secondary"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-success"
                    close-button
                    class="modal-success"
                    button-orientation="vertical"
                    title="modal-success"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-danger"
                    close-button
                    class="modal-danger"
                    button-orientation="vertical"
                    title="modal-danger"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-warning"
                    close-button
                    class="modal-warning"
                    button-orientation="vertical"
                    title="modal-warning"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-info"
                    close-button
                    class="modal-info"
                    button-orientation="vertical"
                    title="modal-info"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-light"
                    close-button
                    class="modal-light"
                    button-orientation="vertical"
                    title="modal-light"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-dark"
                    close-button
                    class="modal-dark"
                    button-orientation="vertical"
                    title="modal-dark"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />
            </div>

            <h3 class="text-lg mb-3">Icon-only Colors</h3>

            <div class="flex gap-2 mb-3">
                <button id="modal-icon-primary" class="btn btn-primary">Primary</button>
                <button id="modal-icon-secondary" class="btn btn-secondary">Secondary</button>
                <button id="modal-icon-success" class="btn btn-success">Success</button>
                <button id="modal-icon-danger" class="btn btn-danger">Danger</button>
                <button id="modal-icon-warning" class="btn btn-warning">Warning</button>
                <button id="modal-icon-info" class="btn btn-info">Info</button>
                <button id="modal-icon-light" class="btn btn-light">Light</button>
                <button id="modal-icon-dark" class="btn btn-dark">Dark</button>

                <Modal
                    trigger="#modal-icon-primary"
                    close-button
                    class="modal-icon-primary"
                    button-orientation="vertical"
                    title="modal-icon-primary"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-icon-secondary"
                    close-button
                    class="modal-icon-secondary"
                    button-orientation="vertical"
                    title="modal-icon-secondary"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-icon-success"
                    close-button
                    class="modal-icon-success"
                    button-orientation="vertical"
                    title="modal-icon-success"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-icon-danger"
                    close-button
                    class="modal-icon-danger"
                    button-orientation="vertical"
                    title="modal-icon-danger"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-icon-warning"
                    close-button
                    class="modal-icon-warning"
                    button-orientation="vertical"
                    title="modal-icon-warning"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-icon-info"
                    close-button
                    class="modal-icon-info"
                    button-orientation="vertical"
                    title="modal-icon-info"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-icon-light"
                    close-button
                    class="modal-icon-light"
                    button-orientation="vertical"
                    title="modal-icon-light"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-icon-dark"
                    close-button
                    class="modal-icon-dark"
                    button-orientation="vertical"
                    title="modal-icon-dark"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />
            </div>

            <h3 class="text-lg mb-3">Custom Colors</h3>

            <div class="flex gap-2 mb-3">
                <button id="modal-green-500" class="btn btn-green-500">green-500</button>
                <button id="modal-amber-500" class="btn btn-amber-500">amber-500</button>
                <button id="modal-yellow-500" class="btn btn-yellow-500">yellow-500</button>
                <button id="modal-red-500" class="btn btn-red-500">red-500</button>

                <Modal
                    trigger="#modal-green-500"
                    close-button
                    class="modal-green-500"
                    button-orientation="vertical"
                    title="modal-green-500"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-amber-500"
                    close-button
                    class="modal-amber-500"
                    button-orientation="vertical"
                    title="modal-amber-500"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-yellow-500"
                    close-button
                    class="modal-yellow-500"
                    button-orientation="vertical"
                    title="modal-yellow-500"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />

                <Modal
                    trigger="#modal-red-500"
                    close-button
                    class="modal-red-500"
                    button-orientation="vertical"
                    title="modal-red-500"
                    content="Some Content"
                    buttons={(context) => (
                        <button class="btn" onClick={() => context.close()}>Close</button>
                    )}
                />
            </div>
        </div>
    ),
} satisfies Story;