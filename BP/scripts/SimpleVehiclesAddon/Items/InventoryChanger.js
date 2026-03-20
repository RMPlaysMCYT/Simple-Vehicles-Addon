////I'm an addon creator who want to teach others using scripts its very scary sometimes but i'll try my best

////The Code of my addons were always open or open-source or whatever it is it's up to you if you try to learn, copy and paste

////You can help me if you have external ideas especially if you are good in scripts you can contribute

////If you use it to my addons please leave me a credit by using RMPlaysMC YT on your content


import { Player, ItemStack, EnchantmentType } from "@minecraft/server";


/**@param {Player} player  */
function saveInventory(player, invName = player.nameTag, storage = player) {
    let { container, inventorySize } = player.getComponent("inventory");
    const items = [];
    while (inventorySize--) {
        const item = container.getItem(inventorySize);
        if (!item) {
            items.push(null);
            continue;
        };
        const data = {
            typeId: item.typeId,
            props: {
                amount: item.amount,
                keepOnDeath: item.keepOnDeath,
                lockMode: item.lockMode
            },
            lore: item.getLore(),
            canDestroy: item.getCanDestroy(),
            canPlaceOn: item.getCanPlaceOn(),
            // properties: item.getDynamicPropertyIds().reduce((o, p) => (o[p] = item, o), {}),
            components: {}
        };
        if (item.nameTag) data.props.nameTag = item.nameTag;
        if (item.hasComponent("enchantable")) {
            data.components.enchantable = item.getComponent("enchantable").getEnchantments().map(e => ({ type: e.type.id, level: e.level }));
        }
        if (item.hasComponent("durability")) {
            data.components.durability = item.getComponent("durability").damage;
        }
        items.push(data);
    }
    storage.setDynamicProperty(`inventory:${invName}`, JSON.stringify(items));
    return items;
}


/**@param {Player} player  */
function loadInventory(player, invName = player.nameTag, storage = player) {
    let { container, inventorySize } = player.getComponent("inventory");
    const items = JSON.parse(storage.getDynamicProperty(`inventory:${invName}`) ?? "[]");
    while (inventorySize--) {
        const data = items[inventorySize]
        if (!data) container.setItem(inventorySize)
        else {
            const item = new ItemStack(data.typeId)
            for (const key in data.props) {
                item[key] = data.props[key];
            }
            // for (const prop in data.properties) {
            //     item.setDynamicProperty(prop, data.properties[prop])
            // }
            item.setLore(data.lore);
            item.setCanDestroy(data.canDestroy);
            item.setCanPlaceOn(data.canPlaceOn);
            if (data.components.enchantable) {
                item.getComponent("enchantable").addEnchantments(data.components.enchantable.map(e => ({...e, type: new EnchantmentType(e.type)})))
            }
            if (data.components.durability) {
                item.getComponent("durability").damage = data.components.durability
            }
            container.setItem(inventorySize, item)
        }
    }
}
/*
loadInventory(player, player.nameTag, itemStack)
saveInventory(player, player.nameTag, itemStack
*/