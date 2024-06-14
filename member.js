//Notification when a member joins and add un role the member
module.exports.joinMember = async function(member) {
    const roleIds = ['1250310025751035925', '1250330038423916575']; 
    const welcomeChannelId = '1250266955538108457'; 
    const roles = roleIds.map(roleId => member.guild.roles.cache.get(roleId));
    for (const role of roles) {
        if (role) {
            try {
                await member.roles.add(role);
                console.log(`Rôle ${role.name} attribué à ${member.user.tag}`);
            } catch (error) {
                console.error(`Erreur lors de l'attribution du rôle ${role.name} : ${error}`);
            }
        } else {
            console.error(`Le rôle avec l'ID ${role.id} est introuvable.`);
        }
    }
    const channel = member.guild.channels.cache.get(welcomeChannelId);
    if (!channel) {
        console.error(`Le channel avec l'id ${welcomeChannelId} est introuvable`);
        return;
    }
    const avatarURL = member.user.displayAvatarURL({ format: 'png', dynamic: true, size: 1024 });
    channel.send(avatarURL)
    channel.send(`${member} viens de rejoindre le discord`); 
}
//Notification when a member leaves 
module.exports.leaveMember = function(member) {
    const leaveChannelId = '1250266955538108457'; 
    const channel = member.guild.channels.cache.get(leaveChannelId);
    if (!channel) return;
    channel.send(`${member} viens de quitter le discord`);
}

