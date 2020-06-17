const bcrypt = require('bcryptjs');

async function generateGroupInviteHash(groupId, adminId){

    // input string that contains groupId and adminId
    const input = `group${groupId}admin${adminId}`;

    // generate the hash
    const rounds = 8;
    const salt = bcrypt.genSaltSync(rounds);
    const hash = await bcrypt.hashSync(input, salt);

    // replace all '/' in the hash with 0 - to avoid issues in URL params
    const groupInviteHash = hash.replace('/', '0');

    // return groupInviteHash
    return groupInviteHash;
}

module.exports = {generateGroupInviteHash};