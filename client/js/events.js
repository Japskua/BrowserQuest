/**
 * Created by Janne on 20.11.2014.
 * Just a stub for holding event information
 */
define(['Events'], function() {

    var Events = Class.extend({
        init : function() {
            var self = this;

            this.achievements = {
                A_TRUE_WARRIOR : "A_TRUE_WARRIOR-HASH",
                INTO_THE_WILD : "INTO_THE_WILD-HASH",
                ANGRY_RATS : "ANGRY_RATS-HASH",
                SMALL_TALK : "",
                FAT_LOOT : "",
                UNDERGROUND : "",
                AT_WORLDS_END : "",
                COWARD : "",
                TOMB_RAIDER : "",
                SKULL_COLLECTOR : "",
                NINJA_LOOT : "",
                NO_MANS_LAND : "",
                HUNTER : "",
                STILL_ALIVE : "",
                MEATSHIELD : "",
                HOT_SPOT : "",
                HERO : "",
                FOXY : "",
                FOR_SCIENCE : "",
                RICKROLLD : ""
            };

            this.kills = {
                WARRIOR: "",

                // Mobs
                RAT: "KILL_RAT_HASH",
                SKELETON: "",
                GOBLIN: "",
                OGRE: "",
                SPECTRE: "",
                CRAB: "",
                BAT: "",
                WIZARD: "",
                EYE: "",
                SNAKE: "",
                SKELETON2: "",
                BOSS: "",
                DEATHKNIGHT: ""
            };


            this.items = {
                // ARMORS
                FIREFOX: "",
                CLOTHARMOR: "",
                LEATHERARMOR: "",
                MAILARMOR: "",
                PLATEARMOR: "",
                REDARMOR: "",
                GOLDENARMOR: "",

                // Weapons
                SWORD1: "SWORD1-HASH",
                SWORD2: "SWORD2-HASH",
                REDSWORD: "",
                GOLDENSWORD: "",
                MORNINGSTAR: "",
                AXE: "",
                BLUESWORD: "",

                // Objects
                FLASK: "",
                BURGER: "",
                CHEST: "",
                FIREPOTION: "",
                CAKE: ""
            };

            console.log("initialized events properly!");
        }

    });


    return Events;

});

