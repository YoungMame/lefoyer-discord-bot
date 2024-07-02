const Config = require("./config")

/**
 * Classe des utilisateurs
 * @param {string} name surnom de l'utilisateur
 * @param {number} lvl lvl de l'utilisateur
 * @param {boolean} mute est ce que l'utilisateur est mute dans les voc et salons
 * @param {string} politic initials du parti politique de l'utilisateur
 * @param {[string]} warnings tableau qui contient les warings de l'utilisateur sous formes de strings
 * @param {[number]} bannedFrom tableau qui contient les id des salons dont l'utilisateur est ban
 */

let Roi = {}

export class Users {

    static users = []

    constructor(id, discordId, name, sex = "m", lvl = 0, mute=false, politic="", warnings=[], bannedFrom=[]) {
        this.id = id,
        this.discordId = discordId,
        this.name = name,
        this.sex = sex,
        this.lvl = lvl,
        this.mute = mute,
        this.politic = politic,
        this.warnings = warnings,
        this.bannedFrom = bannedFrom

        Users.users.push(this)
    }

    static get getUsers() {
        return users
    }
}

Roi.Users = Users.getUsers()

/**
 * Classe des proces
 * @param {number} id id du proces
 * @param {string} label titre du proces
 * @param {[string]} facts tableau qui contient des string: les faits reproches
 * @param {number} suspect discordId du suspect
 * @param {number} suspectLawyer discordId de l'avocat
 * @param {number} judge discordId du juge
 * @param {string} sanction texte 
 * @param {number} yes nombre de votes pour
 * @param {number} no nombre de votes contre
 */

export class Lawsuits {

    static lawsuits = []

    constructor(id, label, facts = [], suspect, suspectLawyer, judge, sanction = "", yes = 0, no = 0) {
        this.id = id,
        this.label = label,
        this.facts = facts,
        this.suspect = suspect,
        this.suspectLawyer = suspectLawyer,
        this.judge = judge,
        this.sanction = sanction,
        this.yes = yes,
        this.no = no

        Lawsuits.lawsuits.push(this)
    }

    static get getLawsuits() {
        return lawsuits
    }
}

Roi.Lawsuits = Lawsuits.getLawsuits()