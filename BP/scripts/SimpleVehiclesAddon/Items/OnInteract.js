////I'm an addon creator who want to teach others using scripts its very scary sometimes but i'll try my best

////The Code of my addons were always open or open-source or whatever it is it's up to you if you try to learn, copy and paste

////You can help me if you have external ideas especially if you are good in scripts you can contribute

////If you use it to my addons please leave me a credit by using RMPlaysMC YT on your content


///Credits to "Alien Edds Gaming"
///Credits to "Alien Edds Gaming"
///Credits to "Alien Edds Gaming"

import {
    world
} from '@minecraft/server';
import {
    useTypes, commandSubject
} from '../Items/_lib/onUseInterface';

const on_Use = [
    {
        use_type: useTypes.Item_Use,
        itemID: "simple_vehicles:jump1_item",
        code_type: {
            command: {
                commands: [
                    "playanimation @e[type=simple_vehicles:lowrider_v2,c=1,r=2] animation.car_lowrider.jump1 f 10 query.has_rider",
                    "playanimation @p[r=1] animation.player.riding.lowrider  controller.animation.player.base 10 query.is_riding"
                ],
                subject: commandSubject.Player,
                subject: commandSubject.Entity
            }
        }
    },
    {
        use_type: useTypes.Item_Use,
        itemID: "simple_vehicles:jump2_item",
        code_type: {
            command: {
                commands: [
                    "playanimation @e[type=simple_vehicles:lowrider_v2,c=1,r=2] animation.car_lowrider.jump2 f 10 query.has_rider",
                    "playanimation @p[r=1] animation.player.riding.lowrider2  controller.animation.player.base 10 query.is_riding"
                ],
                subject: commandSubject.Player,
                subject: commandSubject.Entity
            }
        }
    },
    {
        use_type: useTypes.Item_Use,
        itemID: "simple_vehicles:jump3_item",
        code_type: {
            command: {
                commands: [
                    "playanimation @e[type=simple_vehicles:lowrider_v2,c=1,r=2] animation.car_lowrider.jump3 f 10 query.has_rider",
                    "playanimation @p[r=1] animation.player.riding.lowrider3  controller.animation.player.base 10 query.is_riding"
                ],
                subject: commandSubject.Player,
                subject: commandSubject.Entity
            }
        }
    },
    {
        use_type: useTypes.Item_Use,
        itemID: "simple_vehicles:honk_item",
        code_type: {
            command: {
                commands: [
                    "playsound vehicles.horn @p[r=2]"
                ],
                subject: commandSubject.Player
            }
        }
    },
    {
        use_type: useTypes.Item_Use,
        itemID: "simple_vehicles:bike_honk_item",
        code_type: {
            command: {
                commands: [
                    "playsound vehicles.horn @p[r=2]"
                ],
                subject: commandSubject.Player
            }
        }
    },
    {
        use_type: useTypes.Item_Use,
        itemID: "simple_vehicles:truck_honk_item",
        code_type: {
            command: {
                commands: [
                    "playsound vehicles.horn @p[r=2]"
                ],
                subject: commandSubject.Player
            }
        }
    }
];

const itemUses = [
    world.afterEvents.itemUse,
    world.afterEvents.itemUseOn,
    world.afterEvents.itemCompleteUse,
    world.afterEvents.itemReleaseUse,
    world.afterEvents.itemStartUse,
    world.afterEvents.itemStartUseOn,
    world.afterEvents.itemStopUse,
    world.afterEvents.itemStopUseOn
];

const itemUsesTypes = [
    useTypes.Item_Use,
    useTypes.Item_Use_On,
    useTypes.Item_Complete_Use,
    useTypes.Item_Release_Use,
    useTypes.Item_Start_Use,
    useTypes.Item_Start_Use_On,
    useTypes.Item_Stop_Use,
    useTypes.Item_Stop_Use_On
];


for (
    let i = 0;
    i < itemUses.length;
    i++
) {
    const itemUse = itemUses[i];
    itemUse.subscribe(
        (data) => {
            const code = on_Use.find(
                (f) => f.use_type == itemUsesTypes[i] && f.itemID == data.itemStack.typeId
            );
            if (
                code == undefined
            ) return;
            const command = code.code_type.command;
            const func = code.code_type.code;
            if (
                func != undefined
            ) {
                func(data);
            } else {
                if (command != undefined) {
                    let subject = data.source;
                    if (command.subject == commandSubject.Dimension) subject = data.source.dimension;
                    for (const cmd of command.commands) {
                        subject.runCommand(cmd);
                    }
                }
            }
        }
    );
}

////Well it's up to you then goodluck and have fun
////You met an addon creator who want's to say something and no secrets attached on his addon i'll do it as my transparency
////Nothing here is strictly proprietary it's up to you if you want to copy it but with between by learning of it and paste it