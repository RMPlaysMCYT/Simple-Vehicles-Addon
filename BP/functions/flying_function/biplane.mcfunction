execute as @p[rx=-25,rxm=-90,r=5] run effect @e[r=5,type=simple_vehicles:biplane] levitation 1 9 true
execute as @p[rx=5,rxm=-10,r=5] run effect @e[r=5,type=simple_vehicles:biplane] levitation 1 2 true
execute as @p[rx=-10,rxm=-35,r=5] run effect @e[r=5,type=simple_vehicles:biplane] levitation 1 5 true
execute as @p[rx=90,rxm=5,r=5] run effect @e[r=5,type=simple_vehicles:biplane] slow_falling 1 0 true

execute as @p[rx=5,rxm=90] run effect @e[r=2,type=simple_vehicles:biplane,scores={speed=..320,oil=10..}] slow_falling 1 1 true
execute as @p[rx=5,rxm=90] run effect @e[r=2,type=simple_vehicles:biplane,scores={speed=..320,oil=..9}] slow_falling 1 1 true
execute as @p[rx=5,rxm=60] run effect @e[r=2,type=simple_vehicles:biplane,scores={speed=..320,oil=..9}] slow_falling 1 1 true
execute as @p[rx=5,rxm=30] run effect @e[r=2,type=simple_vehicles:biplane,scores={speed=..320,oil=..9}] slow_falling 1 1 true
