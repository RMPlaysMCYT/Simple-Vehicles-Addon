scoreboard players set @e[type=simple_vehicles:jeep_ph,scores={gasleft=1601..}] gasleft 1600
scoreboard players set @e[type=simple_vehicles:modern_jeep_ph,scores={gasleft=1601..}] gasleft 1600

scoreboard objectives add gasleft dummy gasleft

event entity @e[family=simple_vehicles,scores={gasleft=..-1}] minecraft:deactivated

tag @e[family=simple_vehicles,scores={gasleft=..0}] remove has_fuel
tag @e[family=simple_vehicles,scores={gasleft=..0}] remove has_fuel