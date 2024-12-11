import { v } from "convex/values";
import { mutation } from "./_generated/server";

export const createUser = mutation({
  args: {
    email: v.string(),
    fullName: v.string(),
    userId: v.string(),
  },
  handler: async (ctx, args) => {
    const identity = await ctx.auth.getUserIdentity();
    
    if (!identity) {
      throw new Error("Called createUser without authentication present");
    }

    // Check if user already exists
    const existingUser = await ctx.db
      .query("users")
      .filter(q => q.eq(q.field("email"), args.email))
      .first();

    if (existingUser) {
      return existingUser;
    }

    // Create new user
    return await ctx.db.insert("users", {
      email: args.email,
      fullName: args.fullName,
      userId: args.userId,
      isBanned: false
    });
  },
});