//Notification when a member joins and add un role the member
module.exports.joinMember = async function(member) {
    const roleIds = ['1250310025751035925', '1250330038423916575']; 
    const welcomeChannelId = '1250266955538108457'; 
    const roles = roleIds.map(roleId => member.guild.roles.cache.get(roleId));
    for (const role of roles) {
        if (role) {
            try {
                await member.roles.add(role);
            } catch (error) {
            }
        } else {;
        }
    }
    const channel = member.guild.channels.cache.get(welcomeChannelId);
    if (!channel) {
        return;
    }
    channel.send(`${member} viens de rejoindre le discord`); 
}
//Notification when a member leaves 
module.exports.leaveMember = function(member) {
    const leaveChannelId = '1250266955538108457'; 
    const channel = member.guild.channels.cache.get(leaveChannelId);
    if (!channel) return;
    channel.send(`${member} viens de quitter le discord`);
}



