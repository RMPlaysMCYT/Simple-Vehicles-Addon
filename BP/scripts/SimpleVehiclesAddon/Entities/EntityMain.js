import {
    world,
    system
} from "@minecraft/server";

import {
    SimVehRideable
} from "./Vehicles/VehicleRideable";

import {
    SimVehiclesSetUpControls,
    SimVehremoveControls
} from "./Vehicles/ItemControls";

import {
    collision
} from "./Vehicles/utils/EntityCollision";






const FamilyQuery = {
    "families": [
        "simple_vehicles"
    ]
}

system.runInterval(() => {
    let entities = world.getDimension("overworld").getEntities(FamilyQuery);
    for (let simple_vehicles of entities) {
        let rider = simple_vehicles.getComponent("rideable").getRiders()
        let privateContainerEntity = SimVehRideable.getRiderByType(simple_vehicles, "simple_vehicles:secret_inventory1")
        if (!SimVehRideable.hasRiderType(simple_vehicles, "minecraft:player")) {
            onRiderLeaveVehicle(simple_vehicles, privateContainerEntity)
            continue
        }
        rider = SimVehRideable.getRiderByType(simple_vehicles, "minecraft:player")
        initialize(simple_vehicles, rider, privateContainerEntity)
        collision(simple_vehicles,rider,privateContainerEntity)
    }
}, 0)


function initialize(simple_vehicles, rider, privateContainerEntity) {
    let riderDynamicProperty = rider.getDynamicProperty("simple_vehicles_ride/id")
    let simple_vehiclesDynamicProperty = simple_vehicles.getDynamicProperty("simple_vehicles_rider/id")

    if (riderDynamicProperty == simple_vehicles.id && simple_vehiclesDynamicProperty == rider.id) return

    simple_vehicles.setDynamicProperty("simple_vehicles_rider/id", rider.id)
    rider.setDynamicProperty("simple_vehicles_ride/id", simple_vehicles.id)

    SimVehiclesSetUpControls(rider, simple_vehicles, privateContainerEntity)
};

function onRiderLeaveVehicle(simple_vehicles, privateContainerEntity) {
    //world.sendMessage("rider left")
    //console.warn("rider is lefting")
    let riderId = simple_vehicles.getDynamicProperty("simple_vehicles_rider/id")

    if (riderId != undefined) {
        let rider = world.getEntity(riderId)
        rider.setDynamicProperty("simple_vehicles_rider/id", undefined)
        simple_vehicles.setDynamicProperty("simple_vehicles_rider/id", undefined)
        if (rider == undefined) return
        SimVehremoveControls(rider, privateContainerEntity)
        console.warn("rider left")
    }
};