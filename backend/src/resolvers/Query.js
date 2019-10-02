// Resolver: where do data come from and how do we pass them to a user.
// this is were your database calls are going to go, regardless of what DB you are using 
// on the backend

const Query = {
    async items(parent, args, ctx, info) {
        const items =  await ctx.db.query.items();
        return items;
    }
};

module.exports = Query;
