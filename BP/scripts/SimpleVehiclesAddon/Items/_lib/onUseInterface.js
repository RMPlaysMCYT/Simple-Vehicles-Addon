////I'm an addon creator who want to teach others using scripts its very scary sometimes but i'll try my best

////The Code of my addons were always open or open-source or whatever it is it's up to you if you try to learn, copy and paste

////You can help me if you have external ideas especially if you are good in scripts you can contribute

////If you use it to my addons please leave me a credit by using RMPlaysMC YT on your content


export var useTypes;
(
    function (useTypes) {
        useTypes["Item_Use"] = "item_use";
        useTypes["Item_Use_On"] = "item_use_on";
        useTypes["Item_Stop_Use"] = "item_stop_use";
        useTypes["Item_Stop_Use_On"] = "item_stop_use_on";
        useTypes["Item_Start_Use"] = "item_start_use";
        useTypes["Item_Start_Use_On"] = "item_start_use_on";
        useTypes["Item_Release_Use"] = "item_release_use";
        useTypes["Item_Complete_Use"] = "on_complete_use";
    }
)
(
    useTypes || (
        useTypes = {}
    )
);


export var commandSubject;
(
    function (commandSubject) {
        commandSubject["Player"] = "player";
        commandSubject["Entity"] = "entity";
        commandSubject["Dimension"] = "dimension";
    }
)
(
    commandSubject || (
        commandSubject = {}
    )
);


////Well it's up to you then goodluck and have fun
////You met an addon creator who want's to say something and no secrets attached on his addon i'll do it as my transparency
////Nothing here is strictly proprietary it's up to you if you want to copy it but with between by learning of it and paste it