export const SimVehRideable = {
  getRideableComponent(entity) {
    return entity.getComponent("rideable")
  },
  getRiderByType(entity, typeId) {
    let riders = entity.getComponent("rideable").getRiders();
    for (let rider of riders) {
      if (rider.typeId === typeId) {
        return rider;
      }
    }
  },
  hasRiderType(entity, riderType) {
    let riders = entity.getComponent("rideable").getRiders();
    for (let rider of riders) {
      if (rider.typeId === riderType) {
        return true;
      }
    }
    return false;
  },
  addRider(entity, rider) {
    let rideable = this.getRideableComponent(entity)
    let result = rideable.addRider(rider)
    return result
  }
};