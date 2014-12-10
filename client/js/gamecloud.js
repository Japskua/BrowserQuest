/**
 * Created by parkkila on 3.12.2014.
 */
/**
 * Originally Created by Timo Hynninen on 13.02.2014
 * Further updated by Janne Parkkila on 10.11.2014.
 *
 * Gamecloud interfacing library for javascript
 * (http request simplifier)
 */
define([], function() {

    var Gamecloud = Class.extend({

        /**
         * Constructor/Initializer for the gamecloud
         */
        init : function() {
            var self = this;

            this.session = "";
            this.initializeSession();

            this.characterId = "ex:AnonChar_" + moment();
        },

        setCharacterName : function(charName) {
            this.characterId = "ex:" + charName;
            console.log(":::::GAMECLOUD: Set character name to be:", this.characterId);
        },

        SERVER_ADDRESS : "http://127.0.0.1:8888/api/1/",

        /**
         * Initializes the session
         */
        initializeSession : function() {
            this.session = "Session-" + moment() + this.randomString(7);
        },

        /**
         * Creates a random string, according to optional given charset or the full alpha-numeric set
         * @param {Number} len The length of the random string
         * @param {String} charSet The charset to use in creation | OPTIONAL
         * @returns {string} Random string
         */
        randomString : function randomString(len, charSet) {
            charSet = charSet || 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
            var randomString = '';
            for (var i = 0; i < len; i++) {
                var randomPoz = Math.floor(Math.random() * charSet.length);
                randomString += charSet.substring(randomPoz,randomPoz+1);
            }
            return randomString;
        },

        /**
         * Does the HTTP Get to the gamecloud address
         * @param {string} theUrl The URL where to make the query
         * @returns {string}
         */
        httpGet : function httpGet(theUrl) {
            var xmlHttp = null;

            xmlHttp = new XMLHttpRequest();
            xmlHttp.open( "GET", theUrl, false ); // method, url, bool async
            xmlHttp.send( null );
            return xmlHttp.responseText;
        },

        /**
         * Gives the item to a player
         * @param {string} authkey The authkey of the game
         * @param {string} hash The query hash
         * @param {string} playerId The player Identification
         */
        gainItem : function (authkey, hash, playerId) {

            json = { "callType" : "gameDataSave",
                "authkey" : authkey,
                "hash" : hash,
                "playerId" : playerId,
                "characterId" : this.characterId,
                "sessionId" : this.session
            };

            console.log("--------------------------------------------");
            console.log("GAMECLOUD - Sending gainItem to server", json);
            console.log("--------------------------------------------");

            $.post(this.SERVER_ADDRESS, JSON.stringify(json), function(data, textStatus, jqXHR){
                if (!data ) return false;
                else return true;

            });

        },

        /**
         * Lose the item
         * @param {string} authkey
         * @param {string} hash
         * @param {string} playerId
         */
        loseItem : function (authkey, hash, playerId) {

            json = { "callType" : "gameDataSave",
                "authkey" : authkey,
                "hash" : hash,
                "playerId" : playerId,
                "characterId" : this.characterId,
                "sessionId" : this.session
            };

            $.post(this.SERVER_ADDRESS, JSON.stringify(json), function(data, textStatus, jqXHR){
                if (!data ) return false;
                else return true;

            });

        },

        /**
         * Used to check if has the item in question
         * @param {string} authkey
         * @param {string} hash
         * @param {string} playerId
         */
        hasItem : function (authkey, hash, playerId) {

            json = { "callType" : "ask",
                "authkey" : authkey,
                "hash" : hash,
                "playerId" : playerId,
                "characterId" : this.characterId,
                "sessionId" : this.session
            };

            $.post(this.SERVER_ADDRESS, JSON.stringify(json), function(data, textStatus, jqXHR){
                if (!data ) return false;
                else return data;

            });

        },

        /**
         * Gives the achievement to a player
         * @param {string} authkey
         * @param {string} hash
         * @param {string} playerId
         */
        giveAchievement : function (authkey, hash, playerId) {

            json = { "callType" : "gameDataSave",
                "authkey" : authkey,
                "hash" : hash,
                "playerId" : playerId,
                "characterId" : this.characterId,
                "sessionId" : this.session
            };

            console.log("--------------------------------------------");
            console.log("GAMECLOUD - Sending giveAchievement to server", json);
            console.log("--------------------------------------------");

            $.post(this.SERVER_ADDRESS, JSON.stringify(json), function(data, textStatus, jqXHR){
                if (!data ) return false;
                else return true;

            });

        },

        /**
         * Checks if the player has the achievement
         * @param {string} authkey
         * @param {string} hash
         * @param {string} playerId
         */
        hasAchievement : function (authkey, hash, playerId) {

            json = { "callType" : "ask",
                "authkey" : authkey,
                "hash" : hash,
                "playerId" : playerId,
                "characterId" : this.characterId,
                "sessionId" : this.session
            };

            $.post(this.SERVER_ADDRESS, JSON.stringify(json), function(data, textStatus, jqXHR){
                if (!data ) return false;
                else return data;

            });

        },

        /**
         * Used to trigger events
         * @param {string} authkey
         * @param {string} hash
         * @param {string} playerId
         */
        triggersEvent : function (authkey, hash, playerId) {

            json = { "callType" : "gameDataSave",
                "authkey" : authkey,
                "hash" : hash,
                "playerId" : playerId,
                "characterId" : this.characterId,
                "sessionId" : this.session
            };

            console.log("--------------------------------------------");
            console.log("Gamecloud - Sending event triggered to server", json);
            console.log("--------------------------------------------");

            $.post(this.SERVER_ADDRESS, JSON.stringify(json), function(data, textStatus, jqXHR){
                if (!data ) return false;
                else return data;

            });

        },

        /**
         * Checks if an event has been triggered
         * @param {string} authkey
         * @param {string} hash
         * @param {string} playerId
         */
        hasTriggeredEvent : function (authkey, hash, playerId) {

            json = { "callType" : "ask",
                "authkey" : authkey,
                "hash" : hash,
                "playerId" : playerId,
                "characterId" : this.characterId,
                "sessionId" : this.session
            };

            $.post(this.SERVER_ADDRESS, JSON.stringify(json), function(data, textStatus, jqXHR){
                if (!data ) return false;
                else return data;

            });

        }
    });

    return Gamecloud;
});
