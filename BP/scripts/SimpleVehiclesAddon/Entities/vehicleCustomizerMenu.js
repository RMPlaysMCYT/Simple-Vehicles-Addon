
import { system, world } from '@minecraft/server';
import { ActionFormData } from '@minecraft/server-ui';

function showCustomForm(player) {
    const form = new ActionFormData();
    form.title("vehicleCustomizationMenuExample Title");

    form.button("PARTS", "textures/");
    form.button("Engine", "textures/");
    form.button("ABOUT", "textures/");
    form.button("CLOSE", "textures/");

    form.show(player).then(r => {
        
    })
}

world.beforeEvents.itemUse.subscribe(ev => {
    const item = ev.itemStack;
    const player = ev.source;
    
    if (item.typeId == 'minecraft:stick') {
        system.run(() => {
            showCustomForm(player);
        })
    }
})
