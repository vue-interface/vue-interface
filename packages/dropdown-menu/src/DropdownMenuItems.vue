<script lang="ts">
import { Fragment, h } from 'vue';

function appendClass(vnode: any, str: any) {
    vnode.props.class = `${vnode.props.class || ''} ${str}`.trim();
}

function changeMenuItems(items: any) {
    for(const vnode of items) {
        if(vnode.type === Fragment) {
            changeMenuItems(vnode.children);
        }

        vnode.props = Object.assign({ class: undefined }, vnode.props);
        vnode.attrs = Object.assign({}, vnode.attrs);

        if(!vnode.attrs.on) {
            vnode.attrs.on = {};
        }

        const isDropdownItem = vnode.props.class && vnode.props.class.match(/dropdown-item/);
        const isDropdownDivider = vnode.props.class && vnode.props.class.match(/dropdown-divider/);

        if(typeof vnode.type === 'string' && vnode.type.match(/^h\d$/)) {
            appendClass(vnode, 'dropdown-header');
        }
        else if(vnode.type === 'hr' && !isDropdownDivider) {
            vnode.type = 'div';

            appendClass(vnode, 'dropdown-divider');
        }
        else if(!isDropdownItem && !isDropdownDivider) {
            appendClass(vnode, 'dropdown-item');
        }
    }

    return items;
}

const DropdownMenuItems = (_: any, context: any) => h('div', {}, changeMenuItems(context.slots.default()));

export default DropdownMenuItems;
</script>
