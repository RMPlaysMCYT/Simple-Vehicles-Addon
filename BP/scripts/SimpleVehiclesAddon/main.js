////I'm an addon creator who want to teach others using scripts its very scary sometimes but i'll try my best

////The Code of my addons were always open or open-source or whatever it is it's up to you if you try to learn, copy and paste

////You can help me if you have external ideas especially if you are good in scripts you can contribute

////If you use it to my addons please leave me a credit by using RMPlaysMC YT on your content

////PLEASE DON'T DOWNLOAD THIS ADDON FROM OTHER SITES EVEN DON'T DOWNLOAD THIS VIA DIRECT LINKS EXCEPT FOR THE WEBSITE DID I MENTION LIKE MCPEDL, MODBAY, CURSEFORGE, PLANETMINECRAFT MY WEBSITE AND MCPE ADDONS APP by Kayen Works

import { system, world } from '@minecraft/server';
/////ESSENTIALS
/////ESSENTIALS
/////ESSENTIALS
import './Blocks/OnInteract';
/*import './Items/Itemlore';*/
import './Items/OnInteract';
import './Entities/SimpleVehiclesName';
/////ANOTHER ESSENTIALS (THANKS TO L4GGCRAFTER)
/////ANOTHER ESSENTIALS (THANKS TO L4GGCRAFTER)
/////ANOTHER ESSENTIALS (THANKS TO L4GGCRAFTER)
import './Entities/EntityMain';
import './Entities/OnEntitySpawn';

// import './Entities/vehicleCustomizerMenu';

////THIS IS WHERE ANY TICKS GO
/*import './ticks'*/
////THIS IS WHERE ANY TICKS GO



system.runTimeout(() => {
    world.sendMessage("\n[System] §2Simple Vehicles Addon Loaded!§r")
    world.sendMessage("[System] If there's any error please let us know and support us by rating 5-stars at MCPEDL")
    world.sendMessage("[System] Leave us a feedback also if you download this addon from curseforge, modbay, planetminecraft and MCPE Addons APP")
}, 10);

world.afterEvents.playerSpawn.subscribe(
    (event) => {
        if (!event.initialSpawn) return
        const { player } = event;
        // player.setDynamicProperty(simpleVehiclesInitial, true);
        // if (player.getDynamicProperty(simpleVehiclesInitial)) return;
        player.sendMessage("\n[System] §2Simple Vehicles Addon Loaded!§r")
        player.sendMessage("[System] §1Thank you for downloading Simple Vehicles Addon!§r")
        player.sendMessage("[System] If there's any error please let us know and support us by rating 5-stars at MCPEDL")
        player.sendMessage("[System] Leave us a feedback also if you download this addon from curseforge, modbay, planetminecraft and MCPE Addons APP")
        // player.setDynamicProperty(simpleVehiclesInitial, false);
    }
)


////Well it's up to you then goodluck and have fun
////You met an addon creator who want's to say something and no secrets attached on his addon i'll do it as my transparency
////Nothing here is strictly proprietary it's up to you if you want to copy it but with between by learning of it and paste it