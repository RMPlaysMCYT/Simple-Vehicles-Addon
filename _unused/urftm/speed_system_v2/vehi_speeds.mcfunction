scoreboard players add @e[tag=simple_vehicles_moving] carspeed 3
scoreboard players add @e[tag=simple_vehicles_moving,tag=has_tier2_engine] carspeed 3
scoreboard players add @e[tag=simple_vehicles_moving,tag=has_tier3_engine] carspeed 6
scoreboard players add @e[tag=simple_vehicles_moving,tag=has_tier4_engine] carspeed 12
scoreboard players add @e[tag=simple_vehicles_moving,tag=has_tier5_engine] carspeed 24
scoreboard players add @e[tag=simple_vehicles_moving,tag=has_tier6_engine] carspeed 48
scoreboard players add @e[tag=simple_vehicles_moving,tag=has_tier7_engine] carspeed 96
scoreboard players add @e[tag=simple_vehicles_moving,tag=has_tier7_engine] carspeed 192
scoreboard players add @e[tag=simple_vehicles_moving,tag=has_tier8_engine] carspeed 384
scoreboard players add @e[tag=simple_vehicles_moving,tag=has_tier9_engine] carspeed 768

scoreboard players set @e[family=simple_vehicles,scores={carspeed=..-2}] carspeed 0
scoreboard players set @e[family=simple_vehicles,scores={carspeed=7502..}] carspeed 7501

scoreboard objectives add carspeed dummy carspeed

effect @e[family=simple_vehicles,scores={carspeed=..40}] slowness 1 4 true
effect @e[family=simple_vehicles,scores={carspeed=..90}] slowness 1 3 true
effect @e[family=simple_vehicles,scores={carspeed=..150}] slowness 1 2 true
effect @e[family=simple_vehicles,scores={carspeed=..230}] slowness 1 1 true
effect @e[family=simple_vehicles,scores={carspeed=..310}] slowness 1 0 true
effect @e[family=simple_vehicles,scores={carspeed=1500..}] speed 1 4 true
effect @e[family=simple_vehicles,scores={carspeed=4000..}] speed 1 8 true
effect @e[family=simple_vehicles,scores={carspeed=7250..}] speed 1 16 true