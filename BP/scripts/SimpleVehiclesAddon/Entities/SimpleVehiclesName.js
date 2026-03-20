import { world } from "@minecraft/server";

// Lookup table for vehicle typeIds and their corresponding nameTags
const VehicleNameTags = {
    "simple_vehicles:ae86": "Toyota AE86",
    "simple_vehicles:ambulance": "Ambulance",
    "simple_vehicles:armored_truck": "Armored Truck",
    "simple_vehicles:auv_car_b": "AUV Car B",
    "simple_vehicles:apv": "AUV CAR",
    "simple_vehicles:asphalt_paving_truck": "Asphalt Paving Truck",
    "simple_vehicles:bajajre": "Bajaj RE",
    "simple_vehicles:bike": "Bike",
    "simple_vehicles:biplane": "Biplane",
    "simple_vehicles:blimp": "Blimp",
    "simple_vehicles:bridge_building_machine": "Bridge Building Machine",
    "simple_vehicles:bulldozer": "Bulldozer",
    "simple_vehicles:bus_2": "Bus V2",
    "simple_vehicles:bus": "Bus",
    "simple_vehicles:c_sled": "Christmas Sled",
    "simple_vehicles:cadillac_dts_2010": "Cadillac DTS 2010",
    "simple_vehicles:lowrider_v2": "Lowrider V2",
    "simple_vehicles:car": "Car",
    "simple_vehicles:car4x4": "Off-Road Truck",
    "simple_vehicles:cargo_cont_truck": "Cargo Container Truck",
    "simple_vehicles:cargo_truck": "Cargo Truck",
    "simple_vehicles:cargo_truck2": "Cargo Truck 2",
    "simple_vehicles:century": "Mitsubishi Century Luxury",
    "simple_vehicles:chrysler_windsor": "Chrysler Windsor",
    "simple_vehicles:container_van": "Container Van",
    "simple_vehicles:corolla": "Toyota Corolla",
    "simple_vehicles:double_deck_bus": "Double Decker Bus",
    "simple_vehicles:dragster": "Dragster",
    "simple_vehicles:dump_truck": "Dump Truck",
    "simple_vehicles:ev_4": "EV 4",
    "simple_vehicles:f1_car": "F1 Car",
    "simple_vehicles:farm_truck": "Farm Truck",
    "simple_vehicles:fire_truck": "Fire Truck",
    "simple_vehicles:ford_rancherogt_sass": "Ranchero GT SASS",
    "simple_vehicles:gliding_plane": "Gliding Plane",
    "simple_vehicles:go_kart_v2": "Go Kart V2",
    "simple_vehicles:go_kart_withnumbers": "Go Kart (Number Label)",
    "simple_vehicles:go_kart_withoutnumbers": "Go Kart (No Num. Label)",
    "simple_vehicles:golf_cart_street_legal": "Golf Cart Street Legal",
    "simple_vehicles:golf_cart": "Golf Cart",
    "simple_vehicles:grummanllv": "Grumman LLV",
    "simple_vehicles:gyroplane": "Gyroplane",
    "simple_vehicles:hafei_zhongyi": "Hafei Zhongyi",
    "simple_vehicles:helicopter": "Helicopter",
    "simple_vehicles:honda_accord_2019": "Honda Accord 2019",
    "simple_vehicles:hot_air_balloon": "Hot Air Balloon",
    "simple_vehicles:hoverboard": "Hoverboard",
    "simple_vehicles:hyundai_starex_casket": "Hyundai Starex Casket",
    "simple_vehicles:hyundai_starex": "Hyundai Starex",
    "simple_vehicles:ice_cream_truck": "Ice Cream Truck",
    "simple_vehicles:isuzu_dmax": "Isuzu DMAX",
    "simple_vehicles:isuzu_erga": "Isuzu Erga",
    "simple_vehicles:modern_jeep_ph": "Modern Jeep",
    "simple_vehicles:jeep_ph": "Jeep PH",
    "simple_vehicles:jeep_wrangler": "Jeep Wrangler",
    "simple_vehicles:jetmax": "Jetmax",
    "simple_vehicles:jetski": "Jetski",
    "simple_vehicles:land_cruiser": "Land Cruiser",
    "simple_vehicles:lightermax": "Lightermax",
    "simple_vehicles:limmo": "Limousine",
    "simple_vehicles:car_lowrider": "Car Lowrider",
    "simple_vehicles:mini_bus": "Minibus",
    "simple_vehicles:minicar": "Minicar",
    "simple_vehicles:mit_aerojp": "Mit. Aero Bus",
    "simple_vehicles:mitsubishi_minivan_trucktype": "Mit. Minivan Truck Type",
    "simple_vehicles:mitsubishi_minivan": "Mit. Minivan",
    "simple_vehicles:mitsubishi_montero": "Mit. Montero",
    "simple_vehicles:mixer_truck": "Mixer Truck",
    "simple_vehicles:monoplane": "Monoplane",
    "simple_vehicles:monster_truck": "Monster Truck",
    "simple_vehicles:motor_bike": "Motorbike",
    "simple_vehicles:motorcycle": "Motorcycle",
    "simple_vehicles:ford_mustang_blue": "Ford Mustang",
    "simple_vehicles:ob_van": "OB Van",
    "simple_vehicles:opel_astral": "Opel Astral",
    "simple_vehicles:opel_corsa": "Opel Corsa",
    "simple_vehicles:pajero": "Mit. Pajero",
    "simple_vehicles:pick_up_truck": "Pick-up Truck",
    "simple_vehicles:plane": "Plane",
    "simple_vehicles:police_car": "Police Car",
    "simple_vehicles:private_plane": "Private Plane",
    "simple_vehicles:quad_bike": "Quad Bike",
    "simple_vehicles:rally_car": "Rally Car",
    "simple_vehicles:rally_car_2_0": "Rally Car 2.0",
    "simple_vehicles:rancher": "Rancher",
    "simple_vehicles:riding_lawn_mower": "Lawn Mower",
    "simple_vehicles:rocket_v": "Rocket Viking",
    "simple_vehicles:roller_truck": "Roller Truck",
    "simple_vehicles:sabre": "Sabre",
    "simple_vehicles:school_bus": "School Bus",
    "simple_vehicles:scooterb": "Scooter B",
    "simple_vehicles:scooter": "Scooter A",
    "simple_vehicles:seaplane": "Seaplane",
    "simple_vehicles:shenhaoq5": "Shenhao Q5",
    "simple_vehicles:multicab": "Multicab",
    "simple_vehicles:pedicab": "Pedicab",
    "simple_vehicles:pickup_flash_express": "Pickup Truck Flash Exp. Skin",
    "simple_vehicles:snowmobile": "Snowmobile",
    "simple_vehicles:speedboat_two": "Speedboat 2",
    "simple_vehicles:speedboat": "Speedboat",
    "simple_vehicles:submarine": "Submarine",
    "simple_vehicles:tamarraw_fx": "Tamarraw FX",
    "simple_vehicles:taxi": "Taxi",
    "simple_vehicles:tentmushi": "Tentmushi",
    "simple_vehicles:tesla_truck": "Tesla Cybertruck",
    "simple_vehicles:tiltrotor": "Tiltrotor",
    "simple_vehicles:tractor_plow": "Tractor Plow",
    "simple_vehicles:tractor_seeder": "Tractor Seeder",
    "simple_vehicles:tractor_small": "Tractor Small",
    "simple_vehicles:tractor_sprinkler": "Tractor Sprinkler",
    "simple_vehicles:tractor": "Tractor",
    "simple_vehicles:train_cart": "Train Cart",
    "simple_vehicles:train_locomotive": "Train Locomotive",
    "simple_vehicles:travis": "Isuzu Travis",
    "simple_vehicles:tricycle_cargo": "Tricycle Cargo",
    "simple_vehicles:tricycle_cont": "Tricycle Container",
    "simple_vehicles:tricycle": "Tricycle",
    "simple_vehicles:truck": "Truck",
    "simple_vehicles:tuktukthai": "Tuktuk",
    "simple_vehicles:van_v2": "Van V2",
    "simple_vehicles:van": "Van",
    "simple_vehicles:vespa_primavera": "Vespa Primavera",
    "simple_vehicles:vintage_bus_a": "Vintage Bus A",
    "simple_vehicles:vintage_van_a": "Vintage Van A",
    "simple_vehicles:vintage_van_b": "Vintage Van B",
    "simple_vehicles:volkswagen_beetle": "Volkswagen Beetle",
    "simple_vehicles:volt_bike": "Volt Bike",
};


world.afterEvents.entitySpawn.subscribe(({ entity }) => {
    const nameTag = VehicleNameTags[entity.typeId];
    if (nameTag) {
        entity.nameTag = nameTag;
    }
});




























/*import {
    world,
    system
} from "@minecraft/server"

world.afterEvents.entitySpawn.subscribe(
    (
        {
            entity
        }
    ) => {
        if (entity?.typeId === "simple_vehicles:ae86") { entity.nameTag = "Toyota AE86" }
        else if (entity?.typeId === "simple_vehicles:ambulance") { entity.nameTag = "Ambulance" }
        else if (entity?.typeId === "simple_vehicles:armored_truck") { entity.nameTag = "Armiored Truck" }
        else if (entity?.typeId === "simple_vehicles:auv_car_b") { entity.nameTag = "AUV Car B" }
        else if (entity?.typeId === "simple_vehicles:apv") { entity.nameTag = "AUV CAR" }
        else if (entity?.typeId === "simple_vehicles:asphalt_paving_truck") { entity.nameTag = "Asphalt Paving Truck" }
        else if (entity?.typeId === "simple_vehicles:bajajre") { entity.nameTag = "Bajaj RE" }
        else if (entity?.typeId === "simple_vehicles:bike") { entity.nameTag = "Bike" }
        else if (entity?.typeId === "simple_vehicles:biplane") { entity.nameTag = "BIPlane" }
        else if (entity?.typeId === "simple_vehicles:blimp") { entity.nameTag = "Blimp" }
        else if (entity?.typeId === "simple_vehicles:bridge_building_machine") { entity.nameTag = "Bridge Building Machine" }
        else if (entity?.typeId === "simple_vehicles:bulldozer") { entity.nameTag = "Bulldozer" }
        else if (entity?.typeId === "simple_vehicles:bus_2") { entity.nameTag = "Bus V2" }
        else if (entity?.typeId === "simple_vehicles:bus") { entity.nameTag = "Bus" }
        else if (entity?.typeId === "simple_vehicles:c_sled") { entity.nameTag = "Christmas Sled" }
        else if (entity?.typeId === "simple_vehicles:cadillac_dts_2010") { entity.nameTag = "Cadillac DTS 2010" }
        else if (entity?.typeId === "simple_vehicles:lowrider_v2") { entity.nameTag = "Lowrider V2" }
        else if (entity?.typeId === "simple_vehicles:car") { entity.nameTag = "Car" }
        else if (entity?.typeId === "simple_vehicles:car4x4") { entity.nameTag = "Off-Road Truck" }
        else if (entity?.typeId === "simple_vehicles:cargo_cont_truck") { entity.nameTag = "Cargo Container Truck" }
        else if (entity?.typeId === "simple_vehicles:cargo_truck") { entity.nameTag = "Cargo Truck" }
        else if (entity?.typeId === "simple_vehicles:cargo_truck2") { entity.nameTag = "Cargo Truck 2" }
        else if (entity?.typeId === "simple_vehicles:century") { entity.nameTag = "Mitsubishi Century Luxury" }
        else if (entity?.typeId === "simple_vehicles:chrysler_windsor") { entity.nameTag = "Chrysler Windsor" }


        else if (entity?.typeId === "simple_vehicles:container_van") { entity.nameTag = "Container Van" }
        else if (entity?.typeId === "simple_vehicles:corolla") { entity.nameTag = "Toyota Corolla" }
        else if (entity?.typeId === "simple_vehicles:double_deck_bus") { entity.nameTag = "Double Decker Bus" }
        else if (entity?.typeId === "simple_vehicles:dragster") { entity.nameTag = "Dragster" }
        else if (entity?.typeId === "simple_vehicles:dump_truck") { entity.nameTag = "Dump Truck" }
        else if (entity?.typeId === "simple_vehicles:ev_4") { entity.nameTag = "EV 4" }
        else if (entity?.typeId === "simple_vehicles:f1_car") { entity.nameTag = "F1 Car" }
        else if (entity?.typeId === "simple_vehicles:farm_truck") { entity.nameTag = "Farm Truck" }
        else if (entity?.typeId === "simple_vehicles:fire_truck") { entity.nameTag = "Fire Truck" }
        else if (entity?.typeId === "simple_vehicles:ford_rancherogt_sass") { entity.nameTag = "Ranchero GT SASS" }
        else if (entity?.typeId === "simple_vehicles:gliding_plane") { entity.nameTag = "Gliding Plane" }
        else if (entity?.typeId === "simple_vehicles:go_kart_v2") { entity.nameTag = "Go Kart V2" }
        else if (entity?.typeId === "simple_vehicles:go_kart_withnumbers") { entity.nameTag = "Go Kart (Number Label)" }
        else if (entity?.typeId === "simple_vehicles:go_kart_withoutnumbers") { entity.nameTag = "Go Kart (No Num. Label)" }
        else if (entity?.typeId === "simple_vehicles:golf_cart_street_legal") { entity.nameTag = "Golf Cart Street Legal" }
        else if (entity?.typeId === "simple_vehicles:golf_cart") { entity.nameTag = "Golf Cart" }
        else if (entity?.typeId === "simple_vehicles:grummanllv") { entity.nameTag = "Grumman LLV" }
        else if (entity?.typeId === "simple_vehicles:gyroplane") { entity.nameTag = "Gyroplane" }
        else if (entity?.typeId === "simple_vehicles:hafei_zhongyi") { entity.nameTag = "Hafei Zhongyi" }
        else if (entity?.typeId === "simple_vehicles:helicopter") { entity.nameTag = "Helicopter" }
        else if (entity?.typeId === "simple_vehicles:honda_accord_2019") { entity.nameTag = "Honda Accord 2019" }
        else if (entity?.typeId === "simple_vehicles:hot_air_balloon") { entity.nameTag = "Hot Air Balloon" }
        else if (entity?.typeId === "simple_vehicles:hoverboard") { entity.nameTag = "Hoverboard" }


        else if (entity?.typeId === "simple_vehicles:hyundai_starex_casket") { entity.nameTag = "Hyundai Starex Casket" }
        else if (entity?.typeId === "simple_vehicles:hyundai_starex") { entity.nameTag = "Hundai Starex" }
        else if (entity?.typeId === "simple_vehicles:ice_cream_truck") { entity.nameTag = "Ice Cream Truck" }
        else if (entity?.typeId === "simple_vehicles:isuzu_dmax") { entity.nameTag = "Isuzu DMAX" }
        else if (entity?.typeId === "simple_vehicles:isuzu_erga") { entity.nameTag = "Isuzu Erga" }
        else if (entity?.typeId === "simple_vehicles:modern_jeep_ph") { entity.nameTag = "Modern Jeep" }
        else if (entity?.typeId === "simple_vehicles:jeep_ph") { entity.nameTag = "Jeep PH" }
        else if (entity?.typeId === "simple_vehicles:jeep_wrangler") { entity.nameTag = "Jeep Wrangler" }
        else if (entity?.typeId === "simple_vehicles:jetmax") { entity.nameTag = "Jetmax" }
        else if (entity?.typeId === "simple_vehicles:jetski") { entity.nameTag = "Jetmax" }
        else if (entity?.typeId === "simple_vehicles:land_cruiser") { entity.nameTag = "Land Cruiser" }
        else if (entity?.typeId === "simple_vehicles:lightermax") { entity.nameTag = "Lightermax" }
        else if (entity?.typeId === "simple_vehicles:limmo") { entity.nameTag = "Limousine" }
        else if (entity?.typeId === "simple_vehicles:car_lowrider") { entity.nameTag = "Car Lowrider" }
        else if (entity?.typeId === "simple_vehicles:mini_bus") { entity.nameTag = "Minibus" }
        else if (entity?.typeId === "simple_vehicles:minicar") { entity.nameTag = "Minicar" }
        else if (entity?.typeId === "simple_vehicles:mit_aerojp") { entity.nameTag = "Mit. Aero Bus" }
        else if (entity?.typeId === "simple_vehicles:mitsubishi_minivan_trucktype") { entity.nameTag = "Mit. Minivan Truck Type" }
        else if (entity?.typeId === "simple_vehicles:mitsubishi_minivan") { entity.nameTag = "Mit. Minivan" }
        else if (entity?.typeId === "simple_vehicles:mitsubishi_montero") { entity.nameTag = "Mit. Montero" }
        else if (entity?.typeId === "simple_vehicles:mixer_truck") { entity.nameTag = "Mixer Truck" }
        else if (entity?.typeId === "simple_vehicles:monoplane") { entity.nameTag = "Monoplane" }
        else if (entity?.typeId === "simple_vehicles:monster_truck") { entity.nameTag = "Monster Truck" }
        else if (entity?.typeId === "simple_vehicles:motor_bike") { entity.nameTag = "Motorbike" }
        else if (entity?.typeId === "simple_vehicles:motorcycle") { entity.nameTag = "Motorcycle" }
        else if (entity?.typeId === "simple_vehicles:ford_mustang_blue") { entity.nameTag = "Ford Mustang" }


        else if (entity?.typeId === "simple_vehicles:ob_van") { entity.nameTag = "OB Van" }
        else if (entity?.typeId === "simple_vehicles:opel_astral") { entity.nameTag = "Opel Astral" }
        else if (entity?.typeId === "simple_vehicles:opel_corsa") { entity.nameTag = "Opel Corsa" }
        else if (entity?.typeId === "simple_vehicles:pajero") { entity.nameTag = "Mit. Pajero" }
        else if (entity?.typeId === "simple_vehicles:pick_up_truck") { entity.nameTag = "Pick-up Truck" }
        else if (entity?.typeId === "simple_vehicles:plane") { entity.nameTag = "Plane" }
        else if (entity?.typeId === "simple_vehicles:police_car") { entity.nameTag = "Police Car" }
        else if (entity?.typeId === "simple_vehicles:private_plane") { entity.nameTag = "Private Plane" }
        else if (entity?.typeId === "simple_vehicles:quad_bike") { entity.nameTag = "Quabike" }
        else if (entity?.typeId === "simple_vehicles:rally_car") { entity.nameTag = "Rally Car" }
        else if (entity?.typeId === "simple_vehicles:rally_car_2_0") { entity.nameTag = "Rally Car 2.0" }
        else if (entity?.typeId === "simple_vehicles:rancher") { entity.nameTag = "Rancher" }
        else if (entity?.typeId === "simple_vehicles:riding_lawn_mower") { entity.nameTag = "Lawn Mower" }
        else if (entity?.typeId === "simple_vehicles:rocket_v") { entity.nameTag = "Rocket Viking" }
        else if (entity?.typeId === "simple_vehicles:roller_truck") { entity.nameTag = "Roller Truck" }
        else if (entity?.typeId === "simple_vehicles:sabre") { entity.nameTag = "Sabre" }
        else if (entity?.typeId === "simple_vehicles:school_bus") { entity.nameTag = "School Bus" }
        else if (entity?.typeId === "simple_vehicles:scooterb") { entity.nameTag = "Scooter B" }
        else if (entity?.typeId === "simple_vehicles:scooter") { entity.nameTag = "Scooter A" }
        else if (entity?.typeId === "simple_vehicles:seaplane") { entity.nameTag = "Seaplane" }
        else if (entity?.typeId === "simple_vehicles:shenhaoq5") { entity.nameTag = "Shenhao Q5" }
        else if (entity?.typeId === "simple_vehicles:multicab") { entity.nameTag = "Multicab" }
        else if (entity?.typeId === "simple_vehicles:pedicab") { entity.nameTag = "Pedicab" }
        else if (entity?.typeId === "simple_vehicles:pickup_flash_express") { entity.nameTag = "Pickup Truck Flash Exp. Skin" }
        else if (entity?.typeId === "simple_vehicles:snowmobile") { entity.nameTag = "Snowmobile" }
        else if (entity?.typeId === "simple_vehicles:speedboat_two") { entity.nameTag = "Speedboat 2" }
        else if (entity?.typeId === "simple_vehicles:speedboat") { entity.nameTag = "Speedboat" }
        else if (entity?.typeId === "simple_vehicles:submarine") { entity.nameTag = "Submarine" }
        else if (entity?.typeId === "simple_vehicles:tamarraw_fx") { entity.nameTag = "Tamarraw FX" }
        else if (entity?.typeId === "simple_vehicles:taxi") { entity.nameTag = "Taxi" }
        else if (entity?.typeId === "simple_vehicles:tentmushi") { entity.nameTag = "Tentmushi" }
        else if (entity?.typeId === "simple_vehicles:tesla_truck") { entity.nameTag = "Tesla Cybertruck" }
        else if (entity?.typeId === "simple_vehicles:tiltrotor") { entity.nameTag = "Tiltrotor" }
        else if (entity?.typeId === "simple_vehicles:tractor_plow") { entity.nameTag = "Tractor Plow" }
        else if (entity?.typeId === "simple_vehicles:tractor_seeder") { entity.nameTag = "Tractor Seeder" }
        else if (entity?.typeId === "simple_vehicles:tractor_small") { entity.nameTag = "Tractor Small" }
        else if (entity?.typeId === "simple_vehicles:tractor_sprinkler") { entity.nameTag = "Tractor Sprinkler" }
        else if (entity?.typeId === "simple_vehicles:tractor") { entity.nameTag = "Tractor" }
        else if (entity?.typeId === "simple_vehicles:train_cart") { entity.nameTag = "Train Cart" }
        else if (entity?.typeId === "simple_vehicles:train_locomotive") { entity.nameTag = "Train Locomotive" }
        else if (entity?.typeId === "simple_vehicles:travis") { entity.nameTag = "Isuzu Travis" }
        else if (entity?.typeId === "simple_vehicles:tricycle_cargo") { entity.nameTag = "Tricycle Cargo" }
        else if (entity?.typeId === "simple_vehicles:tricycle_cont") { entity.nameTag = "Tricycle Container" }
        else if (entity?.typeId === "simple_vehicles:tricycle") { entity.nameTag = "Tricycle" }
        else if (entity?.typeId === "simple_vehicles:truck") { entity.nameTag = "Truck" }
        else if (entity?.typeId === "simple_vehicles:tuktukthai") { entity.nameTag = "Tuktuk" }
        else if (entity?.typeId === "simple_vehicles:van_v2") { entity.nameTag = "Van V2" }
        else if (entity?.typeId === "simple_vehicles:van") { entity.nameTag = "Van" }
        else if (entity?.typeId === "simple_vehicles:vespa_primavera") { entity.nameTag = "Vespa Primavera" }
        else if (entity?.typeId === "simple_vehicles:vintage_bus_a") { entity.nameTag = "Vintage Bus A" }
        else if (entity?.typeId === "simple_vehicles:vintage_van_a") { entity.nameTag = "Vintage Van A" }
        else if (entity?.typeId === "simple_vehicles:vintage_van_b") { entity.nameTag = "Vintage Van B" }
        else if (entity?.typeId === "simple_vehicles:volkswagen_beetle") { entity.nameTag = "Volkswagen Beetle" }
        else if (entity?.typeId === "simple_vehicles:volt_bike") { entity.nameTag = "Volt Bike" };
    }
)

///FIXED BY USING BLACKBOX AI FOR PROPER READABILITY
///FIXED BY USING BLACKBOX AI FOR PROPER READABILITY
///FIXED BY USING BLACKBOX AI FOR PROPER READABILITY
///FIXED BY USING BLACKBOX AI FOR PROPER READABILITY
import {
    world,
    system
} from "@minecraft/server"

const vehicleNameMap = {
    "simple_vehicles:ae86": "Toyota AE86",
    "simple_vehicles:ambulance": "Ambulance",
    "simple_vehicles:armored_truck": "Armored Truck",
    "simple_vehicles:auv_car_b": "AUV Car B",
    "simple_vehicles:apv": "AUV CAR",
    "simple_vehicles:asphalt_paving_truck": "Asphalt Paving Truck",
    "simple_vehicles:bajajre": "Bajaj RE",
    "simple_vehicles:bike": "Bike",
    "simple_vehicles:biplane": "Biplane",
    "simple_vehicles:blimp": "Blimp",
    "simple_vehicles:bridge_building_machine": "Bridge Building Machine",
    "simple_vehicles:bulldozer": "Bulldozer",
    "simple_vehicles:bus_2": "Bus V2",
    "simple_vehicles:bus": "Bus",
    "simple_vehicles:c_sled": "Christmas Sled",
    "simple_vehicles:cadillac_dts_2010": "Cadillac DTS 2010",
    "simple_vehicles:lowrider_v2": "Lowrider V2",
    "simple_vehicles:car": "Car",
    "simple_vehicles:car4x4": "Off-Road Truck",
    "simple_vehicles:cargo_cont_truck": "Cargo Container Truck",
    "simple_vehicles:cargo_truck": "Cargo Truck",
    "simple_vehicles:cargo_truck2": "Cargo Truck 2",
    "simple_vehicles:century": "Mitsubishi Century Luxury",
    "simple_vehicles:chrysler_windsor": "Chrysler Windsor"
};

world.afterEvents.entitySpawn.subscribe(({ entity }) => {
    if (entity?.typeId in vehicleNameMap) {
        entity.nameTag = vehicleNameMap[entity.typeId];
    }
});
*/