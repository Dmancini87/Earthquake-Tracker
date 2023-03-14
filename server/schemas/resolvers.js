const resolvers = {
    Mutation: {
        addUser: async (parent, args) => {
          const user = await User.create(args);
          const token = signToken(user);
    
          return { token, user };
        },
        updateUser: async (parent, args, context) => {
            if (context.user) {
              return await User.findByIdAndUpdate(context.user._id, args, { new: true });
            }
      
            throw new AuthenticationError('Not logged in');
          }
},
Query:{
user:async (parent, args, context) => {
  if (context.user){
    const userdata= user.findOne({
      //put id here, where it's coming from
      _id:context.user._id
    }) 
  return userdata
  }

  throw new Error("no user is logged in!")

}
}

}

module.exports = resolvers;