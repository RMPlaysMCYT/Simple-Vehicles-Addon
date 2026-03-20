execute as @a[c=1,rx=-35,rxm=-90] run effect @e[r=2,type=simple_vehicles:plane]  levitation 1 9 true
execute as @a[c=1,rx=5,rxm=-10] run effect @e[r=2,type=simple_vehicles:plane] levitation 1 2 true
execute as @a[c=1,rx=-10,rxm=-35] run effect @e[r=2,type=simple_vehicles:plane] levitation 1 5 true
execute as @a[c=1,rx=90,rxm=5] run effect @e[r=2,type=simple_vehicles:plane] slow_falling 1 0 true

execute as @a[c=1,rx=5,rxm=90] run effect @e[r=2,type=simple_vehicles:plane,scores={speed=..320,oil=10..}] slow_falling 1 1 true
execute as @a[c=1,rx=5,rxm=90] run effect @e[r=2,type=simple_vehicles:plane,scores={speed=..320,oil=..9}] slow_falling 1 1 true
execute as @a[c=1,rx=5,rxm=60] run effect @e[r=2,type=simple_vehicles:plane,scores={speed=..320,oil=..9}] slow_falling 1 1 true
execute as @a[c=1,rx=5,rxm=30] run effect @e[r=2,type=simple_vehicles:plane,scores={speed=..320,oil=..9}] slow_falling 1 1 true