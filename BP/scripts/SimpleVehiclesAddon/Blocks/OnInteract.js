////I'm an addon creator who want to teach others using scripts its very scary sometimes but i'll try my best

////The Code of my addons were always open or open-source or whatever it is it's up to you if you try to learn, copy and paste

////You can help me if you have external ideas especially if you are good in scripts you can contribute

////If you use it to my addons please leave me a credit by using RMPlaysMC YT on your content

////PLEASE DON'T DOWNLOAD THIS ADDON FROM OTHER SITES EVEN DON'T DOWNLOAD THIS VIA DIRECT LINKS EXCEPT FOR THE WEBSITE DID I MENTION LIKE MCPEDL, MODBAY, CURSEFORGE, PLANETMINECRAFT MY WEBSITE AND MCPE ADDONS APP by Kayen Works

import {
  world,
  BlockPermutation,
  ItemStack
} from '@minecraft/server';

/*For 1.20.50 as to joined for Minecraft China Edition*/
// List of interactable blocks
/*const InteractableBlocks =[
    "simple_vehicles:gas_pump",
    "simple_vehicles:gas_pump_air"
]

// Single event subscriber for all blocks
world.afterEvents.playerInteractWithBlock.subscribe((event) => {
    const { player, block } = event;
    
    // Check if interacting with gas pump
    if (block.typeId === "simple_vehicles:gas_pump") {
        // Check if player already has a gas nozzle in their inventory
        const hasNozzle = player.getComponent('inventory').container.hasItem('simple_vehicles:gas_nozzle');
        
        if (!hasNozzle) {
            // Player doesn't have a nozzle, give them one
            player.runCommand('give @p[r=1] simple_vehicles:gas_nozzle');
        } else {
            // Player already has a nozzle - handle the interaction logic here
            // For example, you might want to fuel their vehicle
            player.sendMessage("You're using the gas nozzle to refuel.");
            // Add your refueling logic here
        }
    }
});*/
/*For 1.21.20 ONLY*/

world.beforeEvents.worldInitialize.subscribe(
  eventData => {
    eventData.blockComponentRegistry.registerCustomComponent(
      'simple_vehicles:get_gas', {
      onPlayerInteract(
        {
          block,
          player
        }
      ) {
        const equipment = player.getComponent('equippable');
        if (!equipment) return;
        const selectedItem = equipment.getEquipment('Mainhand');
        if (!selectedItem) {
          equipment.setEquipment(
            'Mainhand',
            new ItemStack('simple_vehicles:gas_nozzle', 1)
          )
          // player.runCommand(`give ${player.name} simple_vehicles:gas_nozzle`);
        } else if (selectedItem.typeId === 'simple_vehicles:gas_nozzle') {
          equipment.setEquipment(
            'Mainhand',
            null
          );
          // player.runCommand(`clear @p[c=1] simple_vehicles:gas_nozzle 1`);
        }
        const currentState = block.permutation.getState('simple_vehicles:get_interactgas');
        const newOpenState = !currentState;
        const newPermutation = BlockPermutation.resolve(
          block.typeId, {
          ...block.permutation.getAllStates(),
          'simple_vehicles:get_interactgas': newOpenState
        }
        );
        block.setPermutation(newPermutation);
        const sound = currentState ? 'open.wooden_trapdoor' : 'close.wooden_trapdoor';
        player.playSound(sound);
      }
    }
    );
    eventData.blockComponentRegistry.registerCustomComponent(
      'simple_vehicles:get_gas_air', {
      onPlayerInteract(
        {
          block,
          player
        }
      ) {
        const equipment = player.getComponent('equippable');
        if (!equipment) return;
        const selectedItem = equipment.getEquipment('Mainhand');
        if (!selectedItem) {
          equipment.setEquipment('Mainhand', new ItemStack('simple_vehicles:gas_nozzle_air', 1))
          player.runCommand(`give ${player.name} simple_vehicles:gas_nozzle_air`);
        } else if (selectedItem.typeId === 'simple_vehicles:gas_nozzle_air') {
          equipment.setEquipment('Mainhand', null);
          player.runCommand(`clear @p[c=1] simple_vehicles:gas_nozzle_air 1`);
        }

        const currentState = block.permutation.getState('simple_vehicles:get_interactgas');
        const newOpenState = !currentState;
        const newPermutation = BlockPermutation.resolve(
          block.typeId, {
          ...block.permutation.getAllStates(),
          'simple_vehicles:get_interactgas': newOpenState
        }
        );
        block.setPermutation(newPermutation);
        const sound = currentState ? 'open.wooden_trapdoor' : 'close.wooden_trapdoor';
        player.playSound(sound);
      }
    }
    );
  }
);


////Well it's up to you then goodluck and have fun

////You met an addon creator who want's to say something and no secrets attached on his addon i'll do it as my transparency

////Nothing here is strictly proprietary it's up to you if you want to copy it but with between by learning of it and paste it