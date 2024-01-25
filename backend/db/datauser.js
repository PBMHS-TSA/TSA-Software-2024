let data = "../../Sokobot/sokobot.db"
let db = require("better-sqlite3")(data);

class Database  {
    __init__() {
        // tables
        db.exec('CREATE TABLE IF NOT EXISTS accounts (email TEXT NOT NULL, username TEXT NOT NULL, password TEXT NOT NULL)')
        db.exec('CREATE TABLE IF NOT EXISTS forgotpassword (email TEXT NOT NULL, code TEXT NOT NULL)')
                //db.exec('DROP TABLE messages')

        //db.exec('CREATE TABLE IF NOT EXISTS guildlogchannel (guildId VARCHAR(64) NOT NULL, channelId VARCHAR(255) NOT NULL)')
    }
    
    
    getUsers() {
        let users= []
                if (!db) console.log("r")
        let stmt = db.prepare("SELECT * FROM userlevel;")
        let rs = stmt.all()
        if (!rs) return undefined
        for (let user of rs) {
            let uj = {
                userId: undefined,
                balance: 0,
                level: 0
            }
            uj.balance= new Database.User().getBalance(user.userId) || 100
            uj.level = user.level || 0
            uj.userId=user.userId
            
            users.push(uj)
        }
        return users
        
        
    }
    containsKey(key) {
        if (!db) console.log("r")
        let stmt = db.prepare("SELECT * FROM apikeys WHERE key = ? ;")
        let rs = stmt.get(key)
        if (!rs) return false
        return true
    }
    getUsersKeys(user) {
        if (!db) console.log("r")
        let stmt = db.prepare("SELECT * FROM apikeys WHERE userId=?;")
        let rs = stmt.all(user)
        if (!rs) return undefined
        console.log(rs)
        return rs
    }
    getKeys() {
        if (!db) console.log("r")
        let stmt = db.prepare("SELECT * FROM apikeys;")
        let rs = stmt.all()
        if (!rs) return false
        return rs
    }
    createKey(name,userid,key) {
        if (!db) console.log("r")
        let stmt = db.prepare("INSERT INTO apikeys VALUES (?, ?, ?)")
        stmt.run(name, userid,key)
        return
    }
    deleteKey(name,userid) {
        
        if (!db) console.log("r")
        let stmt = db.prepare("DELETE FROM apikeys WHERE name=? AND userId=?")
        stmt.run(name,userid)
        return true
    }
    getPrefix(id) {
        if (!db) console.log("r")
        let stmt = db.prepare("SELECT * FROM guildprefix WHERE guildId = ? ;")
        let rs = stmt.get(id)
        if (!rs) return undefined
        return rs.prefix || "!"
    }
    getLogChannel(id) {
        let stmt = db.prepare('SELECT * FROM guildlogchannel WHERE guildId = ? ;')
        let rs = stmt.get(String(id))
        console.log(rs)
        if (!rs) return undefined
        return rs.channelId || undefined
    }
        setPrefix(id,prefix) {
        if (!db) console.log("r")
        let stmt = db.prepare("UPDATE guildprefix SET prefix = ? WHERE guildId = ? ;")
        let rs = stmt.run(String(prefix),String(id))
    }
    setLogChannel(id,prefix) {
        let stmt = db.prepare('UPDATE guildlogchannel SET channelId = ? WHERE guildId = ? ;')
        let rs = stmt.run(String(prefix),String(id))
    }
    removeLogChannel(id) {
            let stmt = db.prepare('DELETE FROM guildlogchannel WHERE guildId = ?;')
            stmt.run(id)
    }
} 