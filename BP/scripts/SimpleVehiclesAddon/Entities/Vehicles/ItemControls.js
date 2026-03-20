import { world, system, ItemStack, ItemLockMode } from "@minecraft/server";

//////THIS IS WHERE YOUR ENTITIES APPLY AND PUT IT HERE
const VehicleControlItemSetPacks = {
    "simple_vehicles:ae86": ["simple_vehicles:honk_item"],
    "simple_vehicles:ambulance": ["simple_vehicles:honk_item"],
    "simple_vehicles:armored_truck": ["simple_vehicles:honk_item"],
    "simple_vehicles:auv_car_b": ["simple_vehicles:honk_item"],
    "simple_vehicles:apv": ["simple_vehicles:honk_item"],
    "simple_vehicles:asphalt_paving_truck": [
        "simple_vehicles:honk_item",
        "simple_vehicles:asphalt_paving_placer"
    ],
    "simple_vehicles:bajajre": ["simple_vehicles:honk_item"],
    "simple_vehicles:bike": ["simple_vehicles:honk_item"],
    "simple_vehicles:biplane": ["simple_vehicles:honk_item"],
    "simple_vehicles:blimp": ["simple_vehicles:honk_item"],
    "simple_vehicles:bridge_building_machine": ["simple_vehicles:honk_item"],
    "simple_vehicles:bulldozer": ["simple_vehicles:honk_item"],
    "simple_vehicles:bus_2": ["simple_vehicles:honk_item"],
    "simple_vehicles:bus": ["simple_vehicles:honk_item"],
    "simple_vehicles:c_sled": ["simple_vehicles:honk_item"],
    "simple_vehicles:cadillac_dts_2010": ["simple_vehicles:honk_item"],
    "simple_vehicles:lowrider_v2": [
        "simple_vehicles:honk_item",
        "simple_vehicles:honk_item",
        "simple_vehicles:jump1_item",
        "simple_vehicles:jump2_item",
        "simple_vehicles:jump3_item",
    ],
    "simple_vehicles:car": ["simple_vehicles:honk_item"],
    "simple_vehicles:car4x4": ["simple_vehicles:honk_item"],
    "simple_vehicles:cargo_cont_truck": ["simple_vehicles:honk_item"],
    "simple_vehicles:cargo_truck": ["simple_vehicles:honk_item"],
    "simple_vehicles:cargo_truck2": ["simple_vehicles:honk_item"],
    "simple_vehicles:century": ["simple_vehicles:honk_item"],
    "simple_vehicles:chrysler_windsor": ["simple_vehicles:honk_item"],
    "simple_vehicles:container_van": ["simple_vehicles:honk_item"],
    "simple_vehicles:corolla": ["simple_vehicles:honk_item"],
    "simple_vehicles:double_deck_bus": ["simple_vehicles:honk_item"],
    "simple_vehicles:dragster": ["simple_vehicles:honk_item"],
    "simple_vehicles:dump_truck": ["simple_vehicles:honk_item"],
    "simple_vehicles:ev_4": ["simple_vehicles:honk_item"],
    "simple_vehicles:f1_car": ["simple_vehicles:honk_item"],
    "simple_vehicles:farm_truck": ["simple_vehicles:honk_item"],
    "simple_vehicles:fire_truck": ["simple_vehicles:honk_item"],
    "simple_vehicles:ford_rancherogt_sass": ["simple_vehicles:honk_item"],
    "simple_vehicles:gliding_plane": ["simple_vehicles:honk_item"],
    "simple_vehicles:go_kart_v2": ["simple_vehicles:honk_item"],
    "simple_vehicles:go_kart_withnumbers": ["simple_vehicles:honk_item"],
    "simple_vehicles:go_kart_withoutnumbers": ["simple_vehicles:honk_item"],
    "simple_vehicles:golf_cart_street_legal": ["simple_vehicles:honk_item"],
    "simple_vehicles:golf_cart": ["simple_vehicles:honk_item"],
    "simple_vehicles:grummanllv": ["simple_vehicles:honk_item"],
    "simple_vehicles:gyroplane": ["simple_vehicles:honk_item"],
    "simple_vehicles:hafei_zhongyi": ["simple_vehicles:honk_item"],
    "simple_vehicles:helicopter": ["simple_vehicles:honk_item"],
    "simple_vehicles:honda_accord_2019": ["simple_vehicles:honk_item"],
    "simple_vehicles:hot_air_balloon": ["simple_vehicles:honk_item"],
    "simple_vehicles:hoverboard": ["simple_vehicles:honk_item"],
    "simple_vehicles:hyundai_starex_casket": ["simple_vehicles:honk_item"],
    "simple_vehicles:hyundai_starex": ["simple_vehicles:honk_item"],
    "simple_vehicles:ice_cream_truck": ["simple_vehicles:honk_item"],
    "simple_vehicles:isuzu_dmax": ["simple_vehicles:honk_item"],
    "simple_vehicles:isuzu_erga": ["simple_vehicles:honk_item"],
    "simple_vehicles:modern_jeep_ph": ["simple_vehicles:honk_item"],
    "simple_vehicles:jeep_ph": ["simple_vehicles:honk_item"],
    "simple_vehicles:jeep_wrangler": ["simple_vehicles:honk_item"],
    "simple_vehicles:jetmax": ["simple_vehicles:honk_item"],
    "simple_vehicles:jetski": ["simple_vehicles:honk_item"],
    "simple_vehicles:land_cruiser": ["simple_vehicles:honk_item"],
    "simple_vehicles:lightermax": ["simple_vehicles:honk_item"],
    "simple_vehicles:limmo": ["simple_vehicles:honk_item"],
    "simple_vehicles:car_lowrider": ["simple_vehicles:honk_item"],
    "simple_vehicles:mini_bus": ["simple_vehicles:honk_item"],
    "simple_vehicles:minicar": ["simple_vehicles:honk_item"],
    "simple_vehicles:mit_aerojp": ["simple_vehicles:honk_item"],
    "simple_vehicles:mitsubishi_minivan_trucktype": ["simple_vehicles:honk_item"],
    "simple_vehicles:mitsubishi_minivan": ["simple_vehicles:honk_item"],
    "simple_vehicles:mitsubishi_montero": ["simple_vehicles:honk_item"],
    "simple_vehicles:mixer_truck": ["simple_vehicles:honk_item"],
    "simple_vehicles:monoplane": ["simple_vehicles:honk_item"],
    "simple_vehicles:monster_truck": ["simple_vehicles:honk_item"],
    "simple_vehicles:motor_bike": ["simple_vehicles:honk_item"],
    "simple_vehicles:motorcycle": ["simple_vehicles:honk_item"],
    "simple_vehicles:ford_mustang_blue": ["simple_vehicles:honk_item"],
    "simple_vehicles:ob_van": ["simple_vehicles:honk_item"],
    "simple_vehicles:opel_astral": ["simple_vehicles:honk_item"],
    "simple_vehicles:opel_corsa": ["simple_vehicles:honk_item"],
    "simple_vehicles:pajero": ["simple_vehicles:honk_item"],
    "simple_vehicles:pick_up_truck": ["simple_vehicles:honk_item"],
    "simple_vehicles:plane": ["simple_vehicles:honk_item"],
    "simple_vehicles:police_car": ["simple_vehicles:honk_item"],
    "simple_vehicles:private_plane": ["simple_vehicles:honk_item"],
    "simple_vehicles:quad_bike": ["simple_vehicles:honk_item"],
    "simple_vehicles:rally_car": ["simple_vehicles:honk_item"],
    "simple_vehicles:rally_car_2_0": ["simple_vehicles:honk_item"],
    "simple_vehicles:rancher": ["simple_vehicles:honk_item"],
    "simple_vehicles:riding_lawn_mower": ["simple_vehicles:honk_item"],
    "simple_vehicles:rocket_v": ["simple_vehicles:honk_item"],
    "simple_vehicles:roller_truck": ["simple_vehicles:honk_item"],
    "simple_vehicles:sabre": ["simple_vehicles:honk_item"],
    "simple_vehicles:school_bus": ["simple_vehicles:honk_item"],
    "simple_vehicles:scooterb": ["simple_vehicles:honk_item"],
    "simple_vehicles:scooter": ["simple_vehicles:honk_item"],
    "simple_vehicles:seaplane": ["simple_vehicles:honk_item"],
    "simple_vehicles:shenhaoq5": ["simple_vehicles:honk_item"],
    "simple_vehicles:multicab": ["simple_vehicles:honk_item"],
    "simple_vehicles:pedicab": ["simple_vehicles:honk_item"],
    "simple_vehicles:pickup_flash_express": ["simple_vehicles:honk_item"],
    "simple_vehicles:snowmobile": ["simple_vehicles:honk_item"],
    "simple_vehicles:speedboat_two": ["simple_vehicles:honk_item"],
    "simple_vehicles:speedboat": ["simple_vehicles:honk_item"],
    "simple_vehicles:submarine": ["simple_vehicles:honk_item"],
    "simple_vehicles:tamarraw_fx": ["simple_vehicles:honk_item"],
    "simple_vehicles:taxi": ["simple_vehicles:honk_item"],
    "simple_vehicles:tentmushi": ["simple_vehicles:honk_item"],
    "simple_vehicles:tesla_truck": ["simple_vehicles:honk_item"],
    "simple_vehicles:tiltrotor": ["simple_vehicles:honk_item"],
    "simple_vehicles:tractor_plow": ["simple_vehicles:honk_item"],
    "simple_vehicles:tractor_seeder": ["simple_vehicles:honk_item"],
    "simple_vehicles:tractor_small": ["simple_vehicles:honk_item"],
    "simple_vehicles:tractor_sprinkler": ["simple_vehicles:honk_item"],
    "simple_vehicles:tractor": ["simple_vehicles:honk_item"],
    "simple_vehicles:train_cart": ["simple_vehicles:honk_item"],
    "simple_vehicles:train_locomotive": ["simple_vehicles:honk_item"],
    "simple_vehicles:travis": ["simple_vehicles:honk_item"],
    "simple_vehicles:tricycle_cargo": ["simple_vehicles:honk_item"],
    "simple_vehicles:tricycle_cont": ["simple_vehicles:honk_item"],
    "simple_vehicles:tricycle": ["simple_vehicles:honk_item"],
    "simple_vehicles:truck": ["simple_vehicles:honk_item"],
    "simple_vehicles:tuktukthai": ["simple_vehicles:honk_item"],
    "simple_vehicles:van_v2": ["simple_vehicles:honk_item"],
    "simple_vehicles:van": ["simple_vehicles:honk_item"],
    "simple_vehicles:vespa_primavera": ["simple_vehicles:honk_item"],
    "simple_vehicles:vintage_bus_a": ["simple_vehicles:honk_item"],
    "simple_vehicles:vintage_van_a": ["simple_vehicles:honk_item"],
    "simple_vehicles:vintage_van_b": ["simple_vehicles:honk_item"],
    "simple_vehicles:volkswagen_beetle": ["simple_vehicles:honk_item"],
    "simple_vehicles:volt_bike": ["simple_vehicles:honk_item"],

    /*
      "simple_vehicles:ae86": [
          "simple_vehicles:honk_item"
      ],
      "simple_vehicles:ambulance": [
          "simple_vehicles:honk_item"
      ],
      "simple_vehicles:armored_truck": [
          "simple_vehicles:honk_item",
          "simple_vehicles:breakable_item"
      ],
          "simple_vehicles:ae86": [
              "simple_vehicles:honk_item"
          ],
          "simple_vehicles:ambulance": [
              "simple_vehicles:honk_item"
          ],
          "simple_vehicles:ae86": [
              "simple_vehicles:honk_item"
          ],
          "simple_vehicles:ambulance": [
              "simple_vehicles:honk_item"
          ],
          "simple_vehicles:ae86": [
              "simple_vehicles:honk_item"
          ],
          "simple_vehicles:ambulance": [
              "simple_vehicles:honk_item"
          ],
          "simple_vehicles:ae86": [
              "simple_vehicles:honk_item"
          ],
          "simple_vehicles:ambulance": [
              "simple_vehicles:honk_item"
          ],
      */
};

/////ALL ITEMS WERE ALL ITEMS APPLY
const SimVehAllControls = [
    "simple_vehicles:honk_item",
    "simple_vehicles:bike_honk_item",
    "simple_vehicles:truck_honk_item",
    "simple_vehicles:jump1_item",
    "simple_vehicles:jump2_item",
    "simple_vehicles:jump3_item",
    "simple_vehicles:asphalt_paving_placer",
    "simple_vehicles:bridge_building_placer",
    "simple_vehicles:beetrpack",
    "simple_vehicles:breakable_item",
    "simple_vehicles:grass_remover",
    "simple_vehicles:mixer_placer",
    "simple_vehicles:wheatpack",
    "minecraft:water_bucket",
];

/////DO NOT TOUCH AND EVERYTHING HERE IS NOW OKAY :D
/////DO NOT TOUCH AND EVERYTHING HERE IS NOW OKAY :D
/////DO NOT TOUCH AND EVERYTHING HERE IS NOW OKAY :D
/////DO NOT TOUCH AND EVERYTHING HERE IS NOW OKAY :D
export function SimVehiclesSetUpControls(
    player,
    simple_vehicles,
    containerEntity
) {
    if (
        !player.isValid() ||
        player.hasTag("onLoadingScreen") ||
        containerEntity == undefined ||
        !containerEntity.isValid()
    ) {
        console.warn("controls setUp cancel");
        return;
    }
    player.setDynamicProperty(
        "simple_vehicles/private_container",
        containerEntity.id
    );
    containerEntity.setDynamicProperty("currentOwner", player.id);
    let playerContainer = player.getComponent("inventory").container;
    let privateContainer = containerEntity.getComponent("inventory").container;
    const Controls = VehicleControlItemSetPacks[simple_vehicles.typeId];
    for (let i = 0; i < Controls.length; i++) {
        let currentItem = playerContainer.getItem(i);
        if (currentItem && currentItem.typeId == Controls[i]) continue;
        let control = new ItemStack(Controls[i], 1);
        control.keepOnDeath = true;
        control.lockMode = ItemLockMode.slot;
        //control.setLore(["press and hold"])
        playerContainer.moveItem(i, i, privateContainer);
        playerContainer.setItem(i, control);
    }
}

export function SimVehremoveControls(player, containerEntity) {
    if (!player?.isValid?.() || !containerEntity?.isValid?.()) {
        console.warn("remove setUp cancel");
        return;
    }

    const playerContainer = player.getComponent("inventory")?.container;
    const privateContainer = containerEntity.getComponent("inventory")?.container;

    if (!playerContainer || !privateContainer) {
        console.warn("remove setUp cancel: container missing");
        return;
    }

    for (let i = 0; i < SimVehAllControls.length; i++) {
        const item = playerContainer.getItem(i);
        if (item && SimVehAllControls.includes(item.typeId)) {
            // Clear the control item from the player's slot
            playerContainer.setItem(i, undefined);
            // Restore the original item if one was parked in the private container
            if (privateContainer.getItem(i)) {
                privateContainer.moveItem(i, i, playerContainer);
            }
        }
    }

    player.setDynamicProperty("simple_vehicles/private_container", undefined);
    containerEntity.setDynamicProperty("currentOwner", undefined);
}