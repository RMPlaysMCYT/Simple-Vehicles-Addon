###execute @p[rx=-25,rxm=-90,r=1] ~ ~ ~ execute @e[r=1,type=simple_vehicles:gyroplane] ~ ~ ~ effect @s levitation 1 9 true
###execute @p[rx=5,rxm=-10,r=1] ~ ~ ~ execute @e[r=1,type=simple_vehicles:gyroplane] ~ ~ ~ effect @s levitation 1 2 true
###execute @p[rx=-10,rxm=-35,r=1] ~ ~ ~ execute @e[r=1,type=simple_vehicles:gyroplane] ~ ~ ~ effect @s levitation 1 5 true
###execute @p[rx=90,rxm=5,r=1] ~ ~ ~ execute @e[r=1,type=simple_vehicles:gyroplane] ~ ~ ~ effect @s slow_falling 5 0 true
###execute @p[rx=30,rxm=5,r=1] ~ ~ ~ execute @e[r=1,type=simple_vehicles:gyroplane] ~ ~ ~ effect @s slow_falling 3 0 true
###execute @p[rx=60,rxm=5,r=1] ~ ~ ~ execute @e[r=1,type=simple_vehicles:gyroplane] ~ ~ ~ effect @s slow_falling 3 0 true
###execute @p[rx=15,rxm=5,r=1] ~ ~ ~ execute @e[r=1,type=simple_vehicles:gyroplane] ~ ~ ~ effect @s slow_falling 3 0 true
###
###execute @p[rx=-25,rxm=-90,r=4] ~ ~ ~ execute @e[r=1,type=simple_vehicles:private_plane] ~ ~ ~ effect @s levitation 1 9 true
###execute @p[rx=5,rxm=-10,r=4] ~ ~ ~ execute @e[r=1,type=simple_vehicles:private_plane] ~ ~ ~ effect @s levitation 1 2 true
###execute @p[rx=-10,rxm=-35,r=4] ~ ~ ~ execute @e[r=1,type=simple_vehicles:private_plane] ~ ~ ~ effect @s levitation 1 5 true
###execute @p[rx=90,rxm=5,r=4] ~ ~ ~ execute @e[r=1,type=simple_vehicles:private_plane] ~ ~ ~ effect @s slow_falling 5 4 true
###execute @p[rx=60,rxm=5,r=4] ~ ~ ~ execute @e[r=1,type=simple_vehicles:private_plane] ~ ~ ~ effect @s slow_falling 5 4 true
###execute @p[rx=30,rxm=5,r=4] ~ ~ ~ execute @e[r=1,type=simple_vehicles:private_plane] ~ ~ ~ effect @s slow_falling 5 4 true
###execute @p[rx=15,rxm=5,r=4] ~ ~ ~ execute @e[r=1,type=simple_vehicles:private_plane] ~ ~ ~ effect @s slow_falling 5 4 true
###
###
###
###
###
###execute @p[rx=-5,rxm=90] ~ ~ ~ execute @e[r=2,type=simple_vehicles:gyroplane] ~ ~ ~ effect @s[scores={speed=..320,oil=10..}] slow_falling 1 1 true
###execute @p[rx=-5,rxm=90] ~ ~ ~ execute @e[r=2,type=simple_vehicles:gyroplane] ~ ~ ~ effect @s[scores={speed=..320,oil=..9}] slow_falling 1 1 true
###execute @p[rx=-5,rxm=60] ~ ~ ~ execute @e[r=2,type=simple_vehicles:gyroplane] ~ ~ ~ effect @s[scores={speed=..320,oil=..9}] slow_falling 1 1 true
###execute @p[rx=-5,rxm=30] ~ ~ ~ execute @e[r=2,type=simple_vehicles:gyroplane] ~ ~ ~ effect @s[scores={speed=..320,oil=..9}] slow_falling 1 1 true
###
###
###execute @p[rx=-5,rxm=90] ~ ~ ~ execute @e[r=2,type=simple_vehicles:private_plane] ~ ~ ~ effect @s[scores={speed=..320,oil=10..}] slow_falling 1 1 true
###execute @p[rx=-5,rxm=90] ~ ~ ~ execute @e[r=2,type=simple_vehicles:private_plane] ~ ~ ~ effect @s[scores={speed=..320,oil=..9}] slow_falling 1 1 true
###execute @p[rx=-5,rxm=60] ~ ~ ~ execute @e[r=2,type=simple_vehicles:private_plane] ~ ~ ~ effect @s[scores={speed=..320,oil=..9}] slow_falling 1 1 true
###execute @p[rx=-5,rxm=30] ~ ~ ~ execute @e[r=2,type=simple_vehicles:private_plane] ~ ~ ~ effect @s[scores={speed=..320,oil=..9}] slow_falling 1 1 true





execute as @a[c=1,rx=-25,rxm=-90,r=5] run effect @e[r=5,type=simple_vehicles:private_plane] levitation 1 9 true
execute as @a[c=1,rx=5,rxm=-10,r=5] run effect @e[r=5,type=simple_vehicles:private_plane] levitation 1 2 true
execute as @a[c=1,rx=-10,rxm=-35,r=5] run effect @e[r=5,type=simple_vehicles:private_plane] levitation 1 5 true
execute as @a[c=1,rx=90,rxm=5,r=5] run effect @e[r=5,type=simple_vehicles:private_plane] slow_falling 1 0 true

execute as @a[c=1,rx=5,rxm=90] run effect @e[r=2,type=simple_vehicles:private_plane,scores={speed=..320,oil=10..}] slow_falling 1 1 true
execute as @a[c=1,rx=5,rxm=90] run effect @e[r=2,type=simple_vehicles:private_plane,scores={speed=..320,oil=..9}] slow_falling 1 1 true
execute as @a[c=1,rx=5,rxm=60] run effect @e[r=2,type=simple_vehicles:private_plane,scores={speed=..320,oil=..9}] slow_falling 1 1 true
execute as @a[c=1,rx=5,rxm=30] run effect @e[r=2,type=simple_vehicles:private_plane,scores={speed=..320,oil=..9}] slow_falling 1 1 true

execute as @a[c=1,rx=-25,rxm=-90,r=1] run effect @e[r=5,type=simple_vehicles:gyroplane] levitation 1 9 true
execute as @a[c=1,rx=5,rxm=-10,r=1] run effect @e[r=5,type=simple_vehicles:gyroplane] levitation 1 2 true
execute as @a[c=1,rx=-10,rxm=-35,r=1] run effect @e[r=5,type=simple_vehicles:gyroplane] levitation 1 5 true
execute as @a[c=1,rx=90,rxm=5,r=1] run effect @e[r=5,type=simple_vehicles:gyroplane] slow_falling 1 0 true

execute as @a[c=1,rx=5,rxm=90] run effect @e[r=2,type=simple_vehicles:gyroplane,scores={speed=..320,oil=10..}] slow_falling 1 1 true
execute as @a[c=1,rx=5,rxm=90] run effect @e[r=2,type=simple_vehicles:gyroplane,scores={speed=..320,oil=..9}] slow_falling 1 1 true
execute as @a[c=1,rx=5,rxm=60] run effect @e[r=2,type=simple_vehicles:gyroplane,scores={speed=..320,oil=..9}] slow_falling 1 1 true
execute as @a[c=1,rx=5,rxm=30] run effect @e[r=2,type=simple_vehicles:gyroplane,scores={speed=..320,oil=..9}] slow_falling 1 1 true
