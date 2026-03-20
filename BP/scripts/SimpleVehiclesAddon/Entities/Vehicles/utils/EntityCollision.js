import { world, system } from '@minecraft/server'
import {SimVehremoveControls} from "../ItemControls"
export function collision (entity, rider, privateContainerEntity) {
    let collided = false
    if (entity.hasTag("collided")) {
        system.runTimeout(() => {
            rider.camera.clear
        }, 20)
        rider.setDynamicProperty("simple_vehicles_ride/id", undefined)
        entity.dimension.createExplosion(entity.location, 3, {causesFire: true, source: entity})
        SimVehremoveControls(rider, privateContainerEntity)
        privateContainerEntity.triggerEvent("adn:despawn")
        entity.getComponent("rideable").ejectRiders()
        entity.kill()
    }
}