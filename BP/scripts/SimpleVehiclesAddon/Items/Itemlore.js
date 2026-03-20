////I'm an addon creator who want to teach others using scripts its very scary sometimes but i'll try my best

////The Code of my addons were always open or open-source or whatever it is it's up to you if you try to learn, copy and paste

////You can help me if you have external ideas especially if you are good in scripts you can contribute

////If you use it to my addons please leave me a credit by using RMPlaysMC YT on your content

import { world, system } from "@minecraft/server";
import { VEHICLES_EGGS } from "./itemEggs";

/*const lore_items = {
    "simple_vehicles:jump1_item": [
        "Controls:",
        "   Right Click to Jump"
    ],
    "simple_vehicles:jump2_item": [
        "Controls:",
        "   Right Click to Jump"
    ],
    "simple_vehicles:jump3_item": [
        "Controls:",
        "   Right Click to Jump"
    ],
    "simple_vehicles:honk_item": [
        "Controls:",
        "   Mobile: Press Cross or Long-Press to Honk",
        "   PC: Right Click to Honk",
        "   Gamepad: Press R2, RT to Honk"
    ],
    "simple_vehicles:beetrpack": [
        "Controls:",
        "   Right Click to Add to your Tractor"
    ],
    "simple_vehicles:wheatpack": [
        'Controls:',
        '   Right Click to Add to your Tractor'
    ],
    "simple_vehicles:mixer_placer": [
        "Controls:",
        "   Right Click to Place some stuff"
    ],
    "simple_vehicles:asphalt_paving_placer": [
        "Controls:",
        "   Right Click to Place some stuff"
    ],
    "simple_vehicles:bridge_building_placer": [
        "Controls:",
        "   Right Click to Place some stuff"
    ],
    "simple_vehicles:jerry_can": [
        "Controls: ",
        "   Mobile: Interact or Long-Press to Fuel A Vehicle",
        "   PC: Right Click to Fuel A Vehicle",
        "   Gamepad: Press R2, RT to Fuel A Vehicle"
    ],
    'simple_vehicles:air_jerry_can': [
        'Controls: ',
        '   Mobile: Interact or Long-Press to Fuel A Vehicle',
        '   PC: Right Click to Fuel A Vehicle',
        '   Gamepad: Press R2, RT to Fuel A Vehicle'
    ],
    'simple_vehicles:gas_nozzle_air': [
        'Controls: ',
        '   Mobile: Interact or Long-Press to Fuel A Vehicle',
        '   PC: Right Click to Fuel A Vehicle',
        '   Gamepad: Press R2, RT to Fuel A Vehicle'
    ],
    'simple_vehicles:gas_nozzle': [
        "Controls: ",
        "   Mobile: Interact or Long-Press to Fuel A Vehicle",
        "   PC: Right Click to Fuel A Vehicle",
        "   Gamepad: Press R2, RT to Fuel A Vehicle"
    ]
}*/


const lore_items = {
    "simple_vehicles:jump1_item": [
        "Controls:",
        "Right Click to Jump"
    ],
    "simple_vehicles:jump2_item": [
        "Controls:",
        "Right Click to Jump"
    ],
    "simple_vehicles:jump3_item": [
        "Controls:",
        "Right Click to Jump"
    ],
    "simple_vehicles:honk_item": [
        "Controls:",
        "Mobile: Press Cross or Long-Press to Honk",
        "PC: Right Click to Honk",
        "Gamepad: Press R2, RT to Honk"
    ],
    "simple_vehicles:beetrpack": [
        "Controls:",
        "Right Click to Add to your Tractor"
    ],
    "simple_vehicles:wheatpack": [
        "Controls:",
        "Right Click to Add to your Tractor"
    ],
    "simple_vehicles:mixer_placer": [
        "Controls:",
        "Right Click to Place some stuff"
    ],
    "simple_vehicles:asphalt_paving_placer": [
        "Controls:",
        "Right Click to Place some stuff"
    ],
    "simple_vehicles:bridge_building_placer": [
        "Controls:",
        "Right Click to Place some stuff"
    ],
    "simple_vehicles:jerry_can": [
        "Controls:",
        "Mobile: Interact or Long-Press to Fuel",
        "PC: Right Click to Fuel A Vehicle",
        "Gamepad: Press R2, RT to Fuel A Vehicle"
    ],
    "simple_vehicles:air_jerry_can": [
        "Controls:",
        "Mobile: Interact or Long-Press to Fuel",
        "PC: Right Click to Fuel A Vehicle",
        "Gamepad: Press R2, RT to Fuel A Vehicle"
    ],
    "simple_vehicles:gas_nozzle_air": [
        "Controls:",
        "Mobile: Interact or Long-Press to Fuel",
        "PC: Right Click to Fuel A Vehicle",
        "Gamepad: Press R2, RT to Fuel A Vehicle"
    ],
    "simple_vehicles:gas_nozzle": [
        "Controls:",
        "Mobile: Interact or Long-Press to Fuel",
        "PC: Right Click to Fuel A Vehicle",
        "Gamepad: Press R2, RT to Fuel A Vehicle"
    ]
};



function updatePlayerInventoryLore() {
  for (const player of world.getPlayers()) {
    const inventory = player.getComponent("minecraft:inventory").container;

    for (let i = 0; i < inventory.size; i++) {
      const item = inventory.getItem(i);

      if (item && lore_items[item.typeId]) {
        item.setLore(lore_items[item.typeId]);
        inventory.setItem(i, item);
      }
      if (item && VEHICLES_EGGS[item.typeId]) {
        item.setLore(VEHICLES_EGGS[item.typeId]);
        inventory.setItem(i, item);
      }
    }
  }

  system.runTimeout(updatePlayerInventoryLore, 1);
}

updatePlayerInventoryLore();
