execute @e[type=hus909:cd069] ~~~ effect @a[r=1.4] resistance 1 3 true
execute @e[type=hus909:rh10110] ~~~ effect @a[r=2.3] resistance 1 3 true
execute @e[type=hus909:patherist2250] ~~~ effect @a[r=2.3] resistance 1 3 true
execute @e[type=hus909:cd069,tag=simple_vehicles_moving,scores={carspeed=230..309}] ~~~ damage @e[r=2.4,rm=1.4] 6 fly_into_wall
execute @e[type=hus909:cd069,tag=simple_vehicles_moving,scores={carspeed=310..}] ~~~ damage @e[r=2.4,rm=1.4] 16 fly_into_wall
execute @e[type=hus909:cd069,tag=simple_vehicles_moving,scores={carspeed=1500..}] ~~~ damage @e[r=2.4,rm=1.4] 22 fly_into_wall
execute @e[type=hus909:cd069,tag=simple_vehicles_moving,scores={carspeed=4000..}] ~~~ damage @e[r=2.4,rm=1.4] 35 fly_into_wall
execute @e[type=hus909:cd069,tag=simple_vehicles_moving,scores={carspeed=7250..}] ~~~ damage @e[r=2.4,rm=1.4] 50 fly_into_wall
execute @e[type=hus909:te096,tag=simple_vehicles_moving,scores={carspeed=230..309}] ~~~ damage @e[r=1.5,rm=0.9] 3 fly_into_wall
execute @e[type=hus909:te096,tag=simple_vehicles_moving,scores={carspeed=310..}] ~~~ damage @e[r=1.5,rm=0.9] 7 fly_into_wall
execute @e[type=hus909:te096,tag=simple_vehicles_moving,scores={carspeed=1500..}] ~~~ damage @e[r=1.5,rm=0.9] 17 fly_into_wall
execute @e[type=hus909:te096,tag=simple_vehicles_moving,scores={carspeed=4000..}] ~~~ damage @e[r=1.5,rm=0.9] 24 fly_into_wall
execute @e[type=hus909:te096,tag=simple_vehicles_moving,scores={carspeed=7250..}] ~~~ damage @e[r=1.5,rm=0.9] 34 fly_into_wall
execute @e[type=hus909:te096,tag=simple_vehicles_moving,scores={carspeed=310..}] ~~~ execute @e[r=1.5,rm=0.9] ~~~ event entity @e[type=hus909:te096,c=4,r=3] ejectcar
execute @e[type=hus909:rh10110,tag=simple_vehicles_moving,scores={carspeed=230..309}] ~~~ damage @e[r=3,rm=2.3] 16 fly_into_wall
execute @e[type=hus909:rh10110,tag=simple_vehicles_moving,scores={carspeed=310..}] ~~~ damage @e[r=3,rm=2.3] 21 fly_into_wall
execute @e[type=hus909:rh10110,tag=simple_vehicles_moving,scores={carspeed=1500..}] ~~~ damage @e[r=3,rm=2.3] 32 fly_into_wall
execute @e[type=hus909:rh10110,tag=simple_vehicles_moving,scores={carspeed=4000..}] ~~~ damage @e[r=3,rm=2.3] 42 fly_into_wall
execute @e[type=hus909:rh10110,tag=simple_vehicles_moving,scores={carspeed=7250..}] ~~~ damage @e[r=3,rm=2.3] 62 fly_into_wall
execute @e[type=hus909:tcr2022,tag=simple_vehicles_moving,scores={carspeed=230..309}] ~~~ damage @e[r=2,rm=1.3] 21 fly_into_wall
execute @e[type=hus909:tcr2022,tag=simple_vehicles_moving,scores={carspeed=310..}] ~~~ damage @e[r=2,rm=1.3] 27 fly_into_wall
execute @e[type=hus909:tcr2022,tag=simple_vehicles_moving,scores={carspeed=1500..}] ~~~ damage @e[r=2,rm=1.3] 42 fly_into_wall
execute @e[type=hus909:tcr2022,tag=simple_vehicles_moving,scores={carspeed=4000..}] ~~~ damage @e[r=2,rm=1.3]  60 fly_into_wall
execute @e[type=hus909:tcr2022,tag=simple_vehicles_moving,scores={carspeed=7250..}] ~~~ damage @e[r=2,rm=1.3] 100 fly_into_wall
execute @e[type=hus909:tcr2022,tag=simple_vehicles_moving,scores={carspeed=600..}] ~~~ fill ~2~4~2~-2~~-2 air 0 destroy
execute @e[type=hus909:patherist2250,tag=simple_vehicles_moving,scores={carspeed=300..}] ~~~ damage @e[r=3,rm=2.3] 30 fly_into_wall