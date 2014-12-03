/**
 * Created by Janne on 20.11.2014.
 * Just a stub for holding event information
 */
define(['events'], function() {

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
                warrior: "",

                // Mobs
                rat: "KILL_RAT_HASH",
                skeleton: "",
                goblin: "",
                ogre: "",
                spectre: "",
                deathknight: "",
                crab: "",
                snake: "",
                bat: "",
                wizard: "",
                eye: "",
                skeleton2: "",
                boss: ""
            };


            this.items = {
                // ARMORS
                firefox: "",
                clotharmor: "",
                leatherarmor: "",
                mailarmor: "",
                platearmor: "",
                redarmor: "",
                goldenarmor: "",

                // Weapons
                sword1: "SWORD1-HASH",
                sword2: "SWORD2-HASH",
                axe: "",
                redsword: "",
                bluesword: "",
                goldensword: "",
                morningstar: "",

                // Objects
                flask: "",
                cake: "",
                burger: "",
                chest: "",
                firepotion: ""
            };

            console.log("initialized events properly!");
        }

    });


    return Events;

});

