/**
 * Created by Janne on 20.11.2014.
 * Just a stub for holding event information
 */
define(['events'], function() {

    var Events = Class.extend({
        init : function() {
            var self = this;

            this.achievements = {
                A_TRUE_WARRIOR : "cioa34cgip7ousor",
                INTO_THE_WILD : "y7bknfmh1s7l23xr",
                ANGRY_RATS : "t8cazwhp9sbgldi",
                SMALL_TALK : "56ofzfgkkr8dunmi",
                FAT_LOOT : "m1nkuern94e1m7vi",
                UNDERGROUND : "g2gr3zlximuz0k9",
                AT_WORLDS_END : "qffplofbgxas8aor",
                COWARD : "qpnwdl0gsy5vcxr",
                TOMB_RAIDER : "yc38aw03eg66r",
                SKULL_COLLECTOR : "fyc79p27bz5v1jor",
                NINJA_LOOT : "lfismrh71xos9k9",
                NO_MANS_LAND : "76rf57497rykfbt9",
                HUNTER : "36rs0xjhfewb3xr",
                STILL_ALIVE : "5mel5yb7v5jhsemi",
                MEATSHIELD : "a3mq6f0tzr1i3sor",
                HOT_SPOT : "ksa9pdr2r9mp9zfr",
                HERO : "t8u91oz84to11yvi",
                FOXY : "prrs1z30az41jor",
                FOR_SCIENCE : "tshcecjm5c73c8fr",
                RICKROLLD : "1fqsob496nwxw29"
            };

            this.kills = {
                warrior: "",

                // Mobs
                rat: "mgvvv3yb9mfb6gvi",
                skeleton: "l152wqypq4cxr",
                goblin: "wk4gtjry5h4cxr",
                ogre: "gefo21id92kjra4i",
                spectre: "ymwt5z9onxnipb9",
                deathknight: "abyiosncequmcxr",
                crab: "sdehro66byl7syvi",
                snake: "g4cs9eb30ig7rpb9",
                bat: "ayqo4n1ps0pb9",
                wizard: "rlwti9lkj4oenrk9",
                eye: "agxo79wrn3ik9",
                skeleton2: "qhk5ehykv4gc766r",
                boss: "j1ddqd55hmc2fbt9"
            };


            this.items = {
                // ARMORS
                firefox: "f0nhr1om276i529",
                clotharmor: "bapl5pepg9442t9",
                leatherarmor: "2heii8141eixusor",
                mailarmor: "x4an2jvsiak5u3di",
                platearmor: "fwfk6wd7cetp4x6r",
                redarmor: "zyvnpvvecdutbj4i",
                goldenarmor: "40t3dxkb1teasjor",

                // Weapons
                sword1: "4iz4ts8vj72jra4i",
                sword2: "li533kzh8pdp9zfr",
                axe: "0o13cvc3rs6h6w29",
                redsword: "3boee8xc5pi7ldi",
                bluesword: "ez9zt7l91f2vgqfr",
                goldensword: "rano5659lfjbrzfr",
                morningstar: "w4nt6cl0xef80k9",

                // Objects
                flask: "810obkbig2lw61or",
                cake: "3dn5nzpfi5f2bj4i",
                burger: "cwfgev49apogk3xr",
                chest: "r9meoe1c5gs98uxr",
                firepotion: "smdussmenrx2bj4i"
            };

            console.log("initialized events properly!");
        }

    });


    return Events;

});

