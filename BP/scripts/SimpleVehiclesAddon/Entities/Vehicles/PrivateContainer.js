import {
    world,
    system
} from "@minecraft/server"

import {
    SimVehRideable
} from "./VehicleRideable"

export function setupSimVehPrivateContainer(entity) {
    let containerEntity = entity.dimension.spawnEntity("simple_vehicles:secret_inventory1", entity.location)
    let ride = SimVehRideable.addRider(entity, containerEntity);
    if (ride) {
        containerEntity.setDynamicProperty("simple_vehicles/vehicle_id", entity.id)
        entity.setDynamicProperty("simple_vehicles/private_container", containerEntity.id)
    }
}