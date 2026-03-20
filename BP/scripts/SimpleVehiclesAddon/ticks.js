import { world, system } from '@minecraft/server';

system.runInterval(() => {
    world.getDimension('overworld').runCommandAsync('function test/test_world')
        .then(() => {
            console.log('Function test/test_world executed successfully.');
        })
        .catch((error) => {
            console.error('Failed to execute function:', error);
        });
}, 5);